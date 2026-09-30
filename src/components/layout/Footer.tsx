import { Link } from 'react-router-dom';
import { Phone, MapPin, Stethoscope, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/content/site.config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: '#0B132B',
        color: '#CBD5E1',
        padding: 'clamp(2rem, 3.5vw, 3rem) 0 clamp(1.25rem, 2vw, 1.75rem) 0',
        borderTop: '1px solid #1E293B',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        
        {/* Main Footer Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.75rem',
          paddingBottom: '1.75rem',
          borderBottom: '1px solid #1E293B',
        }}>
          {/* 1. Brand & Credentials */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: '0.75rem',
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#FFFFFF',
              }}>
                <Stethoscope size={18} />
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1 }}>
                  SREENIVASA
                </div>
                <div style={{ fontSize: '0.68rem', color: '#38BDF8', fontWeight: 700, textTransform: 'uppercase' }}>
                  Multi Speciality Hospital
                </div>
              </div>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.5, maxWidth: 280, margin: '0 0 10px 0' }}>
              Recognized by AP Directorate of Medical Education (DME AP) valid through March 2028.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <a
                href={`tel:${siteConfig.contact.landline}`}
                style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#E2E8F0', fontSize: '0.8125rem', textDecoration: 'none' }}
              >
                <Phone size={13} color="#38BDF8" />
                <span>Landline: <strong>{siteConfig.contact.landlineDisplay}</strong></span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#E2E8F0', fontSize: '0.8125rem', textDecoration: 'none' }}
              >
                <Phone size={13} color="#38BDF8" />
                <span>Emergency: <strong>{siteConfig.contact.phoneDisplay}</strong></span>
              </a>
            </div>
          </div>

          {/* 2. Key Specialities (Compact 2-col or curated list) */}
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 750, margin: '0 0 0.75rem 0', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Doctor Departments
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px 12px' }}>
              {[
                'General Medicine',
                'OBG & Maternity',
                'Cardiology',
                'Pulmonology',
                'General Surgery',
                'Ortho & Joints',
                'Paediatric Surgery',
                'ENT Clinic',
                'Neurology',
                'Urology Laser',
              ].map((name) => (
                <a
                  key={name}
                  href="/#specialities"
                  style={{ color: '#94A3B8', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 140ms ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* 3. In-House Services */}
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 750, margin: '0 0 0.75rem 0', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Lab & Facilities
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 6, listStyle: 'none', padding: 0, margin: 0 }}>
              {['Pathology Blood Test Lab', '12-Lead ECG Testing', 'Digital X-Ray on-site', '24/7 ICU & Inpatient Beds', 'Laparoscopy Operation Theatres'].map((item) => (
                <li key={item}>
                  <a
                    href="/#services"
                    style={{ color: '#94A3B8', fontSize: '0.8rem', textDecoration: 'none' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Location & Timings */}
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 750, margin: '0 0 0.75rem 0', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Hospital Location
            </h3>
            <div style={{ fontSize: '0.8125rem', color: '#94A3B8', lineHeight: 1.5 }}>
              <p style={{ margin: '0 0 8px 0' }}>
                📍 <strong>Pranathi Complex, Near Iron Bridge</strong><br />
                #28-271, Subash Road, Old Town,<br />
                Anantapur, AP – 515001
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#38BDF8', fontWeight: 650, fontSize: '0.78rem' }}>
                <Clock size={13} /> OPD: 9:00 AM - 9:00 PM | 24/7 Emergency
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div style={{
          paddingTop: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: '#64748B',
        }}>
          <div>
            © {year} {siteConfig.name}. Recognized by AP Directorate of Medical Education.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <Link to="/privacy" style={{ color: '#94A3B8', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: '#94A3B8', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
