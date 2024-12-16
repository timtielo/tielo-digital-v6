import React from 'react';
import { ContactHero } from '../components/Contact/ContactHero';
import { AutomationAnalysisForm } from '../components/Guide/AutomationAnalysisForm';

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <AutomationAnalysisForm />
    </div>
  );
}