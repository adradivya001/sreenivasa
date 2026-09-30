import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck, Stethoscope, ArrowRight, UserCheck,
  Clock, Calendar, Award, Building2, User, Filter, GraduationCap
} from 'lucide-react';
import { doctors, Doctor } from '@/content/doctors';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Doctors() {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  const leadershipDoctor = doctors.find((d) => d.isLeadership);
  const specialistDoctors = doctors.filter((d) => !d.isLeadership);

  // Department filter categories
  const departments = [
    { id: 'all', label: 'All Doctors', count: specialistDoctors.length },
    { id: 'general-medicine', label: 'General Medicine', count: 2 },
    { id: 'obstetrics-gynaecology', label: 'Obst & Gynaecology', count: 2 },
    { id: 'cardiology', label: 'Cardiology', count: 1 },
    { id: 'pulmonology', label: 'Pulmonology (Lungs)', count: 2 },
    { id: 'gastroenterology', label: 'Gastroenterology', count: 2 },
    { id: 'general-surgery', label: 'General Surgery', count: 1 },
    { id: 'orthopaedics', label: 'Ortho & Joints', count: 2 },
    { id: 'paediatric-surgery', label: 'Paediatric Surgery', count: 1 },
    { id: 'maxillofacial-surgery', label: 'Maxillofacial', count: 2 },
    { id: 'ent', label: 'ENT', count: 2 },
    { id: 'neurology', label: 'Neurology', count: 2 },
    { id: 'plastic-surgery', label: 'Plastic Surgery', count: 1 },
    { id: 'anaesthesia-icu', label: 'Anaesthesia & ICU', count: 2 },
    { id: 'urology', label: 'Urology', count: 2 },
    { id: 'neurosurgery', label: 'Neurosurgery', count: 1 },
  ];

  const filteredDoctors = selectedDept === 'all'
    ? specialistDoctors
    : specialistDoctors.filter((d) => d.specialitySlug === selectedDept);

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
            <ShieldCheck size={14} color="#0E7490" /> 20+ SPECIALIST DOCTORS
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
            maxWidth: 680, margin: '12px auto 0', lineHeight: 1.6
          }}>
            Experienced specialist doctors and surgeons providing trusted medical care across 15 hospital departments.
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
                  <Award size={13} color="#38BDF8" /> Hospital Leadership & Managing Director
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
                    Hospital Address
                  </div>
                  <div style={{ fontSize: '0.925rem', fontWeight: 750, color: '#FFFFFF', marginBottom: '12px' }}>
                    Pranathi Complex, Near Iron Bridge, Subash Road, Anantapur
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
                    Book Doctor Appointment <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── 2. DEPARTMENT FILTER PILLS ─────────── */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
              Department Doctors ({filteredDoctors.length})
            </h3>
            <span style={{ fontSize: '0.825rem', color: '#64748B' }}>
              Filter by medical speciality below:
            </span>
          </div>

          <div style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '8px',
            scrollbarWidth: 'thin',
          }}>
            {departments.map((dept) => {
              const active = selectedDept === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '100px',
                    fontSize: '0.825rem',
                    fontWeight: active ? 750 : 600,
                    color: active ? '#FFFFFF' : '#334155',
                    background: active ? '#0E7490' : '#FFFFFF',
                    border: active ? '1px solid #0E7490' : '1px solid #E2E8F0',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    boxShadow: active ? '0 4px 12px rgba(14, 116, 144, 0.2)' : 'none',
                    transition: 'all 160ms ease',
                  }}
                >
                  {dept.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3. DOCTORS GRID ─────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
          gap: '20px',
          marginBottom: '3rem',
        }}>
          {filteredDoctors.map((doctor: Doctor, i: number) => {
            return (
              <motion.div
                key={doctor.slug}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.4), ease: EASE }}
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
                {/* Header Strip with Speciality & Qualification Badge */}
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
                      {doctor.speciality}
                    </span>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>
                      {doctor.name}
                    </div>
                  </div>
                  {doctor.qualifications && (
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '4px 8px',
                      borderRadius: '6px',
                      background: 'rgba(56, 189, 248, 0.2)',
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      color: '#BAE6FD',
                      whiteSpace: 'nowrap',
                    }}>
                      {doctor.qualifications}
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0E7490', marginBottom: '8px' }}>
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

                  <p style={{
                    fontSize: '0.865rem',
                    color: '#475569',
                    lineHeight: 1.55,
                    marginBottom: '14px',
                  }}>
                    {doctor.bio}
                  </p>

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
                    <Calendar size={14} /> Book Doctor Visit
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note on Doctor Roster */}
        <div style={{
          textAlign: 'center',
          padding: '16px 20px',
          borderRadius: '14px',
          background: '#FFFFFF',
          border: '1px solid #CFFAFE',
          maxWidth: '780px',
          margin: '0 auto',
          fontSize: '0.875rem',
          color: '#475569',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
        }}>
          💡 <strong>Hospital Consultation Note:</strong> Doctor checkups run Monday to Saturday (9:00 AM – 9:00 PM) and Sunday (9:00 AM – 2:00 PM). Emergency medical and surgical care is open 24/7. Call <strong>08554-272828</strong> or <strong>+91 98498 98698</strong> for immediate doctor availability.
        </div>

      </div>
    </section>
  );
}
