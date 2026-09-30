// ============================================================
// SREENIVASA MULTI SPECIALITY HOSPITAL — FAQ DATA
// ============================================================

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'specialities' | 'diagnostics' | 'appointments';
}

export const faqs: FAQItem[] = [
  {
    category: 'general',
    question: 'Where is Sreenivasa Multi Speciality Hospital located in Anantapur?',
    answer:
      'The hospital is located at #28-271, Pranathi Complex, Near Iron Bridge, Subash Road (MDR77, Old Town), Anantapur, Andhra Pradesh – 515001. It is easily accessible from key points in the city.',
  },
  {
    category: 'general',
    question: 'Is Sreenivasa Multi Speciality Hospital recognized by the government / DME?',
    answer:
      'Yes, Sreenivasa Multi Speciality Hospital is officially listed and recognized by the Andhra Pradesh Directorate of Medical Education (DME AP), with recognition currently recorded through March 6, 2028.',
  },
  {
    category: 'specialities',
    question: 'What medical specialities are available at Sreenivasa Hospital?',
    answer:
      'The hospital offers 7 key recognized departments: General Medicine, General Surgery, Obstetrics & Gynaecology (OBG), Paediatrics, Neurosurgery, Orthopaedics, and ENT (Ear, Nose & Throat).',
  },
  {
    category: 'diagnostics',
    question: 'What diagnostic services are available on-site?',
    answer:
      'The hospital provides in-house Pathology (laboratory testing & clinical investigations), ECG (electrocardiogram cardiac assessment), and high-resolution Digital X-Ray imaging.',
  },
  {
    category: 'appointments',
    question: 'How can I book an appointment or contact the hospital?',
    answer:
      'You can easily schedule a consultation online via the booking form on this website, call the hospital directly at 08554-272828 or +91 98498 98698, or connect with our helpdesk on WhatsApp.',
  },
  {
    category: 'general',
    question: 'What are the outpatient (OPD) consultation hours?',
    answer:
      'Outpatient consultations run Monday through Saturday from 9:00 AM to 9:00 PM, and on Sundays from 9:00 AM to 2:00 PM. Specific specialist timings may vary by department.',
  },
];
