import { motion } from 'framer-motion';
import { Calendar, Stethoscope, FlaskConical, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    step: 'Step 01',
    icon: Calendar,
    title: 'Instant OPD Scheduling',
    desc: 'Book your specialist appointment online or via phone with zero hassle.',
    color: '#0E7490',
  },
  {
    step: 'Step 02',
    icon: Stethoscope,
    title: 'Specialist Consultation',
    desc: 'Consult directly with experienced senior physicians, surgeons, and specialists in Anantapur.',
    color: '#0284C7',
  },
  {
    step: 'Step 03',
    icon: FlaskConical,
    title: 'Rapid Diagnostics & Care',
    desc: 'Access verified in-house Pathology lab tests, 12-lead ECG, and Digital X-Ray with fast results.',
    color: '#059669',
  },
  {
    step: 'Step 04',
    icon: ShieldCheck,
    title: 'Continuous Follow-Up',
    desc: 'Receive digital reports via WhatsApp, clear prescription schedules, and recovery check-ins.',
    color: '#7C3AED',
  },
];

export function PatientJourney() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="journey"
      ref={ref}
      className="section"
      aria-labelledby="journey-heading"
      style={{
        background: 'linear-gradient(180deg, #F0F9FF 0%, #ECFEFF 100%)',
        padding: 'clamp(4rem, 6vw, 6rem) 0',
        borderBottom: '1px solid #CFFAFE',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '100px',
              background: '#ECFEFF',
              border: '1px solid #CFFAFE',
              color: '#0E7490',
              fontSize: '0.78rem',
              fontWeight: 750,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            <Sparkles size={14} color="#0E7490" />
            <span>STREAMLINED PATIENT EXPERIENCE</span>
          </div>

          <h2
            id="journey-heading"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              maxWidth: 720,
              margin: '0 auto',
            }}
          >
            Your Care Journey at{' '}
            <span style={{ color: '#0E7490', fontStyle: 'italic' }}>
              Sreenivasa Hospital
            </span>
          </h2>
          <p style={{ marginTop: 12, color: '#64748B', fontSize: '1.025rem', maxWidth: 620, margin: '12px auto 0', lineHeight: 1.65 }}>
            A transparent 4-step healthcare process designed to keep your consultation, diagnosis, and treatment fast and comfortable.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -5, boxShadow: '0 12px 28px rgba(14, 116, 144, 0.08)' }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 24,
                  padding: '2rem 1.5rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 240ms ease',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 16,
                }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: s.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    {s.step}
                  </span>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: `${s.color}14`,
                    color: s.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={22} />
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  marginBottom: 8,
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
