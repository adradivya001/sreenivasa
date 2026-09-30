import { motion } from 'framer-motion';
import {
  FlaskConical, Activity, Scan, ShieldAlert, UserCheck,
  HeartPulse, ArrowRight, CheckCircle2, Clock, FileCheck
} from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const diagnosticServices = [
  {
    id: 'pathology',
    title: 'Pathology & Laboratory Investigations',
    desc: 'Clinical biochemistry, hematology, routine urine & blood testing, infection markers, and essential diagnostic investigations.',
    badge: 'Clinical Laboratory',
    icon: FlaskConical,
    color: '#0E7490',
    bg: '#ECFEFF',
    border: '#CFFAFE',
    features: ['Routine & Comprehensive Blood Tests', 'Lipid, Liver & Kidney Function Profiles', 'Infectious Disease & Fever Panels', 'Rapid Test Report Turnaround'],
  },
  {
    id: 'ecg',
    title: 'ECG (Electrocardiogram)',
    desc: 'Non-invasive electrocardiogram recording for accurate cardiac rhythm evaluation, arrhythmia screening, and pre-operative cardiac assessment.',
    badge: 'Cardiac Assessment',
    icon: Activity,
    color: '#E11D48',
    bg: '#FFF1F2',
    border: '#FFE4E6',
    features: ['12-Lead Diagnostic ECG Recording', 'Immediate Rhythm Analysis', 'Pre-Surgical Cardiac Screening', 'Cardiologist Consultation Assistance'],
  },
  {
    id: 'xray',
    title: 'Digital X-Ray Imaging',
    desc: 'High-clarity digital radiography for evaluating bone fractures, joint trauma, chest infections, spine conditions, and skeletal alignment.',
    badge: 'Digital Imaging',
    icon: Scan,
    color: '#0284C7',
    bg: '#F0F9FF',
    border: '#E0F2FE',
    features: ['High-Resolution Digital Radiography', 'Orthopaedic & Bone Fracture Imaging', 'Chest & Pulmonary Diagnostic Scans', 'Low-Dose Radiation Safety Protocols'],
  },
];

const healthcareServices = [
  {
    title: 'Emergency Care',
    desc: 'Immediate medical attention and prompt clinical evaluation for urgent healthcare needs and medical emergencies.',
    icon: ShieldAlert,
    badge: 'Prompt Attention',
  },
  {
    title: 'Diagnostic Services',
    desc: 'In-house Pathology, ECG, and Digital X-Ray services for fast and accurate clinical results.',
    icon: FlaskConical,
    badge: 'In-House Testing',
  },
  {
    title: 'Outpatient Consultation',
    desc: 'Comprehensive OPD evaluation across 7 core medical and surgical specialties.',
    icon: UserCheck,
    badge: '7 Specialities',
  },
  {
    title: 'Surgical Care',
    desc: 'Surgical evaluation and operative treatment through the hospital’s dedicated surgical specialties.',
    icon: HeartPulse,
    badge: 'Operative Support',
  },
];

export function DiagnosticsSection() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      ref={ref}
      className="section"
      aria-labelledby="services-heading"
      style={{
        background: '#ECFEFF',
        padding: 'clamp(3.5rem, 6vw, 6rem) 0',
        borderBottom: '1px solid #CFFAFE',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>

        {/* Section Heading */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '5px 14px', borderRadius: '100px', background: '#ECFEFF',
            border: '1px solid #CFFAFE', color: '#0E7490', fontSize: '0.78rem',
            fontWeight: 750, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem'
          }}>
            <Activity size={14} color="#0E7490" /> HEALTHCARE & DIAGNOSTIC SERVICES
          </div>
          <h2
            id="services-heading"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 850,
              lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A',
              maxWidth: 760, margin: '0 auto',
            }}
          >
            Diagnostic & Healthcare{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Support Services
            </span>
          </h2>
          <p style={{
            marginTop: '12px', color: '#64748B', fontSize: '1.025rem',
            maxWidth: 680, margin: '12px auto 0', lineHeight: 1.7
          }}>
            Integrated on-site diagnostic testing to ensure precise clinical decision-making, rapid reports, and seamless outpatient and surgical care.
          </p>
        </motion.div>

        {/* 3 Core Diagnostic Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '3.5rem',
        }}>
          {diagnosticServices.map((diag, index) => {
            const DiagIcon = diag.icon;
            return (
              <motion.div
                key={diag.id}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.1, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -4 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '28px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: '16px',
                      background: diag.bg, border: `1px solid ${diag.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <DiagIcon size={26} color={diag.color} />
                    </div>
                    <span style={{
                      fontSize: '0.75rem', fontWeight: 750, color: diag.color,
                      background: diag.bg, padding: '4px 10px', borderRadius: '100px',
                      border: `1px solid ${diag.border}`,
                    }}>
                      {diag.badge}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.25rem', fontWeight: 800, color: '#0F172A',
                    margin: '0 0 10px 0', lineHeight: 1.3
                  }}>
                    {diag.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, marginBottom: '20px' }}>
                    {diag.desc}
                  </p>

                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginBottom: '16px' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 750, color: '#0F172A', textTransform: 'uppercase', marginBottom: '10px' }}>
                      Diagnostic Capabilities:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {diag.features.map((feat) => (
                        <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={15} color="#0E7490" style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: '0.825rem', color: '#334155', fontWeight: 550 }}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{
                  paddingTop: '14px', borderTop: '1px solid #F1F5F9',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#64748B' }}>
                    <Clock size={14} color="#0E7490" /> Same-Day Available
                  </div>
                  <button
                    onClick={() => scrollTo('appointment')}
                    style={{
                      background: 'none', border: 'none', color: '#0E7490',
                      fontSize: '0.825rem', fontWeight: 750, cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '4px'
                    }}
                  >
                    Inquire Test <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Healthcare Pillars Box */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: ' clamp(1.5rem, 3vw, 2.5rem)',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
        }}>
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', margin: '0 0 6px 0' }}>
              Comprehensive Healthcare Services
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
              End-to-end medical, surgical, diagnostic, and emergency evaluation under one roof.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '16px',
          }}>
            {healthcareServices.map((srv) => {
              const SrvIcon = srv.icon;
              return (
                <div
                  key={srv.title}
                  style={{
                    background: '#F8FAFC',
                    padding: '20px',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: '12px', background: '#ECFEFF',
                    border: '1px solid #CFFAFE', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '12px',
                  }}>
                    <SrvIcon size={20} color="#0E7490" />
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 750, color: '#0F172A', marginBottom: '6px' }}>
                    {srv.title}
                  </div>
                  <div style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: 1.5 }}>
                    {srv.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
