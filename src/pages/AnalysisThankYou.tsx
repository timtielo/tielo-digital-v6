import React from 'react';
import { AnalysisThankYouHero } from '../components/Analysis/AnalysisThankYouHero';
import { BlogPreview } from '../components/Analysis/BlogPreview';

export function AnalysisThankYou() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <AnalysisThankYouHero />
      <BlogPreview />
    </div>
  );
}