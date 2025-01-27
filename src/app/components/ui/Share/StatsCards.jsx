import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const StatsCard = ({ number, label, unit, color, textColor, graphic: Graphic }) => {
  const numberRef = useRef(null);
  const cardRef = useRef(null); // Reference for the card
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  // Count animation with GSAP
  useEffect(() => {
    if (isVisible) {
      const counter = { value: 0 };
      gsap.to(counter, {
        value: number,
        duration: 3,
        onUpdate: () => {
          numberRef.current.textContent = Math.ceil(counter.value) + "+";
        },
        ease: "power3.out",
      });
    }
  }, [isVisible, number]);

  // Intersection Observer to trigger visibility when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef} // Set the ref for intersection observer
      className="w-96 h-64 rounded-2xl shadow-md p-4 flex flex-col items-center justify-center font-PoppinsMedium relative border overflow-hidden"
      style={{
        backgroundColor: color,
        color: textColor,
        borderColor: "#4b5563",
      }}
    >
      {/* Top-left animated number */}
      <div className="absolute top-8 left-8 text-7xl font-bold" ref={numberRef}></div>
      {/* Bottom-right label */}
      <div className="absolute bottom-6 right-9 z-10 text-right">
        <div className="text-base font-PoppinsRegular ">{unit}</div>
        <div className="text-xl text-gray-400 font-semibold">{label}</div>
      </div>
      {/* SVG Graphic */}
      <div
        className="absolute top-[6rem] w-full ml-[4.5rem] items-center justify-center h-auto"
        style={{
          zIndex: 1, // Push SVG to the background
          opacity: 0.4, // Make the SVG slightly transparent
        }}
      >
        <Graphic />
      </div>
    </div>
  );
};

// Custom SVG components styled to match the design
const GreenCircle = () => (
  <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_332_173)">
      <path d="M100 0C103.395 53.76 146.24 96.605 200 100C146.24 103.395 103.395 146.24 100 200C96.605 146.24 53.76 103.395 0 100C53.76 96.605 96.605 53.76 100 0Z" fill="#FFFFFF" fillOpacity="0.5" />
    </g>
    <defs>
      <clipPath id="clip0_332_173">
        <rect width="300" height="300" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const GrayTriangle = () => (
  <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_356_195)">
      <path fillRule="evenodd" clipRule="evenodd" d="M110 0C115.523 0 120 4.477 120 10V27.574C120 36.483 130.771 40.944 137.071 34.644L149.497 22.218C153.403 18.313 159.734 18.313 163.64 22.218L177.782 36.36C181.687 40.266 181.687 46.597 177.782 50.502L165.355 62.93C159.056 69.23 163.517 80.001 172.426 80.001H190C195.523 80.001 200 84.478 200 90.001V110.001C200 115.524 195.523 120.001 190 120.001H172.426C163.517 120.001 159.056 130.772 165.355 137.072L177.782 149.498C181.687 153.404 181.687 159.735 177.782 163.641L163.64 177.783C159.734 181.688 153.403 181.688 149.497 177.783L137.071 165.356C130.771 159.057 120 163.518 120 172.427V190C120 195.523 115.523 200 110 200H90C84.477 200 80 195.523 80 190V172.426C80 163.517 69.229 159.056 62.929 165.355L50.502 177.782C46.597 181.687 40.266 181.687 36.36 177.782L22.218 163.64C18.313 159.734 18.313 153.403 22.218 149.497L34.645 137.071C40.945 130.771 36.483 120 27.574 120H10C4.477 120 0 115.523 0 110V90C0 84.477 4.477 80 10 80H27.574C36.483 80 40.944 69.229 34.644 62.929L22.219 50.502C18.314 46.597 18.314 40.266 22.219 36.36L36.36 22.218C40.266 18.313 46.597 18.313 50.502 22.218L62.93 34.645C69.23 40.945 80.001 36.483 80.001 27.574V10C80.001 4.477 84.478 0 90.001 0H110ZM100 150C127.614 150 150 127.614 150 100C150 72.386 127.614 50 100 50C72.386 50 50 72.386 50 100C50 127.614 72.386 150 100 150Z" fill="#FDFBFB" fillOpacity="0.5" />
    </g>
    <defs>
      <clipPath id="clip0_356_195">
        <rect width="300" height="300" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const WhiteArrow = () => (
  <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_356_192)">
      <path fillRule="evenodd" clipRule="evenodd" d="M120 0H80V51.716L43.431 15.147L15.148 43.431L51.716 80H0V120H51.716L15.147 156.568L43.432 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.431L156.569 15.147L120 51.716V0Z" fill="#DDDCDC" fillOpacity="0.5" />
    </g>
    <defs>
      <clipPath id="clip0_356_192">
        <rect width="300" height="300" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Data for cards
const statsData = [
  {
    number: 49,
    label: "Customer Satisfaction",
    unit: "Percent",
    color: "#82FF1F",
    textColor: "#000",
    graphic: GreenCircle,
  },
  {
    number: 3,
    label: "Years of Experience",
    unit: "Years",
    color: "#1A1A1A",
    textColor: "#fff",
    graphic: GrayTriangle,
  },
  {
    number: 50,
    label: "Projects Completed",
    unit: "Projects",
    color: "#FFFFFF",
    textColor: "#000",
    graphic: WhiteArrow,
  },
];

// Parent Component
const StatsCards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex gap-12">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            number={stat.number}
            label={stat.label}
            unit={stat.unit}
            color={stat.color}
            textColor={stat.textColor}
            graphic={stat.graphic}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsCards;
