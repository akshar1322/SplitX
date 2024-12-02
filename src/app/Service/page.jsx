'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import AnimatedImage from '../components/ui/Share/AnimatedImage';
import FAQSection from '../components/ui/Section/FAQSection';
import AnimatedSVG from '../components/ui/Share/AnimatedSVG';
import Footer from "../components/Footer/footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import Navigationbar from "../components/ui/Navigationbar";
import Headerimage from '../components/ui/Share/Headerimage';
// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: "Creative",
    description:
      "Unleash your brand’s potential with stunning designs and seamless functionality. From web development and online stores to mobile app design and development, we bring your ideas to life using platforms like Shopify, Wix, and Wix Studio.",
    tags: ["Web Development", "Shopify", "Wix", "Mobile App Design", "Mobile App Development", "UI/UX"]
  },
  {
    title: "Development",
    description:
      "Empower your digital presence with cutting-edge technologies. Our expertise in React, Next.js, and JavaScript ensures efficient development, while Three.js and GSAP add dynamic and interactive elements to your projects.",
    tags: ["React", "Next.js", "JavaScript", "HTML & CSS", "API Integration", "Three.js", "GSAP", "Framer Motion"]
  },
  {
    title: "3D & Editing",
    description:
      "Transform your vision with immersive 3D designs and professional editing services. From modeling to animation, we help you create captivating visual content that stands out.",
    tags: ["3D Modeling", "3D Animation", "Blender", "Video Editing", "After Effects", "Motion Graphics"]
  },
  {
    title: "Growth",
    description:
      "Boost your online reach with tailored growth strategies. From SEO and analytics to performance optimization, we help you scale effectively and sustainably.",
    tags: ["SEO", "Analytics", "Performance Optimization", "Marketing Strategy", "Content Creation"]
  }
];

const projects = [
  { id: 1, name: 'B&Y', description: 'Logo, Branding, E-commerce, UX/UI', imageUrl: '/Projects/B&Y-2.jpg' },
  { id: 2, name: 'Sounds Scape', description: 'Logo, Web&Apps, Music, UX/UI', imageUrl: '/Projects/Sounds-scape-2.jpg' },
];

const ServicePage = () => {
  useEffect(() => {
    document.title = 'Service | SPLIXTECH';
    // GSAP ScrollTrigger for service sections
    servicesData.forEach((_, index) => {
      gsap.fromTo(
        `.service-block-${index}`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: `.service-block-${index}`,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      );
    });

    // GSAP ScrollTrigger for Signature Projects
    gsap.fromTo(
      '.project-card',
      { opacity: 0, x: -50, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.project-card',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <>
    <Navigationbar/>
    <ScrollProgress/>
    <Headerimage
    backgroundImageUrl ="https://images.unsplash.com/photo-1589154831836-71fa41c229ce?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    text="Service"
    />
    <div className="min-h-screen font-PoppinsRegular bg-black text-white">
      {/* Small Title */}


      <div className="flex justify-end px-10 py-6">
        <h2 className="text-lg font-PoppinsLight lg:text-lg xl:text-xl font-light">End-to-End Digital Solutions, Crafted Just for You</h2>
      </div>

      {/* Main Heading */}
      <div className="text-center my-10 px-6">
        <motion.h1
          className="text-5xl font-PoppinsSemiBold sm:text-6xl lg:text-7xl font-extrabold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Creativity Designed Just for You
        </motion.h1>
      </div>

      {/* Services Section */}
      <div className="px-10 py-16">
        {servicesData.map((service, index) => (
          <div key={index} className={`service-block-${index}  pb-36 mb-10`

          }><AnimatedSVG/>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column */}
              <div>
                <h3 className="text-3xl lg:text-5xl font-bold">{service.title}</h3>
                <p className="text-gray-400 mt-4 text-lg lg:text-xl">{service.description}</p>
              </div>
              {/* Right Column: Tags */}
              <div className="flex flex-wrap gap-4">
                {service.tags.map((tag, i) => (
                  <button
                    key={i}
                    className="relative px-8 font-PoppinsThin py-2 rounded-full  isolation-auto z-10 border border-white
                      before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full
                      before:hover:right-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square
                      before:hover:scale-150 overflow-hidden before:hover:duration-700 text-white font-semibold"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Reveal Animation */}
      <div className="min-h-screen pl-10  overflow-hidden bg-black text-white flex items-center justify-center">
        <AnimatedImage
          src="https://images.unsplash.com/photo-1649864728256-e1ce28877154?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sample Animation"
          className="w-full h-[40rem] rounded-xl " // Adjust the container dimensions
        />
      </div>

      {/* Signature Projects Section */}
      <div className="px-10 py-20">
        <h3 className="text-3xl lg:text-7xl font-PoppinsBold text-balance mb-10">Signature Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-transparent p-6 rounded-lg project-card shadow-lg">
              <div className="relative w-full h-96">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
              <h4 className="text-xl lg:text-2xl font-PoppinsBold mt-4">{project.name}</h4>
              <p className="text-gray-400 text-lg font-PoppinsLight  lg:text-md">{project.description}</p>
            </div>
          ))}
        </div>
        <AnimatedSVG/>
        <FAQSection/>
      </div>
    </div>
        <Footer />
    </>
  );
};

export default ServicePage;
