import { motion } from 'framer-motion';
import {
  BellRing,
  Pill,
  HeartHandshake,
  MessageCircle,
  CheckCheck,
  CalendarCheck,
  ShieldCheck,
  Send,
  Sparkles,
  PhoneCall,
  Heart,
  FlaskConical,
  Stethoscope
} from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';
import { siteConfig } from '@/content/site.config';

const EASE = [0.22, 1, 0.36, 1] as const;

interface JourneyStage {
  step: string;
  title: string;
  desc: string;
  icon: typeof BellRing;
  badge: string;
}

const stages: JourneyStage[] = [
  {
    step: '01',
    title: 'FOLLOW-UP REMINDERS',
    desc: 'Never miss an important specialist review, post-op assessment, or physician follow-up in Anantapur.',
    icon: CalendarCheck,
    badge: 'Timely OPD Reviews',
  },
  {
    step: '02',
    title: 'DIAGNOSTIC REPORT ACCESS',
    desc: 'Receive digital Pathology, ECG, and X-Ray laboratory reports directly via WhatsApp as soon as they are ready.',
    icon: FlaskConical,
    badge: 'Fast Lab Reports',
  },
  {
    step: '03',
    title: 'MEDICATION GUIDANCE',
    desc: 'Stay informed with structured medication schedules and recovery instructions recommended by your doctor.',
    icon: Pill,
    badge: 'Dosage Support',
  },
  {
    step: '04',
    title: 'DIRECT HELPDESK SUPPORT',
    desc: 'Connect with our hospital care desk for appointment queries, billing support, and emergency medical contacts.',
    icon: MessageCircle,
    badge: 'WhatsApp Assistance',
  },
];

const chatMessages = [
  {
    id: 1,
    type: 'incoming',
    text: '👋 Hello! Thank you for visiting Sreenivasa Multi Speciality Hospital, Anantapur today.',
    time: '04:30 PM',
    tag: null,
  },
  {
    id: 2,
    type: 'incoming',
    title: '📋 Diagnostic Lab Report Ready',
    text: 'Your Pathology & ECG test results have been verified by the department and are ready for download.',
    time: '04:31 PM',
    tag: 'Report Delivered',
    accent: '#0E7490',
  },
  {
    id: 3,
    type: 'incoming',
    title: '💊 Prescription & Dosage Schedule',
    text: 'Please take the prescribed medication as advised by the specialist. Ensure proper hydration and rest.',
    time: '04:32 PM',
    tag: 'Care Protocol',
    accent: '#059669',
  },
  {
    id: 4,
    type: 'outgoing',
    text: 'Received the reports! Thank you for the quick and prompt update. 🙏',
    time: '04:35 PM',
    tag: null,
  },
  {
    id: 5,
    type: 'incoming',
    text: '💙 Sreenivasa Hospital — Your Health, Our Priority. For emergency help or doctor schedules, call 08554-272828.',
    time: '04:36 PM',
    tag: null,
  },
];

