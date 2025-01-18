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
  const contactus = () => {
    window.open('/enquiry', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-black text-white w-[70%] h-[70%] p-8 rounded-lg shadow-lg relative flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-4 text-white text-xl font-bold"
            >
              &times;
            </button>

            {/* Text Section (Left) */}
            <div className="flex-1 p-6 flex flex-col justify-center">
              <h2 className="font-bold text-5xl mb-4 text-center md:text-left">
                WANT 20% OFF?
              </h2>
              <p className="text-gray-300 text-lg mb-6 text-center md:text-left">
                Connect with us on WhatsApp to claim your exclusive discount!
              </p>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/6352191174"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-[#25D366] text-white text-lg font-semibold py-3 px-8 rounded-md mb-4 hover:bg-[#1ab551] transition text-center"
              >
                CLAIM NOW ON WHATSAPP
              </a>

              {/* Contact Us Button */}
              <a
                href="#contact"
                onClick={contactus}
                className="w-full md:w-auto bg-lime-300 text-black text-lg font-semibold py-3 px-8 rounded-md mb-4 hover:bg-lime-400 transition text-center"
              >
                CONTACT US
              </a>

              {/* Dismiss Option */}
              <p
                onClick={closePopup}
                className="text-gray-500 text-center md:text-left mt-4 cursor-pointer hover:underline hover:text-red-500 transition"
              >
                No Thanks, I Don&apos;t Want to Save Money
              </p>
            </div>

            {/* Image Section (Right) */}
            <div className="flex-1 relative rounded-md overflow-hidden">
              <Image
                src="/Image/Image-hero/ortiz-1-2500w.webp"
                alt="Exclusive Offer"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
