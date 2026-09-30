import { useInView, useReducedMotion } from '@/hooks';
import { motion } from 'framer-motion';
import { Award, Stethoscope, FlaskConical, MapPin, HeartPulse, ShieldCheck } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const whyItems = [
  {
    number: '01',
    icon: Award,
    title: 'DME AP Recognized',
    desc: 'Certified by AP Directorate of Medical Education through March 2028.',
    color: '#0E7490',
  },
  {
    number: '02',
    icon: Stethoscope,
    title: '7 Core Specialities',
    desc: 'General Medicine, Surgery, OBG, Paediatrics, Neuro, Ortho & ENT.',
    color: '#0284C7',
  },
  {
    number: '03',
    icon: FlaskConical,
    title: 'In-House Diagnostics',
    desc: 'On-site Pathology lab, 12-lead ECG & high-resolution Digital X-Ray.',
    color: '#059669',
  },
  {
    number: '04',
    icon: MapPin,
    title: 'Central Landmark',
    desc: 'Pranathi Complex, Near Iron Bridge on Subash Road, Anantapur.',
    color: '#7C3AED',
  },
];

export function WhyChoose() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="why-choose"
      ref={ref}
      className="section"
      aria-labelledby="why-heading"
      style={{
        background: '#F0F9FF',
        padding: 'clamp(3.5rem, 6vw, 6rem) 0',
        borderBottom: '1px solid #CFFAFE',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
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
            <ShieldCheck size={14} color="#0E7490" /> PATIENT TRUST & QUALITY
          </div>
          <h2 id="why-heading" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 850,
            lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A', maxWidth: 720, margin: '0 auto',
          }}>
            Why Patients Choose{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Sreenivasa Hospital
            </span>
          </h2>
          <p style={{ marginTop: 12, color: '#64748B', fontSize: '1.025rem', maxWidth: 640, margin: '12px auto 0', lineHeight: 1.65 }}>
            Delivering trusted multi-speciality clinical expertise, government-recognized standards, and complete patient-first medical services in Anantapur.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
          {whyItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -5 }}
                style={{ cursor: 'default' }}
              >
                <div style={{
                  background: 'white', borderRadius: 20,
                  padding: '1.75rem 1.35rem', border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)', height: '100%',
                  transition: 'all 240ms ease',
                  position: 'relative', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                  boxSizing: 'border-box',
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: item.color }} />

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: `${item.color}15`, color: item.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={22} />
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: item.color, opacity: 0.85 }}>
                      {item.number}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.865rem', color: '#64748B', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
