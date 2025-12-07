export type Language = 'ru' | 'en' | 'de';

export const translations = {
  ru: {
    // Header & Navigation
    siteTitle: 'Анкета по здоровью',
    selectLanguage: 'Язык',
    
    // Home page
    welcome: 'Добро пожаловать',
    welcomeDescription: 'Это бесплатная анкета по здоровью. Заполните форму, и мы свяжемся с вами для консультации.',
    selectCategory: 'Выберите категорию анкеты',
    
    // Categories
    infantTitle: 'Для младенца',
    infantDescription: 'До 1 года',
    childTitle: 'Детская анкета',
    childDescription: '1–12 лет',
    womanTitle: 'Женская анкета',
    womanDescription: 'Для взрослых женщин',
    manTitle: 'Мужская анкета',
    manDescription: 'Для взрослых мужчин',
    
    // Form labels
    name: 'Имя',
    lastName: 'Фамилия',
    age: 'Возраст',
    ageMonths: 'Возраст (в месяцах)',
    weight: 'Вес (кг)',
    waterPerDay: 'Сколько воды в день (литров)',
    additionalInfo: 'Дополнительно (необязательно)',
    whatElseToKnow: 'Что ещё нужно знать о здоровье',
    
    // Common options
    yes: 'Да',
    no: 'Нет',
    sometimes: 'Иногда',
    good: 'Хорошо',
    bad: 'Плохо',
    sometimesProblems: 'Иногда проблемы',
    normal: 'Нормальное',
    reduced: 'Сниженная',
    veryLow: 'Очень низкая',
    moderate: 'Умеренно',
    strong: 'Сильно',
    
    // Digestion
    digestion: 'Пищеварение',
    stomachPain: 'Боли в животе',
    diarrhea: 'Диарея',
    constipation: 'Запор',
    bloating: 'Вздутие',
    heartburn: 'Изжога',
    
    // Sleep & Energy
    sleep: 'Сон',
    sleepQuality: 'Качество сна',
    sleepsWell: 'Хорошо ли спит',
    sweatsAtNight: 'Потеет во сне',
    grindTeeth: 'Скрипит зубами',
    energy: 'Энергия',
    energyLevel: 'Уровень энергии',
    
    // Allergies
    allergies: 'Аллергии',
    flowering: 'Цветение',
    animals: 'Животные',
    dust: 'Пыль',
    food: 'Еда',
    medications: 'Лекарства',
    
    // Skin & Appearance
    skinCondition: 'Состояние кожи',
    moles: 'Родинки',
    warts: 'Бородавки',
    rashes: 'Высыпания',
    eczema: 'Экзема',
    drySkin: 'Сухая кожа',
    acne: 'Прыщи',
    irritation: 'Раздражение',
    
    // Teeth
    teeth: 'Зубы',
    teethDecayFast: 'Зубы быстро портятся',
    teethCrumble: 'Зубы крошатся',
    badBreath: 'Неприятный запах изо рта',
    bleedingGums: 'Кровоточивость дёсен',
    
    // Joints
    joints: 'Суставы',
    crunch: 'Хруст',
    squeak: 'Скрип',
    inflammation: 'Воспаление',
    
    // Medical history
    injuries: 'Травмы / операции / удары по голове / переломы',
    operations: 'Операции',
    headaches: 'Головные боли / мигрени',
    illnessFrequency: 'Часто ли болеет / принимал ли антибиотики',
    cystsStones: 'Кисты / миомы / камни',
    pressure: 'Давление',
    pressureLow: 'Низкое',
    pressureHigh: 'Высокое',
    pressureNormal: 'Нормальное',
    takesMedication: 'Принимаете ли таблетки',
    
    // Women specific
    menstruation: 'Месячные или менопауза',
    discharge: 'Выделения',
    hairCondition: 'Состояние волос',
    hairFalling: 'Выпадают',
    hairSplit: 'Секутся',
    hairDry: 'Сухие',
    hairOk: 'В порядке',
    
    // Cold extremities
    coldHands: 'Холодные руки/ноги',
    coldEvenInSummer: 'Руки-ноги холодные даже летом',
    
    // Varicose & Hemorrhoids
    varicoseHemorrhoids: 'Варикоз или геморрой',
    bleeding: 'Кровоточит',
    
    // COVID
    covidStatus: 'Был ли ковид или вакцина',
    hadCovid: 'Болела',
    vaccinated: 'Вакцинирована',
    noCovid: 'Нет',
    
    // Infant specific
    birthType: 'Как прошли роды',
    natural: 'Естественно',
    cesarean: 'Кесарево',
    other: 'Другое',
    motherToxicosis: 'Был ли у мамы сильный токсикоз',
    motherAllergy: 'Была ли у мамы аллергия до или во время беременности',
    motherConstipation: 'Был ли у мамы запор',
    motherAntibiotics: 'Пила ли мама антибиотики во время беременности',
    motherAnemia: 'Была ли анемия у мамы',
    pregnancyProblems: 'Какие проблемы были в беременности',
    
    // Child specific
    hyperactive: 'Гиперактивный или часто жалуется на усталость',
    hyperactiveYes: 'Гиперактивный',
    tiredOften: 'Часто устаёт',
    sugarDependency: 'Зависимость от сладкого',
    
    // Memory
    memoryConcentration: 'Память и концентрация',
    tiredInMorning: 'С утра устал',
    hardToFallAsleep: 'Трудно заснуть',
    wakeUpOften: 'Часто просыпаюсь',
    
    // Viruses
    hpvHerpes: 'ПВЧ / Герпес',
    
    // Contact
    contactMethod: 'Способ связи',
    telegram: 'Telegram',
    instagram: 'Instagram',
    username: 'Имя пользователя',
    usernameHint: 'Введите без @ или с @',
    contactLink: 'Ваша ссылка для связи',
    
    // DSGVO
    dsgvoConsent: 'Я даю свое добровольное согласие на обработку моих персональных данных согласно DSGVO/GDPR для целей предоставления консультации по здоровью. Я понимаю, что консультация не является медицинской услугой. Я знаю, что могу отозвать свое согласие в любое время.',
    
    // Buttons
    submit: 'Отправить анкету',
    submitting: 'Отправка...',
    clearForm: 'Очистить форму',
    previewMarkdown: 'Предпросмотр',
    close: 'Закрыть',
    backToHome: 'Вернуться на главную',
    sendAnother: 'Отправить ещё одну анкету',
    
    // Success page
    thankYou: 'Спасибо!',
    successMessage: 'Ваша анкета успешно отправлена. С вами скоро свяжутся.',
    
    // Errors
    required: 'Это поле обязательно',
    invalidNumber: 'Введите корректное число',
    selectAtLeastOne: 'Выберите хотя бы один вариант',
    submitError: 'Ошибка при отправке. Попробуйте позже.',
    
    // Markdown headers
    mdInfant: '👶 Анкета для младенца',
    mdChild: '🧒 Детская анкета',
    mdWoman: '🌸 Женская анкета',
    mdMan: '👨 Мужская анкета',
    mdContacts: '📞 Контакты',
  },
  
  en: {
    // Header & Navigation
    siteTitle: 'Health Questionnaire',
    selectLanguage: 'Language',
    
    // Home page
    welcome: 'Welcome',
    welcomeDescription: 'This is a free health questionnaire. Fill out the form and we will contact you for a consultation.',
    selectCategory: 'Select questionnaire category',
    
    // Categories
    infantTitle: 'For Infant',
    infantDescription: 'Under 1 year',
    childTitle: 'Child Questionnaire',
    childDescription: '1–12 years',
    womanTitle: 'Women\'s Questionnaire',
    womanDescription: 'For adult women',
    manTitle: 'Men\'s Questionnaire',
    manDescription: 'For adult men',
    
    // Form labels
    name: 'Name',
    lastName: 'Last Name',
    age: 'Age',
    ageMonths: 'Age (in months)',
    weight: 'Weight (kg)',
    waterPerDay: 'Water per day (liters)',
    additionalInfo: 'Additional info (optional)',
    whatElseToKnow: 'What else should we know about health',
    
    // Common options
    yes: 'Yes',
    no: 'No',
    sometimes: 'Sometimes',
    good: 'Good',
    bad: 'Bad',
    sometimesProblems: 'Sometimes problems',
    normal: 'Normal',
    reduced: 'Reduced',
    veryLow: 'Very low',
    moderate: 'Moderate',
    strong: 'Strong',
    
    // Digestion
    digestion: 'Digestion',
    stomachPain: 'Stomach pain',
    diarrhea: 'Diarrhea',
    constipation: 'Constipation',
    bloating: 'Bloating',
    heartburn: 'Heartburn',
    
    // Sleep & Energy
    sleep: 'Sleep',
    sleepQuality: 'Sleep quality',
    sleepsWell: 'Sleeps well',
    sweatsAtNight: 'Sweats at night',
    grindTeeth: 'Grinds teeth',
    energy: 'Energy',
    energyLevel: 'Energy level',
    
    // Allergies
    allergies: 'Allergies',
    flowering: 'Pollen',
    animals: 'Animals',
    dust: 'Dust',
    food: 'Food',
    medications: 'Medications',
    
    // Skin & Appearance
    skinCondition: 'Skin condition',
    moles: 'Moles',
    warts: 'Warts',
    rashes: 'Rashes',
    eczema: 'Eczema',
    drySkin: 'Dry skin',
    acne: 'Acne',
    irritation: 'Irritation',
    
    // Teeth
    teeth: 'Teeth',
    teethDecayFast: 'Teeth decay quickly',
    teethCrumble: 'Teeth crumble',
    badBreath: 'Bad breath',
    bleedingGums: 'Bleeding gums',
    
    // Joints
    joints: 'Joints',
    crunch: 'Crunching',
    squeak: 'Squeaking',
    inflammation: 'Inflammation',
    
    // Medical history
    injuries: 'Injuries / surgeries / head trauma / fractures',
    operations: 'Operations',
    headaches: 'Headaches / migraines',
    illnessFrequency: 'How often ill / antibiotics taken',
    cystsStones: 'Cysts / fibroids / stones',
    pressure: 'Blood pressure',
    pressureLow: 'Low',
    pressureHigh: 'High',
    pressureNormal: 'Normal',
    takesMedication: 'Do you take medication',
    
    // Women specific
    menstruation: 'Menstruation or menopause',
    discharge: 'Discharge',
    hairCondition: 'Hair condition',
    hairFalling: 'Falling out',
    hairSplit: 'Split ends',
    hairDry: 'Dry',
    hairOk: 'Normal',
    
    // Cold extremities
    coldHands: 'Cold hands/feet',
    coldEvenInSummer: 'Cold hands/feet even in summer',
    
    // Varicose & Hemorrhoids
    varicoseHemorrhoids: 'Varicose veins or hemorrhoids',
    bleeding: 'Bleeding',
    
    // COVID
    covidStatus: 'COVID or vaccination status',
    hadCovid: 'Had COVID',
    vaccinated: 'Vaccinated',
    noCovid: 'No',
    
    // Infant specific
    birthType: 'How was the birth',
    natural: 'Natural',
    cesarean: 'Cesarean',
    other: 'Other',
    motherToxicosis: 'Did mother have severe toxicosis',
    motherAllergy: 'Did mother have allergies before/during pregnancy',
    motherConstipation: 'Did mother have constipation',
    motherAntibiotics: 'Did mother take antibiotics during pregnancy',
    motherAnemia: 'Did mother have anemia',
    pregnancyProblems: 'What problems were there during pregnancy',
    
    // Child specific
    hyperactive: 'Hyperactive or often complains of tiredness',
    hyperactiveYes: 'Hyperactive',
    tiredOften: 'Often tired',
    sugarDependency: 'Sugar dependency',
    
    // Memory
    memoryConcentration: 'Memory and concentration',
    tiredInMorning: 'Tired in the morning',
    hardToFallAsleep: 'Hard to fall asleep',
    wakeUpOften: 'Wake up often',
    
    // Viruses
    hpvHerpes: 'HPV / Herpes',
    
    // Contact
    contactMethod: 'Contact method',
    telegram: 'Telegram',
    instagram: 'Instagram',
    username: 'Username',
    usernameHint: 'Enter with or without @',
    contactLink: 'Your contact link',
    
    // DSGVO
    dsgvoConsent: 'I give my voluntary consent to the processing of my personal data in accordance with GDPR for the purpose of providing health consultation. I understand that the consultation is not a medical service. I know that I can withdraw my consent at any time.',
    
    // Buttons
    submit: 'Submit questionnaire',
    submitting: 'Submitting...',
    clearForm: 'Clear form',
    previewMarkdown: 'Preview',
    close: 'Close',
    backToHome: 'Back to home',
    sendAnother: 'Submit another questionnaire',
    
    // Success page
    thankYou: 'Thank you!',
    successMessage: 'Your questionnaire has been successfully submitted. We will contact you soon.',
    
    // Errors
    required: 'This field is required',
    invalidNumber: 'Enter a valid number',
    selectAtLeastOne: 'Select at least one option',
    submitError: 'Error submitting. Please try again later.',
    
    // Markdown headers
    mdInfant: '👶 Infant Questionnaire',
    mdChild: '🧒 Child Questionnaire',
    mdWoman: '🌸 Women\'s Questionnaire',
    mdMan: '👨 Men\'s Questionnaire',
    mdContacts: '📞 Contacts',
  },
  
  de: {
    // Header & Navigation
    siteTitle: 'Gesundheitsfragebogen',
    selectLanguage: 'Sprache',
    
    // Home page
    welcome: 'Willkommen',
    welcomeDescription: 'Dies ist ein kostenloser Gesundheitsfragebogen. Füllen Sie das Formular aus und wir werden Sie für eine Beratung kontaktieren.',
    selectCategory: 'Fragebogen-Kategorie wählen',
    
    // Categories
    infantTitle: 'Für Säuglinge',
    infantDescription: 'Unter 1 Jahr',
    childTitle: 'Kinderfragebogen',
    childDescription: '1–12 Jahre',
    womanTitle: 'Fragebogen für Frauen',
    womanDescription: 'Für erwachsene Frauen',
    manTitle: 'Fragebogen für Männer',
    manDescription: 'Für erwachsene Männer',
    
    // Form labels
    name: 'Vorname',
    lastName: 'Nachname',
    age: 'Alter',
    ageMonths: 'Alter (in Monaten)',
    weight: 'Gewicht (kg)',
    waterPerDay: 'Wasser pro Tag (Liter)',
    additionalInfo: 'Zusätzliche Informationen (optional)',
    whatElseToKnow: 'Was sollten wir noch über die Gesundheit wissen',
    
    // Common options
    yes: 'Ja',
    no: 'Nein',
    sometimes: 'Manchmal',
    good: 'Gut',
    bad: 'Schlecht',
    sometimesProblems: 'Manchmal Probleme',
    normal: 'Normal',
    reduced: 'Reduziert',
    veryLow: 'Sehr niedrig',
    moderate: 'Mäßig',
    strong: 'Stark',
    
    // Digestion
    digestion: 'Verdauung',
    stomachPain: 'Bauchschmerzen',
    diarrhea: 'Durchfall',
    constipation: 'Verstopfung',
    bloating: 'Blähungen',
    heartburn: 'Sodbrennen',
    
    // Sleep & Energy
    sleep: 'Schlaf',
    sleepQuality: 'Schlafqualität',
    sleepsWell: 'Schläft gut',
    sweatsAtNight: 'Schwitzt nachts',
    grindTeeth: 'Knirscht mit den Zähnen',
    energy: 'Energie',
    energyLevel: 'Energieniveau',
    
    // Allergies
    allergies: 'Allergien',
    flowering: 'Pollen',
    animals: 'Tiere',
    dust: 'Staub',
    food: 'Lebensmittel',
    medications: 'Medikamente',
    
    // Skin & Appearance
    skinCondition: 'Hautzustand',
    moles: 'Muttermale',
    warts: 'Warzen',
    rashes: 'Ausschläge',
    eczema: 'Ekzeme',
    drySkin: 'Trockene Haut',
    acne: 'Akne',
    irritation: 'Reizung',
    
    // Teeth
    teeth: 'Zähne',
    teethDecayFast: 'Zähne verderben schnell',
    teethCrumble: 'Zähne bröckeln',
    badBreath: 'Mundgeruch',
    bleedingGums: 'Zahnfleischbluten',
    
    // Joints
    joints: 'Gelenke',
    crunch: 'Knacken',
    squeak: 'Quietschen',
    inflammation: 'Entzündung',
    
    // Medical history
    injuries: 'Verletzungen / Operationen / Kopftrauma / Brüche',
    operations: 'Operationen',
    headaches: 'Kopfschmerzen / Migräne',
    illnessFrequency: 'Wie oft krank / Antibiotika eingenommen',
    cystsStones: 'Zysten / Myome / Steine',
    pressure: 'Blutdruck',
    pressureLow: 'Niedrig',
    pressureHigh: 'Hoch',
    pressureNormal: 'Normal',
    takesMedication: 'Nehmen Sie Medikamente',
    
    // Women specific
    menstruation: 'Menstruation oder Menopause',
    discharge: 'Ausfluss',
    hairCondition: 'Haarzustand',
    hairFalling: 'Fallen aus',
    hairSplit: 'Spliss',
    hairDry: 'Trocken',
    hairOk: 'Normal',
    
    // Cold extremities
    coldHands: 'Kalte Hände/Füße',
    coldEvenInSummer: 'Kalte Hände/Füße auch im Sommer',
    
    // Varicose & Hemorrhoids
    varicoseHemorrhoids: 'Krampfadern oder Hämorrhoiden',
    bleeding: 'Blutung',
    
    // COVID
    covidStatus: 'COVID oder Impfstatus',
    hadCovid: 'Hatte COVID',
    vaccinated: 'Geimpft',
    noCovid: 'Nein',
    
    // Infant specific
    birthType: 'Wie war die Geburt',
    natural: 'Natürlich',
    cesarean: 'Kaiserschnitt',
    other: 'Andere',
    motherToxicosis: 'Hatte die Mutter starke Toxikose',
    motherAllergy: 'Hatte die Mutter Allergien vor/während der Schwangerschaft',
    motherConstipation: 'Hatte die Mutter Verstopfung',
    motherAntibiotics: 'Nahm die Mutter Antibiotika während der Schwangerschaft',
    motherAnemia: 'Hatte die Mutter Anämie',
    pregnancyProblems: 'Welche Probleme gab es während der Schwangerschaft',
    
    // Child specific
    hyperactive: 'Hyperaktiv oder klagt oft über Müdigkeit',
    hyperactiveYes: 'Hyperaktiv',
    tiredOften: 'Oft müde',
    sugarDependency: 'Zuckerabhängigkeit',
    
    // Memory
    memoryConcentration: 'Gedächtnis und Konzentration',
    tiredInMorning: 'Morgens müde',
    hardToFallAsleep: 'Schwer einzuschlafen',
    wakeUpOften: 'Wache oft auf',
    
    // Viruses
    hpvHerpes: 'HPV / Herpes',
    
    // Contact
    contactMethod: 'Kontaktmethode',
    telegram: 'Telegram',
    instagram: 'Instagram',
    username: 'Benutzername',
    usernameHint: 'Mit oder ohne @ eingeben',
    contactLink: 'Ihr Kontaktlink',
    
    // DSGVO
    dsgvoConsent: 'Ich gebe meine freiwillige Einwilligung zur Verarbeitung meiner personenbezogenen Daten gemäß DSGVO zum Zweck der Gesundheitsberatung. Ich verstehe, dass die Beratung keine medizinische Leistung ist. Ich weiß, dass ich meine Einwilligung jederzeit widerrufen kann.',
    
    // Buttons
    submit: 'Fragebogen absenden',
    submitting: 'Wird gesendet...',
    clearForm: 'Formular löschen',
    previewMarkdown: 'Vorschau',
    close: 'Schließen',
    backToHome: 'Zurück zur Startseite',
    sendAnother: 'Weiteren Fragebogen senden',
    
    // Success page
    thankYou: 'Vielen Dank!',
    successMessage: 'Ihr Fragebogen wurde erfolgreich gesendet. Wir werden uns bald bei Ihnen melden.',
    
    // Errors
    required: 'Dieses Feld ist erforderlich',
    invalidNumber: 'Geben Sie eine gültige Zahl ein',
    selectAtLeastOne: 'Wählen Sie mindestens eine Option',
    submitError: 'Fehler beim Senden. Bitte versuchen Sie es später erneut.',
    
    // Markdown headers
    mdInfant: '👶 Säuglingsfragebogen',
    mdChild: '🧒 Kinderfragebogen',
    mdWoman: '🌸 Frauenfragebogen',
    mdMan: '👨 Männerfragebogen',
    mdContacts: '📞 Kontakte',
  }
};

export const getTranslation = (lang: Language, key: keyof typeof translations['ru']): string => {
  return translations[lang]?.[key] || translations['ru'][key] || key;
};
