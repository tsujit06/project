'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/Button';

const steps = [
  {
    id: 1,
    title: 'Choose Your Kit',
    description: 'Browse our collection of premium DIY science kits designed for different age groups and learning objectives.',
    icon: '🔬',
    details: [
      'Physics, Chemistry, Biology kits available',
      'Age-appropriate difficulty levels',
      'Curriculum-aligned content',
      'Bulk pricing for institutions'
    ]
  },
  {
    id: 2,
    title: 'Place Your Order',
    description: 'Easy online ordering with secure payment. Get instant confirmation and tracking information.',
    icon: '🛒',
    details: [
      'Secure online payment gateway',
      'Instant order confirmation',
      'Real-time inventory updates',
      'Flexible delivery options'
    ]
  },
  {
    id: 3,
    title: 'Receive & Unbox',
    description: 'Carefully packaged kits delivered to your doorstep. All components verified for quality and safety.',
    icon: '📦',
    details: [
      'Eco-friendly packaging',
      'Quality assurance checks',
      'Comprehensive component list',
      'Safety guidelines included'
    ]
  },
  {
    id: 4,
    title: 'Learn & Experiment',
    description: 'Follow detailed instructions and conduct experiments. Learn through hands-on experience.',
    icon: '⚗️',
    details: [
      'Step-by-step lab manuals',
      'Video tutorials available',
      'Safety protocols emphasized',
      'Learning outcomes defined'
    ]
  },
  {
    id: 5,
    title: 'Get Support',
    description: 'Access our expert support team for guidance, troubleshooting, and advanced learning resources.',
    icon: '💬',
    details: [
      '24/7 customer support',
      'Expert educator consultations',
      'Additional experiment ideas',
      'Community forum access'
    ]
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

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
              How It Works
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Simple, effective process to bring hands-on STEM learning to your classroom or home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-navy-blue via-support-purple to-brand-orange z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveStep(index)}
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl cursor-pointer transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-navy-blue text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-navy-blue hover:text-white'
                    }`}
                  >
                    {step.icon}
                  </motion.div>

                  <motion.div
                    animate={{
                      backgroundColor: activeStep === index ? '#003366' : '#f3f4f6',
                      color: activeStep === index ? '#ffffff' : '#374151'
                    }}
                    className="p-6 rounded-xl shadow-sm cursor-pointer"
                    onClick={() => setActiveStep(index)}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-sm opacity-90">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detailed View */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-gray-50 rounded-xl p-8"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{steps[activeStep].icon}</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{steps[activeStep].title}</h2>
                  <p className="text-lg text-gray-600">{steps[activeStep].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {steps[activeStep].details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-center"
                      >
                        <span className="text-brand-orange mr-3">✓</span>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Visual Guide</h3>
                  <div className="h-48 bg-gradient-to-br from-navy-blue to-support-purple rounded-lg flex items-center justify-center">
                    <div className="text-white text-6xl">{steps[activeStep].icon}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* For Schools vs Families */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tailored for Every Learner
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're a school administrator or a parent, we have solutions that fit your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-navy-blue">For Schools & Institutions</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">🏫</span>
                  <div>
                    <strong>Bulk Ordering:</strong> Special pricing for 10+ kits
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">📚</span>
                  <div>
                    <strong>Curriculum Integration:</strong> Aligned with CBSE, ICSE, and state boards
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">👨‍🏫</span>
                  <div>
                    <strong>Teacher Training:</strong> Professional development workshops
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">📊</span>
                  <div>
                    <strong>Progress Tracking:</strong> Digital dashboards for administrators
                  </div>
                </li>
              </ul>
              <Button className="mt-6 w-full">
                Learn About School Solutions
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-support-purple">For Parents & Families</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">🏠</span>
                  <div>
                    <strong>Home Learning:</strong> Safe experiments for home use
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">👨‍👩‍👧‍👦</span>
                  <div>
                    <strong>Family Activities:</strong> Projects for the whole family
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">📱</span>
                  <div>
                    <strong>Online Support:</strong> Video tutorials and guides
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">🎓</span>
                  <div>
                    <strong>Skill Building:</strong> Foundation for future STEM careers
                  </div>
                </li>
              </ul>
              <Button variant="secondary" className="mt-6 w-full">
                Shop for Home Use
              </Button>
            </motion.div>
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
              Ready to Start Your STEM Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students and educators already learning with GyaanPro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Browse Our Kits
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-blue">
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}