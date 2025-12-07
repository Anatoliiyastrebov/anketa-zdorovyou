import { Language } from './translations';

export type QuestionType = 'text' | 'number' | 'radio' | 'checkbox' | 'textarea';

export interface QuestionOption {
  value: string;
  label: {
    ru: string;
    en: string;
    de: string;
  };
}

export interface Question {
  id: string;
  type: QuestionType;
  label: {
    ru: string;
    en: string;
    de: string;
  };
  icon: string;
  options?: QuestionOption[];
  required: boolean;
  hasAdditional: boolean;
  placeholder?: {
    ru: string;
    en: string;
    de: string;
  };
  min?: number;
  max?: number;
}

export interface QuestionnaireSection {
  id: string;
  title: {
    ru: string;
    en: string;
    de: string;
  };
  icon: string;
  questions: Question[];
}

// Common options used across questionnaires
const yesNoOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'yes', label: { ru: 'Да', en: 'Yes', de: 'Ja' } },
  { value: 'no', label: { ru: 'Нет', en: 'No', de: 'Nein' } },
];

const yesNoOptionsSimple: QuestionOption[] = [
  { value: 'yes', label: { ru: 'Да', en: 'Yes', de: 'Ja' } },
  { value: 'no', label: { ru: 'Нет', en: 'No', de: 'Nein' } },
];

const digestionOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'stomach_pain', label: { ru: 'Боли в животе', en: 'Stomach pain', de: 'Bauchschmerzen' } },
  { value: 'diarrhea', label: { ru: 'Диарея', en: 'Diarrhea', de: 'Durchfall' } },
  { value: 'constipation', label: { ru: 'Запор', en: 'Constipation', de: 'Verstopfung' } },
];

const digestionOptionsExtended: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'stomach_pain', label: { ru: 'Боли в животе', en: 'Stomach pain', de: 'Bauchschmerzen' } },
  { value: 'diarrhea', label: { ru: 'Диарея', en: 'Diarrhea', de: 'Durchfall' } },
  { value: 'constipation', label: { ru: 'Запор', en: 'Constipation', de: 'Verstopfung' } },
  { value: 'bloating', label: { ru: 'Вздутие', en: 'Bloating', de: 'Blähungen' } },
];

const digestionOptionsAdult: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'heartburn', label: { ru: 'Изжога', en: 'Heartburn', de: 'Sodbrennen' } },
  { value: 'bloating', label: { ru: 'Вздутие', en: 'Bloating', de: 'Blähungen' } },
  { value: 'diarrhea', label: { ru: 'Диарея', en: 'Diarrhea', de: 'Durchfall' } },
  { value: 'constipation', label: { ru: 'Запор', en: 'Constipation', de: 'Verstopfung' } },
];

const allergyOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'pollen', label: { ru: 'Цветение', en: 'Pollen', de: 'Pollen' } },
  { value: 'animals', label: { ru: 'Животные', en: 'Animals', de: 'Tiere' } },
  { value: 'dust', label: { ru: 'Пыль', en: 'Dust', de: 'Staub' } },
  { value: 'food', label: { ru: 'Еда', en: 'Food', de: 'Lebensmittel' } },
  { value: 'other', label: { ru: 'Другое', en: 'Other', de: 'Andere' } },
];

const allergyOptionsExtended: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'pollen', label: { ru: 'Цветение', en: 'Pollen', de: 'Pollen' } },
  { value: 'animals', label: { ru: 'Животные', en: 'Animals', de: 'Tiere' } },
  { value: 'dust', label: { ru: 'Пыль', en: 'Dust', de: 'Staub' } },
  { value: 'food', label: { ru: 'Еда', en: 'Food', de: 'Lebensmittel' } },
  { value: 'medications', label: { ru: 'Лекарства', en: 'Medications', de: 'Medikamente' } },
  { value: 'other', label: { ru: 'Другое', en: 'Other', de: 'Andere' } },
];

const skinOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'moles', label: { ru: 'Много родинок', en: 'Many moles', de: 'Viele Muttermale' } },
  { value: 'warts', label: { ru: 'Бородавки', en: 'Warts', de: 'Warzen' } },
  { value: 'rashes', label: { ru: 'Высыпания', en: 'Rashes', de: 'Ausschläge' } },
  { value: 'eczema', label: { ru: 'Экзема', en: 'Eczema', de: 'Ekzeme' } },
];

const sleepOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'good', label: { ru: 'Хорошо', en: 'Good', de: 'Gut' } },
  { value: 'bad', label: { ru: 'Плохо', en: 'Bad', de: 'Schlecht' } },
  { value: 'sometimes', label: { ru: 'Иногда проблемы', en: 'Sometimes problems', de: 'Manchmal Probleme' } },
];

const sleepOptionsSimple: QuestionOption[] = [
  { value: 'good', label: { ru: 'Хорошо', en: 'Good', de: 'Gut' } },
  { value: 'bad', label: { ru: 'Плохо', en: 'Bad', de: 'Schlecht' } },
  { value: 'sometimes', label: { ru: 'Иногда проблемы', en: 'Sometimes problems', de: 'Manchmal Probleme' } },
];

