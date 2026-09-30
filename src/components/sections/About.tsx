import { motion } from 'framer-motion';
import {
  Building2, Stethoscope, CheckCircle2,
  ShieldCheck, Activity, Award, Hospital,
  ArrowRight, Phone, Clock, MapPin
} from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';
import { siteConfig } from '@/content/site.config';

const EASE = [0.22, 1, 0.36, 1] as const;

const checkmarks = [
  'Recognized by AP Directorate of Medical Education (DME AP)',
  'Official Recognition Valid Through: 06 March 2028',
  '15 Clinical & Surgical Departments',
  '20+ Board-Listed Specialist Doctors & Surgeons',
  'In-House Pathology Lab, ECG & Digital X-Ray',
  '24/7 Emergency, Inpatient Beds & Clean Operation Theatres',
];

const pillars = [
  {
    icon: Award,
    label: 'Govt. Recognized',
    desc: 'Certified by AP Medical Education through March 2028',
    color: '#0E7490',
    bg: '#ECFEFF',
  },
  {
    icon: Stethoscope,
    label: '15 Specialities',
    desc: '20+ experienced doctors for checkups and surgery',
    color: '#0284C7',
    bg: '#F0F9FF',
  },
  {
    icon: Activity,
    label: 'Lab & Diagnostics',
    desc: 'Blood tests, 12-lead ECG & Digital X-Ray on-site',
    color: '#059669',
    bg: '#ECFDF5',
  },
  {
    icon: Hospital,
    label: '24/7 Emergency',
    desc: 'Round-the-clock medical, surgical and ICU care',
    color: '#7C3AED',
    bg: '#F5F3FF',
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

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
        background: '#FFFFFF',
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(14, 116, 144, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'clamp(2rem, 4vw, 3.5rem)',
          alignItems: 'center',
        }}>

          {/* ══ Left Column: About Hospital Story & Highlights ══ */}
          <motion.div
            style={{ gridColumn: 'span 7' }}
            initial={reducedMotion ? false : { opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="about-left-col"
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '5px 14px', borderRadius: '100px', background: '#ECFEFF',
              border: '1px solid #CFFAFE', color: '#0E7490', fontSize: '0.78rem',
              fontWeight: 750, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem'
            }}>
              <Building2 size={14} color="#0E7490" /> ABOUT SREENIVASA HOSPITAL
            </div>

            <h2 id="about-heading" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(2rem, 3.4vw, 2.85rem)', fontWeight: 850,
              lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A', marginBottom: '1.25rem',
            }}>
              Trusted Healthcare for Every Family in{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Anantapur.
              </span>
            </h2>

            <p style={{ fontSize: '1.025rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
              <strong>Sreenivasa Multi Speciality Hospital</strong> is dedicated to providing caring, high-quality, and accessible medical services. Conveniently located at <strong>Pranathi Complex near Iron Bridge on Subash Road</strong>, our hospital brings 20+ experienced doctors, surgeons, modern operation rooms, and in-house diagnostic lab testing all under one roof.
            </p>

            <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Our hospital is officially recognized by the <strong>Andhra Pradesh Directorate of Medical Education (DME AP)</strong> valid till <strong>March 6, 2028</strong>. We provide comprehensive daily OPD consultations, routine & emergency surgeries, maternity care, and round-the-clock emergency support.
            </p>

            {/* Checkmarks Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 10,
              marginBottom: '2rem',
              padding: '16px 18px',
              borderRadius: '16px',
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
            }}>
              {checkmarks.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={16} color="#0E7490" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.84rem', fontWeight: 650, color: '#1E293B' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* 4 Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: EASE }}
                    style={{
                      padding: '14px 16px',
                      borderRadius: 14,
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: 8, background: p.bg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                      }}>
                        <Icon size={16} color={p.color} />
                      </div>
                      <span style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0F172A' }}>{p.label}</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.45, margin: 0 }}>{p.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ══ Right Column: Official Credential & Hospital Card ══ */}
          <motion.div
            style={{ gridColumn: 'span 5' }}
            initial={reducedMotion ? false : { opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="about-right-col"
          >
            <div style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #164E63 100%)',
              borderRadius: '24px',
              padding: 'clamp(1.75rem, 3.5vw, 2.25rem)',
              color: '#FFFFFF',
              boxShadow: '0 16px 40px rgba(15, 23, 42, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative Circle */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Govt Recognition Stamp */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                borderRadius: '16px',
                padding: '16px 18px',
                backdropFilter: 'blur(8px)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Award size={18} color="#FACC15" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38BDF8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Government Recognition
                  </span>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                  AP Directorate of Medical Education
                </div>
                <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: 1.4 }}>
                  Recognized Multi-Speciality Hospital · Valid Till: <strong style={{ color: '#BAE6FD' }}>06 March 2028</strong>
                </div>
              </div>

              {/* Quick Stats Matrix */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '14px',
                  borderRadius: '14px',
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 850, color: '#38BDF8' }}>15</div>
                  <div style={{ fontSize: '0.78rem', color: '#E2E8F0', fontWeight: 700 }}>Speciality Depts</div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Medicine, Surgery, OBG & more</div>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '14px',
                  borderRadius: '14px',
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 850, color: '#34D399' }}>20+</div>
                  <div style={{ fontSize: '0.78rem', color: '#E2E8F0', fontWeight: 700 }}>Specialist Doctors</div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Board-certified physicians</div>
                </div>
              </div>

              {/* Landmark & Contact Info */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.22)',
                borderRadius: '14px',
                padding: '14px 16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                  <MapPin size={15} color="#38BDF8" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: 1.45 }}>
                    <strong style={{ color: '#FFFFFF' }}>Pranathi Complex, Near Iron Bridge</strong><br />
                    #28-271, Subash Road, Anantapur – 515001
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={15} color="#38BDF8" style={{ flexShrink: 0 }} />
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
                    OPD: Mon - Sat (9 AM - 9 PM) · 24/7 Emergency
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
                <button
                  onClick={() => scrollTo('specialities')}
                  style={{
                    flex: 1,
                    padding: '11px',
                    borderRadius: '10px',
                    background: '#0E7490',
                    color: '#FFFFFF',
                    fontSize: '0.825rem',
                    fontWeight: 750,
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  View Specialities <ArrowRight size={14} />
                </button>

                <button
                  onClick={() => scrollTo('appointment')}
                  style={{
                    flex: 1,
                    padding: '11px',
                    borderRadius: '10px',
                    background: '#FFFFFF',
                    color: '#0F172A',
                    fontSize: '0.825rem',
                    fontWeight: 750,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  Book Appointment
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-left-col { grid-column: span 12 !important; }
          .about-right-col { grid-column: span 12 !important; margin-top: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
