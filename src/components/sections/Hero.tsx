import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Phone, ShieldCheck, Activity,
  Stethoscope, Sparkles, MapPin, Award,
  CheckCircle2, Clock, Calendar, Users, HeartPulse, Building2
} from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { useReducedMotion } from '@/hooks';
import { trackEvent } from '@/lib/analytics';
import hospitalBuildingImg from '@/assets/hero/sreenivasa.png';

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Framer Variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } }
};

/* Verified Specialty & Diagnostic Ticker Items */
const tickerSpecialties = [
  'General Medicine & Adult Primary Health',
  'General & Minimally Invasive Surgery',
  'Obstetrics & Comprehensive Women Care',
  'Paediatric & Newborn Healthcare',
  'Neurosurgery & Spine Disorder Clinic',
  'Orthopaedics, Joint & Fracture Management',
  'ENT (Ear, Nose, Throat & Sinus) Clinic',
  'On-Site Diagnostic Testing: Pathology · ECG · X-Ray',
];

export function Hero() {
  const rm = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  /* Animated Specialty Ticker index */
  const [tickerIndex, setTickerIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex(prev => (prev + 1) % tickerSpecialties.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Hero Section"
      style={{
        position: 'relative',
        minHeight: '92vh',
        background: 'linear-gradient(180deg, #ECFEFF 0%, #F0F9FF 55%, #E0F2FE 100%)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '92px',
        paddingBottom: '2.5rem',
      }}
    >
      {/* ══ BACKGROUND LIGHT ACCENTS & ARCHITECTURAL ELEMENTS ══════════════ */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-8%', right: '4%', width: '640px', height: '640px',
          background: 'radial-gradient(circle, rgba(14, 116, 144, 0.08) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%', filter: 'blur(50px)',
        }} />

        <div style={{
          position: 'absolute', bottom: '5%', left: '-5%', width: '580px', height: '580px',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.07) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%', filter: 'blur(50px)',
        }} />

        {/* Concentric Decorative Ring */}
        <motion.div
          animate={rm ? {} : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', top: '10%', right: '6%', width: '540px', height: '540px',
            borderRadius: '50%', border: '1.5px dashed rgba(14, 116, 144, 0.12)',
          }}
        />

        {/* Brand Accent Top Line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, #0E7490 0%, #0284C7 50%, #10B981 100%)'
        }} />
      </div>

      {/* ══ MAIN HERO CONTAINER ═══════════════════════════════════ */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 1340,
        margin: '0 auto',
        width: '100%',
        padding: 'clamp(1.5rem, 3vh, 3rem) clamp(1.25rem, 3vw, 2.5rem)',
      }}>
        <div
          className="hero-grid-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
          }}
        >

          {/* ══ LEFT COLUMN: Patient Value Proposition & Action Hub (7 Cols) ═════════ */}
          <motion.div
            style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            initial={rm ? false : 'hidden'}
            animate="visible"
            variants={containerVariants}
            className="hero-left-col"
          >
            {/* Live Hospital Tag */}
            <motion.div variants={itemVariants} style={{ marginBottom: '1rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '100px',
                background: '#ECFEFF',
                border: '1px solid #A5F3FC',
                boxShadow: '0 2px 8px rgba(14, 116, 144, 0.06)',
              }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 750,
                  color: '#0E7490',
                  letterSpacing: '0.02em',
                }}>
                  <motion.span
                    animate={rm ? {} : { scale: [1, 1.25, 1], opacity: [1, 0.25, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Award size={14} color="#0891B2" />
                  </motion.span>
                  AP DME RECOGNIZED HOSPITAL (2025 – 2028)
                </span>
                <span style={{ width: '1px', height: '12px', background: '#0891B230' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 650, color: '#0369A1', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={12} color="#0369A1" /> ISO 9001:2018 Certified
                </span>
              </div>
            </motion.div>

            {/* Sub-label */}
            <motion.div variants={itemVariants} style={{ marginBottom: '0.4rem' }}>
              <span style={{
                fontSize: '0.875rem',
                fontWeight: 750,
                color: '#0891B2',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
              }}>
                {siteConfig.heroLabel}
              </span>
            </motion.div>

            {/* Headline H1 */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: 'clamp(2.5rem, 4.2vw, 3.8rem)',
                fontWeight: 850,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                color: '#0F172A',
                margin: '0 0 1rem 0',
              }}
            >
              Comprehensive Healthcare.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}>
                Trusted Medical Care.
              </span>
            </motion.h1>

            {/* Dynamic Animated Specialty Ticker Bar */}
            <motion.div variants={itemVariants} style={{ marginBottom: '1.25rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '12px',
                background: '#F0F9FF',
                border: '1px solid #BAE6FD',
                color: '#0369A1',
                fontSize: '0.8125rem',
                fontWeight: 650,
                maxWidth: '100%',
              }}>
                <Sparkles size={14} color="#0284C7" />
                <span style={{ color: '#0F172A', fontWeight: 700 }}>Specialist OPD Today:</span>
                <div style={{ height: '20px', overflow: 'hidden', position: 'relative', width: '290px' }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={tickerIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ position: 'absolute', left: 0, top: 0, fontWeight: 750, color: '#0E7490', whiteSpace: 'nowrap' }}
                    >
                      {tickerSpecialties[tickerIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Subtitle Description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(0.975rem, 1.15vw, 1.075rem)',
                color: '#475569',
                lineHeight: 1.6,
                maxWidth: '540px',
                margin: '0 0 1.75rem 0',
                fontWeight: 450,
              }}
            >
              Trusted multi-speciality consultations, surgical expertise, and on-site diagnostic testing (Pathology, ECG, Digital X-Ray) at Pranathi Complex, Subash Road.
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '2.25rem',
              }}
            >
              {/* Primary Book Appointment Button */}
              <motion.button
                onClick={() => { trackEvent('cta_book_click'); scrollTo('appointment'); }}
                id="hero-book-btn"
                whileHover={rm ? {} : { scale: 1.03, y: -2, boxShadow: '0 18px 36px rgba(14, 116, 144, 0.35)' }}
                whileTap={rm ? {} : { scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 30px',
                  borderRadius: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, #0E7490 0%, #0369A1 100%)',
                  color: '#FFFFFF',
                  fontSize: '0.975rem',
                  fontWeight: 750,
                  boxShadow: '0 10px 24px rgba(14, 116, 144, 0.28)',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                Book an Appointment <ArrowRight size={18} />
              </motion.button>

              {/* Call / Contact Hospital Button */}
              <motion.a
                href={`tel:${siteConfig.contact.landline}`}
                onClick={() => trackEvent('cta_phone_click')}
                id="hero-call-btn"
                whileHover={rm ? {} : { scale: 1.02, y: -2, background: '#F8FAFC' }}
                whileTap={rm ? {} : { scale: 0.98 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '9px',
                  padding: '14px 22px',
                  borderRadius: '14px',
                  background: '#FFFFFF',
                  color: '#0F172A',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  border: '1.5px solid #CBD5E1',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                }}
              >
                <Phone size={17} color="#0E7490" />
                Contact Hospital
              </motion.a>
            </motion.div>

            {/* Quick Consultation Badges */}
            <motion.div variants={itemVariants}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '10px',
                maxWidth: '580px',
              }}>
                <div style={{
                  padding: '10px 14px', borderRadius: '12px', background: '#FFFFFF',
                  border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>Daily OPD Hours</div>
                  <div style={{ fontSize: '0.88rem', color: '#0F172A', fontWeight: 800 }}>9:00 AM – 9:00 PM</div>
                </div>

                <div style={{
                  padding: '10px 14px', borderRadius: '12px', background: '#FFFFFF',
                  border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>In-House Testing</div>
                  <div style={{ fontSize: '0.88rem', color: '#0F172A', fontWeight: 800 }}>Pathology, ECG, X-Ray</div>
                </div>

                <div style={{
                  padding: '10px 14px', borderRadius: '12px', background: '#FFFFFF',
                  border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>Recognition</div>
                  <div style={{ fontSize: '0.88rem', color: '#0F172A', fontWeight: 800 }}>DME AP Valid 2028</div>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* ══ RIGHT COLUMN: Actual Hospital Building Visual Frame (5 Cols) ═════ */}
          <motion.div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'center',
            }}
            initial={rm ? false : { opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="hero-right-col"
          >
            {/* Outer Elevated Hospital Image Frame */}
            <div style={{
              position: 'relative',
              borderRadius: '28px',
              padding: '10px',
              background: '#FFFFFF',
              boxShadow: '0 25px 60px -12px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(15, 23, 42, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box',
            }}>
              {/* Inner Image Container */}
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#0F172A',
                minHeight: '440px',
                maxHeight: '520px',
                display: 'flex',
              }}>
                <img
                  src={hospitalBuildingImg}
                  alt="Sreenivasa Multi Speciality Hospital - Pranathi Complex Building Facade"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />

                {/* Top Badge Overlay: Landmark & ISO */}
                <div style={{
                  position: 'absolute', top: '14px', left: '14px', right: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: '8px', zIndex: 3, flexWrap: 'wrap',
                }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '6px 12px', borderRadius: '100px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    color: '#0F172A', fontSize: '0.75rem', fontWeight: 750,
                    boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                  }}>
                    <Building2 size={13} color="#0E7490" />
                    <span>Pranathi Complex</span>
                  </div>

                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '6px 12px', borderRadius: '100px',
                    background: '#0F172A',
                    color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 750,
                    boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}>
                    <ShieldCheck size={13} color="#38BDF8" />
                    <span>ISO 9001:2018</span>
                  </div>
                </div>

                {/* Bottom Overlay Pill: Iron Bridge Landmark */}
                <div style={{
                  position: 'absolute', bottom: '14px', left: '14px',
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '6px 12px', borderRadius: '100px',
                  background: 'rgba(15, 23, 42, 0.88)',
                  backdropFilter: 'blur(8px)',
                  color: '#F1F5F9', fontSize: '0.72rem', fontWeight: 650,
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  <MapPin size={12} color="#38BDF8" /> Near Iron Bridge, Subash Road
                </div>
              </div>

              {/* Real-Time Animated ECG Heartbeat Monitor Widget */}
              <div style={{
                marginTop: '10px',
                padding: '12px 16px',
                borderRadius: '0 0 20px 20px',
                margin: '8px -10px -10px -10px',
                background: 'linear-gradient(135deg, #0F172A 0%, #164E63 100%)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 20px rgba(15, 23, 42, 0.15)',
                flexShrink: 0,
              }}>
                {/* Heart Icon with Pulse */}
                <motion.div
                  animate={rm ? {} : { scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    width: 32, height: 32, borderRadius: 8, background: 'rgba(244, 63, 94, 0.2)',
                    border: '1px solid rgba(244, 63, 94, 0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}
                >
                  <HeartPulse size={18} color="#F43F5E" />
                </motion.div>

                {/* Animated SVG Pulse Line */}
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden', height: 22 }}>
                  <svg width="100%" height="22" viewBox="0 0 160 22" preserveAspectRatio="none">
                    <motion.polyline
                      points="0,11 30,11 40,3 50,19 60,1 70,21 80,11 160,11"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </svg>
                </div>

                {/* Status Indicator */}
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 750, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'flex-end' }}>
                    <motion.span
                      animate={rm ? {} : { opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }}
                    />
                    OPD & Casualty Active
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#94A3B8' }}>DME AP Recognized Hospital</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
