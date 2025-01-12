import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const skillCardsRef = useRef([]);
  const progressBarsRef = useRef([]);

  useEffect(() => {
    const cards = skillCardsRef.current;
    const progressBars = progressBarsRef.current;

    // GSAP Scroll Animation for skill cards
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
      },
    }).to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2,
    });

    // Animate each progress bar
    progressBars.forEach((bar, i) => {
      gsap.to(bar.querySelector(".progress-fill"), {
        width: `${bar.dataset.progress}%`,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cards[i],
          start: "top bottom",
          toggleActions: "play none none reset",
        },
      });

      // Animate the gradient background color of the progress bar
      gsap.to(bar.querySelector(".progress-fill"), {
        background: "linear-gradient(90deg, #22c55e, #a3e635)", // Add the gradient animation here
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cards[i],
          start: "top bottom",
          toggleActions: "play none none reset",
        },
      });
    });

    // Rotate the SVG infinitely
    gsap.to(".svg-rotate", {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Skill data with logo URLs
  const skills = [
    {
      name: "Wix Studio",
      description: "Website builder and design platform",
      progress: 85,
      verifiedPartner: true,
      numbers:"{222}",
      logo: "/Skils/Wix-Studio.svg", // Replace with actual logo path
    },
    {
      name: "Figma",
      description: "UI/UX design tool",
      progress: 85,
      verifiedPartner: false,
      numbers:"{222}",
      logo: "/Skils/figma big.svg", // Replace with actual logo path
    },
    {
      name: "Blender",
      description: "3D modeling, animation, and rendering software",
      progress: 95,
      verifiedPartner: false,
      numbers:"{222}",
      logo: "/Skils/blender_icon_1024x1024.svg", // Replace with actual logo path
    },
  ];

  return (
    <section ref={sectionRef} className="flex h-screen font-PoppinsRegular bg-gray-100">
      {/* Left Panel */}
      <div className="w-1/3 bg-gray-200 flex flex-col justify-center items-start pl-8 relative">
        {/* SVG with rotation */}
        <div className="svg-rotate absolute top-28 right-[21rem]">
          <svg width="450" height="450" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.50123C55.0557 0.769652 99.2303 44.9443 99.4988 99.5H0.5V0.50123Z" stroke="url(#paint0_linear_332_164)" stroke-opacity="0.2"/>
            <path d="M199.506 199.495C144.95 199.226 100.776 155.052 100.507 100.496H199.506V199.495Z" stroke="url(#paint1_linear_332_164)" stroke-opacity="0.2"/>
            <path d="M199.501 0.496094C199.232 55.0518 155.058 99.2265 100.502 99.4949L100.502 0.496094L199.501 0.496094Z" stroke="url(#paint2_linear_332_164)" stroke-opacity="0.2"/>
            <path d="M0.50123 199.5C0.769652 144.944 44.9443 100.77 99.5 100.501L99.5 199.5L0.50123 199.5Z" stroke="url(#paint3_linear_332_164)" stroke-opacity="0.2"/>
            <defs>
              <linearGradient id="paint0_linear_332_164" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0.2" stop-color="#E58A2D"/>
                <stop offset="1" stop-color="#6A516C"/>
              </linearGradient>
              <linearGradient id="paint1_linear_332_164" x1="150.006" y1="199.996" x2="150.006" y2="99.9961" gradientUnits="userSpaceOnUse">
                <stop offset="0.2" stop-color="#E58A2D"/>
                <stop offset="1" stop-color="#6A516C"/>
              </linearGradient>
              <linearGradient id="paint2_linear_332_164" x1="200.002" y1="49.9961" x2="100.002" y2="49.9961" gradientUnits="userSpaceOnUse">
                <stop offset="0.2" stop-color="#E58A2D"/>
                <stop offset="1" stop-color="#6A516C"/>
              </linearGradient>
              <linearGradient id="paint3_linear_332_164" x1="0" y1="150" x2="100" y2="150" gradientUnits="userSpaceOnUse">
                <stop offset="0.2" stop-color="#E58A2D"/>
                <stop offset="1" stop-color="#6A516C"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h2 className="text-2xl uppercase text-gray-700 mb-4">
            Tools & Skills
        </h2>
        <h1 className="text-4xl text-black font-PoppinsBold">My Creative Toolbox</h1>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 p-8 flex flex-col justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillCardsRef.current[index] = el)}
            className="flex flex-col bg-white rounded-lg shadow-lg p-6 mb-6 opacity-0 translate-y-12"
          >
            {/* Skill Header */}
            <div className="flex items-center mb-4">
              {/* Logo */}
              <Image
                src={skill.logo}
                width={12}
                height={12}
                alt={`${skill.name} logo`}
                className="w-12 h-12 mr-4" // Adjust the size of the logo
              />
              {/* Skill Title */}
              <h3 className="text-2xl text-black">{skill.name}</h3>
              {skill.verifiedPartner && (
                <div className="flex items-center bg-yellow-400 text-black text-sm font-medium rounded-lg px-2 py-1 ml-4">
                  <span className="w-3 h-3 rounded-full mr-2"><MdVerified /></span>
                  Verified Partner
                </div>
              )}
            </div>
            {/* Skill Description */}
            <p className="text-gray-500 mt-2">{skill.description}</p>
            {/* Progress Bar */}
            <div
              ref={(el) => (progressBarsRef.current[index] = el)}
              data-progress={skill.progress}
              className="w-full bg-gray-200 rounded-xl overflow-hidden mt-4 relative"
            >
              <div
                className="progress-fill h-2 bg-green-500 rounded-xl"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
