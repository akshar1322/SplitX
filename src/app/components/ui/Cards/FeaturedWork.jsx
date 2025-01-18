'use client';
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FeaturedWork = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // GSAP animation for the heading
    gsap.fromTo(
      ".section-title",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section-title",
          start: "top 80%",
        },
      }
    );

    // GSAP animation for the cards (fade in)
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".card",
          start: "top 80%",
        },
      }
    );
  }, []);

  const projects = [
    {
      id: 1,
      title: "Invoice-Mate",
      description: "WebApp Development, Management and tracking",
      link: "/projects/invoicemate",
      image: "/Projects/Invoice-Mate.svg", // Example image path
    },
    {
      id: 2,
      title: "Wobble Chat",
      description: "ChatingApp Development, UI/UX",
      link: "/projects/wobblechat",
      image: "/Projects/Wobble-Chat.svg", // Example image path
    },
    {
      id: 3,
      title: "Entire Games",
      description: "Gaming Studio Development, UI/UX",
      link: "projects/entiregames",
      image: "/Projects/entire-games.svg", // Example image path
    },
  ];

  const Card = ({ project, className }) => (
    <div
      className={`relative ${className} bg-gray-800 rounded-lg cursor-pointer transition-transform duration-500 hover:scale-105 card`}
      onMouseEnter={() => setHoveredCard(project.id)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => (window.location.href = project.link)}
    >
      <Image
        src={project.image}
        alt={project.title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 rounded-lg opacity-70"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">{project.title}</h2>
        <p className="text-sm sm:text-base lg:text-lg">{project.description}</p>
      </div>

      {hoveredCard === project.id && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-yellow-500 w-[200px] h-[5px] transition-all duration-100"></div>
      )}
    </div>
  );

  return (
    <div className="relative rounded-br-[45rem] bg-black text-white min-h-screen">
      <main className="flex flex-col items-center justify-start">
        {/* Section Title */}
        <div className="mt-10 text-center section-title px-4 sm:px-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2">
            Featured Work
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light">
            Where Creativity Meets Excellence
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-[50px] px-4 sm:px-10 w-full">
          <div className="flex flex-wrap justify-between gap-1">
            {/* Adjust card widths for different screen sizes */}
            {projects.slice(0, 2).map((project) => (
              <Card
                key={project.id}
                project={project}
                className="w-full sm:w-[48%] lg:w-[48%] h-[60vh] sm:h-[70vh] lg:h-[80vh]"
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-between gap-8 mt-8">
            <Card
              key={projects[2].id}
              project={projects[2]}
              className="w-full sm:w-[48%] lg:w-[100%] h-[60vh] sm:h-[70vh] lg:h-[80vh]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeaturedWork;
