'use client';

import { motion } from 'framer-motion';
import AnimatedBackground from '@/components/AnimatedBackground';
import Button from '@/components/Button';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-blue to-support-purple text-white">
        <AnimatedBackground className="absolute inset-0 opacity-20 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white relative z-20" style={{ color: '#ffffff' }}>
              About GyaanPro
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto relative z-10">
              Bridging the gap between theoretical knowledge and practical innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative">
        <AnimatedBackground variant="subtle" className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Meet Our Founders
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Visionaries committed to revolutionizing STEM education in India
              </p>
            </motion.div>

            <AnimatedTestimonials
              testimonials={[
                {
                  quote:
                    "Our mission is to make quality STEM education accessible to every child in India. Through hands-on learning, we're building the next generation of innovators and problem-solvers.",
                  name: "Dr. Arjun Mehta",
                  designation: "Co-Founder & CEO",
                  src: "/assets/person1.jpg",
                },
                {
                  quote:
                    "We believe that learning by doing is the most effective way to understand science. Our kits bridge the gap between theory and practice, making complex concepts tangible.",
                  name: "Priya Singh",
                  designation: "Co-Founder & COO",
                  src: "/assets/person2.jpg",
                },
              ]}
              autoplayInterval={6000}
            />
          </div>
        </AnimatedBackground>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-orange-50/20 to-purple-50/30 relative">
        <AnimatedBackground variant="section" className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to high-quality STEM education by providing
                innovative, hands-on learning experiences that inspire the next
                generation of scientists, engineers, and innovators.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-brand-orange mr-3">✓</span>
                  Make STEM education accessible to every child
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange mr-3">✓</span>
                  Bridge theory with practical application
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange mr-3">✓</span>
                  Foster creativity and critical thinking
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To become India's leading STEM education platform, empowering
                millions of students to pursue careers in science and technology
                through immersive, experiential learning.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">By 2025, we aim to:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reach 1 million students nationwide</li>
                  <li>• Partner with 2000+ educational institutions</li>
                  <li>• Launch 50+ innovative STEM products</li>
                </ul>
              </div>
            </motion.div>
            </div>
          </div>
        </AnimatedBackground>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/20 to-orange-50/30 relative">
        <AnimatedBackground variant="subtle" className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why GyaanPro?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                What sets us apart in the STEM education landscape
              </p>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Research-Backed',
                description: 'Our kits are designed based on extensive research in educational psychology and learning sciences.',
                icon: '🔬'
              },
              {
                title: 'Industry Partnerships',
                description: 'Collaborations with leading universities and research institutions ensure cutting-edge content.',
                icon: '🤝'
              },
              {
                title: 'Quality Assurance',
                description: 'Every kit undergoes rigorous testing for safety, educational value, and durability.',
                icon: '✅'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-8 bg-gray-50 rounded-xl"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </AnimatedBackground>
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
              Ready to Transform STEM Education?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of institutions already using GyaanPro to inspire the next generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                Schedule a Demo
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy-blue">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}