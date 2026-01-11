"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { useCart } from "@/lib/CartContext";

interface ProductCardProps {
  kit: {
    id: string;
    name: string;
    type: string;
    price: number;
    bulkPrice: number;
    description: string;
    features: string[];
    curriculum: string[];
    components: number;
    experiments: number;
  };
  index: number;
}

export function ProductCard({ kit, index }: ProductCardProps) {
  const { addItem } = useCart();

  // Different background images for each kit type
  const getBackgroundImage = (type: string) => {
    switch (type) {
      case 'physics':
        return "/assets/physics.jpg";
      case 'chemistry':
        return "/assets/chemistory.jpg";
      case 'biology':
        return "/assets/biology.jpg";
      default:
        return "/assets/physics.jpg";
    }
  };

  const backgroundImage = getBackgroundImage(kit.type);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="max-w-xs w-full"
    >
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:z-10",
          "transition-all duration-500"
        )}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={kit.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3}
          />
        </div>
        <div className="text relative z-20">
          <h1 className="font-bold text-xl md:text-2xl text-white relative mb-2">
            {kit.name}
          </h1>
          <p className="font-normal text-base text-gray-200 relative mb-4 line-clamp-2">
            {kit.description}
          </p>

          <div className="flex justify-between items-center mb-4">
            <div className="text-white">
              <div className="text-lg font-bold">₹{kit.price}</div>
              <div className="text-sm opacity-80">Individual</div>
            </div>
            <div className="text-right text-orange-300">
              <div className="text-lg font-bold">₹{kit.bulkPrice}</div>
              <div className="text-sm opacity-80">Bulk (10+)</div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 bg-white/20 border-white/40 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm"
            >
              View Details
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-navy-blue hover:bg-navy-blue/80 text-white"
              onClick={() => addItem({
                id: parseInt(kit.id.replace(/\D/g, '')),
                name: kit.name,
                price: kit.price
              })}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}