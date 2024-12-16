import React from 'react';
import { ThankYouHero } from '../components/Guide/ThankYouHero';
import { AutomationAnalysisForm } from '../components/Guide/AutomationAnalysisForm';

export function GuideThankYou() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <ThankYouHero />
      <AutomationAnalysisForm />
    </div>
  );
}