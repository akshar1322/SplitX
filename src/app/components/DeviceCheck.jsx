// File: components/DeviceCheck.jsx
"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

const DeviceCheck = ({ children }) => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsSmallDevice(window.innerWidth < 768); // Mobile and tablet breakpoint
    };

    checkDevice(); // Initial check
    window.addEventListener("resize", checkDevice); // Re-check on resize

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (isSmallDevice) {
      gsap.fromTo(
        ".device-warning",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [isSmallDevice]);

  if (isSmallDevice) {
    return (
      <div className="device-warning fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white text-center p-6">
        <h1 className="text-2xl font-PoppinsMedium font-bold mb-4">This Website is Unavailable</h1>
        <p className="text-lg">
          Please use a desktop or laptop for the best experience.
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default DeviceCheck;
