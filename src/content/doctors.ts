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
      'Hospital Direction & Healthcare Access',
      'Multi-Speciality Clinical Administration',
      'DME AP Quality Compliance',
      'Patient Care Oversight',
    ],
    bio: 'Leading Sreenivasa Multi Speciality Hospital in providing access to comprehensive medical and surgical care across multiple specialties.',
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
      'Adult Primary Health Care',
      'Diabetes & Hypertension Control',
      'Infectious Fevers & Viral Illnesses',
      'Chronic Disease Management',
    ],
    bio: 'Dedicated department physician delivering comprehensive diagnosis, adult inpatient care, and long-term metabolic health management.',
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
      'Hernia, Appendix & Gallbladder',
      'Day-Care Operative Procedures',
      'Trauma & Acute Abdomen Evaluation',
      'Surgical Wound & Abscess Care',
    ],
    bio: 'Specialist surgical team performing operative assessments, elective day-care surgeries, and acute emergency surgical stabilization.',
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
      'Antenatal Pregnancy Care',
      'Normal & Operative Deliveries',
      'Gynaecological Disorders & PCOD',
      'Postnatal & Maternal Health',
    ],
    bio: 'Providing holistic healthcare for women through pregnancy, delivery, fertility evaluation, and reproductive wellness.',
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
      'Infant & Child Health Monitoring',
      'Paediatric Respiratory & Infections',
      'Growth & Milestone Tracking',
      'Child Nutrition Guidance',
    ],
    bio: 'Offering gentle, patient-focused medical care for infants, children, and teenagers with acute and recurring illnesses.',
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
      'Head Injury & Neuro-Trauma Care',
      'Spine Degenerative Disc Disorders',
      'Nerve Compression Syndromes',
      'Neurological Clinical Evaluations',
    ],
    bio: 'Specializing in cranial and spinal neurological evaluations, neuro-trauma management, and surgical care for nerve and spine disorders.',
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
      'Bone Fracture & Trauma Management',
      'Joint Pain & Arthritis Treatments',
      'Spine & Musculoskeletal Pain',
      'Post-Injury Mobility Rehabilitation',
    ],
    bio: 'Experienced orthopaedic surgeon specializing in fracture realignments, degenerative joint management, and musculoskeletal care.',
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
      'Ear Infections & Hearing Issues',
      'Sinusitis & Nasal Obstructions',
      'Tonsillitis & Throat Ailments',
      'Head & Neck Clinical Assessments',
    ],
    bio: 'Providing accurate diagnostics, endoscopic evaluations, and conservative/operative ENT therapies.',
    photo: '/assets/doctors/doctor-ent.png',
    photoAlt: 'Consultant ENT Specialist at Sreenivasa Multi Speciality Hospital',
    appointmentLabel: 'Book Consultation',
    isVerified: true,
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