const energyOptions: QuestionOption[] = [
  { value: 'normal', label: { ru: 'Нормальная', en: 'Normal', de: 'Normal' } },
  { value: 'reduced', label: { ru: 'Сниженная', en: 'Reduced', de: 'Reduziert' } },
  { value: 'very_low', label: { ru: 'Очень низкая', en: 'Very low', de: 'Sehr niedrig' } },
];

const birthOptions: QuestionOption[] = [
  { value: 'natural', label: { ru: 'Естественно', en: 'Natural', de: 'Natürlich' } },
  { value: 'cesarean', label: { ru: 'Кесарево', en: 'Cesarean', de: 'Kaiserschnitt' } },
];

const injuriesOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Все в порядке', en: 'All is well', de: 'Alles in Ordnung' } },
  { value: 'injuries', label: { ru: 'Травмы', en: 'Injuries', de: 'Verletzungen' } },
  { value: 'surgeries', label: { ru: 'Операции', en: 'Surgeries', de: 'Operationen' } },
  { value: 'head_trauma', label: { ru: 'Удары по голове', en: 'Head trauma', de: 'Kopftrauma' } },
  { value: 'fractures', label: { ru: 'Переломы', en: 'Fractures', de: 'Brüche' } },
  { value: 'severe_falls', label: { ru: 'Сильные падения', en: 'Severe falls', de: 'Schwere Stürze' } },
];

const covidOptionsWoman: QuestionOption[] = [
  { value: 'no', label: { ru: 'Нет', en: 'No', de: 'Nein' } },
  { value: 'had_covid', label: { ru: 'Болела', en: 'Had COVID', de: 'Hatte COVID' } },
  { value: 'vaccinated', label: { ru: 'Вакцинирована', en: 'Vaccinated', de: 'Geimpft' } },
  { value: 'both', label: { ru: 'И болела, и вакцинирована', en: 'Both had COVID and vaccinated', de: 'Sowohl COVID gehabt als auch geimpft' } },
];

const covidOptionsMan: QuestionOption[] = [
  { value: 'no', label: { ru: 'Нет', en: 'No', de: 'Nein' } },
  { value: 'had_covid', label: { ru: 'Болел', en: 'Had COVID', de: 'Hatte COVID' } },
  { value: 'vaccinated', label: { ru: 'Вакцинирован', en: 'Vaccinated', de: 'Geimpft' } },
  { value: 'both', label: { ru: 'И болел, и вакцинирован', en: 'Both had COVID and vaccinated', de: 'Sowohl COVID gehabt als auch geimpft' } },
];

const teethOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'crumble', label: { ru: 'Крошатся', en: 'Crumble', de: 'Bröckeln' } },
  { value: 'decay_fast', label: { ru: 'Часто портятся', en: 'Decay often', de: 'Verderben oft' } },
  { value: 'bad_breath', label: { ru: 'Запах изо рта', en: 'Bad breath', de: 'Mundgeruch' } },
  { value: 'bleeding_gums', label: { ru: 'Кровоточивость', en: 'Bleeding gums', de: 'Zahnfleischbluten' } },
];

const jointOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'crunch', label: { ru: 'Хруст', en: 'Crunching', de: 'Knacken' } },
  { value: 'squeak', label: { ru: 'Скрип', en: 'Squeaking', de: 'Quietschen' } },
  { value: 'inflammation', label: { ru: 'Воспаление', en: 'Inflammation', de: 'Entzündung' } },
];

const hairOptions: QuestionOption[] = [
  { value: 'falling', label: { ru: 'Выпадают', en: 'Falling out', de: 'Fallen aus' } },
  { value: 'split', label: { ru: 'Секутся', en: 'Split ends', de: 'Spliss' } },
  { value: 'dry', label: { ru: 'Сухие', en: 'Dry', de: 'Trocken' } },
  { value: 'ok', label: { ru: 'В порядке', en: 'Normal', de: 'Normal' } },
];

const skinConditionOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'dry', label: { ru: 'Сухая', en: 'Dry', de: 'Trocken' } },
  { value: 'rashes', label: { ru: 'Высыпания', en: 'Rashes', de: 'Ausschläge' } },
  { value: 'irritation', label: { ru: 'Раздражение', en: 'Irritation', de: 'Reizung' } },
  { value: 'acne', label: { ru: 'Прыщи', en: 'Acne', de: 'Akne' } },
  { value: 'other', label: { ru: 'Другое', en: 'Other', de: 'Andere' } },
];

const molesWartsHerpesOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'moles', label: { ru: 'Родинки', en: 'Moles', de: 'Muttermale' } },
  { value: 'warts', label: { ru: 'Бородавки', en: 'Warts', de: 'Warzen' } },
  { value: 'herpes', label: { ru: 'Герпес', en: 'Herpes', de: 'Herpes' } },
];

const dischargeMolesWartsHerpesOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'thrush', label: { ru: 'Молочница', en: 'Thrush', de: 'Soor' } },
  { value: 'moles', label: { ru: 'Много родинок', en: 'Many moles', de: 'Viele Muttermale' } },
  { value: 'warts', label: { ru: 'Бородавки', en: 'Warts', de: 'Warzen' } },
  { value: 'hpv_skin', label: { ru: 'Папилломавирус на коже', en: 'HPV on skin', de: 'HPV auf der Haut' } },
  { value: 'herpes', label: { ru: 'Герпес', en: 'Herpes', de: 'Herpes' } },
];

const memoryOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'poor_memory', label: { ru: 'Плохая память', en: 'Poor memory', de: 'Schlechtes Gedächtnis' } },
  { value: 'poor_concentration', label: { ru: 'Плохая концентрация', en: 'Poor concentration', de: 'Schlechte Konzentration' } },
  { value: 'both', label: { ru: 'И память, и концентрация', en: 'Both memory and concentration', de: 'Sowohl Gedächtnis als auch Konzentration' } },
];

const illnessAntibioticsOptions: QuestionOption[] = [
  { value: 'rarely_ill', label: { ru: 'Редко болеет', en: 'Rarely ill', de: 'Selten krank' } },
  { value: 'often_ill', label: { ru: 'Часто болеет', en: 'Often ill', de: 'Oft krank' } },
  { value: 'took_antibiotics', label: { ru: 'Принимал антибиотики', en: 'Took antibiotics', de: 'Antibiotika genommen' } },
  { value: 'both', label: { ru: 'И часто болеет, и принимал антибиотики', en: 'Both often ill and took antibiotics', de: 'Sowohl oft krank als auch Antibiotika genommen' } },
];

const cystsStonesOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'cysts', label: { ru: 'Кисты', en: 'Cysts', de: 'Zysten' } },
  { value: 'fibroids', label: { ru: 'Миомы', en: 'Fibroids', de: 'Myome' } },
  { value: 'stones_kidneys', label: { ru: 'Камни в почках', en: 'Stones in kidneys', de: 'Steine in Nieren' } },
  { value: 'sand_kidneys', label: { ru: 'Песок в почках', en: 'Sand in kidneys', de: 'Sand in Nieren' } },
  { value: 'stones_gallbladder', label: { ru: 'Камни в желчном', en: 'Stones in gallbladder', de: 'Steine in Gallenblase' } },
];

const cystsStonesKidneysOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'cysts', label: { ru: 'Кисты', en: 'Cysts', de: 'Zysten' } },
  { value: 'sand', label: { ru: 'Песок', en: 'Sand', de: 'Sand' } },
  { value: 'stones_kidneys', label: { ru: 'Камни в почках', en: 'Stones in kidneys', de: 'Steine in Nieren' } },
  { value: 'stones_gallbladder', label: { ru: 'Камни в желчном', en: 'Stones in gallbladder', de: 'Steine in Gallenblase' } },
];

const menstruationOptions: QuestionOption[] = [
  { value: 'regular', label: { ru: 'Регулярные', en: 'Regular', de: 'Regelmäßig' } },
  { value: 'heavy', label: { ru: 'Обильные', en: 'Heavy', de: 'Stark' } },
  { value: 'clots', label: { ru: 'Сгустками', en: 'With clots', de: 'Mit Gerinnseln' } },
  { value: 'painful', label: { ru: 'Болезненные', en: 'Painful', de: 'Schmerzhaft' } },
  { value: 'hot_flashes', label: { ru: 'Приливы', en: 'Hot flashes', de: 'Hitzewallungen' } },
  { value: 'sweating', label: { ru: 'Потливость', en: 'Sweating', de: 'Schwitzen' } },
  { value: 'poor_sleep', label: { ru: 'Плохой сон', en: 'Poor sleep', de: 'Schlechter Schlaf' } },
  { value: 'mood_swings', label: { ru: 'Скачки настроения', en: 'Mood swings', de: 'Stimmungsschwankungen' } },
];

const headachesOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'headaches', label: { ru: 'Головные боли', en: 'Headaches', de: 'Kopfschmerzen' } },
  { value: 'migraines', label: { ru: 'Мигрени', en: 'Migraines', de: 'Migräne' } },
  { value: 'injuries', label: { ru: 'Травмы', en: 'Injuries', de: 'Verletzungen' } },
  { value: 'concussion', label: { ru: 'Сотрясение', en: 'Concussion', de: 'Gehirnerschütterung' } },
];

const headachesSleepOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'headaches', label: { ru: 'Головные боли', en: 'Headaches', de: 'Kopfschmerzen' } },
  { value: 'poor_sleep', label: { ru: 'Плохой сон', en: 'Poor sleep', de: 'Schlechter Schlaf' } },
  { value: 'both', label: { ru: 'И головные боли, и плохой сон', en: 'Both headaches and poor sleep', de: 'Sowohl Kopfschmerzen als auch schlechter Schlaf' } },
];

const hyperactiveOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'hyperactive', label: { ru: 'Гиперактивный', en: 'Hyperactive', de: 'Hyperaktiv' } },
  { value: 'tired_often', label: { ru: 'Часто устаёт', en: 'Often tired', de: 'Oft müde' } },
  { value: 'normal', label: { ru: 'Нормально', en: 'Normal', de: 'Normal' } },
];

