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
import DeviceCheck from '../components/DeviceCheck';
import PartnerCarousel from '../components/ui/Share/Partners';
import useDisableInspect from '../hooks/disableInspect';
import useDisableRightClick from '../hooks/useDisableRightClick';
import projects from "../data/projectsData";
import ProjectCard from '../components/ui/Cards/ProjectCard';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: "Creative Design & Development",
    description:
      "Transform your brand’s identity with visually stunning designs and flawless functionality. From responsive web development and feature-rich online stores to innovative mobile app design and development, we craft solutions tailored to your needs using platforms like Shopify, Wix, and Wix Studio.",
    tags: [
      "Web Development",
      "E-commerce",
      "Shopify",
      "Wix",
      "Wix Studio",
      "Mobile App Design",
      "Mobile App Development",
      "UI/UX Design",
      "Brand Identity",
      "Prototyping"
    ]
  },
  {
    title: "Advanced Development",
    description:
      "Empower your digital journey with modern technologies. Our expertise spans React, Next.js, and JavaScript for robust solutions, while tools like Three.js and GSAP add a touch of interactivity and visual dynamism to your projects.",
    tags: [
      "React",
      "Next.js",
      "JavaScript",
      "HTML & CSS",
      "API Integration",
      "Three.js",
      "GSAP",
      "Framer Motion",
      "Responsive Design",
      "Custom Development"
    ]
  },
  {
    title: "Immersive 3D Experiences",
    description:
      "Bring your visions to life with exceptional 3D modeling, rendering, and animations. From product visualization to architectural designs and character creation, our expertise ensures visually captivating and highly engaging content.",
    tags: [
      "3D Modeling",
      "3D Animation",
      "Blender",
      "3D Visualization",
      "3D Rendering",
      "Character Design",
      "Motion Graphics",
      "Product Visualization",
      "Architectural Visualization",
      "CGI",
      "Visual Effects (VFX)",
      "3D Printing Models"
    ]
  },
  {
    title: "Strategic Growth",
    description:
      "Expand your online presence with data-driven growth strategies. From optimizing search engine performance and analytics to crafting impactful marketing campaigns, we help you achieve sustainable growth and measurable results.",
    tags: [
      "SEO",
      "Analytics",
      "Performance Optimization",
      "Marketing Strategy",
      "Content Creation",
      "Social Media Marketing",
      "Campaign Management",
      "Brand Strategy",
      "Digital Advertising"
    ]
  },
  {
    title: "Domain, Hosting & Management",
    description:
      "Streamline your online infrastructure with our comprehensive domain, hosting, and email management services. From securing your perfect domain name to providing reliable hosting solutions and professional email setup, we ensure your digital presence is seamless and hassle-free.",
    tags: [
      "Domain Registration",
      "Web Hosting",
      "Email Hosting",
      "SSL Certificates",
      "Server Management",
      "Website Maintenance",
      "DNS Management",
      "Custom Email Setup",
      "Cloud Hosting",
      "Performance Monitoring"
    ]
  }
];



// Filter and slice projects for display
const allowedIds = [1, 2];
const filteredProjects = projects.filter(project => allowedIds.includes(project.id));


const Service = () => {
  useDisableInspect()
  useDisableRightClick()
  useEffect(() => {
    document.title = 'Service | SPLIX';
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
    <DeviceCheck>
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
                    className="relative px-10 font-PoppinsSemiBold py-2 rounded-full  isolation-auto z-10 border border-white
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
          {/* <PartnerCarousel/> */}
      {/* Image Reveal Animation */}
      <div className="min-h-screen pl-10  overflow-hidden bg-black text-white flex items-center justify-center">

        <Image
        src={"/Image/work-partner.png"}
        alt={"partner"}
        width={1000}
        height={1000}
        className="object-contain"
        />


        {/* <AnimatedImage
          src="https://images.unsplash.com/photo-1649864728256-e1ce28877154?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sample Animation"
          className="w-full h-[40rem] rounded-xl " // Adjust the container dimensions
        /> */}
      </div>

      {/* Signature Projects Section */}
      <div className="px-10 py-20">
        <h3 className="text-3xl lg:text-7xl font-PoppinsBold text-balance mb-10">Signature Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
        <AnimatedSVG/>
        <FAQSection/>
      </div>
    </div>
        <Footer />
    </DeviceCheck>
    </>
  );
};

export default Service;
