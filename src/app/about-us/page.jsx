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
import useDisableRightClick from '../hooks/useDisableRightClick';
import useDisableInspect from '../hooks/disableInspect';

const AboutUs = () => {
  useDisableRightClick()
  useDisableInspect()
  useEffect(() => {
    document.title = 'About Us | SPLIX';

    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // GSAP ScrollTrigger for text reveal animation on paragraphs and headings
    const elementsToReveal = ['.reveal-text', '.reveal-heading'];

    elementsToReveal.forEach((className) => {
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
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <DeviceCheck>
      <main className="bg-black">
        {/* Header */}
        <Navigationbar />
        <Headerimage
          backgroundImageUrl="https://images.unsplash.com/photo-1642903639926-7720f78fad09?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="About Us"
        />

        {/* About Us Content */}
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center md:items-start my-12">
            {/* Left Side Content */}
            <div className="md:w-1/2 p-10">
              <h2 className="text-5xl font-neopixelregular font-semibold reveal-heading">
                SPLIX
              </h2>

              <p className="mt-4 reveal-text">
                At Splix®, we are dedicated to redefining the future of digital design and development. As a forward-thinking company, we specialize in crafting innovative, high-end digital experiences that merge creativity with technology. Our work spans a diverse range of digital solutions, from interactive web applications to immersive mobile experiences.
              </p>

              <p className="mt-4 reveal-text">
                With a commitment to excellence, we leverage the latest industry tools and technologies to bring visionary ideas to life. Our team of skilled developers, designers, and strategists collaborate to deliver products that stand out in an ever-evolving digital landscape.
              </p>

              <p className="mt-4 reveal-text">
                Innovation lies at the heart of everything we do. By harnessing advanced development frameworks and design principles, we aim to push boundaries and set new standards in user experience, interface design, and application performance.
              </p>

              <p className="mt-4 reveal-text">
                At Splix®, we don&apos;St just create digital solutions — we shape the future of how people interact with technology. Our mission is to innovate today and tomorrow, delivering groundbreaking projects that leave a lasting impact.
              </p>
            </div>

            {/* Right Side Content (Image + Company Details) */}
            <div id="Image" className="md:w-80 p-4 left-60 relative group">
              <Image
                src="/SVG/SplitXlogo-Main-black.svg"
                alt="Founder"
                width={400}
                height={400}
                className="rounded-lg shadow-lg transition-opacity duration-300"
              />


            </div>
          </div>

              {/* Company Details */}
              <div className="mt-6 p-6  text-white rounded-lg shadow-lg grid   gap-4">
            {/* Left Column */}
            <div className=" col-auto space-y-4">
              <p  >
                <strong className='p-5' >Name:</strong> Splix
              </p>
              <p>
                <strong className='p-5'>Address:</strong> A-25/1, Gokul Nagar, near Jadshwar Mahdev Temple,
                Adinathnagar, Odhav, Ahmedabad
              </p>
              <p>
                <strong className='p-5'>Postal Code:</strong> 382415
              </p>
              <p>
                <strong className='p-5'>Established:</strong> October 22, 2024
              </p>
              <p>
                <strong className='p-5'>Founder & CEO:</strong> Akshar Patel
              </p>
            </div>

            {/* Right Column */}
            <div className='flex'>
              <h4 className="text-lg p-5 font-semibold mb-4">Business :</h4>
              <ul className="list-disc pl-20 p-5  space-y-3">
                <li className="pl-2 ">Web Development</li>
                <li className="pl-2">Web Application Development</li>
                <li className="pl-2">Mobile Application Development</li>
                <li className="pl-2">UX/UI Design</li>
                <li className="pl-2">Markting</li>
                <li className="pl-2">Branding</li>
              </ul>
            </div>
          </div>


        </div>

        {/* Footer */}
        <Footer />
      </main>
    </DeviceCheck>
  );
};

export default AboutUs;
