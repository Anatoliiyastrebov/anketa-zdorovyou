import React from 'react';
import { Question } from '@/lib/questionnaire-data';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionIcon } from '@/components/icons/SectionIcons';

interface QuestionFieldProps {
  question: Question;
  value: string | string[];
  additionalValue: string;
  error?: string;
  additionalError?: string;
  onChange: (value: string | string[]) => void;
  onAdditionalChange: (value: string) => void;
}

export const QuestionField: React.FC<QuestionFieldProps> = ({
  question,
  value,
  additionalValue,
  error,
  additionalError,
  onChange,
  onAdditionalChange,
}) => {
  const { language, t } = useLanguage();

  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    const currentValues = Array.isArray(value) ? value : [];
    
    // Special handling for "no_issues" option
    if (optionValue === 'no_issues') {
    if (checked) {
        // If "no_issues" is selected, clear all other options
        onChange(['no_issues']);
      } else {
        // If "no_issues" is deselected, just remove it
        onChange([]);
      }
    } else {
      // For other options
      if (checked) {
        // Remove "no_issues" if it exists, then add the new option
        const filteredValues = currentValues.filter((v) => v !== 'no_issues');
        onChange([...filteredValues, optionValue]);
    } else {
      onChange(currentValues.filter((v) => v !== optionValue));
      }
    }
  };

  const renderInput = () => {
    switch (question.type) {
      case 'text':
        return (
          <input
            type="text"
            className={`input-field ${error ? 'input-error' : ''}`}
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            placeholder={question.placeholder?.[language] || ''}
          />
        );

      case 'number':
        return (
          <input
            type="number"
            className={`input-field ${error ? 'input-error' : ''}`}
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            min={question.min !== undefined ? question.min : 0}
            max={question.max !== undefined ? question.max : undefined}
            step="0.1"
          />
        );

      case 'textarea':
        return (
          <textarea
            className={`input-field min-h-[100px] resize-y ${error ? 'input-error' : ''}`}
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            placeholder={question.placeholder?.[language] || ''}
          />
        );

      case 'radio':
        return (
          <div className="flex flex-wrap gap-3">
            {question.options?.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-pointer transition-all ${
                  value === option.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => onChange(e.target.value)}
                  className="sr-only"
                />
                <span className="text-sm font-medium">{option.label[language]}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        const currentValues = Array.isArray(value) ? value : [];
        return (
          <div className="flex flex-wrap gap-3">
            {question.options?.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-pointer transition-all ${
                  currentValues.includes(option.value)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={currentValues.includes(option.value)}
                  onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
                  className="sr-only"
                />
                <span className="text-sm font-medium">{option.label[language]}</span>
              </label>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-3 animate-fade-in">
      <label className="flex items-center gap-2 text-foreground font-medium">
        <SectionIcon name={question.icon} />
        <span>{question.label[language]}</span>
        {question.required && <span className="text-destructive">*</span>}
      </label>

      {renderInput()}

      {error && (
        <p className="error-message">
          <AlertCircleIcon />
          {error}
        </p>
      )}

      {question.hasAdditional && (
        <div className="mt-2">
          <label className="text-sm text-muted-foreground mb-1 block">
            {t('additionalInfo')}
            {additionalError && <span className="text-destructive ml-1">*</span>}
          </label>
          <textarea
            className={`input-field text-sm min-h-[60px] resize-y ${additionalError ? 'input-error' : ''}`}
            value={additionalValue}
            onChange={(e) => onAdditionalChange(e.target.value)}
            placeholder={t('additionalInfo')}
          />
          {additionalError && (
            <p className="error-message mt-1">
              <AlertCircleIcon />
              {additionalError}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const AlertCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
