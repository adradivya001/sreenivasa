import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Activity, Stethoscope } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';

const E = [0.22, 1, 0.36, 1] as const;

type NavItem = { label: string; href: string; sectionId?: string };

const navLinks: NavItem[] = [
  { label: 'Home',         href: '/',              sectionId: 'home' },
  { label: 'About',        href: '/#about',        sectionId: 'about' },
  { label: 'Specialities', href: '/#specialities', sectionId: 'specialities' },
  { label: 'Services',     href: '/#services',     sectionId: 'services' },
  { label: 'Doctors',      href: '/#doctors',      sectionId: 'doctors' },
  { label: 'Appointments', href: '/#appointment',  sectionId: 'appointment' },
  { label: 'Contact',      href: '/#contact',      sectionId: 'contact' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sectionIds = navLinks.map(n => n.sectionId).filter(Boolean) as string[];
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('home');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = useCallback((item: NavItem) => {
    setMobileOpen(false);
    if (item.sectionId && location.pathname === '/') scrollTo(item.sectionId);
  }, [location.pathname]);

  const isItemActive = (item: NavItem) =>
    item.sectionId ? activeSection === item.sectionId : location.pathname === item.href;

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.94)',
          borderBottom: `1px solid ${scrolled ? '#E2E8F0' : 'rgba(226,232,240,0.6)'}`,
          boxShadow: scrolled ? '0 4px 20px rgba(14,116,144,0.08)' : 'none',
          backdropFilter: 'blur(16px)',
          transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: 72, gap: 12, justifyContent: 'space-between' }}>

            {/* Logo & Brand Identity */}
            <Link
              to="/"
              onClick={() => scrollTo('home')}
              aria-label={siteConfig.name}
              style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(14, 116, 144, 0.28)',
                color: '#FFFFFF', flexShrink: 0,
              }}>
                <Stethoscope size={24} />
              </div>
              <div>
                <div style={{
                  fontSize: '1.05rem',
                  fontWeight: 850,
                  color: '#0F172A',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}>
                  SREENIVASA
                </div>
                <div style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#0E7490',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>
                  Multi Speciality Hospital
                </div>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
              <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none', margin: 0, padding: 0 }}>
                {navLinks.map((item) => {
                  const active = isItemActive(item);
                  return (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        onClick={() => handleClick(item)}
                        style={{
                          display: 'inline-flex', alignItems: 'center',
                          padding: '7px 13px', borderRadius: 20,
                          fontSize: '0.875rem', fontWeight: active ? 750 : 550,
                          color: active ? '#0E7490' : '#475569',
                          background: active ? '#ECFEFF' : 'transparent',
                          textDecoration: 'none', transition: 'all 200ms',
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Right CTAs: Phone + Book Appointment Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <a
                href={`tel:${siteConfig.contact.landline}`}
                onClick={() => trackEvent('click_call', { source: 'navbar' })}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 14px', borderRadius: 24,
                  fontSize: '0.85rem', fontWeight: 700,
                  color: '#0E7490', background: '#ECFEFF',
                  textDecoration: 'none', border: '1px solid #CFFAFE',
                }}
              >
                <Phone size={14} />
                <span>08554-272828</span>
              </a>

              <button
                onClick={() => {
                  trackEvent('click_appointment', { source: 'navbar' });
                  scrollTo('appointment');
                }}
                className="btn btn-primary"
                style={{
                  padding: '9px 18px', borderRadius: 24,
                  fontSize: '0.85rem', fontWeight: 750,
                  background: 'linear-gradient(135deg, #0E7490 0%, #0369A1 100%)',
                  color: '#FFFFFF', border: 'none', cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(14, 116, 144, 0.25)',
                }}
              >
                <span>Book Appointment</span>
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Menu"
                className="mobile-toggle"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 38, height: 38, borderRadius: 10,
                  border: '1px solid #E2E8F0', background: 'white',
                  color: '#0F172A', cursor: 'pointer',
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: E }}
            style={{
              position: 'fixed', top: 72, left: 0, right: 0, bottom: 0,
              background: 'white', zIndex: 999, padding: '1.5rem',
              display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto',
            }}
          >
            <nav>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      onClick={() => handleClick(item)}
                      style={{
                        display: 'block', padding: '12px 16px', borderRadius: 12,
                        fontSize: '1.05rem', fontWeight: 650, color: '#0F172A',
                        textDecoration: 'none', background: '#F8FAFC',
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '14px', borderRadius: 14, background: '#0E7490', color: '#FFFFFF',
                  fontWeight: 750, textDecoration: 'none',
                }}
              >
                <Phone size={18} /> Call Hospital: 08554-272828
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
