import React from 'react';
import { services } from '../components/Services';
import { ServiceHero } from '../components/ServicePage/ServiceHero';
import { ServiceDetails } from '../components/ServicePage/ServiceDetails';
import { ServiceBenefits } from '../components/ServicePage/ServiceBenefits';
import { ServiceCTA } from '../components/ServicePage/ServiceCTA';

interface ServicePageProps {
  serviceId: string;
}

export function ServicePage({ serviceId }: ServicePageProps) {
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl">Service niet gevonden</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <ServiceHero service={service} />
      <ServiceDetails service={service} />
      <ServiceBenefits service={service} />
      <ServiceCTA />
    </div>
  );
}