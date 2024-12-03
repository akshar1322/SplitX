'use client';
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextSlidingEffect = ({ title = "Experiences" }) => {
  useEffect(() => {
    // Calculate a dynamic `end` based on the text width
    const textWidth = document.querySelector("#page2 h1").offsetWidth;
    const viewportWidth = window.innerWidth;
    const scrollEnd = textWidth > viewportWidth ? `+=${textWidth}` : "top -150%";

    gsap.to("#page2 h1", {
      transform: "translateX(-720%)",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: false,
        start: "top 0%",
        end: "top -950%", // Dynamically calculate end point
        scrub: 2,
        pin: true,
        snap: true
      },
    });
  }, []);

  return (
    <div
      className="relative w-screen  uppercase font-PoppinsSemiBold bg-black text-[40vw] overflow-hidden"
      id="page2"
    >
      <h1 className="text-lime-500 whitespace-nowrap">{title}</h1>
    </div>
  );
};

export default TextSlidingEffect;
