'use client';
import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ projectImage, title, projectName, tag, link }) {
  const imageRef = React.useRef(null);
  const cardRef = React.useRef(null); // Reference to the card container for animation

  React.useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 1, y: 100 }, // Start from the bottom
      {
        opacity: 1,
        y: 0, // Move to the original position
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: true,
          once: true, // Trigger the animation only once
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative rounded-lg shadow-lg overflow-hidden mb-6" // Added bottom margin for spacing between items
    >
      <a href={link} target="_self" className="block">
        {/* Parent div with hover effect */}
        <div className="relative rounded-2xl overflow-hidden group">
          <Image
            ref={imageRef}
            src={projectImage}
            alt={title}
            layout="responsive"
            width={500}
            height={600}
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          />
        </div>
      </a>

      <div className="p-4">
        <h3 className="text-lg capitalize font-semibold mb-2">{projectName}</h3>
        <p className="text-gray-400 text-xs">{tag}</p>
      </div>
    </div>
  );
}
