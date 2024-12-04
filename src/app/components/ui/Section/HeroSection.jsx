'use client'; // Required for Next.js app directory with GSAP/Lenis

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HeroImages } from '../../../data/HeroImage';
import Lenis from '@studio-freight/lenis'; // Lenis NPM package
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HButton from '../Share/HButton';

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark the component as client-rendered

    if (typeof window !== 'undefined') {
      // Initialize Lenis for smooth scrolling
      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // GSAP ScrollTrigger setup
      gsap.registerPlugin(ScrollTrigger);

      // Existing animations
      document.querySelectorAll('.elem').forEach((elem) => {
        const image = elem.querySelector('img');
        const tl = gsap.timeline();
        const xTransform = gsap.utils.random(-100, 100);

        tl.set(
          image,
          {
            transformOrigin: xTransform < 0 ? 'left' : 'right',
          },
          'start'
        )
          .to(
            image,
            {
              scale: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: image,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            },
            'start'
          )
          .to(
            elem,
            {
              xPercent: xTransform,
              ease: 'none',
              scrollTrigger: {
                trigger: image,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
      });

      const revealElements = document.querySelectorAll('.reveal'); // Targets h4 and p tags
      revealElements.forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 100, opacity: 0 }, // Start below and hidden
          {
            y: 0,
            opacity: 1, // Animate to the original position and become visible
            duration: 1.5, // Animation duration
            ease: 'power3.out', // Easing effect
            scrollTrigger: {
              trigger: elem, // Element to observe
              start: 'top 80%', // Trigger when the top of the element reaches 80% of the viewport
              end: 'top 50%', // Animation end
              scrub: false, // Play the animation once
            },
          }
        );
      });

      return () => {
        // Cleanup ScrollTrigger
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div className="w-full bg-zinc-900 min-h-screen relative">
      {/* Grid layout for images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 grid-rows-20 gap-2 w-full overflow-hidden">
        {HeroImages.map((img) => (
          <div key={img.id} className="elem col-span-1 row-span-1">
            <Image
              src={img.image}
              alt={img.name}
              width={300}
              height={300}
              className="object-cover rounded-lg w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full min-h-screen max-h-screen flex flex-col items-center justify-center text-lime-500 font-Poppins reveal z-10 px-4 sm:px-10">
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold font-barlowtypodesbois uppercase mb-4 text-center">
          Splix <sup className="font-PoppinsThin">®</sup>
        </h1>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-barlowtypodesbois font-light">
          明日も今日も革新する
        </h2>
      </div>

      {/* Page 2 heading */}
      <div className="w-full h-[1500vh] min-h-[100vh] max-h-[120vh] rounded-tl-[45rem] font-PoppinsMedium bg-black flex items-center justify-center relative py-24 sm:py-48 lg:py-96 z-20">
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 p-4 bg-opacity-50  text-white reveal rounded-lg text-center sm:text-left">
          <h4 className="text-lime-500 text-xl sm:text-3xl lg:text-4xl font-PoppinsSemiBold mb-4">
            What We Do!
          </h4>
          <p className="text-lg sm:text-2xl lg:text-4xl font-regular leading-[2rem] sm:leading-[3rem] lg:leading-[4.2rem] mb-8">
            Splitx <sup className="font-PoppinsLight">®</sup> helps elevate your business online with innovative
            solutions and cutting-edge technology. We&apos;re dedicated to transforming
            your digital presence and driving success in the modern marketplace
            <sup className="font-PoppinsLight">®</sup>.
          </p>

          {/* Always visible button */}
          <div className="mt-8">
            <HButton
              text="let's go!"
              link="https://wa.me/6352191174"
              newTab={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
