"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigationbar from '../components/ui/Navigationbar';
import AnimatedSVG from '../components/ui/Share/AnimatedSVG';
import Footer from '../components/Footer/footer';
import AnimatedImage from '../components/ui/Share/AnimatedImage';
import Headerimage from '../components/ui/Share/Headerimage';
import DeviceCheck from '../components/DeviceCheck';

// paragraphs data
const storyParagraphs = [
  {
    id: 1,
    story: 'Discover our journey and commitment to delivering exceptional solutions in web development, software, mobile apps, UI/UX design, and AI/ML.',
  },
  {
    id: 2,
    story: 'At SPLIX, we focus on crafting innovative and robust digital solutions, ensuring client satisfaction through every project phase.',
  },
  {
    id: 3,
    story: 'Our team of experienced professionals is dedicated to pushing boundaries and transforming ideas into reality.',
  },
];

// AboutUs page
const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us | SPLIX';

    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // GSAP ScrollTrigger for text reveal animation on paragraphs and headings
    const elementsToReveal = ['.reveal-text', '.reveal-heading', '.reveal-image'];

    elementsToReveal.forEach((className, index) => {
      gsap.fromTo(
        className,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: className,
            start: 'top 80%', // Trigger when the element reaches 80% from the top of the viewport
            end: 'bottom 20%',
            scrub: true, // Makes it smoother while scrolling
          },
        }
      );
    });



  }, []);

  return (
    // main container
    <DeviceCheck>
      <main className='bg-black' >
      {/* header */}
      <Navigationbar />
      <Headerimage
          backgroundImageUrl="https://images.unsplash.com/photo-1642903639926-7720f78fad09?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="About Us" />


      {/* About-us content */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center md:items-start my-12">
          <div className="md:w-1/2 p-10">
            <h2 className="text-5xl font-neopixelregular font-semibold reveal-heading">
              SPLIX
            </h2>
            <p className="mt-4 reveal-text">
              Discover our journey and commitment to delivering exceptional solutions in web development, software, mobile apps, UI/UX design, and AI/ML.
            </p>
          </div>
          <div className="md:w-80 p-4 left-60 relative reveal-text group">
            <Image
              src="/SVG/SplitXlogo-Main-black.svg"
              alt="Founder"
              width={400}
              height={400}
              className="rounded-lg shadow-lg transition-opacity duration-300"
            />
          </div>
        </div>
        <div className="yellowDot-cursor">
          <AnimatedSVG />
        </div>
        <div className="my-8">
          <h2 className="text-3xl font-bold text-center reveal-heading">
            SPLIX, transforming the digital landscape with cutting-edge web development, AI, ML, advanced software solutions, exceptional UI/UX design, and 3D product design, in partnership with Redmagic Studio.
          </h2>
        </div>

        <div className="space-y-8">
          {storyParagraphs.map((paragraph, index) => (
            <p
              key={paragraph.id}
              className={`text-2xl leading-relaxed reveal-text`}
            >
              {paragraph.story}
            </p>
          ))}
        </div>
      </div>
      {/* Image Reveal Animation */}
      <div className="min-h-screen pl-10 overflow-hidden bg-black text-white flex items-center justify-center">
        <AnimatedImage
          src="https://images.unsplash.com/photo-1727446818896-8a4824ec6bf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image Reveal Animation"
          className="w-full h-fit animated-image"
        />
      </div>
      {/* contact */}
      <br />
      <Footer />
      {/* footer */}
    </main>
    </DeviceCheck>
  );
};

export default AboutUs;