const sugarOptions: QuestionOption[] = [
  { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
  { value: 'no', label: { ru: 'Нет', en: 'No', de: 'Nein' } },
  { value: 'moderate', label: { ru: 'Умеренно', en: 'Moderate', de: 'Mäßig' } },
  { value: 'strong', label: { ru: 'Сильно', en: 'Strong', de: 'Stark' } },
];

const pressureOptions: QuestionOption[] = [
  { value: 'low', label: { ru: 'Низкое', en: 'Low', de: 'Niedrig' } },
  { value: 'high', label: { ru: 'Высокое', en: 'High', de: 'Hoch' } },
  { value: 'normal', label: { ru: 'Нормальное', en: 'Normal', de: 'Normal' } },
];

const waterOptions: QuestionOption[] = [
  { value: '1', label: { ru: '1 литр', en: '1 liter', de: '1 Liter' } },
  { value: '1.5', label: { ru: '1.5 литра', en: '1.5 liters', de: '1.5 Liter' } },
  { value: '2', label: { ru: '2 литра', en: '2 liters', de: '2 Liter' } },
  { value: '2.5', label: { ru: '2.5 литра', en: '2.5 liters', de: '2.5 Liter' } },
  { value: '3', label: { ru: '3 литра', en: '3 liters', de: '3 Liter' } },
  { value: '3.5', label: { ru: '3.5 литра', en: '3.5 liters', de: '3.5 Liter' } },
];

const sleepAdultOptions: QuestionOption[] = [
  { value: 'good', label: { ru: 'Хороший', en: 'Good', de: 'Gut' } },
  { value: 'hard_to_fall_asleep', label: { ru: 'Трудно заснуть', en: 'Hard to fall asleep', de: 'Schwer einzuschlafen' } },
  { value: 'wake_often', label: { ru: 'Часто просыпаюсь', en: 'Wake up often', de: 'Wache oft auf' } },
];

// Infant questionnaire (type = infant)
export const infantQuestionnaire: QuestionnaireSection[] = [
  {
    id: 'personal',
    title: { ru: 'Личные данные', en: 'Personal Information', de: 'Persönliche Daten' },
    icon: 'user',
    questions: [
      {
        id: 'name',
        type: 'text',
        label: { ru: 'Имя', en: 'Name', de: 'Vorname' },
        icon: 'user',
        required: true,
        hasAdditional: false,
      },
      {
        id: 'age_months',
        type: 'number',
        label: { ru: 'Возраст (в месяцах)', en: 'Age (in months)', de: 'Alter (in Monaten)' },
        icon: 'calendar',
        required: true,
        hasAdditional: false,
      },
      {
        id: 'weight',
        type: 'number',
        label: { ru: 'Вес (кг)', en: 'Weight (kg)', de: 'Gewicht (kg)' },
        icon: 'scale',
        required: true,
        hasAdditional: false,
      },
    ],
  },
  {
    id: 'health',
    title: { ru: 'Здоровье', en: 'Health', de: 'Gesundheit' },
    icon: 'heart',
    questions: [
      {
        id: 'digestion',
        type: 'checkbox',
        label: { ru: 'Пищеварение', en: 'Digestion', de: 'Verdauung' },
        icon: 'heart',
        options: digestionOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'sweats_at_night',
        type: 'radio',
        label: { ru: 'Потеет во сне', en: 'Sweats at night', de: 'Schwitzt nachts' },
        icon: 'droplets',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'bad_breath',
        type: 'radio',
        label: { ru: 'Есть ли неприятный запах изо рта', en: 'Is there bad breath', de: 'Gibt es Mundgeruch' },
        icon: 'wind',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'skin_condition',
        type: 'checkbox',
        label: { ru: 'Родинки / бородавки / высыпания / экзема', en: 'Moles / warts / rashes / eczema', de: 'Muttermale / Warzen / Ausschläge / Ekzeme' },
        icon: 'sparkles',
        options: skinOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'allergies',
        type: 'checkbox',
        label: { ru: 'Аллергия', en: 'Allergies', de: 'Allergien' },
        icon: 'flower',
        options: allergyOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'water_per_day',
        type: 'number',
        label: { ru: 'Сколько воды в день пьёт ребенок (литров)', en: 'How much water does the child drink per day (liters)', de: 'Wie viel Wasser trinkt das Kind pro Tag (Liter)' },
        icon: 'droplet',
        required: true,
        hasAdditional: true,
      },
      {
        id: 'injuries',
        type: 'checkbox',
        label: { ru: 'Травмы / операции / удары по голове / переломы', en: 'Injuries / surgeries / head trauma / fractures', de: 'Verletzungen / Operationen / Kopftrauma / Brüche' },
        icon: 'activity',
        options: injuriesOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'sleep_quality',
        type: 'radio',
        label: { ru: 'Хорошо ли спит', en: 'Does the child sleep well', de: 'Schläft das Kind gut' },
        icon: 'moon',
        options: sleepOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'illness_antibiotics',
        type: 'checkbox',
        label: { ru: 'Часто ли болеет / принимал ли антибиотики', en: 'Is often ill / has taken antibiotics', de: 'Ist oft krank / hat Antibiotika genommen' },
        icon: 'pill',
        options: illnessAntibioticsOptions,
        required: true,
        hasAdditional: true,
      },
    ],
  },
  {
    id: 'birth_pregnancy',
    title: { ru: 'Роды и беременность', en: 'Birth and Pregnancy', de: 'Geburt und Schwangerschaft' },
    icon: 'baby',
    questions: [
      {
        id: 'birth_type',
        type: 'radio',
        label: { ru: 'Как прошли роды', en: 'How was the birth', de: 'Wie war die Geburt' },
        icon: 'baby',
        options: birthOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'mother_toxicosis',
        type: 'radio',
        label: { ru: 'Был ли у мамы сильный токсикоз при беременности', en: 'Did mother have severe toxicosis during pregnancy', de: 'Hatte die Mutter starke Toxikose während der Schwangerschaft' },
        icon: 'alert-circle',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'mother_allergy',
        type: 'radio',
        label: { ru: 'Была ли у мамы аллергия до или во время беременности', en: 'Did mother have allergies before or during pregnancy', de: 'Hatte die Mutter Allergien vor oder während der Schwangerschaft' },
        icon: 'flower',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'mother_constipation',
        type: 'radio',
        label: { ru: 'Был ли у мамы запор', en: 'Did mother have constipation', de: 'Hatte die Mutter Verstopfung' },
        icon: 'alert-triangle',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'mother_antibiotics',
        type: 'radio',
        label: { ru: 'Пила ли мама антибиотики во время беременности', en: 'Did mother take antibiotics during pregnancy', de: 'Nahm die Mutter Antibiotika während der Schwangerschaft' },
        icon: 'pill',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'mother_anemia',
        type: 'radio',
        label: { ru: 'Была ли анемия у мамы', en: 'Did mother have anemia', de: 'Hatte die Mutter Anämie' },
        icon: 'heart',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'pregnancy_problems',
        type: 'radio',
        label: { ru: 'Были ли проблемы во время беременности', en: 'Were there problems during pregnancy', de: 'Gab es Probleme während der Schwangerschaft' },
        icon: 'file-text',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'what_else',
        type: 'textarea',
        label: { ru: 'Что ещё нужно знать о здоровье ребёнка', en: 'What else should we know about the child\'s health', de: 'Was sollten wir noch über die Gesundheit des Kindes wissen' },
        icon: 'info',
        required: false,
        hasAdditional: false,
        placeholder: { ru: 'Дополнительная информация', en: 'Additional information', de: 'Zusätzliche Informationen' },
      },
    ],
  },
];

// Child questionnaire (type = child)
export const childQuestionnaire: QuestionnaireSection[] = [
  {
    id: 'personal',
    title: { ru: 'Личные данные', en: 'Personal Information', de: 'Persönliche Daten' },
    icon: 'user',
    questions: [
      {
        id: 'name',
        type: 'text',
        label: { ru: 'Имя', en: 'Name', de: 'Vorname' },
        icon: 'user',
        required: true,
        hasAdditional: false,
      },
      {
        id: 'age',
        type: 'number',
        label: { ru: 'Возраст (от 1 до 12 лет)', en: 'Age (1 to 12 years)', de: 'Alter (1 bis 12 Jahre)' },
        icon: 'calendar',
        required: true,
        hasAdditional: false,
        min: 1,
        max: 12,
      },
      {
        id: 'weight',
        type: 'number',
        label: { ru: 'Вес (кг)', en: 'Weight (kg)', de: 'Gewicht (kg)' },
        icon: 'scale',
        required: true,
        hasAdditional: false,
      },
    ],
  },
  {
    id: 'health',
    title: { ru: 'Здоровье', en: 'Health', de: 'Gesundheit' },
    icon: 'heart',
    questions: [
      {
        id: 'digestion',
        type: 'checkbox',
        label: { ru: 'Пищеварение', en: 'Digestion', de: 'Verdauung' },
        icon: 'heart',
        options: digestionOptionsExtended,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'teeth_decay',
        type: 'radio',
        label: { ru: 'Зубы быстро портятся', en: 'Teeth decay quickly', de: 'Zähne verderben schnell' },
        icon: 'smile',
        options: yesNoOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'sweats_grinds',
        type: 'checkbox',
        label: { ru: 'Потеет во сне / скрипит зубами', en: 'Sweats at night / grinds teeth', de: 'Schwitzt nachts / knirscht mit den Zähnen' },
        icon: 'moon',
        options: [
          { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
          { value: 'sweats', label: { ru: 'Потеет во сне', en: 'Sweats at night', de: 'Schwitzt nachts' } },
          { value: 'grinds', label: { ru: 'Скрипит зубами', en: 'Grinds teeth', de: 'Knirscht mit den Zähnen' } },
        ],
        required: true,
        hasAdditional: true,
      },
      {
        id: 'bad_breath',
        type: 'radio',
        label: { ru: 'Неприятный запах изо рта', en: 'Bad breath', de: 'Mundgeruch' },
        icon: 'wind',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'sugar_dependency',
        type: 'text',
        label: { ru: 'Зависимость от сладкого', en: 'Sugar dependency', de: 'Zuckerabhängigkeit' },
        icon: 'candy',
        required: true,
        hasAdditional: true,
        placeholder: { ru: 'Опишите', en: 'Describe', de: 'Beschreiben' },
      },
      {
        id: 'skin_condition',
        type: 'checkbox',
        label: { ru: 'Родинки / бородавки / высыпания / экзема', en: 'Moles / warts / rashes / eczema', de: 'Muttermale / Warzen / Ausschläge / Ekzeme' },
        icon: 'sparkles',
        options: skinOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'allergies',
        type: 'checkbox',
        label: { ru: 'Аллергия', en: 'Allergies', de: 'Allergien' },
        icon: 'flower',
        options: allergyOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'hyperactive',
        type: 'radio',
        label: { ru: 'Гиперактивный или часто жалуется на усталость', en: 'Hyperactive or often complains of tiredness', de: 'Hyperaktiv oder klagt oft über Müdigkeit' },
        icon: 'zap',
        options: hyperactiveOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'water_per_day',
        type: 'radio',
        label: { ru: 'Сколько воды в день (литров)', en: 'Water per day (liters)', de: 'Wasser pro Tag (Liter)' },
        icon: 'droplet',
        options: waterOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'injuries',
        type: 'checkbox',
        label: { ru: 'Травмы / операции / удары по голове / переломы', en: 'Injuries / surgeries / head trauma / fractures', de: 'Verletzungen / Operationen / Kopftrauma / Brüche' },
        icon: 'activity',
        options: injuriesOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'headaches_sleep',
        type: 'checkbox',
        label: { ru: 'Жалобы на головную боль, плохой сон', en: 'Headache complaints, poor sleep', de: 'Kopfschmerzen, schlechter Schlaf' },
        icon: 'brain',
        options: headachesSleepOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'illness_antibiotics',
        type: 'checkbox',
        label: { ru: 'Часто ли болеет, принимал ли антибиотики', en: 'Is often ill, has taken antibiotics', de: 'Ist oft krank, hat Antibiotika genommen' },
        icon: 'pill',
        options: illnessAntibioticsOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'what_else',
        type: 'textarea',
        label: { ru: 'Что ещё нужно знать', en: 'What else should we know', de: 'Was sollten wir noch wissen' },
        icon: 'info',
        required: false,
        hasAdditional: false,
        placeholder: { ru: 'Дополнительная информация', en: 'Additional information', de: 'Zusätzliche Informationen' },
      },
    ],
  },
];

// Woman questionnaire (type = woman)
export const womanQuestionnaire: QuestionnaireSection[] = [
  {
    id: 'personal',
    title: { ru: 'Личные данные', en: 'Personal Information', de: 'Persönliche Daten' },
    icon: 'user',
    questions: [
      {
        id: 'name',
        type: 'text',
        label: { ru: 'Имя', en: 'Name', de: 'Vorname' },
        icon: 'user',
        required: true,
        hasAdditional: false,
      },
      {
        id: 'last_name',
        type: 'text',
        label: { ru: 'Фамилия', en: 'Last Name', de: 'Nachname' },
        icon: 'user',
        required: true,
        hasAdditional: false,
      },
      {
        id: 'age',
        type: 'number',
        label: { ru: 'Возраст', en: 'Age', de: 'Alter' },
        icon: 'calendar',
        required: true,
        hasAdditional: false,
      },
      {
        id: 'weight',
        type: 'number',
        label: { ru: 'Вес (кг)', en: 'Weight (kg)', de: 'Gewicht (kg)' },
        icon: 'scale',
        required: true,
        hasAdditional: false,
      },
    ],
  },
  {
    id: 'covid',
    title: { ru: 'COVID-19', en: 'COVID-19', de: 'COVID-19' },
    icon: 'shield',
    questions: [
      {
        id: 'covid_status',
        type: 'radio',
        label: { ru: 'Был ли ковид или вакцина', en: 'COVID or vaccination status', de: 'COVID oder Impfstatus' },
        icon: 'shield',
        options: covidOptionsWoman,
        required: true,
        hasAdditional: true,
      },
    ],
  },
  {
    id: 'health',
    title: { ru: 'Здоровье', en: 'Health', de: 'Gesundheit' },
    icon: 'heart',
    questions: [
      {
        id: 'digestion',
        type: 'checkbox',
        label: { ru: 'Пищеварение', en: 'Digestion', de: 'Verdauung' },
        icon: 'heart',
        options: digestionOptionsAdult,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'hair_condition',
        type: 'checkbox',
        label: { ru: 'Состояние волос', en: 'Hair condition', de: 'Haarzustand' },
        icon: 'sparkles',
        options: hairOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'teeth',
        type: 'checkbox',
        label: { ru: 'Зубы', en: 'Teeth', de: 'Zähne' },
        icon: 'smile',
        options: teethOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'joints',
        type: 'checkbox',
        label: { ru: 'Суставы', en: 'Joints', de: 'Gelenke' },
        icon: 'bone',
        options: jointOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'cold_hands',
        type: 'radio',
        label: { ru: 'Холодные руки/ноги', en: 'Cold hands/feet', de: 'Kalte Hände/Füße' },
        icon: 'thermometer',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'headaches',
        type: 'checkbox',
        label: { ru: 'Головные боли, мигрени, травмы', en: 'Headaches, migraines, injuries', de: 'Kopfschmerzen, Migräne, Verletzungen' },
        icon: 'brain',
        options: headachesOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'operations',
        type: 'radio',
        label: { ru: 'Операции', en: 'Operations', de: 'Operationen' },
        icon: 'scissors',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'cysts_stones',
        type: 'checkbox',
        label: { ru: 'Кисты, миомы, песок или камни в почках или желчном', en: 'Cysts, fibroids, sand or stones in kidneys or gallbladder', de: 'Zysten, Myome, Sand oder Steine in Nieren oder Gallenblase' },
        icon: 'circle',
        options: cystsStonesOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'pressure',
        type: 'radio',
        label: { ru: 'Давление. Пьете ли таблетки (написать в дополнительно)', en: 'Blood pressure. Do you take medication (write in additional)', de: 'Blutdruck. Nehmen Sie Medikamente (in zusätzlich schreiben)' },
        icon: 'activity',
        options: pressureOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'menstruation',
        type: 'checkbox',
        label: { ru: 'Месячные или менопауза', en: 'Menstruation or menopause', de: 'Menstruation oder Menopause' },
        icon: 'calendar',
        options: menstruationOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'discharge_viruses',
        type: 'checkbox',
        label: { ru: 'Выделения - молочница, много родинок, бородавок, папилломавирус на коже, герпес', en: 'Discharge - thrush, many moles, warts, HPV on skin, herpes', de: 'Ausfluss - Soor, viele Muttermale, Warzen, HPV auf der Haut, Herpes' },
        icon: 'alert-circle',
        options: dischargeMolesWartsHerpesOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'allergies',
        type: 'checkbox',
        label: { ru: 'Аллергии', en: 'Allergies', de: 'Allergien' },
        icon: 'flower',
        options: allergyOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'skin_condition',
        type: 'checkbox',
        label: { ru: 'Кожа — раздражение, прыщи', en: 'Skin — irritation, acne', de: 'Haut — Reizung, Akne' },
        icon: 'sparkles',
        options: skinConditionOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'sleep',
        type: 'radio',
        label: { ru: 'Сон', en: 'Sleep', de: 'Schlaf' },
        icon: 'moon',
        options: sleepAdultOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'energy',
        type: 'radio',
        label: { ru: 'Энергия', en: 'Energy', de: 'Energie' },
        icon: 'zap',
        options: energyOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'water_per_day',
        type: 'radio',
        label: { ru: 'Сколько воды в день (литров)', en: 'Water per day (liters)', de: 'Wasser pro Tag (Liter)' },
        icon: 'droplet',
        options: waterOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'varicose_hemorrhoids',
        type: 'radio',
        label: { ru: 'Варикоз или геморрой', en: 'Varicose veins or hemorrhoids', de: 'Krampfadern oder Hämorrhoiden' },
        icon: 'heart',
        options: [
          { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
          { value: 'varicose', label: { ru: 'Варикоз', en: 'Varicose veins', de: 'Krampfadern' } },
          { value: 'hemorrhoids', label: { ru: 'Геморрой', en: 'Hemorrhoids', de: 'Hämorrhoiden' } },
          { value: 'both', label: { ru: 'Оба', en: 'Both', de: 'Beide' } },
        ],
        required: true,
        hasAdditional: true,
      },
      {
        id: 'what_else',
        type: 'textarea',
        label: { ru: 'Что ещё нужно знать', en: 'What else should we know', de: 'Was sollten wir noch wissen' },
        icon: 'info',
        required: false,
        hasAdditional: false,
        placeholder: { ru: 'Дополнительная информация', en: 'Additional information', de: 'Zusätzliche Informationen' },
      },
    ],
  },
];

// Man questionnaire (type = man)
export const manQuestionnaire: QuestionnaireSection[] = [
  {
    id: 'personal',
    title: { ru: 'Личные данные', en: 'Personal Information', de: 'Persönliche Daten' },
    icon: 'user',
    questions: [
      {
        id: 'name',
        type: 'text',
        label: { ru: 'Имя', en: 'Name', de: 'Vorname' },
        icon: 'user',
        required: true,
        hasAdditional: false,
      },
      {
        id: 'last_name',
        type: 'text',
        label: { ru: 'Фамилия', en: 'Last Name', de: 'Nachname' },
        icon: 'user',
        required: true,
        hasAdditional: false,
      },
      {
        id: 'age',
        type: 'number',
        label: { ru: 'Возраст', en: 'Age', de: 'Alter' },
        icon: 'calendar',
        required: true,
        hasAdditional: false,
      },
      {
        id: 'weight',
        type: 'number',
        label: { ru: 'Вес (кг)', en: 'Weight (kg)', de: 'Gewicht (kg)' },
        icon: 'scale',
        required: true,
        hasAdditional: false,
      },
    ],
  },
  {
    id: 'covid',
    title: { ru: 'COVID-19', en: 'COVID-19', de: 'COVID-19' },
    icon: 'shield',
    questions: [
      {
        id: 'covid_status',
        type: 'radio',
        label: { ru: 'Был ли ковид или вакцина', en: 'COVID or vaccination status', de: 'COVID oder Impfstatus' },
        icon: 'shield',
        options: covidOptionsMan,
        required: true,
        hasAdditional: true,
      },
    ],
  },
  {
    id: 'health',
    title: { ru: 'Здоровье', en: 'Health', de: 'Gesundheit' },
    icon: 'heart',
    questions: [
      {
        id: 'digestion',
        type: 'checkbox',
        label: { ru: 'Пищеварение', en: 'Digestion', de: 'Verdauung' },
        icon: 'heart',
        options: digestionOptionsAdult,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'varicose_hemorrhoids',
        type: 'radio',
        label: { ru: 'Варикоз или геморрой', en: 'Varicose veins or hemorrhoids', de: 'Krampfadern oder Hämorrhoiden' },
        icon: 'heart',
        options: [
          { value: 'no_issues', label: { ru: 'Нет проблем', en: 'No issues', de: 'Keine Beschwerden' } },
          { value: 'varicose', label: { ru: 'Варикоз', en: 'Varicose veins', de: 'Krampfadern' } },
          { value: 'hemorrhoids', label: { ru: 'Геморрой', en: 'Hemorrhoids', de: 'Hämorrhoiden' } },
          { value: 'both', label: { ru: 'Оба', en: 'Both', de: 'Beide' } },
        ],
        required: true,
        hasAdditional: true,
      },
      {
        id: 'teeth',
        type: 'checkbox',
        label: { ru: 'Зубы', en: 'Teeth', de: 'Zähne' },
        icon: 'smile',
        options: teethOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'joints',
        type: 'checkbox',
        label: { ru: 'Суставы', en: 'Joints', de: 'Gelenke' },
        icon: 'bone',
        options: jointOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'cold_hands',
        type: 'radio',
        label: { ru: 'Руки-ноги холодные даже летом', en: 'Cold hands/feet even in summer', de: 'Kalte Hände/Füße auch im Sommer' },
        icon: 'thermometer',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'headaches',
        type: 'checkbox',
        label: { ru: 'Головные боли, мигрени, травмы/сотрясение', en: 'Headaches, migraines, injuries/concussion', de: 'Kopfschmerzen, Migräne, Verletzungen/Gehirnerschütterung' },
        icon: 'brain',
        options: headachesOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'operations',
        type: 'radio',
        label: { ru: 'Операции', en: 'Operations', de: 'Operationen' },
        icon: 'scissors',
        options: yesNoOptionsSimple,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'cysts_stones',
        type: 'checkbox',
        label: { ru: 'Кисты, песок или камни в почках/желчном', en: 'Cysts, sand or stones in kidneys/gallbladder', de: 'Zysten, Sand oder Steine in Nieren/Gallenblase' },
        icon: 'circle',
        options: cystsStonesKidneysOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'pressure',
        type: 'radio',
        label: { ru: 'Давление. Пьете ли таблетки (написать в дополнительно)', en: 'Blood pressure. Do you take medication (write in additional)', de: 'Blutdruck. Nehmen Sie Medikamente (in zusätzlich schreiben)' },
        icon: 'activity',
        options: pressureOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'water_per_day',
        type: 'radio',
        label: { ru: 'Сколько воды в день (литров)', en: 'Water per day (liters)', de: 'Wasser pro Tag (Liter)' },
        icon: 'droplet',
        options: waterOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'skin_viruses',
        type: 'checkbox',
        label: { ru: 'Родинки, бородавки, герпес', en: 'Moles, warts, herpes', de: 'Muttermale, Warzen, Herpes' },
        icon: 'alert-circle',
        options: molesWartsHerpesOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'allergies',
        type: 'checkbox',
        label: { ru: 'Аллергия', en: 'Allergies', de: 'Allergien' },
        icon: 'flower',
        options: allergyOptionsExtended,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'skin_condition',
        type: 'checkbox',
        label: { ru: 'Кожа — сухая, высыпания, раздражение, прыщи', en: 'Skin — dry, rashes, irritation, acne', de: 'Haut — trocken, Ausschläge, Reizung, Akne' },
        icon: 'sparkles',
        options: skinConditionOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'sleep',
        type: 'radio',
        label: { ru: 'Сон — трудно заснуть, часто просыпаетесь', en: 'Sleep — hard to fall asleep, wake up often', de: 'Schlaf — schwer einzuschlafen, wachen oft auf' },
        icon: 'moon',
        options: sleepAdultOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'energy',
        type: 'radio',
        label: { ru: 'Энергия — с утра устал', en: 'Energy — tired in the morning', de: 'Energie — morgens müde' },
        icon: 'zap',
        options: energyOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'memory',
        type: 'radio',
        label: { ru: 'Память и концентрация', en: 'Memory and concentration', de: 'Gedächtnis und Konzentration' },
        icon: 'brain',
        options: memoryOptions,
        required: true,
        hasAdditional: true,
      },
      {
        id: 'what_else',
        type: 'textarea',
        label: { ru: 'Что ещё нужно знать', en: 'What else should we know', de: 'Was sollten wir noch wissen' },
        icon: 'info',
        required: false,
        hasAdditional: false,
        placeholder: { ru: 'Дополнительная информация', en: 'Additional information', de: 'Zusätzliche Informationen' },
      },
    ],
  },
];

export type QuestionnaireType = 'infant' | 'child' | 'woman' | 'man';

export const getQuestionnaire = (type: QuestionnaireType): QuestionnaireSection[] => {
  switch (type) {
    case 'infant':
      return infantQuestionnaire;
    case 'child':
      return childQuestionnaire;
    case 'woman':
      return womanQuestionnaire;
    case 'man':
      return manQuestionnaire;
    default:
      return infantQuestionnaire;
  }
};

export const getQuestionnaireTitle = (type: QuestionnaireType, lang: Language): string => {
  const titles = {
    infant: { ru: 'Анкета для младенца', en: 'Infant Questionnaire', de: 'Säuglingsfragebogen' },
    child: { ru: 'Детская анкета', en: 'Child Questionnaire', de: 'Kinderfragebogen' },
    woman: { ru: 'Женская анкета', en: 'Women\'s Questionnaire', de: 'Frauenfragebogen' },
    man: { ru: 'Мужская анкета', en: 'Men\'s Questionnaire', de: 'Männerfragebogen' },
  };
  return titles[type]?.[lang] || titles[type]?.ru || '';
};
