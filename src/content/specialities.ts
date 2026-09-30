// ============================================================
// SREENIVASA MULTI SPECIALITY HOSPITAL — SPECIALITIES DATA
// AP Directorate of Medical Education (DME AP) Recognized
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
    badge: 'Adult & Family Health',
    description:
      'Diagnosis and treatment for fever, diabetes, high BP, thyroid, infections, and common everyday health problems in adults.',
    fullOverview:
      'Our general physicians provide experienced checkups and treatments for fevers, infections, diabetes, blood pressure, and long-term health management.',
    icon: 'Stethoscope',
    tags: ['Fever & Infection', 'Diabetes & BP', 'General Checkup', 'Thyroid Care', 'Family Health'],
    keyProcedures: [
      'Doctor Checkups & Health Screenings',
      'Diabetes & Blood Pressure Management',
      'Fever, Cough & Infection Treatment',
      'Long-Term Health & Diet Advice',
    ],
  },
  {
    slug: 'general-surgery',
    name: 'General Surgery',
    shortName: 'Gen. Surgery',
    badge: 'Surgical & Wound Care',
    description:
      'Safe and modern surgeries for hernia, appendix, gallbladder, piles, cysts, wounds, and acute pain.',
    fullOverview:
      'Our general surgery team performs clean, safe minor and major surgeries with fast recovery and dedicated hospital care.',
    icon: 'Activity',
    tags: ['Hernia & Appendix', 'Day Care Surgery', 'Wound Care', 'Piles & Cysts', 'Minor Procedures'],
    keyProcedures: [
      'Hernia, Appendix & Hydrocele Surgery',
      'Cyst, Lump & Swelling Removal',
      'Wound Cleaning & Suture Care',
      'Emergency Surgical Help',
    ],
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
  },
  {
    slug: 'paediatrics',
    name: 'Paediatrics',
    shortName: 'Child Care',
    badge: 'Child & Baby Health',
    description:
      'Gentle care for babies and children: fever, cough, stomach pain, vaccinations, and healthy growth checks.',
    fullOverview:
      'Friendly doctor checkups for infants and children to treat childhood illnesses, monitor height/weight, and advise on vaccines and nutrition.',
    icon: 'Baby',
    tags: ['Baby Health', 'Child Doctor', 'Vaccinations', 'Growth Check', 'Childhood Fevers'],
    keyProcedures: [
      'Newborn & Child Doctor Checkups',
      'Fever, Cold & Breathing Care',
      'Child Height & Weight Growth Tracking',
      'Vaccines & Healthy Food Advice',
    ],
  },
  {
    slug: 'neurosurgery',
    name: 'Neurosurgery',
    shortName: 'Brain & Spine',
    badge: 'Brain & Spine Care',
    description:
      'Care for head injuries, chronic headaches, spine problems, back pain, sciatica, and nerve issues.',
    fullOverview:
      'Specialist evaluation and treatments for spine issues, disc problems, nerve pain, head injuries, and neurological conditions.',
    icon: 'Brain',
    tags: ['Headache & Dizziness', 'Back & Spine Pain', 'Nerve Problems', 'Head Injuries', 'Sciatica Care'],
    keyProcedures: [
      'Head Injury & Trauma Checkups',
      'Back Pain & Disc Slip Treatment',
      'Nerve Pain & Sciatica Care',
      'Pre- & Post-Surgery Recovery Support',
    ],
  },
  {
    slug: 'orthopaedics',
    name: 'Orthopaedics',
    shortName: 'Bone & Joint',
    badge: 'Bone & Joint Care',
    description:
      'Treatment for bone fractures, knee pain, arthritis, shoulder pain, sprains, and back pain.',
    fullOverview:
      'Our bone and joint doctors help you move without pain — treating bone fractures, joint stiffness, knee arthritis, and sports injuries.',
    icon: 'Bone',
    tags: ['Bone Fractures', 'Knee & Joint Pain', 'Plaster & Casts', 'Arthritis Care', 'Sprains & Strains'],
    keyProcedures: [
      'Bone Fracture Setting & Plaster Casts',
      'Knee, Shoulder & Joint Pain Relief',
      'Muscle Sprains & Ligament Care',
      'Back & Neck Pain Management',
    ],
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
  },
];

export function getSpecialityBySlug(slug: string): Speciality | undefined {
  return specialities.find((s) => s.slug === slug);
}
