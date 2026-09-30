import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { About } from '@/components/sections/About';
import { Specialities } from '@/components/sections/Specialities';
import { DiagnosticsSection } from '@/components/sections/DiagnosticsSection';
import { HealthcareUnderOneRoof } from '@/components/sections/HealthcareUnderOneRoof';
import { Doctors } from '@/components/sections/Doctors';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { CareBeyondVisit } from '@/components/sections/CareBeyondVisit';
import { CareBand } from '@/components/sections/CareBand';
import { DigitalHealthSection } from '@/components/sections/DigitalHealthSection';
import { PatientJourney } from '@/components/sections/PatientJourney';
import { Appointment } from '@/components/sections/Appointment';
import { Contact } from '@/components/sections/Contact';
import { FAQ } from '@/components/sections/FAQ';
import { siteConfig } from '@/content/site.config';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Sreenivasa Multi Speciality Hospital | Subash Road, Anantapur</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.seo.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.seo.siteUrl} />
        <meta property="og:title" content={`${siteConfig.name} | ${siteConfig.tagline}`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={`${siteConfig.seo.siteUrl}/assets/sreenivasa-hero.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Hospital',
          name: siteConfig.name,
          url: siteConfig.seo.siteUrl,
          telephone: siteConfig.contact.landline,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.contact.address.fullAddress,
            addressLocality: siteConfig.contact.address.city,
            addressRegion: siteConfig.contact.address.state,
            postalCode: siteConfig.contact.address.postalCode,
            addressCountry: siteConfig.contact.address.country,
          },
          areaServed: 'Anantapur',
          medicalSpecialty: [
            'General Medicine',
            'General Surgery',
            'Obstetrics and Gynaecology',
            'Paediatrics',
            'Neurosurgery',
            'Orthopaedics',
            'Otorhinolaryngology (ENT)',
            'Pathology',
            'Diagnostic Radiology (X-Ray)',
            'Cardiology Assessment (ECG)',
          ],
        })}</script>
      </Helmet>

      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. TRUST / QUICK STATS */}
      <TrustStrip />

      {/* 3. ABOUT INSTITUTION */}
      <About />

      {/* 4. DEPARTMENTS & SPECIALITIES */}
      <Specialities />

      {/* 5. DIAGNOSTICS (Pathology, ECG, Digital X-Ray) */}
      <DiagnosticsSection />

      {/* 6. HEALTHCARE UNDER ONE ROOF */}
      <HealthcareUnderOneRoof />

      {/* 7. DOCTORS & SPECIALISTS */}
      <Doctors />

      {/* 8. WHY CHOOSE SREENIVASA */}
      <WhyChoose />

      {/* 9. CARE BEYOND VISIT (WhatsApp Simulation & Post-Care) */}
      <CareBeyondVisit />

      {/* 10. CARE BAND (Full-Width Quote & Action Strip) */}
      <CareBand />

      {/* 11. SMART DIGITAL HEALTHCARE ECOSYSTEM */}
      <DigitalHealthSection />

      {/* 12. PATIENT JOURNEY ROADMAP */}
      <PatientJourney />

      {/* 13. APPOINTMENT FLOW */}
      <Appointment />

      {/* 14. LOCATION & DIRECTIONS */}
      <Contact />

      {/* 15. FAQ ACCORDION */}
      {siteConfig.features.showFAQ && <FAQ />}
    </>
  );
}
