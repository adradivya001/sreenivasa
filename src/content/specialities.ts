// ============================================================
// SREENIVASA MULTI SPECIALITY HOSPITAL — SPECIALITIES DATA
// 15 Recognized Clinical & Surgical Departments
// ============================================================

export interface Speciality {
  slug: string;
  name: string;
  shortName?: string;
  badge?: string;
  description: string;
  fullOverview?: string;
  icon: string;
  tags: string[];
  keyProcedures?: string[];
  doctorsList?: string[];
}

export const specialities: Speciality[] = [
  {
    slug: 'general-medicine',
    name: 'General Medicine',
    shortName: 'Gen. Medicine',
    badge: 'Adult & Family Health',
    description:
      'Diagnosis and treatment for fever, diabetes, high BP, thyroid, infections, and common everyday health problems in adults.',
    fullOverview:
      'Experienced physicians providing daily checkups and treatments for fevers, infections, diabetes, blood pressure, and long-term health control.',
    icon: 'Stethoscope',
    tags: ['Fever & Infection', 'Diabetes & BP', 'General Checkup', 'Thyroid Care', 'Family Health'],
    keyProcedures: [
      'Doctor Checkups & Health Screenings',
      'Diabetes & Blood Pressure Management',
      'Fever, Cough & Infection Treatment',
      'Long-Term Health & Diet Advice',
    ],
    doctorsList: ['Dr. M. Roshan Sab (M.D., D.A.)', 'Dr. G.S. Vikram (M.B. (Gen))'],
  },
  {
    slug: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology (OBG)',
    shortName: 'Women & Maternity',
    badge: "Women's Health & Maternity",
    description:
      'Complete care for women: pregnancy checkups, safe deliveries, PCOS, period problems, and female wellness.',
    fullOverview:
      'Compassionate health support for women of all ages — from teenage health and pregnancy monitoring to safe delivery and menopause care.',
    icon: 'HeartHandshake',
    tags: ["Women's Health", 'Pregnancy Checkups', 'Safe Deliveries', 'Period Problems', 'PCOS Care'],
    keyProcedures: [
      'Pregnancy & Baby Growth Checkups',
      'Normal & Caesarean (C-Section) Deliveries',
      'Irregular Periods & PCOS Treatment',
      'Women Wellness & Health Screenings',
    ],
    doctorsList: ['Dr. P. Bharathi (M.B.B.S., D.G.O.)', 'Dr. G. Sireesha (M.B.B.S., D.G.O.)'],
  },
  {
    slug: 'cardiology',
    name: 'Cardiology (Heart Care)',
    shortName: 'Heart Care',
    badge: 'Cardiac Health',
    description:
      'Care for high blood pressure, chest pain, palpitations, cholesterol control, and heart wellness.',
    fullOverview:
      'Specialist cardiac evaluations, ECG heart checks, hypertension management, and preventive heart care.',
    icon: 'Activity',
    tags: ['Heart Checkup', 'High Blood Pressure', 'Chest Discomfort', 'ECG Testing', 'Heart Wellness'],
    keyProcedures: [
      'Heart Checkups & ECG Analysis',
      'Blood Pressure & Cholesterol Control',
      'Heart Risk Evaluation',
      'Cardiac Diet & Lifestyle Guidance',
    ],
    doctorsList: ['Dr. M. Suresh Kumar Reddy (M.D., D.C.)'],
  },
  {
    slug: 'pulmonology',
    name: 'Pulmonology (Chest & Lungs)',
    shortName: 'Chest & Lungs',
    badge: 'Breathing & Lung Care',
    description:
      'Care for asthma, chronic cough, breathing difficulty, bronchitis, chest allergies, and lung infections.',
    fullOverview:
      'Experienced pulmonologists helping patients breathe easy with treatments for cough, wheezing, asthma, and pneumonia.',
    icon: 'Activity',
    tags: ['Asthma Care', 'Chronic Cough', 'Chest Allergy', 'Breathing Issues', 'Lung Health'],
    keyProcedures: [
      'Asthma & Allergy Nebulization',
      'Chest X-Ray & Lung Checkups',
      'Chronic Cough & Bronchitis Treatment',
      'Breathing Therapy & Support',
    ],
    doctorsList: ['Dr. P. Sudheendra (M.B.B.S., M.D.)', 'Dr. Soujanya Laxmi (M.D.)'],
  },
  {
    slug: 'gastroenterology',
    name: 'Gastroenterology (Stomach & Liver)',
    shortName: 'Stomach & Liver',
    badge: 'Digestive & Liver Care',
    description:
      'Treatment for severe acidity, stomach gas, ulcers, liver diseases, jaundice, and digestive disorders.',
    fullOverview:
      'Medical and surgical solutions for digestive tract, liver, stomach, and bowel conditions.',
    icon: 'Stethoscope',
    tags: ['Acidity & Gas', 'Stomach Pain', 'Liver Care', 'Jaundice', 'Ulcer Relief'],
    keyProcedures: [
      'Stomach Pain & Acidity Relief',
      'Liver & Jaundice Treatments',
      'Digestive Health Checkups',
      'Diet Plans for Gastro Health',
    ],
    doctorsList: ['Dr. C. Rajneesh Reddy (M.D., D.M.)', 'Dr. Govardhan Reddy (M.S., FRCS)'],
  },
  {
    slug: 'general-surgery',
    name: 'General & Laparoscopic Surgery',
    shortName: 'Gen. Surgery',
    badge: 'Surgical & Wound Care',
    description:
      'Safe keyhole and open surgeries for hernia, appendix, gallbladder stones, piles, cysts, and wounds.',
    fullOverview:
      'Our general surgery team performs clean, safe minor and major surgeries with fast recovery and caring hospital stays.',
    icon: 'Activity',
    tags: ['Hernia & Appendix', 'Day Care Surgery', 'Wound Care', 'Piles & Cysts', 'Minor Procedures'],
    keyProcedures: [
      'Hernia, Appendix & Hydrocele Surgery',
      'Gallbladder Stone Removal',
      'Cyst, Lump & Swelling Removal',
      'Emergency Surgical Help',
    ],
    doctorsList: ['Dr. K.V. Madhusudhan (M.S.)', 'Dr. Govardhan Reddy (M.S., FRCS)'],
  },
  {
    slug: 'orthopaedics',
    name: 'Ortho & Joint Replacement Surgery',
    shortName: 'Bone & Joint',
    badge: 'Bone & Joint Care',
    description:
      'Treatment for bone fractures, knee & hip replacement, arthritis, joint pain, sprains, and spine care.',
    fullOverview:
      'Our bone and joint doctors help you move without pain — treating fractures, joint stiffness, knee arthritis, and sports injuries.',
    icon: 'Bone',
    tags: ['Bone Fractures', 'Knee Replacement', 'Joint Pain', 'Arthritis Care', 'Plaster & Casts'],
    keyProcedures: [
      'Bone Fracture Setting & Plaster Casts',
      'Knee & Hip Joint Replacement',
      'Knee, Shoulder & Joint Pain Relief',
      'Back & Neck Pain Management',
    ],
    doctorsList: ['Dr. K. Satish (M.S., FRCS, DNB)', 'Dr. Srikanth Reddy (M.B.B.S., M.S.)'],
  },
  {
    slug: 'paediatric-surgery',
    name: 'Paediatric Surgery (Child Surgery)',
    shortName: 'Child Surgery',
    badge: 'Newborn & Child Surgery',
    description:
      'Specialized gentle surgeries for newborn babies, infants, and children for birth conditions, hernia, and swelling.',
    fullOverview:
      'Super-specialist surgical care tailored specifically for children with maximum comfort, gentle technique, and loving support.',
    icon: 'Baby',
    tags: ['Child Surgery', 'Baby Hernia', 'Birth Conditions', 'Child Swellings', 'Gentle Care'],
    keyProcedures: [
      'Newborn & Infant Surgeries',
      'Child Hernia & Hydrocele Repair',
      'Tongue Tie & Minor Procedures',
      'Childhood Surgical Consultations',
    ],
    doctorsList: ['Dr. S. Hari Prasad (M.B.B.S., M.S., M.Ch)'],
  },
  {
    slug: 'maxillofacial-surgery',
    name: 'Maxillofacial Surgery (Face & Jaw)',
    shortName: 'Face & Jaw',
    badge: 'Facial & Jaw Surgery',
    description:
      'Surgeries for face and jaw fractures, wisdom teeth, jaw misalignment, mouth swellings, and face injuries.',
    fullOverview:
      'Skilled facial surgeons providing reconstructive and corrective care for face injuries, jaw problems, and complex oral conditions.',
    icon: 'UserCheck',
    tags: ['Jaw Fractures', 'Face Injuries', 'Wisdom Teeth', 'Jaw Pain', 'Facial Care'],
    keyProcedures: [
      'Face & Jaw Fracture Repair',
      'Impacted Tooth & Jaw Surgeries',
      'Mouth Lump & Cyst Removal',
      'Facial Trauma Management',
    ],
    doctorsList: ['Dr. Phanidra Guptha (BDS, MDS)', 'Dr. Mahesh A (M.D.S.)'],
  },
  {
    slug: 'ent',
    name: 'ENT (Ear, Nose & Throat)',
    shortName: 'Ear, Nose & Throat',
    badge: 'Ear, Nose & Throat',
    description:
      'Care for ear pain, hearing problems, runny nose, sinus pressure, throat infections, and tonsillitis.',
    fullOverview:
      'Quick relief for ear discharge, blocked nose, allergy, throat pain, snoring, tonsil infections, and voice issues.',
    icon: 'Ear',
    tags: ['Ear Pain', 'Sinus & Cold', 'Throat Infection', 'Tonsils', 'Hearing Check'],
    keyProcedures: [
      'Ear Cleaning & Hearing Checks',
      'Blocked Nose & Sinus Treatment',
      'Throat Infection & Tonsil Care',
      'Foreign Object Removal from Ear/Nose',
    ],
    doctorsList: ['Dr. A. Rajesh (M.S.)', 'Dr. B. Hari Prasad (M.S.)'],
  },
  {
    slug: 'neurology',
    name: 'Neurology (Neuro Physician)',
    shortName: 'Neuro Physician',
    badge: 'Brain & Nerve Care',
    description:
      'Care for severe headaches, migraines, stroke, paralysis, seizures, tremors, memory issues, and nerve numbness.',
    fullOverview:
      'Super-specialist neurological treatment for stroke, epilepsy, neuropathies, Parkinson’s disease, and nerve disorders.',
    icon: 'Brain',
    tags: ['Headache & Migraine', 'Stroke & Paralysis', 'Fits & Seizures', 'Nerve Numbness', 'Brain Care'],
    keyProcedures: [
      'Headache & Migraine Relief',
      'Stroke Treatment & Recovery',
      'Nerve Pain & Neuropathy Care',
      'Fits & Seizure Management',
    ],
    doctorsList: ['Dr. Krishna Kanth (M.D., D.M.)', 'Dr. M. Venkataramana (M.D., D.M.)'],
  },
  {
    slug: 'plastic-surgery',
    name: 'Plastic Surgery',
    shortName: 'Plastic Surgery',
    badge: 'Reconstructive & Skin',
    description:
      'Care for burn injuries, deep wound scars, skin grafting, hand trauma, and reconstructive cosmetic needs.',
    fullOverview:
      'Super-specialist reconstructive surgery restoring skin, form, and function following injuries, burns, or accidents.',
    icon: 'Activity',
    tags: ['Burn Wound Care', 'Skin Grafting', 'Scar Removal', 'Hand Injuries', 'Reconstruction'],
    keyProcedures: [
      'Burn Injury Healing & Care',
      'Skin Grafting & Flap Procedures',
      'Hand Injury & Cut Tendon Repair',
      'Scar & Wound Revision',
    ],
    doctorsList: ['Dr. P. Rajakullayyappa (M.S., M.Ch)'],
  },
  {
    slug: 'anaesthesia-icu',
    name: 'Anaesthesia & Intensive Care',
    shortName: 'Anaesthesia & ICU',
    badge: '24/7 Critical & ICU Care',
    description:
      'Round-the-clock intensive care unit (ICU), safe surgery anaesthesia, emergency life support, and post-op care.',
    fullOverview:
      'Dedicated critical care team keeping patients safe, monitored, and pain-free through complex surgeries and ICU admissions.',
    icon: 'ShieldCheck',
    tags: ['24/7 ICU Care', 'Safe Anaesthesia', 'Pain Management', 'Emergency Care', 'Patient Monitoring'],
    keyProcedures: [
      'Pre-Surgery Fitness Checks',
      'Pain-Free Surgical Anaesthesia',
      '24/7 Intensive Care Monitoring',
      'Emergency Airway & Life Support',
    ],
    doctorsList: ['Dr. G. Naveen Kumar (M.B.B.S., D.A.)', 'Dr. M. Vinay (M.B.B.S., D.A.)'],
  },
  {
    slug: 'urology',
    name: 'Urology (Kidney & Urine Care)',
    shortName: 'Urology',
    badge: 'Kidney & Bladder Care',
    description:
      'Laser treatment for kidney stones, prostate enlargement, burning urination, bladder problems, and men’s health.',
    fullOverview:
      'Super-specialist urology care providing modern minimally invasive laser procedures for kidney stones and urinary tract conditions.',
    icon: 'Stethoscope',
    tags: ['Kidney Stones', 'Laser Stone Removal', 'Prostate Care', 'Urinary Infection', 'Bladder Care'],
    keyProcedures: [
      'Kidney Stone Laser Treatments',
      'Prostate & Urine Flow Care',
      'Urinary Infection Treatment',
      'Urology Health Screenings',
    ],
    doctorsList: ['Dr. Y. Harinath Reddy (M.S., M.Ch)', 'Dr. P. Satish Kumar (M.S., DNB)'],
  },
  {
    slug: 'neurosurgery',
    name: 'Neurosurgery (Brain & Spine)',
    shortName: 'Brain & Spine Surgery',
    badge: 'Brain & Spine Surgery',
    description:
      'Surgeries for head injuries, disc slip, severe back & neck pain, spine fractures, and nerve compression.',
    fullOverview:
      'Specialist surgical management for head injuries, disc herniation, spine trauma, and spinal cord decompression.',
    icon: 'Brain',
    tags: ['Head Injuries', 'Spine Surgeries', 'Disc Slip Care', 'Neck & Back Pain', 'Emergency Trauma'],
    keyProcedures: [
      'Head Injury & Emergency Care',
      'Spine Disc Surgery & Decompression',
      'Nerve Release Procedures',
      'Post-Trauma Spine Recovery',
    ],
    doctorsList: ['Consultant Neurosurgeon (On-Duty Team)'],
  },
];

export function getSpecialityBySlug(slug: string): Speciality | undefined {
  return specialities.find((s) => s.slug === slug);
}
