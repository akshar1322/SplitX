'use client';
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WhereCreativityThrives = () => {
  const sections = [
    {
      id: 1,
      title: "Innovative Designs",
      image: "/Image/Image-hero/1.jpg",
    },
    {
      id: 2,
      title: "Creative Solutions",
      image: "/Image/Image-hero/2.jpg",
    },
    {
      id: 3,
      title: "Unique Experiences",
      image: "/Image/Image-hero/3.jpg",
    },
    {
      id: 4,
      title: "Collaborative Work",
      image: "/Image/Image-hero/4.jpg",
    },
    {
      id: 5,
      title: "Sustainable Ideas",
      image: "/Image/Image-hero/5.jpg",
    },
  ];

  useEffect(() => {
    // GSAP animations for hover effect
    const handleMouseMove = (e) => {
      const xPos = e.clientX / window.innerWidth;
      const yPos = e.clientY / window.innerHeight;

      // Move the images based on cursor movement (parallax effect)
      gsap.to(".section-image", {
        x: (xPos - 0.5) * 50, // Move in X direction
        y: (yPos - 0.5) * 50, // Move in Y direction
        duration: 0.5,
      });
    };

    // Add mousemove listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when component is unmounted
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen">
      <main className="flex flex-col items-center justify-start">
        {/* Title */}
        <div className="text-center mt-20 w-full">
          <h1 className="text-9xl font-extrabold mb-4">Where Creativity Thrives</h1>
        </div>

        {/* Section Divs */}
        <div className="w-full px-10 mt-20 space-y-20">
          {sections.map((section) => (
            <div
              key={section.id}
              className="relative w-full flex flex-col items-center"
              style={{ overflow: "hidden" }}
            >
              {/* Title and Bottom Line */}
              <div className="w-full flex flex-col items-center">
                <h1 className="text-9xl font-extrabold">{section.title}</h1>
                <div className="w-full h-[5px] mt-2 bg-green-500"></div>
              </div>

              {/* Image with dynamic hover effect */}
              <div className="relative w-full h-[300px] mt-10">
                <Image
                  src={section.image}
                  alt={section.title}
                  layout="fill"
                  objectFit="cover"
                  className="section-image rounded-lg opacity-70 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WhereCreativityThrives;
