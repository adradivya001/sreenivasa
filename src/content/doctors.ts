// ============================================================
// SREENIVASA MULTI SPECIALITY HOSPITAL — LEADERSHIP & SPECIALISTS DATA
// Verified Hospital Head / MD: Dr. J. Sreenivasa Rao (MD/CEO)
// ============================================================

export interface Doctor {
  slug: string;
  name: string;
  designation: string;
  roleBadge?: string;
  hospitalName?: string;
  qualifications?: string;
  speciality: string;
  specialitySlug: string;
  experience?: string;
  opdTimings?: string;
  phone?: string;
  focusAreas: string[];
  bio: string;
  photo?: string;
  photoAlt: string;
  appointmentLabel: string;
  isVerified: boolean;
  isLeadership?: boolean;
}

export const doctors: Doctor[] = [
  {
    slug: 'dr-j-sreenivasa-rao',
    name: 'Dr. J. Sreenivasa Rao',
    designation: 'Managing Director & CEO',
    roleBadge: 'Hospital Leadership',
    hospitalName: 'Sreenivasa Multi Speciality Hospital',
    speciality: 'Hospital Administration & Governance',
    specialitySlug: 'leadership',
    focusAreas: [
      'Hospital Care & Patient Support',
      '7 Doctor Specialities',
      'Govt. Recognized Standards',
      'Quality Patient Care',
    ],
    bio: 'Guiding Sreenivasa Multi Speciality Hospital to provide trusted, friendly, and complete medical and surgery care for all families in Anantapur.',
    photo: '/assets/doctors/doctor-specialist.png',
    photoAlt: 'Dr. J. Sreenivasa Rao - Managing Director & CEO of Sreenivasa Multi Speciality Hospital',
    appointmentLabel: 'Contact Leadership',
    isVerified: true,
    isLeadership: true,
  },
  {
    slug: 'general-medicine-specialist',
    name: 'Consultant Physician',
    designation: 'Department of General Medicine',
    qualifications: 'General Medicine Faculty',
    speciality: 'General Medicine',
    specialitySlug: 'general-medicine',
    opdTimings: 'Mon - Sat: 9:30 AM - 1:30 PM & 5:00 PM - 8:30 PM',
    focusAreas: [
      'Fever, Cough & Viral Illnesses',
      'Diabetes & BP Control',
      'Thyroid & Stomach Problems',
      'Routine Health Checkups',
    ],
    bio: 'Experienced physician delivering expert diagnosis and daily care for fever, diabetes, blood pressure, and long-term health conditions.',
    photo: '/assets/doctors/doctor-specialist.png',
    photoAlt: 'Consultant Physician - General Medicine at Sreenivasa Multi Speciality Hospital',
    appointmentLabel: 'Book Consultation',
    isVerified: true,
  },
  {
    slug: 'general-surgery-specialist',
    name: 'General & Laparoscopic Surgeon',
    designation: 'Department of General Surgery',
    qualifications: 'Surgical Operative Care',
    speciality: 'General Surgery',
    specialitySlug: 'general-surgery',
    opdTimings: 'Mon - Sat: 10:00 AM - 2:00 PM & 6:00 PM - 8:00 PM',
    focusAreas: [
      'Hernia & Appendix Surgery',
      'Gallbladder Stone Removal',
      'Piles & Fissure Treatments',
      'Wound & Abscess Care',
    ],
    bio: 'Skilled surgeon caring for hernia, appendix, gallbladder, wound repair, and emergency surgeries.',
    photo: '/assets/doctors/doctor-surgeon.png',
    photoAlt: 'Consultant General Surgeon at Sreenivasa Multi Speciality Hospital',
    appointmentLabel: 'Book Consultation',
    isVerified: true,
  },
  {
    slug: 'obstetrics-gynaecology-specialist',
    name: 'Consultant Obstetrician & Gynaecologist',
    designation: 'Department of Obstetrics & Gynaecology',
    qualifications: 'Women’s & Maternal Health',
    speciality: 'Obstetrics & Gynaecology (OBG)',
    specialitySlug: 'obstetrics-gynaecology',
    opdTimings: 'Mon - Sat: 10:00 AM - 1:00 PM & 5:30 PM - 8:30 PM',
    focusAreas: [
      'Pregnancy & Delivery Care',
      'Normal & C-Section Deliveries',
      'Period Problems & PCOD',
      'Women’s Health & Wellness',
    ],
    bio: 'Gentle and trusted care for women through pregnancy, safe deliveries, and women’s health needs.',
    photo: '/assets/doctors/doctor-obg.png',
    photoAlt: 'Consultant Gynaecologist at Sreenivasa Multi Speciality Hospital',
    appointmentLabel: 'Book Consultation',
    isVerified: true,
  },
  {
    slug: 'paediatrics-specialist',
    name: 'Consultant Paediatrician',
    designation: 'Department of Paediatrics',
    qualifications: 'Child & Neonatal Health Care',
    speciality: 'Paediatrics',
    specialitySlug: 'paediatrics',
    opdTimings: 'Mon - Sat: 9:00 AM - 1:00 PM & 5:00 PM - 8:00 PM',
    focusAreas: [
      'Baby & Child Health Checks',
      'Fever, Cold & Breathing Problems',
      'Growth & Weight Milestones',
      'Baby Nutrition & Food Tips',
    ],
    bio: 'Caring doctor for newborn babies, children, and teenagers for fever, infections, growth, and vaccinations.',
    photo: '/assets/doctors/doctor-paediatrician.png',
    photoAlt: 'Consultant Paediatrician at Sreenivasa Multi Speciality Hospital',
    appointmentLabel: 'Book Consultation',
    isVerified: true,
  },
  {
    slug: 'neurosurgery-specialist',
    name: 'Consultant Neurosurgeon',
    designation: 'Department of Neurosurgery',
    qualifications: 'Brain & Spine Surgical Care',
    speciality: 'Neurosurgery',
    specialitySlug: 'neurosurgery',
    opdTimings: 'By Prior Appointment / OPD Slots',
    focusAreas: [
      'Head Injury & Emergency Care',
      'Spine & Neck Pain Relief',
      'Nerve Weakness & Numbness',
      'Brain & Spine Checkups',
    ],
    bio: 'Specialist doctor for head injury, spine pain, neck pain, and nerve problems.',
    photo: '/assets/doctors/doctor-neuro.png',
    photoAlt: 'Consultant Neurosurgeon at Sreenivasa Multi Speciality Hospital',
    appointmentLabel: 'Book Consultation',
    isVerified: true,
  },
  {
    slug: 'orthopaedics-specialist',
    name: 'Consultant Orthopaedic Surgeon',
    designation: 'Department of Orthopaedics',
    qualifications: 'Bone, Joint & Fracture Care',
    speciality: 'Orthopaedics',
    specialitySlug: 'orthopaedics',
    opdTimings: 'Mon - Sat: 10:00 AM - 1:30 PM & 5:30 PM - 8:30 PM',
    focusAreas: [
      'Broken Bone & Fracture Setting',
      'Knee, Hip & Joint Pain',
      'Arthritis & Back Pain',
      'Recovery & Walking Support',
    ],
    bio: 'Specialist doctor for broken bones, fractures, knee and joint pain, and arthritis.',
    photo: '/assets/doctors/doctor-ortho.png',
    photoAlt: 'Consultant Orthopaedic Surgeon at Sreenivasa Multi Speciality Hospital',
    appointmentLabel: 'Book Consultation',
    isVerified: true,
  },
  {
    slug: 'ent-specialist',
    name: 'Consultant ENT Specialist',
    designation: 'Department of ENT (Otorhinolaryngology)',
    qualifications: 'Ear, Nose & Throat Care',
    speciality: 'ENT (Ear, Nose & Throat)',
    specialitySlug: 'ent',
    opdTimings: 'Mon - Sat: 10:30 AM - 2:00 PM & 6:00 PM - 8:30 PM',
    focusAreas: [
      'Ear Pain & Hearing Checks',
      'Sinus, Cold & Blocked Nose',
      'Tonsils & Throat Infection',
      'Ear Cleaning & Checkups',
    ],
    bio: 'Specialist doctor for ear pain, hearing problems, sinus, cold, and throat issues.',
    photo: '/assets/doctors/doctor-ent.png',
    photoAlt: 'Consultant ENT Specialist at Sreenivasa Multi Speciality Hospital',
    appointmentLabel: 'Book Consultation',
    isVerified: true,
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
