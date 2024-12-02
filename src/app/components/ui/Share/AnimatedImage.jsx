'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedImage = ({ src, alt, className }) => {
  const boxRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: 'top 80%', // Animation starts when 80% of the viewport enters
        end: 'bottom 20%', // Animation ends when the box leaves 20% of the viewport
        scrub: true, // Enables animation to play smoothly based on scroll direction
        toggleActions: 'restart pause reverse pause', // Allows play and reverse based on scroll direction
      },
    });

    // GSAP Animation Sequence
    timeline
      .fromTo(
        boxRef.current,
        { x: 100, opacity: 0 }, // Box starts slightly to the right and invisible
        { x: 0, opacity: 1, duration: 1 } // Slides into position and becomes visible
      )
      .fromTo(
        imageRef.current,
        {
          x: 500, // Start the image reveal from the right
          scale: 1.2, // Initially zoomed in
          opacity: 0, // Fully transparent
        },
        {
          x: 0, // Moves to its final position
          opacity: 1, // Becomes visible
          duration: 1, // Reveal duration
        },
        '<' // Synchronize with the previous animation
      )
      .to(
        imageRef.current,
        {
          scale: 1.5, // Further zooms in
          duration: 1.5,
        },
        '>' // Starts after the previous animations are complete
      );
  }, []);

  return (
    <div
      ref={boxRef}
      className={`relative overflow-hidden bg-transparent p-4 ${className}`}
    >
      <div
        ref={imageRef}
        className="reveal-box__image w-full h-full overflow-hidden"
      >
        <Image
          src={src}
          alt={alt}
          width={1000} // Adjust width
          height={1000} // Adjust height
          className="object-cover "
        />
      </div>
    </div>
  );
};

export default AnimatedImage;