export function CareBeyondVisit() {
  const [ref, inView] = useInView<HTMLElement>();
  const rm = useReducedMotion();

  return (
    <section
      id="care-beyond-visit"
      ref={ref}
      className="section"
      aria-labelledby="care-beyond-heading"
      style={{
        background: 'linear-gradient(180deg, #ECFEFF 0%, #F0F9FF 50%, #E0F2FE 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(4rem, 7vw, 6.5rem) 0',
      }}
    >
      {/* Background Decorative Ambient Circles */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 116, 144, 0.08) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-5%',
          left: '-5%',
          width: '460px',
          height: '460px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.06) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(1.25rem, 3vw, 2.5rem)', position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <motion.div
          initial={rm ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: 100,
              background: '#ECFEFF',
              border: '1px solid #CFFAFE',
              fontSize: '0.8125rem',
              fontWeight: 750,
              color: '#0E7490',
              marginBottom: 14,
            }}
          >
            <Sparkles size={15} color="#0E7490" />
            <span>CONTINUOUS POST-CONSULTATION SUPPORT</span>
          </div>

          <h2
            id="care-beyond-heading"
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
            Care Beyond the{' '}
            <span style={{ color: '#0E7490', fontStyle: 'italic' }}>
              Hospital Visit
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#64748B',
              marginTop: '1rem',
              maxWidth: 640,
              margin: '1rem auto 0',
              lineHeight: 1.7,
            }}
          >
            Our care doesn’t end when you leave our premises. We provide proactive digital healthcare updates, lab report notifications, and direct hospital assistance.
          </p>
        </motion.div>

        {/* 2-Column Responsive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: 4 Journey Stage Cards */}
          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
            className="care-stages-col"
          >
            {stages.map((stg, i) => {
              const Icon = stg.icon;
              return (
                <motion.div
                  key={stg.step}
                  initial={rm ? false : { opacity: 0, x: -28 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                  whileHover={rm ? {} : { y: -3, boxShadow: '0 12px 28px rgba(14, 116, 144, 0.1)' }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '18px',
                    padding: '20px 22px',
                    borderRadius: '20px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                    transition: 'all 240ms ease',
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: '#ECFEFF',
                      border: '1px solid #CFFAFE',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color="#0E7490" />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0E7490', letterSpacing: '0.04em' }}>
                        STEP {stg.step}
                      </span>
                      <span style={{
                        fontSize: '0.7rem', fontWeight: 700, color: '#0369A1',
                        background: '#F0F9FF', padding: '3px 10px', borderRadius: 100,
                        border: '1px solid #BAE6FD',
                      }}>
                        {stg.badge}
                      </span>
                    </div>

                    <h3 style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      margin: '0 0 4px 0',
                    }}>
                      {stg.title}
                    </h3>

                    <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.55, margin: 0 }}>
                      {stg.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: WhatsApp Interactive Smartphone Mockup */}
          <motion.div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              justifyContent: 'center',
            }}
            initial={rm ? false : { opacity: 0, scale: 0.94, y: 24 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="care-chat-col"
          >
            <div
              style={{
                width: '100%',
                maxWidth: '380px',
                borderRadius: '36px',
                padding: '12px',
                background: '#0F172A',
                boxShadow: '0 25px 60px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(255,255,255,0.1)',
              }}
            >
              {/* Inner Smartphone Screen */}
              <div
                style={{
                  borderRadius: '26px',
                  background: '#ECE5DD',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '480px',
                }}
              >
                {/* WhatsApp Chat Header */}
                <div
                  style={{
                    background: '#075E54',
                    padding: '12px 16px',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0E7490',
                    }}
                  >
                    <Stethoscope size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.925rem', fontWeight: 750, lineHeight: 1.2 }}>
                      Sreenivasa Care Desk
                    </div>
                    <div style={{ fontSize: '0.72rem', opacity: 0.85 }}>
                      Official Healthcare Helpline · Verified
                    </div>
                  </div>
                  <ShieldCheck size={18} color="#25D366" />
                </div>

                {/* Messages List Container */}
                <div
                  style={{
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    flex: 1,
                    overflowY: 'auto',
                  }}
                >
                  {chatMessages.map((msg) => {
                    const isOut = msg.type === 'outgoing';
                    return (
                      <div
                        key={msg.id}
                        style={{
                          alignSelf: isOut ? 'flex-end' : 'flex-start',
                          maxWidth: '85%',
                          background: isOut ? '#DCF8C6' : '#FFFFFF',
                          borderRadius: isOut ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                          padding: '10px 12px',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                          position: 'relative',
                        }}
                      >
                        {msg.title && (
                          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: msg.accent || '#0F172A', marginBottom: '3px' }}>
                            {msg.title}
                          </div>
                        )}
                        <div style={{ fontSize: '0.8rem', color: '#1E293B', lineHeight: 1.45 }}>
                          {msg.text}
                        </div>
                        <div
                          style={{
                            fontSize: '0.65rem',
                            color: '#64748B',
                            textAlign: 'right',
                            marginTop: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: '3px',
                          }}
                        >
                          <span>{msg.time}</span>
                          {isOut && <CheckCheck size={13} color="#34B7F1" />}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* WhatsApp Chat Bottom Input Mockup */}
                <div
                  style={{
                    background: '#F0F0F0',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      background: '#FFFFFF',
                      borderRadius: '20px',
                      padding: '8px 14px',
                      fontSize: '0.78rem',
                      color: '#94A3B8',
                    }}
                  >
                    Type a message...
                  </div>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: '#075E54',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                    }}
                  >
                    <Send size={15} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
