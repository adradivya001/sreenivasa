// ============================================================
// SREENIVASA MULTI SPECIALITY HOSPITAL — Site Configuration
// "Comprehensive Healthcare. Trusted Medical Care."
// "Your Health. Our Priority."
// Recognized by AP Directorate of Medical Education (07 Mar 2025 – 06 Mar 2028)
// ============================================================

export const siteConfig = {
  name: 'Sreenivasa Multi Speciality Hospital',
  shortName: 'Sreenivasa Hospital',
  tagline: 'Comprehensive Healthcare · Trusted Medical Care',
  subTagline: 'Your Health. Our Priority.',
  heroLabel: 'SREENIVASA MULTI SPECIALITY HOSPITAL',
  heroHeadingLine1: 'Comprehensive Healthcare.',
  heroHeadingLine2: 'Trusted Medical Care.',
  heroBadges: 'Expert Care | Multiple Specialities | Diagnostic Services',
  description:
    'Sreenivasa Multi Speciality Hospital provides expert clinical consultations, operative surgery, and on-site Pathology, ECG, and X-Ray diagnostics at Pranathi Complex, Near Iron Bridge, Subash Road, Anantapur.',

  aboutSummary:
    'Established as a premier multidisciplinary healthcare destination in Anantapur, Sreenivasa Multi Speciality Hospital is officially recognized by the Andhra Pradesh Directorate of Medical Education (DME AP) valid through March 2028.',

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
    emergencyHours: 'Available for Urgent Medical Evaluations',
  },

  stats: [
    { value: '7+', label: 'Core Medical Specialities', desc: 'DME AP Recognized Departments' },
    { value: '2028', label: 'Recognition Valid Thru', desc: 'AP Directorate of Medical Education' },
    { value: '3+', label: 'Diagnostic Services', desc: 'Pathology, ECG & Digital X-Ray' },
    { value: '100%', label: 'Dedicated Patient Care', desc: 'Comprehensive Multi-Speciality Facility' },
  ],

  pillars: [
    'DME AP RECOGNIZED',
    '7 SPECIALITY DEPARTMENTS',
    'DIAGNOSTIC & LAB SERVICES',
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
      name: 'Pathology & Laboratory',
      desc: 'Comprehensive clinical biochemistry, hematology, routine investigations, and diagnostic testing.',
      badge: 'Certified Diagnostic Lab',
      icon: 'FlaskConical',
    },
    {
      id: 'ecg',
      name: 'ECG (Electrocardiogram)',
      desc: 'High-precision electrocardiogram testing for rapid cardiac rhythm evaluation and pre-operative cardiac assessment.',
      badge: 'Cardiac Assessment',
      icon: 'Activity',
    },
    {
      id: 'xray',
      name: 'Digital X-Ray',
      desc: 'High-resolution digital radiography for precise musculoskeletal, orthopedic, chest, and internal skeletal evaluations.',
      badge: 'Digital Imaging',
      icon: 'Scan',
    },
  ],

  services: [
    {
      id: 'emergency-care',
      title: 'Emergency Care',
      description: 'Immediate medical attention, triage evaluation, and prompt stabilization for urgent healthcare needs.',
      icon: 'ShieldAlert',
      badge: 'Immediate Response',
    },
    {
      id: 'diagnostic-services',
      title: 'Diagnostic Services',
      description: 'In-house Pathology laboratory, ECG cardiac evaluation, and Digital X-Ray imaging for swift clinical diagnosis.',
      icon: 'Microscope',
      badge: 'Pathology · ECG · X-Ray',
    },
    {
      id: 'outpatient-consultation',
      title: 'Outpatient Consultation',
      description: 'Structured specialist evaluations and comprehensive consultations across all 7 medical disciplines.',
      icon: 'UserCheck',
      badge: '7 Specialities',
    },
    {
      id: 'surgical-care',
      title: 'Surgical Care',
      description: 'Expert operative care, pre-operative planning, and modern surgical facilities across General Surgery, Neurosurgery, Orthopaedics, and ENT.',
      icon: 'HeartPulse',
      badge: 'Operative Excellence',
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
