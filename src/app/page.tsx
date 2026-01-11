'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedBackground from '@/components/AnimatedBackground';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-white">
        <AnimatedBackground className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Empowering Future
                <span 
                  className="block text-transparent bg-clip-text font-extrabold"
                  style={{
                    backgroundImage: 'linear-gradient(to right, rgba(0, 51, 102, 0.6) 0%, rgba(255, 102, 0, 1) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }}
                >
                  Innovators
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-gray-600 max-w-3xl mx-auto mb-8">
                Premium DIY Science Kits that transform curiosity into discovery.
                Trusted by 500+ schools across India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button size="lg" className="text-lg px-8 py-4">
                <Link href="/products">Explore Kits</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Book Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-blue">500+</div>
                <div className="text-gray-600 font-bold">Schools Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-blue">50K+</div>
                <div className="text-gray-600 font-bold">Students Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-blue">95%</div>
                <div className="text-gray-600 font-bold">Satisfaction Rate</div>
              </div>
            </motion.div>
          </div>
        </AnimatedBackground>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/20 relative">
        <AnimatedBackground variant="section" className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Premium DIY Science Kits
              </h2>
              <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
                Hands-on learning experiences designed for schools and families
              </p>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Physics Fundamentals',
                description: 'Explore mechanics, electricity, and magnetism with interactive experiments.',
                price: '₹2,499',
                image: '/assets/physics.jpg'
              },
              {
                title: 'Chemistry Lab Kit',
                description: 'Safe, comprehensive chemistry experiments for advanced learning.',
                price: '₹3,299',
                image: '/assets/chemistory.jpg'
              },
              {
                title: 'Biology Discovery',
                description: 'Microscope-ready kit for cellular biology and life sciences.',
                price: '₹2,799',
                image: '/assets/biology.jpg'
              }
            ].map((kit, index) => (
              <motion.div
                key={kit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-navy-blue to-support-purple overflow-hidden">
                  <Image
                    src={kit.image}
                    alt={kit.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{kit.title}</h3>
                  <p className="text-gray-600 mb-4">{kit.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-navy-blue">{kit.price}</span>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </AnimatedBackground>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-white via-orange-50/20 to-purple-50/30 relative">
        <AnimatedBackground variant="subtle" className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Trusted by Leading Institutions
              </h2>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "GyaanPro kits have revolutionized our science curriculum. Students are more engaged than ever.",
                author: "Dr. Priya Sharma",
                role: "Principal, Delhi Public School",
                rating: 5
              },
              {
                quote: "The quality and educational value of these kits exceed our expectations. Highly recommended.",
                author: "Rajesh Kumar",
                role: "Science Coordinator, CBSE School Network",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-brand-orange">★</span>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </AnimatedBackground>
      </section>
    </div>
  );
}
