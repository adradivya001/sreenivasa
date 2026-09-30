import { motion } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/content/site.config';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function CareBand() {
  return (
    <section
      id="care-quote"
      style={{
        background: 'linear-gradient(135deg, #0E7490 0%, #0369A1 50%, #0F172A 100%)',
        color: 'white',
        padding: 'clamp(3.5rem, 6vw, 5rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Rings */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '1.5px dashed rgba(255, 255, 255, 0.15)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-40%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: 920, margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: 100,
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              fontSize: '0.8125rem',
              fontWeight: 750,
              color: '#A5F3FC',
              marginBottom: '1.5rem',
            }}
          >
            <ShieldCheck size={16} color="#A5F3FC" />
            <span>AP DME RECOGNIZED CLINICAL CARE</span>
          </div>

          <blockquote
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(1.85rem, 3.5vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
              fontStyle: 'italic',
            }}
          >
            “Delivering trusted multi-speciality clinical expertise and compassionate care to every family in Anantapur.”
          </blockquote>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2.25rem',
              lineHeight: 1.65,
              maxWidth: 720,
              margin: '0 auto 2.25rem auto',
            }}
          >
            From outpatient specialist consultations and accurate laboratory diagnostics to advanced surgical procedures, we stand committed to patient recovery and well-being.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', alignItems: 'center' }}>
            <button
              onClick={() => scrollTo('appointment')}
              style={{
                background: '#FFFFFF',
                color: '#0E7490',
                padding: '15px 32px',
                borderRadius: 30,
                fontSize: '1rem',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                transition: 'transform 200ms ease, box-shadow 200ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Book an Appointment
              <ArrowRight size={18} />
            </button>

            <a
              href={`tel:${siteConfig.contact.landline}`}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                padding: '14px 26px',
                borderRadius: 30,
                fontSize: '1rem',
                fontWeight: 700,
                border: '1.5px solid rgba(255, 255, 255, 0.35)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backdropFilter: 'blur(8px)',
                transition: 'background 200ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)')}
            >
              <Phone size={18} />
              Call Hospital: {siteConfig.contact.landlineDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
