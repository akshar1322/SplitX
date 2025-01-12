"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const EclipseBackground = ({
  sizePercentage = 100,
  rows = 20,
  columns = 50,
  animatedCount = 500,
}) => {
  const eclipseSize = (sizePercentage / 100) * 15; // Base size is 15px for 100%
  const defaultEclipseSize = 20; // Default size for the eclipse
  const minEclipseSize = 1; // Minimum size for the eclipse
  const maxEclipseSize = 12; // Maximum size for the eclipse

  const totalEclipses = rows * columns;
  const eclipses = Array.from({ length: totalEclipses }, (_, index) => index); // Create eclipses based on rows and columns

  // Randomly select eclipses to animate
  const animatedEclipseIndices = new Set();
  while (animatedEclipseIndices.size < animatedCount) {
    animatedEclipseIndices.add(Math.floor(Math.random() * totalEclipses));
  }

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    animatedEclipseIndices.forEach((index) => {
      const randomScale =
        Math.random() * (maxEclipseSize - minEclipseSize) + minEclipseSize; // Random scale

      timeline.to(`#eclipse-${index}`, {
        scale: randomScale / defaultEclipseSize,
        duration: 1,
        ease: "power1.inOut",
        repeat: 1,
        yoyo: true,
      });
    });

    return () => {
      timeline.kill(); // Clean up the timeline on unmount
    };
  }, [animatedEclipseIndices]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://videos.pexels.com/video-files/4763826/4763826-uhd_2732_1440_24fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Background Music */}
      <audio autoPlay loop>
        <source
          src="/Music/Colorplast.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio tag.
      </audio>

      {/* Eclipse Animation */}
      <div
        className="absolute top-3 left-2 w-full h-full grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`, // Create columns based on the prop
          gridTemplateRows: `repeat(${rows}, 1fr)`, // Create rows based on the prop
        }}
      >
        {eclipses.map((_, index) => (
          <motion.div
            key={index}
            id={`eclipse-${index}`}
            className="bg-lime-500 rounded-full"
            style={{
              width: `${eclipseSize}px`,
              height: `${eclipseSize}px`,
              position: "relative",
              borderRadius: "50%",
              scale: animatedEclipseIndices.has(index) ? 1 : 0.5, // Default size for non-animated eclipses
              animation: animatedEclipseIndices.has(index)
                ? `pulse 250ms infinite ease-in-out`
                : "none",
              transformOrigin: "center",
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default EclipseBackground;
