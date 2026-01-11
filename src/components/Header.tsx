'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/CartContext';

const Header = () => {
  const { itemCount } = useCart();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="GyaanPro Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Home', href: '/' },
              { name: 'Products', href: '/products' },
              { name: 'Workshops', href: '/workshops' },
              { name: 'Schools', href: '/schools' },
              { name: 'About', href: '/about' },
            ].map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-navy-blue transition-colors duration-200 font-bold"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <Link href="/cart" className="text-gray-700 hover:text-navy-blue relative font-bold">
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button className="bg-navy-blue text-white px-4 py-2 rounded-lg hover:bg-navy-blue/90 transition-colors">
              Book Demo
            </button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;