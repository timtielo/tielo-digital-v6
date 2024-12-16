import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Hero } from '../components/Hero';
import { ProblemSolveSection } from '../components/Home/ProblemSolveSection';
import { Benefits } from '../components/Home/Benefits';
import { Services } from '../components/Services';
import { CaseStudyTestimonial } from '../components/CaseStudyTestimonial';
import { CTASection } from '../components/CTASection';

export function Home() {
  return (
    <>
      <Hero />
      <ProblemSolveSection />
      <Benefits />
      <Services />
      <CaseStudyTestimonial />
      <CTASection />
    </>
  );
}