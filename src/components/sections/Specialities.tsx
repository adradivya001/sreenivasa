import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope, Activity, HeartHandshake, Baby,
  Brain, Bone, Ear, ArrowRight, CheckCircle2, ShieldCheck,
  UserCheck, Users, Clock, Calendar, ChevronRight
} from 'lucide-react';
import { specialities } from '@/content/specialities';
import { doctors, Doctor } from '@/content/doctors';
import { useInView, useReducedMotion } from '@/hooks';

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  Stethoscope, Activity, HeartHandshake, Baby, Brain, Bone, Ear, UserCheck, ShieldCheck,
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

  // Filter doctors for the currently active speciality (primary slug, secondary slug, or listed doctor name)
  const deptDoctors = doctors.filter((d: Doctor) => {
    if (d.isLeadership) return false;
    if (d.specialitySlug === currentSpeciality.slug) return true;
    if (d.secondarySpecialitySlug === currentSpeciality.slug) return true;
    if (currentSpeciality.doctorsList?.some((entry) => entry.toLowerCase().includes(d.name.toLowerCase()))) {
      return true;
    }
    return false;
  });

  return (
    <section
      id="specialities"
      ref={ref}
      className="section"
      aria-labelledby="specialities-heading"
      style={{
        background: '#F0F9FF',
        padding: 'clamp(3rem, 5vw, 4.5rem) 0',
        borderBottom: '1px solid #CFFAFE',
      }}
    >
      {/* Anchor for #doctors navigation */}
      <div id="doctors" style={{ position: 'relative', top: '-80px' }} />

      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>

        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3vw, 2.75rem)' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '5px 14px', borderRadius: '100px', background: '#ECFEFF',
            border: '1px solid #CFFAFE', color: '#0E7490', fontSize: '0.78rem',
            fontWeight: 750, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.6rem'
          }}>
            <ShieldCheck size={14} color="#0E7490" /> 15 DEPARTMENTS & 20+ SPECIALISTS
          </div>
          <h2
            id="specialities-heading"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)', fontWeight: 850,
              lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A',
              maxWidth: 760, margin: '0 auto',
            }}
          >
            Our Doctor{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Specialities & Teams
            </span>
          </h2>
          <p style={{
            marginTop: '8px', color: '#64748B', fontSize: '1rem',
            maxWidth: 680, margin: '8px auto 0', lineHeight: 1.55
          }}>
            Select any department to view on-duty specialist doctors, consultation timings, treatments, and book appointments.
          </p>
        </motion.div>

        {/* ── CONCISE 2-COLUMN INTERACTIVE SHOWCASE ──────────────── */}
        <div
          className="specialities-split-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 380px) 1fr',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {/* ══ LEFT: Interactive Compact Department Selector ════ */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '14px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              maxHeight: '680px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
            className="custom-dept-scroll"
          >
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#64748B',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '8px 12px 4px 12px',
            }}>
              Select Department (15)
            </div>

            {specialities.map((spec) => {
              const SpecIcon = iconMap[spec.icon] ?? Stethoscope;
              const isSelected = spec.slug === selectedSlug;

              return (
                <button
                  key={spec.slug}
                  onClick={() => setSelectedSlug(spec.slug)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    padding: '10px 14px',
                    borderRadius: '14px',
                    border: isSelected ? '1.5px solid #0E7490' : '1px solid transparent',
                    background: isSelected ? '#ECFEFF' : 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 160ms ease',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                  className={`dept-nav-btn ${isSelected ? 'active' : ''}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: isSelected ? '#0E7490' : '#F1F5F9',
                      color: isSelected ? '#FFFFFF' : '#0E7490',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 160ms ease',
                    }}>
                      <SpecIcon size={18} />
                    </div>

                    <div style={{ minWidth: 0 }}>
                      <div style={{
                        fontSize: '0.925rem',
                        fontWeight: isSelected ? 800 : 650,
                        color: isSelected ? '#0E7490' : '#0F172A',
                        lineHeight: 1.25,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}>
                        {spec.name}
                      </div>
                      <div style={{
                        fontSize: '0.72rem',
                        color: isSelected ? '#0284C7' : '#64748B',
                        marginTop: '2px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}>
                        {spec.doctorsList && spec.doctorsList.length > 0
                          ? `${spec.doctorsList.length} Specialist${spec.doctorsList.length > 1 ? 's' : ''}`
                          : spec.badge || 'Specialist Care'}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    size={15}
                    color={isSelected ? '#0E7490' : '#CBD5E1'}
                    style={{
                      flexShrink: 0,
                      transform: isSelected ? 'translateX(2px)' : 'none',
                      transition: 'transform 160ms ease',
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* ══ RIGHT: Active Speciality Spotlight & Doctor Context ════ */}
          <div style={{ minWidth: 0 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSpeciality.slug}
                initial={reducedMotion ? false : { opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.28, ease: EASE }}
                style={{
                  background: 'linear-gradient(135deg, #0F172A 0%, #164E63 100%)',
                  borderRadius: '24px',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  color: '#FFFFFF',
                  boxShadow: '0 16px 40px rgba(15, 23, 42, 0.12)',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative background ambient glow */}
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                <div>
                  {/* Top Badge & Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      fontSize: '0.75rem',
                      fontWeight: 750,
                      color: '#38BDF8',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}>
                      <CurrentIcon size={14} color="#38BDF8" /> {currentSpeciality.badge || 'Speciality Overview'}
                    </div>

                    <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
                      DME AP Recognized Department
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)',
                    fontWeight: 850,
                    margin: '0 0 8px 0',
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                  }}>
                    {currentSpeciality.name}
                  </h3>

                  <p style={{
                    fontSize: '0.925rem',
                    color: '#CBD5E1',
                    lineHeight: 1.6,
                    margin: '0 0 16px 0',
                  }}>
                    {currentSpeciality.fullOverview || currentSpeciality.description}
                  </p>

                  {/* ── 1. ON-DUTY SPECIALIST DOCTORS (Merged Doctor Context) ── */}
                  <div style={{ marginBottom: '18px' }}>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#38BDF8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Users size={14} color="#38BDF8" />
                      <span>On-Duty Specialists & Surgeons ({deptDoctors.length || (currentSpeciality.doctorsList?.length ?? 1)})</span>
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '12px'
                    }}>
                      {deptDoctors.length > 0 ? (
                        deptDoctors.map((doc: Doctor) => (
                          <div
                            key={doc.slug}
                            style={{
                              background: 'rgba(255, 255, 255, 0.08)',
                              border: '1px solid rgba(255, 255, 255, 0.16)',
                              borderRadius: '16px',
                              padding: '14px 16px',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              backdropFilter: 'blur(8px)',
                              boxSizing: 'border-box',
                            }}
                          >
                            <div>
                              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
                                <div style={{ fontSize: '1.025rem', fontWeight: 800, color: '#FFFFFF' }}>
                                  {doc.name}
                                </div>
                                {doc.qualifications && (
                                  <span style={{
                                    fontSize: '0.68rem',
                                    fontWeight: 800,
                                    padding: '2px 8px',
                                    borderRadius: '6px',
                                    background: 'rgba(56, 189, 248, 0.25)',
                                    border: '1px solid rgba(56, 189, 248, 0.4)',
                                    color: '#BAE6FD',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                  }}>
                                    {doc.qualifications}
                                  </span>
                                )}
                              </div>

                              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38BDF8', marginBottom: '8px' }}>
                                {doc.designation}
                              </div>

                              {doc.opdTimings && (
                                <div style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  fontSize: '0.75rem',
                                  color: '#CBD5E1',
                                  marginBottom: '8px',
                                  background: 'rgba(0, 0, 0, 0.22)',
                                  padding: '5px 8px',
                                  borderRadius: '6px',
                                }}>
                                  <Clock size={12} color="#38BDF8" style={{ flexShrink: 0 }} />
                                  <span>{doc.opdTimings}</span>
                                </div>
                              )}

                              <p style={{ fontSize: '0.825rem', color: '#E2E8F0', lineHeight: 1.45, margin: '0 0 10px 0' }}>
                                {doc.bio}
                              </p>

                              {/* Doctor focus pills */}
                              {doc.focusAreas && doc.focusAreas.length > 0 && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
                                  {doc.focusAreas.slice(0, 3).map((area: string) => (
                                    <span
                                      key={area}
                                      style={{
                                        fontSize: '0.68rem',
                                        fontWeight: 600,
                                        padding: '2px 7px',
                                        borderRadius: '5px',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        color: '#BAE6FD',
                                        border: '1px solid rgba(255, 255, 255, 0.12)',
                                      }}
                                    >
                                      {area}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            <button
                              onClick={() => scrollTo('appointment')}
                              style={{
                                width: '100%',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                background: '#0E7490',
                                color: '#FFFFFF',
                                fontSize: '0.8rem',
                                fontWeight: 750,
                                border: '1px solid rgba(56, 189, 248, 0.4)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px',
                                transition: 'background 160ms ease',
                              }}
                            >
                              <Calendar size={13} /> Book Visit with {doc.name.split(' ').slice(0, 2).join(' ')}
                            </button>
                          </div>
                        ))
                      ) : (
                        currentSpeciality.doctorsList?.map((docName: string) => (
                          <div
                            key={docName}
                            style={{
                              background: 'rgba(255, 255, 255, 0.08)',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              borderRadius: '14px',
                              padding: '12px 14px',
                              color: '#FFFFFF',
                            }}
                          >
                            <div style={{ fontSize: '0.95rem', fontWeight: 800 }}>{docName}</div>
                            <div style={{ fontSize: '0.78rem', color: '#38BDF8', marginTop: '2px' }}>Consultant Specialist</div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* ── 2. KEY TREATMENTS & PROCEDURES ── */}
                  {currentSpeciality.keyProcedures && currentSpeciality.keyProcedures.length > 0 && (
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 750, color: '#38BDF8', textTransform: 'uppercase', marginBottom: '8px' }}>
                        Key Treatments & Services Provided:
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                        {currentSpeciality.keyProcedures.map((proc: string) => (
                          <div key={proc} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CheckCircle2 size={15} color="#34D399" style={{ flexShrink: 0 }} />
                            <span style={{ fontSize: '0.84rem', color: '#F1F5F9', fontWeight: 550 }}>{proc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Department Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {currentSpeciality.tags.map((tag: string) => (
                      <span
                        key={tag}
                        style={{
                          padding: '3px 10px',
                          borderRadius: '100px',
                          background: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          fontSize: '0.75rem',
                          color: '#E2E8F0',
                          fontWeight: 550,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Booking Action Row */}
                <div style={{
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}>
                  <div style={{ fontSize: '0.825rem', color: '#CBD5E1' }}>
                    Consultations: Mon - Sat (9 AM - 9 PM) · 24/7 Emergency Available
                  </div>

                  <button
                    onClick={() => scrollTo('appointment')}
                    style={{
                      padding: '11px 22px',
                      borderRadius: '12px',
                      background: '#0E7490',
                      color: '#FFFFFF',
                      fontSize: '0.875rem',
                      fontWeight: 750,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 16px rgba(14, 116, 144, 0.4)',
                      transition: 'all 160ms ease',
                    }}
                  >
                    Book Doctor Appointment <ArrowRight size={15} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>

      <style>{`
        .custom-dept-scroll {
          scrollbar-width: thin;
          scrollbar-color: #BAE6FD transparent;
        }
        .custom-dept-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .custom-dept-scroll::-webkit-scrollbar-thumb {
          background-color: #BAE6FD;
          border-radius: 10px;
        }
        .dept-nav-btn:hover {
          background: #F0F9FF !important;
        }
        .dept-nav-btn.active:hover {
          background: #ECFEFF !important;
        }
        @media (max-width: 860px) {
          .specialities-split-layout {
            grid-template-columns: 1fr !important;
          }
          .custom-dept-scroll {
            max-height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
}
