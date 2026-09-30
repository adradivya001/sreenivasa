import { motion } from 'framer-motion';
import {
  ShieldCheck, Stethoscope, ArrowRight, UserCheck,
  Clock, Calendar, Award, Building2, User
} from 'lucide-react';
import { doctors, Doctor } from '@/content/doctors';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Doctors() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  const leadershipDoctor = doctors.find((d) => d.isLeadership);
  const specialistDoctors = doctors.filter((d) => !d.isLeadership);

  return (
    <section
      id="doctors"
      ref={ref}
      className="section"
      aria-labelledby="doctors-heading"
      style={{
        padding: 'clamp(3.5rem, 6vw, 6rem) 0',
        background: '#ECFEFF',
        borderBottom: '1px solid #CFFAFE',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>

        {/* Section Header */}
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
            <ShieldCheck size={14} color="#0E7490" /> OUR DOCTORS & LEADERSHIP
          </div>

          <h2 id="doctors-heading" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 850,
            lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A',
            maxWidth: 720, margin: '0 auto',
          }}>
            Meet Our{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Doctors
            </span>
          </h2>
          <p style={{
            fontSize: '1.025rem', color: '#64748B', marginTop: '12px',
            maxWidth: 640, margin: '12px auto 0', lineHeight: 1.6
          }}>
            Experienced specialist doctors providing trusted medical care for you and your family.
          </p>
        </motion.div>

        {/* ── 1. MAIN DOCTOR / HOSPITAL HEAD FEATURE CARD ──────────── */}
        {leadershipDoctor && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #164E63 100%)',
              borderRadius: '24px',
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              color: '#FFFFFF',
              boxShadow: '0 16px 40px rgba(15, 23, 42, 0.12)',
              marginBottom: '3rem',
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
              {/* Left Column: Leadership Details */}
              <div style={{ gridColumn: 'span 8' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '4px 12px', borderRadius: '100px', background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  fontSize: '0.75rem', fontWeight: 750, color: '#38BDF8',
                  letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px'
                }}>
                  <Award size={13} color="#38BDF8" /> Main Doctor / Hospital Head
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                  fontWeight: 850,
                  margin: '0 0 6px 0',
                  color: '#FFFFFF',
                }}>
                  {leadershipDoctor.name}
                </h3>

                <div style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#38BDF8',
                  marginBottom: '14px',
                }}>
                  {leadershipDoctor.designation} · {leadershipDoctor.hospitalName}
                </div>

                <p style={{
                  fontSize: '0.975rem',
                  color: '#CBD5E1',
                  lineHeight: 1.7,
                  margin: '0 0 18px 0',
                  maxWidth: '680px',
                }}>
                  {leadershipDoctor.bio}
                </p>

                {/* Focus Areas */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {leadershipDoctor.focusAreas.map((area) => (
                    <span
                      key={area}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        fontSize: '0.78rem',
                        color: '#F1F5F9',
                        fontWeight: 600,
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Verified Status & Profile Action */}
              <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  padding: '20px',
                  borderRadius: '18px',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginBottom: '4px' }}>
                    Hospital Administration
                  </div>
                  <div style={{ fontSize: '0.925rem', fontWeight: 750, color: '#FFFFFF', marginBottom: '12px' }}>
                    #28-271, Near Iron Bridge, Subash Road, Anantapur
                  </div>
                  <button
                    onClick={() => scrollTo('appointment')}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '12px',
                      background: '#0E7490',
                      color: '#FFFFFF',
                      fontSize: '0.875rem',
                      fontWeight: 750,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 14px rgba(14, 116, 144, 0.35)',
                    }}
                  >
                    Contact Hospital Administration <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── 2. MEDICAL & SURGICAL SPECIALISTS ROSTER ─────────── */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: '0 0 6px 0' }}>
            Department Specialist Consultations
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
            Consult with on-duty specialist doctors across our 7 recognized clinical departments.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
          gap: '20px',
          marginBottom: '3rem',
        }}>
          {specialistDoctors.map((doctor: Doctor, i: number) => {
            return (
              <motion.div
                key={doctor.slug}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -4, boxShadow: '0 14px 32px rgba(14, 116, 144, 0.1)' }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 240ms ease',
                }}
              >
                {/* Header Strip with Speciality & Badge */}
                <div style={{
                  padding: '16px 20px',
                  background: 'linear-gradient(135deg, #0F172A 0%, #164E63 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 750,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color: '#38BDF8',
                    }}>
                      Medical Specialty
                    </span>
                    <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', marginTop: '1px' }}>
                      {doctor.speciality}
                    </div>
                  </div>
                  <div style={{
                    width: 34, height: 34, borderRadius: '8px',
                    background: 'rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Stethoscope size={18} color="#38BDF8" />
                  </div>
                </div>

                {/* Body Content */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    margin: '0 0 4px 0',
                  }}>
                    {doctor.name}
                  </h4>

                  <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0E7490', marginBottom: '6px' }}>
                    {doctor.designation}
                  </div>

                  {doctor.opdTimings && (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      fontSize: '0.75rem', color: '#64748B', marginBottom: '14px',
                    }}>
                      <Clock size={13} color="#0E7490" />
                      <span>{doctor.opdTimings}</span>
                    </div>
                  )}

                  {/* Focus Areas */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '18px', marginTop: 'auto' }}>
                    {doctor.focusAreas.map((area: string) => (
                      <span key={area} style={{
                        padding: '4px 8px', borderRadius: '6px',
                        fontSize: '0.72rem', fontWeight: 600,
                        background: '#F1F5F9', color: '#334155',
                        border: '1px solid #E2E8F0',
                      }}>
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => scrollTo('appointment')}
                    style={{
                      width: '100%',
                      padding: '11px',
                      borderRadius: '10px',
                      background: '#0E7490',
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      fontWeight: 750,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 12px rgba(14, 116, 144, 0.2)',
                    }}
                  >
                    <Calendar size={14} /> Book OPD Consultation
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note on Doctor Roster */}
        <div style={{
          textAlign: 'center',
          padding: '16px',
          borderRadius: '14px',
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          maxWidth: '720px',
          margin: '0 auto',
          fontSize: '0.85rem',
          color: '#64748B',
        }}>
          💡 <strong>Hospital Consultation Note:</strong> Outpatient consultations are conducted by on-duty medical and surgical specialists. Walk-ins are welcomed during daily OPD hours (9:00 AM – 9:00 PM), or call <strong>08554-272828</strong> for direct reception assistance.
        </div>

      </div>
    </section>
  );
}
