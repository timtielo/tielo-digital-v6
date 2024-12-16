import React from 'react';
import { GuideHero } from '../components/Guide/GuideHero';
import { GuideForm } from '../components/Guide/GuideForm';
import { GuideFeatures } from '../components/Guide/GuideFeatures';

export function GratisGuide() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <GuideHero />
      <GuideFeatures />
      <GuideForm />
    </div>
  );
}