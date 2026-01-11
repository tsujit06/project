'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/Button';

const workshops = [
  {
    id: 1,
    title: 'Advanced Physics: Mechanics & Motion',
    age: '16-18',
    duration: '3 days',
    price: 2999,
    category: 'Physics',
    level: 'Advanced',
    description: 'Deep dive into classical mechanics, projectile motion, and energy conservation.',
    outcomes: ['Master Newton\'s laws', 'Solve complex motion problems', 'Design physics experiments'],
    icon: '⚛️',
    popular: true
  },
  {
    id: 2,
    title: 'Organic Chemistry Synthesis Lab',
    age: '17-18',
    duration: '4 days',
    price: 3499,
    category: 'Chemistry',
    level: 'Advanced',
    description: 'Learn organic synthesis techniques and reaction mechanisms.',
    outcomes: ['Understand reaction mechanisms', 'Practice lab safety', 'Design synthesis pathways'],
    icon: '🧪',
    popular: false
  },
  {
    id: 3,
    title: 'Biology: Genetics & Biotechnology',
    age: '16-18',
    duration: '3 days',
    price: 3199,
    category: 'Biology',
    level: 'Advanced',
    description: 'Explore DNA, genetic engineering, and modern biotechnology.',
    outcomes: ['Understand genetic principles', 'Learn PCR techniques', 'Explore bioethics'],
    icon: '🧬',
    popular: true
  },
  {
    id: 4,
    title: 'Mathematics: Calculus Applications',
    age: '16-18',
    duration: '2 days',
    price: 2499,
    category: 'Mathematics',
    level: 'Advanced',
    description: 'Real-world applications of calculus in physics and engineering.',
    outcomes: ['Apply calculus to physics', 'Solve optimization problems', 'Understand derivatives/integrals'],
    icon: '📐',
    popular: false
  },
  {
    id: 5,
    title: 'Electronics & Circuit Design',
    age: '15-18',
    duration: '3 days',
    price: 3299,
    category: 'Electronics',
    level: 'Intermediate',
    description: 'Build and program electronic circuits from scratch.',
    outcomes: ['Design basic circuits', 'Learn Arduino programming', 'Build IoT projects'],
    icon: '🔌',
    popular: true
  },
  {
    id: 6,
    title: 'Astronomy & Space Science',
    age: '14-18',
    duration: '2 days',
    price: 2799,
    category: 'Astronomy',
    level: 'Intermediate',
    description: 'Explore the universe through telescopes and astronomical calculations.',
    outcomes: ['Understand celestial mechanics', 'Learn telescope operation', 'Calculate orbital parameters'],
    icon: '🌌',
    popular: false
  }
];

const categories = ['All', 'Physics', 'Chemistry', 'Biology', 'Mathematics', 'Electronics', 'Astronomy'];
const ageGroups = ['All Ages', '14-15', '16-18'];
const levels = ['All Levels', 'Intermediate', 'Advanced'];

export default function Workshops() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAge, setSelectedAge] = useState('All Ages');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');

  const filteredWorkshops = workshops.filter(workshop => {
    const categoryMatch = selectedCategory === 'All' || workshop.category === selectedCategory;
    const ageMatch = selectedAge === 'All Ages' || workshop.age === selectedAge;
    const levelMatch = selectedLevel === 'All Levels' || workshop.level === selectedLevel;
    return categoryMatch && ageMatch && levelMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-support-purple to-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              STEM Workshops
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Intensive hands-on learning experiences for students in grades 10-12.
              Prepare for competitive exams and future careers in STEM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Browse Workshops
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-blue">
                Download Schedule
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Age Group</label>
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent"
              >
                {ageGroups.map(age => (
                  <option key={age} value={age}>{age}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-blue focus:border-transparent"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Available Workshops
            </h2>
            <p className="text-xl text-gray-600">
              {filteredWorkshops.length} workshop{filteredWorkshops.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white border-2 rounded-xl overflow-hidden shadow-lg ${
                  workshop.popular ? 'border-navy-blue' : 'border-gray-200'
                }`}
              >
                {workshop.popular && (
                  <div className="bg-navy-blue text-white text-sm px-3 py-1 text-center">
                    Most Popular
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-3">{workshop.icon}</div>
                    <div>
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {workshop.age} years
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>

                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-gray-500">
                      <div>{workshop.duration}</div>
                      <div>{workshop.category} • {workshop.level}</div>
                    </div>
                    <div className="text-2xl font-bold text-navy-blue">
                      ₹{workshop.price}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Learning Outcomes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {workshop.outcomes.slice(0, 2).map((outcome, i) => (
                        <li key={i}>• {outcome}</li>
                      ))}
                      {workshop.outcomes.length > 2 && (
                        <li className="text-navy-blue">• +{workshop.outcomes.length - 2} more</li>
                      )}
                    </ul>
                  </div>

                  <Button className="w-full">
                    Enroll Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredWorkshops.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">No workshops found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more options.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Choose Our Workshops */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Our Workshops Stand Out
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Instructors',
                description: 'Learn from IIT/IIM alumni and industry professionals',
                icon: '👨‍🏫'
              },
              {
                title: 'Small Batch Size',
                description: 'Maximum 15 students per workshop for personalized attention',
                icon: '👥'
              },
              {
                title: 'Practical Focus',
                description: '80% hands-on activities, 20% theory',
                icon: '🔧'
              },
              {
                title: 'Career Guidance',
                description: 'Insights into STEM careers and higher education options',
                icon: '🎯'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Ready to Excel in STEM?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our intensive workshops and gain the competitive edge you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                View All Workshops
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-blue">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}