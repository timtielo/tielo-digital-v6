import React from 'react';
import { Link } from './Link';
import { Linkedin, Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Tielo Digital</h3>
            <p className="text-white/80">
              Transformeer jouw bedrijf met AI-gedreven oplossingen en automatisering.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/tim-tielkemeijer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/tielodigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/tielodigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@tielo-digital.nl"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2">
              <li><Link href="/diensten/email-handling" className="text-white/80 hover:text-white">Emails beantwoorden</Link></li>
              <li><Link href="/diensten/content-creation" className="text-white/80 hover:text-white">Content maken</Link></li>
              <li><Link href="/diensten/customer-service" className="text-white/80 hover:text-white">Klantenservice</Link></li>
              <li><Link href="/diensten/workflow" className="text-white/80 hover:text-white">Workflow</Link></li>
              <li><Link href="/diensten/outreach" className="text-white/80 hover:text-white">Outreach</Link></li>
              <li><Link href="/diensten" className="text-white/80 hover:text-white">Alle diensten</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-white/80 hover:text-white">Blog</Link></li>
              <li><Link href="/cases" className="text-white/80 hover:text-white">Cases</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
              <li><Link href="/gratis-guide" className="text-white/80 hover:text-white">Gratis Guide</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white">Gratis Consult</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="mailto:info@tielo-digital.nl" className="hover:text-white">info@tielo-digital.nl</a></li>
              <li>Utrecht, Nederland</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80">&copy; 2024 Tielo Digital. Alle rechten voorbehouden.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-white/80 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-white/80 hover:text-white">Algemene Voorwaarden</Link>
              <Link href="/cookies" className="text-white/80 hover:text-white">Cookie Beleid</Link>
              <Link href="/login" className="text-white/80 hover:text-white">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}