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
    title: 'Blood Tests & Lab Tests',
    desc: 'Routine blood tests, fever tests, sugar checks, liver & kidney tests, and urine tests with fast reports.',
    badge: 'In-House Lab',
    icon: FlaskConical,
    color: '#0E7490',
    bg: '#ECFEFF',
    border: '#CFFAFE',
    features: ['Daily Routine Blood Tests', 'Sugar, BP & Cholesterol Tests', 'Fever & Infection Tests', 'Fast Test Report Delivery'],
  },
  {
    id: 'ecg',
    title: 'ECG Heart Check',
    desc: 'Quick heart test to check heart beat, rhythm, and safety before surgery.',
    badge: 'Heart Check',
    icon: Activity,
    color: '#E11D48',
    bg: '#FFF1F2',
    border: '#FFE4E6',
    features: ['12-Lead Quick ECG', 'Heart Rhythm Check', 'Pre-Surgery Heart Check', 'Doctor Review Support'],
  },
  {
    id: 'xray',
    title: 'Digital X-Ray Scans',
    desc: 'Clear digital pictures for broken bones, fractures, joint pain, and chest checkups.',
    badge: 'Digital X-Ray',
    icon: Scan,
    color: '#0284C7',
    bg: '#F0F9FF',
    border: '#E0F2FE',
    features: ['Clear Digital X-Ray Pictures', 'Bone Fracture & Joint Scans', 'Chest & Cough Scans', 'Safe Low-Dose Scans'],
  },
];

const healthcareServices = [
  {
    title: 'Emergency Care',
    desc: 'Quick medical help and doctor attention for urgent health needs.',
    icon: ShieldAlert,
    badge: '24/7 Available',
  },
  {
    title: 'Lab & Scan Services',
    desc: 'In-house blood testing, ECG heart checks, and digital X-Rays with fast results.',
    icon: FlaskConical,
    badge: 'Fast Results',
  },
  {
    title: 'Doctor Checkups',
    desc: 'Experienced specialist doctors across 7 main medical fields.',
    icon: UserCheck,
    badge: '7 Specialities',
  },
  {
    title: 'Surgery & Operations',
    desc: 'Safe surgeries and caring recovery for general, bone, spine, and ENT conditions.',
    icon: HeartPulse,
    badge: 'Expert Surgeons',
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
            <Activity size={14} color="#0E7490" /> LAB & SCAN SERVICES
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
            Lab Tests &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Scan Services
            </span>
          </h2>
          <p style={{
            marginTop: '12px', color: '#64748B', fontSize: '1.025rem',
            maxWidth: 680, margin: '12px auto 0', lineHeight: 1.7
          }}>
            In-house blood tests, ECG heart checks, and digital X-Ray scans for fast results and doctor checkups.
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
                      Tests Available:
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
                    Book Test <ArrowRight size={14} />
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
              Complete Hospital Services
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
              Doctor checkups, blood tests, X-Rays, surgeries, and emergency help all in one hospital.
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
