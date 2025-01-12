'use client';
import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ projectImage, title,projectName, description, link }) {
  const imageRef = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden">
      <a href={link} target="_self">
        <Image
          ref={imageRef}
          src={projectImage}
          alt={title}
          layout="responsive"
          width={500}
          height={600}
          className="transition duration-500 rounded-xl ease-in-out transform hover:scale-105"
        />
      </a>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{projectName}</h3>
        <p className="text-gray-400 text-xs">{description}</p>
      </div>
    </div>
  );
}
