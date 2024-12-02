'use client';
import { useEffect, useState } from "react";
import { GoArrowUp, GoArrowDown } from "react-icons/go";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const progress = (scrollTop / (scrollHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      // Detect footer visibility
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const isVisible = footerTop <= windowHeight; // Footer is visible when its top is within the viewport
        setIsFooterVisible(isVisible);
      }
    };

    window.addEventListener("scroll", updateScrollState);
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollTo = (direction) => {
    if (direction === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-9 right-9 z-40 flex items-center justify-center w-16 h-16">
      <div className="relative w-16 h-16">
        {/* Background circle */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>

        {/* Progress circle */}
        <svg className="w-full h-full rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="30%"
            fill="none"
            stroke="#84cc16"
            strokeWidth="0.3rem"
            strokeDasharray="188"
            strokeDashoffset={`${188 - (scrollProgress / 100) * 188}`}
            strokeLinecap="round"
          />
        </svg>

        {/* Dynamic Arrow */}
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={() => scrollTo(isFooterVisible ? "top" : "bottom")}
        >
          {isFooterVisible ? (
            <GoArrowUp className="text-3xl text-lime-500" />
          ) : (
            <GoArrowDown className="text-3xl text-lime-500" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;
