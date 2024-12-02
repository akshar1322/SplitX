'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Clients = () => {
  const clientLogos = [
    { id: 1, image: "./SVG/B&Y.svg", link: "/" },
    { id: 2, image: "./SVG/entire games.svg", link: "/" },
    { id: 3, image: "./SVG/Invoice Mate.svg", link: "/" },
    { id: 4, image: "./SVG/Sounds scape.svg", link: "/" },
    { id: 5, image: "./SVG/VipBachchu.svg", link: "/" },
    { id: 6, image: "./SVG/Wobble Chat.svg", link: "/" },

  ];

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP ScrollTrigger for title and tagline reveal
    gsap.fromTo(
      ".clients-title, .clients-tagline",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".clients-title",
          start: "top 80%", // Trigger when the element reaches 80% from the top of the viewport
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    // GSAP ScrollTrigger for client logos reveal
    gsap.fromTo(
      ".client-logo",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".client-logo",
          start: "top 80%", // Trigger when the element reaches 80% from the top of the viewport
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen">
      <main className="flex flex-col items-center justify-start">
        {/* Title and Tagline */}
        <div className="mt-20 text-center w-full p-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 clients-title">
            The Heart of Our Journey
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light clients-tagline">
            Building Lasting Relationships Beyond Business
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-20 mb-20 px-1 w-full max-w-screen-xl">
          {clientLogos.map((client) => (
            <Link key={client.id} href={client.link} passHref>
              <div
                className="relative w-fit h-36 cursor-pointer rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300 client-logo"
                onClick={() => window.open(client.link, "_blank")}
              >
                <Image
                  src={client.image}
                  alt={`Client ${client.id}`}
                  width={100} // Image width
                  height={100} // Image height
                  objectFit="contain"
                  className="rounded-lg  w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Green Line */}
        <div className="w-full h-[5px] mt-10 rounded-tl-[45rem] bg-gradient-to-r from-transparent via-green-500 to-transparent blur-sm shadow-lg" />
      </main>
    </div>
  );
};

export default Clients;
