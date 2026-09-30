import { Link } from 'react-router-dom';
import { Phone, MapPin, Stethoscope, ShieldCheck, Clock } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { specialities } from '@/content/specialities';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: '#0F172A',
        color: '#CBD5E1',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'clamp(2rem, 4vw, 3rem)',
          paddingBottom: '3rem',
          borderBottom: '1px solid #334155',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: '1.25rem',
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#FFFFFF',
              }}>
                <Stethoscope size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1 }}>
                  SREENIVASA
                </div>
                <div style={{ fontSize: '0.72rem', color: '#38BDF8', fontWeight: 700, textTransform: 'uppercase' }}>
                  Multi Speciality Hospital
                </div>
              </div>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 320, marginBottom: '1.25rem' }}>
              Multi-speciality hospital recognized by the Andhra Pradesh Directorate of Medical Education (DME AP) valid through March 2028.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a
                href={`tel:${siteConfig.contact.landline}`}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#CBD5E1', fontSize: '0.875rem', textDecoration: 'none' }}
              >
                <Phone size={14} color="#38BDF8" />
                <span>Landline: {siteConfig.contact.landlineDisplay}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#CBD5E1', fontSize: '0.875rem', textDecoration: 'none' }}
              >
                <Phone size={14} color="#38BDF8" />
                <span>Phone: {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* 7 Specialities */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 750, marginBottom: '1rem', color: '#FFFFFF' }}>
              Doctor Specialities
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
              {specialities.map((spec) => (
                <li key={spec.slug}>
                  <a
                    href={`/#specialities`}
                    style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}
                  >
                    {spec.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Diagnostics & Facilities */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 750, marginBottom: '1rem', color: '#FFFFFF' }}>
              Lab & Scan Services
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <a href="/#services" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>
                  Blood Testing Lab
                </a>
              </li>
              <li>
                <a href="/#services" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>
                  ECG Heart Check
                </a>
              </li>
              <li>
                <a href="/#services" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>
                  Digital X-Ray
                </a>
              </li>
              <li>
                <a href="/#appointment" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>
                  Doctor OPD Timings
                </a>
              </li>
              <li>
                <a href="/#services" style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none' }}>
                  Surgery & Operations
                </a>
              </li>
            </ul>
          </div>

          {/* Hospital Address */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 750, marginBottom: '1rem', color: '#FFFFFF' }}>
              Hospital Address
            </h3>
            <div style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.7 }}>
              <p style={{ marginBottom: 10 }}>
                📍 <strong>Sreenivasa Multi Speciality Hospital</strong><br />
                #28-271, Pranathi Complex,<br />
                Near Iron Bridge, Subash Road,<br />
                Anantapur, Andhra Pradesh – 515001.
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#38BDF8', fontWeight: 650 }}>
                <Clock size={15} /> OPD: 9:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8125rem',
          color: '#64748B',
        }}>
          <div>
            © {year} {siteConfig.name}. Recognized by AP Directorate of Medical Education.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy" style={{ color: '#94A3B8', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: '#94A3B8', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
