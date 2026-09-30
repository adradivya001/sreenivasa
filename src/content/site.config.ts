// ============================================================
// SREENIVASA MULTI SPECIALITY HOSPITAL — Site Configuration
// "Comprehensive Healthcare. Trusted Medical Care."
// "Your Health. Our Priority."
// Recognized by AP Directorate of Medical Education (07 Mar 2025 – 06 Mar 2028)
// ============================================================

export const siteConfig = {
  name: 'Sreenivasa Multi Speciality Hospital',
  shortName: 'Sreenivasa Hospital',
  tagline: 'Better Health · Trusted Care',
  subTagline: 'Your Health. Our Priority.',
  heroLabel: 'SREENIVASA MULTI SPECIALITY HOSPITAL',
  heroHeadingLine1: 'Complete Care.',
  heroHeadingLine2: 'Trusted Doctors.',
  heroBadges: '20+ Expert Doctors | 15 Specialities | In-House Lab',
  description:
    'Sreenivasa Multi Speciality Hospital offers 20+ experienced doctors across 15 specialities, surgery care, and fast blood tests, ECG, and X-Ray diagnostics at Subash Road, Anantapur.',

  aboutSummary:
    'Sreenivasa Multi Speciality Hospital is a trusted multi-speciality hospital in Anantapur with 20+ doctors across 15 departments, officially recognized by the Andhra Pradesh Directorate of Medical Education (DME AP) valid through March 2028.',

  recognition: {
    authority: 'Andhra Pradesh Directorate of Medical Education (DME AP)',
    status: 'Recognized Hospital',
    validity: '07 Mar 2025 – 06 Mar 2028',
    orderNumber: 'AP DME Recognized Hospital List',
    isRecognized: true,
  },

  contact: {
    phone: '+919849898698',
    phoneDisplay: '+91 98498 98698',
    landline: '08554272828',
    landlineDisplay: '08554-272828',
    whatsapp: '919849898698',
    email: 'info@sreenivasahospital.in',
    address: {
      doorNo: '#28-271',
      building: 'Pranathi Complex',
      landmark: 'Near Iron Bridge',
      street: 'Subash Road, Old Town (MDR77)',
      city: 'Anantapur',
      state: 'Andhra Pradesh',
      country: 'India',
      postalCode: '515001',
      fullAddress: '#28-271, Pranathi Complex, Near Iron Bridge, Subash Road, Anantapur, Andhra Pradesh – 515001',
    },
    mapQuery: 'Sreenivasa+Multi+Speciality+Hospital+Subash+Road+Iron+Bridge+Anantapur',
    googleMapsUrl: 'https://maps.google.com/?q=Sreenivasa+Multi+Speciality+Hospital+Iron+Bridge+Subash+Road+Anantapur',
    opdHours: 'Mon - Sat: 9:00 AM - 9:00 PM | Sun: 9:00 AM - 2:00 PM',
    emergencyHours: '24/7 Casualty & Emergency Care',
  },

  stats: [
    { value: '15+', label: 'Speciality Departments', desc: 'Medicine, Surgery, OBG, Cardio & more' },
    { value: '20+', label: 'Doctor Specialists', desc: 'Board-Listed MD/MS/DM/MCh Doctors' },
    { value: '2028', label: 'Govt. Recognized', desc: 'AP DME Valid Till 2028' },
    { value: '3+', label: 'Lab & Scan Services', desc: 'Blood Tests, ECG & X-Ray' },
  ],

  pillars: [
    'DME AP RECOGNIZED',
    '15 SPECIALITY DEPARTMENTS',
    '20+ SPECIALIST DOCTORS',
    'TRUSTED HEALTHCARE IN ANANTAPUR',
  ],

  features: {
    showEmergency: true,
    showDiagnostics: true,
    showInsurance: true,
    showOpenHours: true,
    showSecondPhone: true,
    showEmail: true,
    showBlog: false,
    showFAQ: true,
    showMap: true,
    showDigitalSolutions: true,
  },

  diagnostics: [
    {
      id: 'pathology',
      name: 'Blood Tests & Lab',
      desc: 'Routine blood tests, sugar checks, liver and kidney tests, and urine tests with fast reports.',
      badge: 'In-House Lab',
      icon: 'FlaskConical',
    },
    {
      id: 'ecg',
      name: 'ECG Heart Check',
      desc: 'Quick heart test to check heart beat, rhythm, and pre-surgery safety.',
      badge: 'Heart Check',
      icon: 'Activity',
    },
    {
      id: 'xray',
      name: 'Digital X-Ray',
      desc: 'Clear digital pictures for broken bones, fractures, joints, and chest checkups.',
      badge: 'Digital X-Ray',
      icon: 'Scan',
    },
  ],

  services: [
    {
      id: 'emergency-care',
      title: 'Emergency Care',
      description: 'Quick medical help and doctor attention for urgent health needs.',
      icon: 'ShieldAlert',
      badge: '24/7 Support',
    },
    {
      id: 'diagnostic-services',
      title: 'Lab & Scan Services',
      description: 'In-house blood testing lab, ECG heart checks, and digital X-ray scans.',
      icon: 'Microscope',
      badge: 'Fast Reports',
    },
    {
      id: 'outpatient-consultation',
      title: 'Doctor Checkups',
      description: 'Meet experienced doctors across 7 main medical specialities.',
      icon: 'UserCheck',
      badge: '7 Specialities',
    },
    {
      id: 'surgical-care',
      title: 'Surgeries & Operations',
      description: 'Expert surgeries and caring recovery for general, bone, nerve, and ENT conditions.',
      icon: 'HeartPulse',
      badge: 'Expert Surgeons',
    },
  ],

  legal: {
    privacyPolicy: '/privacy',
    termsOfService: '/terms',
    copyrightYear: 2026,
    websiteBy: 'Digital Healthcare Solutions',
  },

  seo: {
    siteUrl: 'https://sreenivasahospital.in',
    ogImage: '/assets/sreenivasa-hero.png',
    twitterHandle: '@SreenivasaHosp',
  },
} as const;

export type SiteConfig = typeof siteConfig;
