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
    question: 'Where is Sreenivasa Hospital located in Anantapur?',
    answer:
      'We are located at Pranathi Complex, Near Iron Bridge, Subash Road, Old Town, Anantapur (AP – 515001). It is easily accessible from all parts of the city.',
  },
  {
    category: 'general',
    question: 'Is Sreenivasa Hospital recognized by the AP government?',
    answer:
      'Yes, Sreenivasa Multi Speciality Hospital is officially recognized by the Andhra Pradesh Directorate of Medical Education (DME AP) valid through March 2028.',
  },
  {
    category: 'specialities',
    question: 'What doctor specialities are available at the hospital?',
    answer:
      'We have 15 key departments: General Medicine, Obst & Gynaecology, Cardiology (Heart), Pulmonology (Lungs), Gastroenterology, General & Laparoscopic Surgery, Orthopaedics & Joint Replacement, Paediatric Surgery, Maxillofacial Surgery, ENT, Neurology, Plastic Surgery, Anaesthesia & ICU, Urology, and Neurosurgery.',
  },
  {
    category: 'diagnostics',
    question: 'What lab tests and scans are available in the hospital?',
    answer:
      'We have an in-house blood testing lab, ECG heart check, and digital X-ray scans with fast and accurate reports.',
  },
  {
    category: 'appointments',
    question: 'How do I book a doctor visit or contact the hospital?',
    answer:
      'You can book online directly using the appointment form on this website, call us at 08554-272828 or +91 98498 98698, or send a message on WhatsApp.',
  },
  {
    category: 'general',
    question: 'What are the doctor checkup (OPD) timings?',
    answer:
      'Doctor checkups are available Monday to Saturday from 9:00 AM to 9:00 PM, and on Sundays from 9:00 AM to 2:00 PM. Emergency medical care is open 24/7.',
  },
];
