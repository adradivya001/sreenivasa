import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      ref={ref}
      className="section"
      aria-labelledby="contact-heading"
      style={{
        background: '#F0F9FF',
        padding: 'clamp(3.5rem, 6vw, 6rem) 0',
        borderBottom: '1px solid #CFFAFE',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>

        {/* Section Heading */}
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
            <MapPin size={14} color="#0E7490" /> LOCATION & CONTACT
          </div>
          <h2
            id="contact-heading"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 850,
              lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A',
              maxWidth: 680, margin: '0 auto',
            }}
          >
            Find Us in{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Anantapur
            </span>
          </h2>
          <p style={{
            marginTop: '12px', color: '#64748B', fontSize: '1.025rem',
            maxWidth: 600, margin: '12px auto 0', lineHeight: 1.65
          }}>
            Centrally located near Iron Bridge on Subash Road with easy transit and landmark accessibility.
          </p>
        </motion.div>

        {/* Location Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28, alignItems: 'stretch' }}>

          {/* Address & Facility Card */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              background: '#F8FAFC',
              borderRadius: '24px',
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              border: '1px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14, background: '#ECFEFF',
                  color: '#0E7490', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid #CFFAFE', flexShrink: 0,
                }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    Sreenivasa Multi Speciality Hospital
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#0E7490', fontWeight: 700 }}>
                    Pranathi Complex · Near Iron Bridge
                  </span>
                </div>
              </div>

              {/* Full Address Block */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '16px',
                border: '1px solid #E2E8F0',
                fontSize: '0.925rem',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: 20,
              }}>
                <strong style={{ color: '#0F172A' }}>Address:</strong><br />
                #28-271, Pranathi Complex,<br />
                Near Iron Bridge, Subash Road,<br />
                Old Town (MDR77), Anantapur,<br />
                Andhra Pradesh – 515001, India
              </div>

              {/* Phone info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.925rem', color: '#0F172A' }}>
                  <Phone size={18} color="#0E7490" />
                  <span>Landline: <strong>{siteConfig.contact.landlineDisplay}</strong></span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.925rem', color: '#0F172A' }}>
                  <Phone size={18} color="#0284C7" />
                  <span>Phone: <strong>{siteConfig.contact.phoneDisplay}</strong></span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.875rem', color: '#475569' }}>
                  <Clock size={18} color="#059669" />
                  <span>OPD: <strong>{siteConfig.contact.opdHours}</strong></span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.875rem', color: '#475569' }}>
                  <ShieldCheck size={18} color="#0E7490" />
                  <span>Recognition: <strong>DME AP Valid Through 06 Mar 2028</strong></span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, paddingTop: 20, borderTop: '1px solid #E2E8F0' }}>
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '11px 18px', borderRadius: '12px',
                  background: '#0E7490', color: '#FFFFFF',
                  fontSize: '0.875rem', fontWeight: 750, textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(14, 116, 144, 0.25)',
                }}
              >
                <Navigation size={15} />
                Get Directions
              </a>

              <a
                href={`tel:${siteConfig.contact.landline}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '11px 18px', borderRadius: '12px',
                  background: '#FFFFFF', color: '#0F172A',
                  fontSize: '0.875rem', fontWeight: 750, textDecoration: 'none',
                  border: '1px solid #CBD5E1',
                }}
              >
                <Phone size={15} color="#0E7490" />
                Call Hospital
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '11px 18px', borderRadius: '12px',
                  background: '#FFFFFF', color: '#16A34A',
                  fontSize: '0.875rem', fontWeight: 750, textDecoration: 'none',
                  border: '1px solid #BBF7D0',
                }}
              >
                <MessageSquare size={15} />
                WhatsApp Helpdesk
              </a>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid #E2E8F0', minHeight: 380, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
          >
            <iframe
              title="Sreenivasa Multi Speciality Hospital Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380, width: '100%', height: '100%' }}
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.contact.mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
