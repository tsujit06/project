'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Cylinder } from '@react-three/drei';
import Button from '@/components/Button';
import { useCart } from '@/lib/CartContext';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ProductCard } from '@/components/ProductCard';

function Kit3DPreview({ type }: { type: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ height: '300px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {type === 'physics' && (
        <group>
          <Box args={[1, 0.1, 1]} position={[0, -0.5, 0]}>
            <meshStandardMaterial color="#003366" />
          </Box>
          <Sphere args={[0.3]} position={[0, 0.3, 0]}>
            <meshStandardMaterial color="#FF6600" />
          </Sphere>
        </group>
      )}
      {type === 'chemistry' && (
        <group>
          <Cylinder args={[0.2, 0.2, 1]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#6B46C1" />
          </Cylinder>
          <Sphere args={[0.1]} position={[0, 0.6, 0]}>
            <meshStandardMaterial color="#FF6600" />
          </Sphere>
        </group>
      )}
      {type === 'biology' && (
        <group>
          <Box args={[0.8, 0.1, 0.5]} position={[0, -0.3, 0]}>
            <meshStandardMaterial color="#003366" />
          </Box>
          <Sphere args={[0.15]} position={[0, 0.2, 0]}>
            <meshStandardMaterial color="#6B46C1" />
          </Sphere>
        </group>
      )}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate />
    </Canvas>
  );
}

export default function Products() {
  const { addItem } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const kits = [
    {
      id: 'physics-fundamentals',
      name: 'Physics Fundamentals Kit',
      type: 'physics',
      price: 2499,
      bulkPrice: 1999,
      description: 'Explore mechanics, electricity, and magnetism with hands-on experiments.',
      features: [
        'Newton\'s Laws demonstration',
        'Circuit building components',
        'Magnetic field experiments',
        'Comprehensive lab manual'
      ],
      curriculum: ['Class 9-10 Physics', 'JEE/NEET Foundation'],
      components: 45,
      experiments: 25
    },
    {
      id: 'chemistry-lab',
      name: 'Advanced Chemistry Lab',
      type: 'chemistry',
      price: 3299,
      bulkPrice: 2599,
      description: 'Complete chemistry lab with safe, educational experiments.',
      features: [
        'Organic chemistry reactions',
        'pH and titration experiments',
        'Molecular modeling kit',
        'Safety equipment included'
      ],
      curriculum: ['Class 11-12 Chemistry', 'IIT JEE Chemistry'],
      components: 60,
      experiments: 35
    },
    {
      id: 'biology-discovery',
      name: 'Biology Discovery Kit',
      type: 'biology',
      price: 2799,
      bulkPrice: 2199,
      description: 'Microscope-ready kit for cellular biology and life sciences.',
      features: [
        'Compound microscope (400x)',
        'Prepared slides collection',
        'Dissection tools',
        'Ecology sampling kit'
      ],
      curriculum: ['Class 9-12 Biology', 'NEET Biology'],
      components: 50,
      experiments: 30
    }
  ];

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
              DIY Science Kits
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Premium educational kits designed for schools and families.
              Hands-on learning that sparks curiosity and builds knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                View All Kits
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-blue">
                Bulk Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for science kits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy-blue focus:border-transparent"
              />
              <div className="absolute right-4 top-4 text-gray-400">
                🔍
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {kits
              .filter(kit =>
                kit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                kit.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                kit.type.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((kit, index) => (
                <ProductCard key={kit.id} kit={kit} index={index} />
              ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
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
                Institutional Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Special pricing and customization options for schools and educational institutions
              </p>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bulk Discounts',
                description: 'Save up to 30% on orders of 10+ kits',
                icon: '💰'
              },
              {
                title: 'Custom Curriculum',
                description: 'Tailored kits aligned with your school\'s syllabus',
                icon: '📚'
              },
              {
                title: 'Teacher Training',
                description: 'Professional development workshops included',
                icon: '👨‍🏫'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-xl shadow-sm"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button size="lg" className="mr-4">
              Request Institutional Quote
            </Button>
            <Button variant="outline" size="lg">
              Schedule School Demo
            </Button>
          </motion.div>
          </div>
        </AnimatedBackground>
      </section>
    </div>
  );
}