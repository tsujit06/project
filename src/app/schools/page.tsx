'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

const caseStudies = [
  {
    school: 'Delhi Public School, RK Puram',
    logo: '🏫',
    impact: '85% improvement in practical exam scores',
    kits: 50,
    students: 1200,
    quote: 'GyaanPro kits have transformed our science curriculum. Students are now excited about learning physics and chemistry.',
    author: 'Ms. Priya Sharma, Science HOD'
  },
  {
    school: 'St. Mary\'s School, Mumbai',
    logo: '⛪',
    impact: 'Increased STEM enrollment by 40%',
    kits: 75,
    students: 1800,
    quote: 'The hands-on approach has made complex concepts accessible. Our students now pursue STEM careers with confidence.',
    author: 'Dr. Rajesh Kumar, Principal'
  },
  {
    school: 'Kendriya Vidyalaya, Bangalore',
    logo: '🏛️',
    impact: 'National Science Olympiad winners',
    kits: 100,
    students: 2500,
    quote: 'GyaanPro provides the perfect bridge between theoretical learning and practical application.',
    author: 'Mrs. Sunita Patel, Science Coordinator'
  }
];

const benefits = [
  {
    title: 'Curriculum Aligned',
    description: 'Kits designed to complement CBSE, ICSE, and state board syllabi',
    icon: '📚',
    details: ['Grade 6-12 coverage', 'JEE/NEET preparation', 'Olympiad training']
  },
  {
    title: 'Teacher Support',
    description: 'Comprehensive training and resources for educators',
    icon: '👨‍🏫',
    details: ['Professional development', 'Lesson plans provided', '24/7 support']
  },
  {
    title: 'Cost Effective',
    description: 'Bulk pricing and long-term value for institutions',
    icon: '💰',
    details: ['Up to 30% savings', 'Durable components', 'Multi-year usage']
  },
  {
    title: 'Safety First',
    description: 'All materials tested for safety and compliance',
    icon: '🛡️',
    details: ['Child-safe materials', 'Safety guidelines', 'Insurance coverage']
  }
];

export default function Schools() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-blue to-support-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering School Education
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Transform your science curriculum with hands-on learning experiences.
              Trusted by 500+ schools across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Request School Demo
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-blue">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Schools Choose GyaanPro
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed specifically for educational institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {benefit.details.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from schools implementing GyaanPro in their curriculum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{study.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold">{study.school}</h3>
                    <div className="text-navy-blue font-medium">{study.students} students</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-brand-orange mb-2">{study.impact}</div>
                  <div className="text-gray-600">{study.kits} kits deployed</div>
                </div>

                <blockquote className="text-gray-700 mb-6 italic">
                  "{study.quote}"
                </blockquote>

                <div className="text-sm text-gray-500">
                  — {study.author}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementation Made Easy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We handle everything from planning to execution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Needs Assessment',
                description: 'We analyze your curriculum requirements and student needs',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Custom Solution',
                description: 'Tailored kit selection and implementation plan',
                icon: '🎯'
              },
              {
                step: '03',
                title: 'Training & Launch',
                description: 'Teacher training and smooth rollout across grades',
                icon: '🚀'
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <div className="text-4xl mb-4">{phase.icon}</div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Institutional Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Competitive rates designed for educational budgets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: 'Starter',
                kits: '10-25 kits',
                price: '₹1,999/kit',
                features: ['Basic support', 'Standard delivery', 'Digital resources']
              },
              {
                tier: 'Professional',
                kits: '26-50 kits',
                price: '₹1,799/kit',
                features: ['Priority support', 'Teacher training', 'Custom branding', 'Annual maintenance'],
                popular: true
              },
              {
                tier: 'Enterprise',
                kits: '50+ kits',
                price: '₹1,599/kit',
                features: ['Dedicated account manager', 'Full training program', 'Curriculum integration', 'Performance analytics']
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-xl shadow-lg ${plan.popular ? 'ring-2 ring-navy-blue' : ''}`}
              >
                {plan.popular && (
                  <div className="bg-navy-blue text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.tier}</h3>
                <div className="text-gray-600 mb-4">{plan.kits}</div>
                <div className="text-3xl font-bold text-navy-blue mb-6">{plan.price}</div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-brand-orange mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? 'primary' : 'outline'}>
                  Get Quote
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-support-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the growing network of schools revolutionizing STEM education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Schedule School Visit
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-blue">
                Download Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}