import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar } from 'lucide-react';

export function AnalysisThankYouHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-[#fff5f0] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-rubik">
              Bedankt voor je aanvraag!
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-gray-600">
                We nemen binnen 48 uur contact met je op voor een persoonlijk gesprek.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl inline-flex items-start gap-4 text-left">
                <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-blue-900">
                  In de tussentijd kun je hieronder onze laatste blogs lezen over AI en automatisering.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}