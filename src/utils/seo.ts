export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export const defaultSEO: SEOProps = {
  title: 'Tielo Digital - AI & Automatisering',
  description: 'Transformeer uw bedrijf met AI-gedreven oplossingen en automatisering. Verhoog efficiency, verminder kosten en blijf voorop in innovatie.',
  keywords: [
    'AI',
    'Automatisering',
    'Bedrijfsprocessen',
    'Digitale Transformatie',
    'Machine Learning',
    'Workflow Optimalisatie',
    'Kunstmatige Intelligentie',
    'Business Automation',
    'Process Optimization',
    'Digital Innovation'
  ],
  ogType: 'website',
  ogImage: 'https://tielo-digital.nl/og-image.jpg'
};

export function generateSEO(props: Partial<SEOProps>): SEOProps {
  return {
    ...defaultSEO,
    ...props,
    title: props.title ? `${props.title} | Tielo Digital` : defaultSEO.title
  };
}