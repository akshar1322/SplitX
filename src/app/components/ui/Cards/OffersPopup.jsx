/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function OffersPopup() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
      document.body.style.overflow = 'hidden';
    }, 1000);

    return () => {
      clearTimeout(timer);
      // Re-enable scrolling if component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-black text-white  w-[60rem] md:w-[40rem] p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-3 text-white text-xl font-bold"
            >
              &times;
            </button>

            {/* Image Section */}
            <div className="w-full h-40 md:h-80 relative mb-6 rounded-md overflow-hidden">
              <Image
                src="/Image/Image-hero/ortiz-1-2500w.jpg" // Replace with your image
                alt="Exclusive Offer"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Text Section */}
            <div className="text-center">
              <h2 className="font-bold text-3xl mb-3">WANT 20% OFF?</h2>
              <p className="text-gray-300 text-sm mb-5">
                Connect with us on WhatsApp to claim your exclusive discount!
              </p>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/6352191174"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block bg-[#25D366] text-white text-lg font-semibold py-3 rounded-md mb-4 hover:bg-[#1ab551] transition"
              >
                CLAIM NOW ON WHATSAPP
              </a>

              {/* Dismiss Option */}
              <button
                onClick={closePopup}
                className="w-full bg-gray-800 text-gray-400 p-2 rounded-md border border-gray-700 mt-4 hover:bg-red-500 hover:text-white"
              >
                No Thanks, I Don&apos;t Want to Save Money
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
