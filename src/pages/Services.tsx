import React from 'react';
import { ServicesHero } from '../components/Services/ServicesHero';
import { ServicesList } from '../components/Services/ServicesList';
import { ServicesProcess } from '../components/Services/ServicesProcess';
import { ServicesCTA } from '../components/Services/ServicesCTA';

export function Services() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesCTA />
    </div>
  );
}