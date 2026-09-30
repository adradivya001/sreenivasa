import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { Specialities } from '@/components/sections/Specialities';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { CareBeyondVisit } from '@/components/sections/CareBeyondVisit';
import { CareBand } from '@/components/sections/CareBand';
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

      {/* 3. DEPARTMENTS, SPECIALITIES & DOCTORS (Includes on-duty doctor profiles & timings) */}
      <Specialities />

      {/* 5. WHY CHOOSE SREENIVASA */}
      <WhyChoose />

      {/* 6. CARE BEYOND VISIT (WhatsApp Simulation & Post-Care Journey) */}
      <CareBeyondVisit />

      {/* 7. CARE BAND RIBBON */}
      <CareBand />

      {/* 8. APPOINTMENT FLOW */}
      <Appointment />

      {/* 9. LOCATION & DIRECTIONS */}
      <Contact />

      {/* 10. FAQ ACCORDION */}
      {siteConfig.features.showFAQ && <FAQ />}
    </>
  );
}
