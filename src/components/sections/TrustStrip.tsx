import { motion } from 'framer-motion';
import { Stethoscope, ShieldCheck, Activity, MapPin, ChevronRight } from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  {
    icon: Stethoscope,
    title: '15 Specialities & 20+ Doctors',
    sub: 'Medicine, Surgery, OBG, Cardio, Neuro, Ortho & more',
    color: '#0E7490',
    bg: '#ECFEFF',
    border: '#CFFAFE',
    targetId: 'specialities',
  },
  {
    icon: Activity,
    title: 'In-House Lab & Scans',
    sub: 'Blood Tests, ECG & Digital X-Ray on-site',
    color: '#0284C7',
    bg: '#F0F9FF',
    border: '#E0F2FE',
    targetId: 'specialities',
  },
  {
    icon: ShieldCheck,
    title: 'Govt. Recognized',
    sub: 'AP Medical Education Approved till 2028',
    color: '#059669',
    bg: '#ECFDF5',
    border: '#D1FAE5',
    targetId: 'why-choose',
  },
  {
    icon: MapPin,
    title: 'Subash Road Landmark',
    sub: 'Near Iron Bridge, Pranathi Complex',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#EDE9FE',
    targetId: 'contact',
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function TrustStrip() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      id="trust-strip"
      aria-label="Hospital quick stats"
      style={{
        padding: '1.5rem 0',
        background: '#E0F2FE',
        borderTop: '1px solid #BAE6FD',
        borderBottom: '1px solid #BAE6FD',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 16,
            alignItems: 'center',
          }}
        >
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -3 }}
                onClick={() => scrollTo(item.targetId)}
                style={{
                  background: 'white',
                  borderRadius: 16,
                  padding: '14px 18px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  cursor: 'pointer',
                  transition: 'all 240ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, overflow: 'hidden' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: item.bg,
                      border: `1px solid ${item.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color={item.color} />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 750,
                        color: '#0F172A',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        color: '#64748B',
                        marginTop: 2,
                        lineHeight: 1.3,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.sub}
                    </div>
                  </div>
                </div>

                <ChevronRight size={16} style={{ color: '#94A3B8', flexShrink: 0 }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
