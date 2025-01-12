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
      <div className="fixed top-0  left-0 w-full min-h-screen max-h-screen flex flex-col items-center justify-center text-lime-500 font-Poppins reveal z-10 px-4 sm:px-10">
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold font-barlowtypodesbois uppercase mb-4 text-center">
          Splix <sup className="font-PoppinsThin"></sup>
        </h1>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-barlowtypodesbois font-light">
          明日も今日も革新する
        </h2>
      </div>

      {/* Page 2 heading */}
      <div className="w-full h-[1500vh] min-h-[100vh] max-h-[120vh] rounded-tl-[45rem] font-PoppinsMedium bg-black flex items-center justify-center relative py-24 sm:py-48 lg:py-96 z-20 overflow-hidden" >
        {/* SVG added to the right side */}
          <div style={{ position: 'relative', width: '100%', height: '100%',left:'65%',rotate:'180deg', }}
          >

            <svg
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                opacity:'0.8',
                transform: 'translateY(-45%)',
                width: '900px', // Half the original width
                height: '750px',  // Half the original height
              }}
              viewBox="0 0 275 688"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
             <path d="M137.11 75.9766V608.286L1 683.99V1.6824L137.11 75.9766Z" stroke="#4D4D4D"/>
                <mask id="path-2-inside-1_341_186" fill="white">
                <path d="M0.5 604.841L137.43 541.051L0.5 484.891"/>
                </mask>
                <path d="M137.43 541.051L137.852 541.957L139.923 540.992L137.809 540.125L137.43 541.051ZM0.922284 605.747L137.852 541.957L137.008 540.144L0.077716 603.934L0.922284 605.747ZM137.809 540.125L0.879461 483.965L0.120539 485.816L137.051 541.976L137.809 540.125Z" fill="#4D4D4D" mask="url(#path-2-inside-1_341_186)"/>
                <mask id="path-4-inside-2_341_186" fill="white">
                <path d="M0.5 485.519L137.43 409.259L0.5 342.109"/>
                </mask>
                <path d="M137.43 409.259L137.917 410.133L139.586 409.203L137.87 408.362L137.43 409.259ZM0.986558 486.393L137.917 410.133L136.943 408.386L0.0134419 484.646L0.986558 486.393ZM137.87 408.362L0.940302 341.212L0.0596975 343.007L136.99 410.157L137.87 408.362Z" fill="#4D4D4D" mask="url(#path-4-inside-2_341_186)"/>
                <mask id="path-6-inside-3_341_186" fill="white">
                <path d="M0.5 341.259L137.43 272.579L0.5 212.109"/>
                </mask>
                <path d="M137.43 272.579L137.878 273.473L139.775 272.522L137.834 271.665L137.43 272.579ZM0.948336 342.153L137.878 273.473L136.982 271.685L0.0516638 340.366L0.948336 342.153ZM137.834 271.665L0.903974 211.195L0.096026 213.024L137.026 273.494L137.834 271.665Z" fill="#4D4D4D" mask="url(#path-6-inside-3_341_186)"/>
                <mask id="path-8-inside-4_341_186" fill="white">
                <path d="M0.5 212.11L137.43 137.87L0.5 72.5"/>
                </mask>
                <path d="M137.43 137.87L137.907 138.749L139.633 137.813L137.861 136.968L137.43 137.87ZM0.976629 212.989L137.907 138.749L136.953 136.991L0.0233714 211.231L0.976629 212.989ZM137.861 136.968L0.930821 71.5976L0.0691789 73.4024L136.999 138.772L137.861 136.968Z" fill="#4D4D4D" mask="url(#path-8-inside-4_341_186)"/>
                <path d="M273.6 79.1367V611.436L137.5 687.15V4.84258L273.6 79.1367Z" stroke="#4D4D4D"/>
                <mask id="path-11-inside-5_341_186" fill="white">
                <path d="M137 607.989L273.92 544.209L137 488.039"/>
                </mask>
                <path d="M273.92 544.209L274.342 545.116L276.413 544.151L274.3 543.284L273.92 544.209ZM137.422 608.896L274.342 545.116L273.498 543.303L136.578 607.083L137.422 608.896ZM274.3 543.284L137.38 487.114L136.62 488.964L273.54 545.134L274.3 543.284Z" fill="#4D4D4D" mask="url(#path-11-inside-5_341_186)"/>
                <mask id="path-13-inside-6_341_186" fill="white">
                <path d="M137 488.682L273.92 412.412L137 345.262"/>
                </mask>
                <path d="M273.92 412.412L274.407 413.285L276.076 412.355L274.36 411.514L273.92 412.412ZM137.487 489.555L274.407 413.285L273.433 411.538L136.513 487.808L137.487 489.555ZM274.36 411.514L137.44 344.364L136.56 346.16L273.48 413.31L274.36 411.514Z" fill="#4D4D4D" mask="url(#path-13-inside-6_341_186)"/>
                <mask id="path-15-inside-7_341_186" fill="white">
                <path d="M137 344.422L273.92 275.732L137 215.262"/>
                </mask>
                <path d="M273.92 275.732L274.368 276.626L276.265 275.674L274.324 274.817L273.92 275.732ZM137.448 345.316L274.368 276.626L273.472 274.838L136.552 343.528L137.448 345.316ZM274.324 274.817L137.404 214.347L136.596 216.176L273.516 276.646L274.324 274.817Z" fill="#4D4D4D" mask="url(#path-15-inside-7_341_186)"/>
                <mask id="path-17-inside-8_341_186" fill="white">
                <path d="M137 215.262L273.92 141.022L137 75.6523"/>
                </mask>
                <path d="M273.92 141.022L274.397 141.901L276.122 140.966L274.351 140.12L273.92 141.022ZM137.477 216.141L274.397 141.901L273.443 140.143L136.523 214.383L137.477 216.141ZM274.351 140.12L137.431 74.7499L136.569 76.5548L273.489 141.925L274.351 140.12Z" fill="#4D4D4D" mask="url(#path-17-inside-8_341_186)"/>
            </svg>
          </div>


        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 p-4 bg-opacity-50 text-white reveal rounded-lg text-center sm:text-left">
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
