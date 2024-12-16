import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Shield } from 'lucide-react';
import { Service } from '../../types/service';

interface ServiceBenefitsProps {
  service: Service;
}

export function ServiceBenefits({ service }: ServiceBenefitsProps) {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Verhoogde Efficiëntie',
      description: 'Automatiseer repetitieve taken en focus op strategische activiteiten'
    },
    {
      icon: Clock,
      title: 'Tijdbesparing',
      description: 'Reduceer handmatig werk en verhoog de productiviteit'
    },
    {
      icon: Shield,
      title: 'Gegarandeerde Kwaliteit',
      description: 'Consistente resultaten met minimale fouten'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 font-rubik">
              Voordelen van {service.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}