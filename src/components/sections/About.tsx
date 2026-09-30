import { motion } from 'framer-motion';
import {
  Building2, Stethoscope, CheckCircle2,
  Baby, ShieldCheck, Activity, Award, HeartPulse, Hospital, FileText
} from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

const checkmarks = [
  'Recognized by AP Directorate of Medical Education (DME AP)',
  'Govt. Recognition Valid Till: 06 March 2028',
  '15 Doctor Speciality Departments',
  '20+ Board-Listed Specialist Doctors',
  'In-House Blood Test Lab, ECG & Digital X-Ray',
  'Clean Operation Rooms & Inpatient Beds',
];

const pillars = [
  { icon: Award, label: 'Govt. Recognized', desc: 'Officially recognized by AP Directorate of Medical Education' },
  { icon: Stethoscope, label: '15 Specialities', desc: '20+ experienced doctors for checkups and surgery' },
  { icon: Activity, label: 'Surgery & Emergency', desc: 'Safe surgeries across general, ortho, neuro, paediatric & ENT' },
  { icon: Hospital, label: 'Modern Hospital', desc: 'Blood testing lab, doctor rooms, and recovery beds' },
];

export function About() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      ref={ref}
      className="section"
      aria-labelledby="about-heading"
      style={{
        background: '#ECFEFF',
        padding: 'clamp(3.5rem, 6vw, 6rem) 0',
        borderBottom: '1px solid #CFFAFE',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'center',
        }}>
          {/* Left Column: Hospital History & Institutional Overview */}
          <motion.div
            style={{ gridColumn: 'span 7' }}
            initial={reducedMotion ? false : { opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '5px 12px', borderRadius: '100px', background: '#ECFEFF',
              border: '1px solid #CFFAFE', color: '#0E7490', fontSize: '0.78rem',
              fontWeight: 750, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem'
            }}>
              <Building2 size={14} color="#0E7490" /> ABOUT OUR HOSPITAL
            </div>

            <h2 id="about-heading" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.85rem)', fontWeight: 850,
              lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A', marginBottom: '1.25rem',
            }}>
              Trusted Healthcare Institution,{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Govt. Recognized Care.
              </span>
            </h2>

            <p style={{ fontSize: '1.025rem', color: '#475569', lineHeight: 1.75, marginBottom: '1rem' }}>
              <strong>Sreenivasa Multi Speciality Hospital</strong> was established to provide caring, high-quality, and accessible medical care to families in Anantapur. Located at <strong>Pranathi Complex near Iron Bridge on Subash Road</strong>, our hospital brings 20+ specialist doctors, surgeons, and diagnostic lab testing all under one roof.
            </p>

            <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              Our hospital is officially recognized by the <strong>Andhra Pradesh Directorate of Medical Education (DME AP)</strong> valid through <strong>March 6, 2028</strong>. We feature 15 recognized departments including General Medicine, Gynaecology & Maternity, Cardiology, Pulmonology, Gastroenterology, General & Laparoscopic Surgery, Orthopaedics & Joint Replacement, Paediatric Surgery, Maxillofacial Surgery, ENT, Neurology, Plastic Surgery, Anaesthesia & ICU, Urology, and Neurosurgery.
            </p>

            {/* Checkmarks Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 10,
              marginBottom: '2rem',
              padding: '16px',
              borderRadius: '16px',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
            }}>
              {checkmarks.map((h) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={16} color="#0E7490" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 650, color: '#1E293B' }}>{h}</span>
                </div>
              ))}
            </div>

            {/* Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
              {pillars.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: EASE }}
                  style={{
                    padding: '14px 16px', borderRadius: 14,
                    background: 'white', border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: 8, background: '#ECFEFF',
                      border: '1px solid #CFFAFE', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', flexShrink: 0
                    }}>
                      <Icon size={16} color="#0E7490" />
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 750, color: '#0F172A' }}>{label}</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.45, margin: 0 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Key Hospital Details Showcase */}
          <motion.div
            style={{ gridColumn: 'span 5' }}
            initial={reducedMotion ? false : { opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              padding: '28px',
              boxShadow: '0 12px 36px rgba(15, 23, 42, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              {/* Recognition Stamp */}
              <div style={{
                background: 'linear-gradient(135deg, #0E7490 0%, #0369A1 100%)',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '20px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Award size={20} color="#FACC15" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 750, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Government Recognized
                  </span>
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px' }}>
                  AP Directorate of Medical Education
                </div>
                <div style={{ fontSize: '0.825rem', opacity: 0.9, lineHeight: 1.4 }}>
                  Recognized Multi-Speciality Hospital · Valid Till: <strong>06 Mar 2028</strong>
                </div>
              </div>

              {/* Campus Infrastructure Overview */}
              <div style={{
                background: '#F8FAFC',
                borderRadius: '16px',
                padding: '18px',
                border: '1px solid #E2E8F0',
              }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 750, color: '#64748B', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Hospital Location
                </div>
                <div style={{ fontSize: '0.925rem', fontWeight: 750, color: '#0F172A', marginBottom: '4px' }}>
                  Pranathi Complex, Near Iron Bridge
                </div>
                <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                  #28-271, Subash Road, Old Town (MDR77)<br />
                  Anantapur, Andhra Pradesh – 515001
                </div>
              </div>

              {/* Stats highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                <div style={{ background: '#ECFEFF', padding: '14px', borderRadius: '12px', border: '1px solid #CFFAFE' }}>
                  <div style={{ fontSize: '1.35rem', fontWeight: 850, color: '#0E7490' }}>15 Specialities</div>
                  <div style={{ fontSize: '0.75rem', color: '#0369A1', fontWeight: 600 }}>20+ Doctors</div>
                </div>
                <div style={{ background: '#F0FDF4', padding: '14px', borderRadius: '12px', border: '1px solid #DCFCE7' }}>
                  <div style={{ fontSize: '1.35rem', fontWeight: 850, color: '#059669' }}>3 Lab & Scans</div>
                  <div style={{ fontSize: '0.75rem', color: '#047857', fontWeight: 600 }}>Blood Test, ECG, X-Ray</div>
                </div>
              </div>

              {/* Action */}
              <a
                href="#specialities"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px',
                  borderRadius: '12px',
                  background: '#0F172A',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                View 15 Specialities →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
