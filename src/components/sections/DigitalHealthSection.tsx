import { useInView, useReducedMotion } from '@/hooks';
import { motion } from 'framer-motion';
import { Smartphone, BarChart3, ShieldCheck, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { siteConfig } from '@/content/site.config';

const EASE = [0.22, 1, 0.36, 1] as const;

export function DigitalHealthSection() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  const patientFeatures = siteConfig.digitalCapabilities?.patientFeatures ?? [
    'Instant OPD & Specialist Doctor Appointment Booking',
    'Digital Pathology, ECG & X-Ray Reports Delivery',
    'Prescription & Medication Schedule Access',
    'Direct WhatsApp Hospital Helpdesk & Inquiry Support',
  ];
  const hospitalFeatures = siteConfig.digitalCapabilities?.hospitalFeatures ?? [
    'Real-time OPD Token & Patient Queue Management',
    'Automated SMS & WhatsApp Consultation Reminders',
    'Unified Multi-Speciality Doctor Scheduling System',
    'Secure Digital Medical Records & Archive Workflow',
  ];

  return (
    <section
      id="digital-solutions"
      ref={ref}
      className="section"
      style={{
        background: '#ECFEFF',
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
            <span>DIGITAL HEALTHCARE ECOSYSTEM</span>
          </div>

          <h2
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              maxWidth: 780,
              margin: '0 auto',
            }}
          >
            Seamless Digital Healthcare for{' '}
            <span style={{ color: '#0E7490', fontStyle: 'italic' }}>
              Patients & Clinical Operations
            </span>
          </h2>
          <p style={{ marginTop: 12, color: '#64748B', fontSize: '1.025rem', maxWidth: 650, margin: '12px auto 0', lineHeight: 1.65 }}>
            Connecting patients with instant OPD scheduling while providing hospital administrators with modern digital clinic management.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {/* Patient Digital Capabilities */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            whileHover={reducedMotion ? {} : { y: -4, boxShadow: '0 16px 36px rgba(14, 116, 144, 0.08)' }}
            style={{
              background: '#FFFFFF',
              borderRadius: 24,
              padding: 'clamp(1.75rem, 3vw, 2.25rem)',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              transition: 'all 240ms ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background: '#ECFEFF',
                color: '#0E7490',
                border: '1px solid #CFFAFE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Smartphone size={26} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.3rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                  Patient & Family Features
                </h3>
                <span style={{ fontSize: '0.8125rem', color: '#64748B', fontWeight: 500 }}>Convenient Access on your Smartphone</span>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {patientFeatures.map((feat, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: '0.925rem', color: '#334155', lineHeight: 1.5 }}>
                  <CheckCircle2 size={18} color="#0E7490" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hospital Digital Capabilities */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
            whileHover={reducedMotion ? {} : { y: -4, boxShadow: '0 16px 36px rgba(2, 132, 199, 0.08)' }}
            style={{
              background: '#FFFFFF',
              borderRadius: 24,
              padding: 'clamp(1.75rem, 3vw, 2.25rem)',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              transition: 'all 240ms ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background: '#F0F9FF',
                color: '#0284C7',
                border: '1px solid #BAE6FD',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <BarChart3 size={26} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.3rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                  Hospital Management Suite
                </h3>
                <span style={{ fontSize: '0.8125rem', color: '#64748B', fontWeight: 500 }}>Automated OPD & Clinical Operations</span>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {hospitalFeatures.map((feat, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: '0.925rem', color: '#334155', lineHeight: 1.5 }}>
                  <CheckCircle2 size={18} color="#0284C7" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
