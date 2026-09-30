// ============================================================
// SREENIVASA MULTI SPECIALITY HOSPITAL — SPECIALITIES DATA
// Andhra Pradesh Directorate of Medical Education (DME AP) Recognized
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
}

export const specialities: Speciality[] = [
  {
    slug: 'general-medicine',
    name: 'General Medicine',
    shortName: 'Gen. Medicine',
    badge: 'Adult & Primary Care',
    description:
      'Comprehensive diagnosis and treatment for a wide range of adult medical conditions, chronic illnesses, diabetes, hypertension, and infectious diseases.',
    fullOverview:
      'The Department of General Medicine at Sreenivasa Multi Speciality Hospital delivers comprehensive outpatient and inpatient clinical care for acute and chronic adult health issues. Our physicians offer meticulous diagnostic workups, preventive health counseling, and personalized management plans.',
    icon: 'Stethoscope',
    tags: ['Adult Health', 'Physician Care', 'Chronic Diseases', 'Diabetes & Hypertension', 'Infectious Fevers'],
    keyProcedures: [
      'Adult Primary Care & Health Checks',
      'Hypertension & Diabetic Care Management',
      'Infectious Fevers & Seasonal Illness Management',
      'Geriatric & Long-Term Preventive Health',
    ],
  },
  {
    slug: 'general-surgery',
    name: 'General Surgery',
    shortName: 'Gen. Surgery',
    badge: 'Operative & Day Care',
    description:
      'Surgical evaluation and treatment for various conditions requiring operative care, including abdominal, hernia, gastrointestinal, and trauma interventions.',
    fullOverview:
      'Our General Surgery department provides comprehensive preoperative evaluations, surgical procedures, and structured postoperative recovery care with state-of-the-art operative sterile facilities.',
    icon: 'Activity',
    tags: ['Operative Care', 'Hernia & Appendix', 'Day Care Surgery', 'Trauma & Wound Care', 'Post-Op Care'],
    keyProcedures: [
      'Comprehensive Surgical Assessment',
      'Hernia, Hydrocele & Appendix Surgeries',
      'Excision of Cysts, Lumps & Soft Tissue Lesions',
      'Acute Surgical Emergencies & Trauma Care',
    ],
  },
  {
    slug: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology (OBG)',
    shortName: 'OBG',
    badge: "Women's & Maternal Health",
    description:
      "Women's health, pregnancy, antenatal management, safe deliveries, and comprehensive medical care for reproductive wellness.",
    fullOverview:
      'The OBG department provides compassionate care across every stage of a woman’s life — from adolescent health and pre-conception guidance to prenatal monitoring, labor care, and menopause management.',
    icon: 'HeartHandshake',
    tags: ["Women's Health", 'Antenatal Care', 'Maternal Health', 'Gynaecological Care', 'Safe Deliveries'],
    keyProcedures: [
      'Antenatal & High-Risk Pregnancy Monitoring',
      'Normal & Caesarean Operative Deliveries',
      'Routine Gynaecological Screenings & Pap Smear',
      'PCOS, Menstrual Disorders & Infertility Counseling',
    ],
  },
  {
    slug: 'paediatrics',
    name: 'Paediatrics',
    shortName: 'Paediatrics',
    badge: 'Child & Adolescent Health',
    description:
      'Medical care focused on infants, children, and adolescents, covering acute illnesses, growth tracking, and developmental health.',
    fullOverview:
      'Our Paediatric unit provides child-friendly medical examinations, gentle diagnosis, growth monitoring, and clinical treatment for common and complex childhood health conditions.',
    icon: 'Baby',
    tags: ['Child Health', 'Infant Care', 'Paediatric OPD', 'Growth & Milestones', 'Childhood Illnesses'],
    keyProcedures: [
      'Infant & Child Outpatient Consultations',
      'Pediatric Respiratory & Fever Management',
      'Growth & Developmental Milestone Evaluations',
      'Childhood Nutrition & Immunization Guidance',
    ],
  },
  {
    slug: 'neurosurgery',
    name: 'Neurosurgery',
    shortName: 'Neurosurgery',
    badge: 'Brain & Spine Care',
    description:
      'Specialized surgical care involving the brain, spine, and nervous system, with precision clinical assessment and neuro-trauma stabilization.',
    fullOverview:
      'The Neurosurgery specialty delivers evaluation and operative management for neurological disorders, head injuries, spinal column conditions, and nerve compression syndromes.',
    icon: 'Brain',
    tags: ['Brain Surgery', 'Spine Care', 'Neuro-trauma', 'Head Injury', 'Nerve Disorders'],
    keyProcedures: [
      'Clinical Neuro-trauma & Head Injury Management',
      'Spine Degenerative & Disc Disorder Evaluation',
      'Peripheral Nerve Compression Treatment',
      'Pre- & Post-Neurosurgical Rehabilitation',
    ],
  },
  {
    slug: 'orthopaedics',
    name: 'Orthopaedics',
    shortName: 'Orthopaedics',
    badge: 'Bone, Joint & Trauma Care',
    description:
      'Diagnosis and treatment of bone, joint, muscle, ligament, and musculoskeletal conditions, including fractures, arthritis, and mobility issues.',
    fullOverview:
      'Our Orthopaedics department specializes in restoring movement and relieving pain caused by skeletal injuries, sports trauma, osteoarthritis, and joint degeneration.',
    icon: 'Bone',
    tags: ['Bone & Joint', 'Fracture Clinic', 'Arthritis Care', 'Joint Pain', 'Trauma Management'],
    keyProcedures: [
      'Fracture & Dislocation Realignment / Plaster Casts',
      'Osteoarthritis & Chronic Knee / Joint Care',
      'Musculoskeletal Trauma & Soft Tissue Management',
      'Spine & Back Pain Non-Surgical Therapies',
    ],
  },
  {
    slug: 'ent',
    name: 'ENT (Ear, Nose & Throat)',
    shortName: 'ENT',
    badge: 'Otorhinolaryngology',
    description:
      'Care for conditions involving the ear, nose, and throat, including sinus issues, hearing difficulties, tonsillitis, and vocal tract disorders.',
    fullOverview:
      'Our ENT department provides clinical diagnosis, endoscopies, and operative interventions for acute and chronic ear, nasal cavity, sinus, throat, and neck conditions.',
    icon: 'Ear',
    tags: ['Ear Infections', 'Sinusitis & Allergy', 'Tonsil & Throat', 'Hearing Assessment', 'Nasal Polyps'],
    keyProcedures: [
      'Ear Discharge, Tinnitus & Hearing Assessments',
      'Nasal Obstruction, Deviated Septum & Sinusitis Treatment',
      'Tonsillitis, Pharyngitis & Vocal Care',
      'Foreign Body Removal & Minor ENT Procedures',
    ],
  },
];

export function getSpecialityBySlug(slug: string): Speciality | undefined {
  return specialities.find((s) => s.slug === slug);
}
