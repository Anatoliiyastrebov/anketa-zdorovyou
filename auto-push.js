#!/usr/bin/env node

import { watch } from 'fs';
import { execSync } from 'child_process';
import { join } from 'path';

const IGNORE_PATTERNS = [
  'node_modules',
  '.git',
  'dist',
  '.vscode',
  '.idea',
  '*.log',
  '.env',
  'bun.lockb',
  'package-lock.json',
];

let debounceTimer = null;
const DEBOUNCE_DELAY = 2000; // 2 секунды задержки перед коммитом

function shouldIgnore(path) {
  return IGNORE_PATTERNS.some(pattern => path.includes(pattern));
}

function gitStatus() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });
    return status.trim();
  } catch (error) {
    console.error('Ошибка при проверке статуса git:', error.message);
    return '';
  }
}

function autoCommit() {
  const status = gitStatus();
  
  if (!status) {
    return; // Нет изменений
  }

  console.log('\n📝 Обнаружены изменения, готовим коммит...');
  
  try {
    // Добавляем все изменения
    execSync('git add .', { stdio: 'inherit' });
    
    // Создаем коммит с временной меткой
    const timestamp = new Date().toLocaleString('ru-RU');
    const commitMessage = `Auto-commit: ${timestamp}`;
    
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    
    // Пушим изменения
    console.log('🚀 Отправляем изменения в GitHub...');
    execSync('git push origin main', { stdio: 'inherit' });
    
    console.log('✅ Изменения успешно отправлены в GitHub!\n');
  } catch (error) {
    console.error('❌ Ошибка при коммите/пуше:', error.message);
  }
}

function handleChange(eventType, filename) {
  if (shouldIgnore(filename)) {
    return;
  }

  // Очищаем предыдущий таймер
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  // Устанавливаем новый таймер
  debounceTimer = setTimeout(() => {
    autoCommit();
  }, DEBOUNCE_DELAY);
}

// Отслеживаем изменения в корне проекта
const projectRoot = process.cwd();

console.log('👀 Отслеживание изменений запущено...');
console.log('📁 Отслеживаемая директория:', projectRoot);
console.log('⏱️  Задержка перед коммитом:', DEBOUNCE_DELAY / 1000, 'секунд\n');

watch(projectRoot, { recursive: true }, (eventType, filename) => {
  if (filename) {
    handleChange(eventType, filename);
  }
});

// Обработка сигналов для корректного завершения
process.on('SIGINT', () => {
  console.log('\n\n👋 Остановка отслеживания изменений...');
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    autoCommit(); // Делаем финальный коммит перед выходом
  }
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n\n👋 Остановка отслеживания изменений...');
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    autoCommit();
  }
  process.exit(0);
});
