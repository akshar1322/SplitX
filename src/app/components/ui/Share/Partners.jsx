'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Partner list
const partners = [
  { name: 'Entire Games', src: '/Partners/EntireGames.svg' },
  { name: 'entirestudio', src: '/Partners/EntireStudio.svg' },
  { name: 'GitHub', src: '/Partners/Github.svg' },
  { name: 'GoDaddy', src: '/Partners/godaddy.svg' },
  { name: 'Tekvo', src: '/Partners/tekvo-logo-green.svg' },
  { name: 'Unsplash', src: '/Partners/unsplash.svg' },
  { name: 'Wix Studio', src: '/Partners/wixstudio.svg' },
];

const PartnerCarousel = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP ScrollTrigger for title and tagline reveal
    gsap.fromTo(
      ".clients-title, .clients-tagline",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".clients-title",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  // Framer Motion Variants
  const partnerLogoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black font-PoppinsBold py-10 overflow-hidden">
      <div className="container mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 clients-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Global Connections
        </motion.h2>
        {/* Tagline */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-light clients-tagline"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Where Creativity Meets Precision.
        </motion.p>
        {/* Scrolling Wrapper */}
        <div className="relative flex items-center gap-20 animate-scroll">
          {/* Duplicated Partners for Infinite Loop */}
          {[...partners, ...partners,...partners, ...partners,...partners, ...partners,...partners, ...partners].map((partner, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-48 h-32 rounded-lg shadow-lg flex items-center justify-center p-4 client-logo"
              variants={partnerLogoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={120}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

    </div>

  );
};

export default PartnerCarousel;
