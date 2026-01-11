"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export function AnimatedTestimonials({
  testimonials,
  autoplayInterval = 5000,
}: {
  testimonials: Testimonial[];
  autoplayInterval?: number;
}) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [isPaused, autoplayInterval, testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto bg-gradient-to-br from-navy-blue to-support-purple text-white rounded-3xl p-8 md:p-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[400px] md:min-h-[500px]">
        {/* Image Cards Stack */}
        <div className="relative w-full md:w-1/2 flex-shrink-0 h-[400px] md:h-[500px]">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => {
              const isActive = index === active;
              const offset = index - active;
              const absOffset = Math.abs(offset);
              
              // Show active and next 2 cards
              if (absOffset > 2) return null;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50, scale: 0.8, zIndex: testimonials.length - absOffset }}
                  animate={{
                    opacity: isActive ? 1 : 0.3,
                    x: isActive ? 0 : offset * 20,
                    scale: isActive ? 1 : 0.85,
                    zIndex: isActive ? 10 : testimonials.length - absOffset,
                    filter: isActive ? "blur(0px)" : "blur(4px)",
                  }}
                  exit={{ opacity: 0, x: -50, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "absolute inset-0 rounded-2xl overflow-hidden",
                    isActive ? "bg-white" : "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-orange-500/20"
                  )}
                  style={{
                    transform: isActive 
                      ? "translateX(0)" 
                      : `translateX(${offset * 30}px) translateY(${absOffset * 10}px)`,
                  }}
                >
                  {imageErrors[index] ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600">
                      <span className="text-4xl mb-2">⚠️</span>
                      <span className="text-sm text-center px-4">Failed to load image</span>
                    </div>
                  ) : (
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        console.error(`Failed to load image for ${testimonial.name}: ${testimonial.src}`);
                        console.error('Error event:', e);
                        setImageErrors((prev) => ({ ...prev, [index]: true }));
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded image: ${testimonial.src}`);
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Text Content */}
        <div className="relative w-full md:w-1/2 flex-shrink-0 z-20 flex items-center">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => {
              if (index !== active) return null;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full space-y-6"
                >
                  <div>
                    <blockquote className="text-lg md:text-xl lg:text-2xl font-normal text-white/90 leading-relaxed text-left">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="space-y-1 text-left">
                    <p className="text-xl md:text-2xl font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm md:text-base text-white/80">
                      {testimonial.designation}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
