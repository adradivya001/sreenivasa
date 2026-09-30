import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope, Activity, HeartHandshake, Baby,
  Brain, Bone, Ear, ArrowRight, CheckCircle2, ShieldCheck
} from 'lucide-react';
import { specialities, Speciality } from '@/content/specialities';
import { useInView, useReducedMotion } from '@/hooks';

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  Stethoscope, Activity, HeartHandshake, Baby, Brain, Bone, Ear,
};

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Specialities() {
  const [selectedSlug, setSelectedSlug] = useState<string>(specialities[0].slug);
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  const currentSpeciality = specialities.find(s => s.slug === selectedSlug) || specialities[0];
  const CurrentIcon = iconMap[currentSpeciality.icon] ?? Stethoscope;

  return (
    <section
      id="specialities"
      ref={ref}
      className="section"
      aria-labelledby="specialities-heading"
      style={{
        background: '#F0F9FF',
        padding: 'clamp(3.5rem, 6vw, 6rem) 0',
        borderBottom: '1px solid #CFFAFE',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>

        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '5px 14px', borderRadius: '100px', background: '#ECFEFF',
            border: '1px solid #CFFAFE', color: '#0E7490', fontSize: '0.78rem',
            fontWeight: 750, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem'
          }}>
            <ShieldCheck size={14} color="#0E7490" /> 7 DOCTOR SPECIALITIES
          </div>
          <h2
            id="specialities-heading"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 850,
              lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A',
              maxWidth: 760, margin: '0 auto',
            }}
          >
            Our Medical{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Specialities
            </span>
          </h2>
          <p style={{
            marginTop: '12px', color: '#64748B', fontSize: '1.025rem',
            maxWidth: 640, margin: '12px auto 0', lineHeight: 1.6
          }}>
            Consult experienced doctors for checkups, treatments, and surgery across 7 key departments under one roof.
          </p>
        </motion.div>

        {/* 7 Department Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '3rem',
        }}>
          {specialities.map((spec, index) => {
            const SpecIcon = iconMap[spec.icon] ?? Stethoscope;
            const isSelected = spec.slug === selectedSlug;

            return (
              <motion.div
                key={spec.slug}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -4, boxShadow: '0 12px 30px rgba(14, 116, 144, 0.12)' }}
                onClick={() => setSelectedSlug(spec.slug)}
                style={{
                  background: isSelected ? 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 100%)' : '#FFFFFF',
                  borderRadius: '20px',
                  padding: '24px',
                  border: isSelected ? '2px solid #0E7490' : '1px solid #E2E8F0',
                  boxShadow: isSelected ? '0 8px 24px rgba(14, 116, 144, 0.1)' : '0 2px 8px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 240ms ease',
                  position: 'relative',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: '14px',
                      background: isSelected ? '#0E7490' : '#ECFEFF',
                      border: isSelected ? 'none' : '1px solid #CFFAFE',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <SpecIcon size={24} color={isSelected ? '#FFFFFF' : '#0E7490'} />
                    </div>
                    {spec.badge && (
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 750,
                        padding: '4px 10px',
                        borderRadius: '100px',
                        background: '#F1F5F9',
                        color: '#475569',
                      }}>
                        {spec.badge}
                      </span>
                    )}
                  </div>

                  <h3 style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    margin: '0 0 10px 0',
                    lineHeight: 1.3,
                  }}>
                    {spec.name}
                  </h3>

                  <p style={{
                    fontSize: '0.885rem',
                    color: '#64748B',
                    lineHeight: 1.6,
                    margin: '0 0 16px 0',
                  }}>
                    {spec.description}
                  </p>
                </div>

                <div style={{
                  borderTop: '1px solid #F1F5F9',
                  paddingTop: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0E7490' }}>
                    {isSelected ? 'Selected Department' : 'View Scope & Details'}
                  </span>
                  <ArrowRight size={16} color="#0E7490" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Specialty Deep Dive Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSpeciality.slug}
            initial={reducedMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #164E63 100%)',
              borderRadius: '24px',
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              color: '#FFFFFF',
              boxShadow: '0 16px 40px rgba(15, 23, 42, 0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '24px',
              alignItems: 'center',
            }}>
              <div style={{ gridColumn: 'span 8' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '4px 12px', borderRadius: '100px', background: 'rgba(255,255,255,0.15)',
                  fontSize: '0.75rem', fontWeight: 750, color: '#38BDF8', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px'
                }}>
                  <CurrentIcon size={14} color="#38BDF8" /> Department In-Depth Overview
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                  fontWeight: 800,
                  margin: '0 0 12px 0',
                  color: '#FFFFFF',
                }}>
                  {currentSpeciality.name}
                </h3>

                <p style={{
                  fontSize: '0.95rem',
                  color: '#CBD5E1',
                  lineHeight: 1.7,
                  margin: '0 0 20px 0',
                  maxWidth: '740px',
                }}>
                  {currentSpeciality.fullOverview || currentSpeciality.description}
                </p>

                {currentSpeciality.keyProcedures && (
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 750, color: '#38BDF8', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Key Clinical Focus & Services:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                      {currentSpeciality.keyProcedures.map((proc) => (
                        <div key={proc} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={15} color="#34D399" style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: '0.85rem', color: '#F1F5F9', fontWeight: 550 }}>{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {currentSpeciality.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '100px',
                        background: 'rgba(255,255,255,0.12)',
                        border: '1px solid rgba(255,255,255,0.18)',
                        fontSize: '0.78rem',
                        color: '#E2E8F0',
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  width: '100%',
                  boxSizing: 'border-box',
                }}>
                  <div style={{ fontSize: '0.825rem', color: '#94A3B8', marginBottom: '4px' }}>OPD Consultation</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                    Schedule {currentSpeciality.shortName || currentSpeciality.name} Visit
                  </div>
                  <button
                    onClick={() => scrollTo('appointment')}
                    style={{
                      width: '100%',
                      padding: '12px 18px',
                      borderRadius: '12px',
                      background: '#0E7490',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      fontWeight: 750,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 16px rgba(14, 116, 144, 0.4)',
                    }}
                  >
                    Book Appointment <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
