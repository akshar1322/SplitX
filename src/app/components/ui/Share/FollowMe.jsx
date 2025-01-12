import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
const SocialMediaCard = ({ icon, link, name, bgColor, textColor }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { x: -150, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  const handleHover = () => {
    gsap.to(iconRef.current, { scale: 1.2, color: "#000", duration: 0.3 });
  };

  const handleLeave = () => {
    gsap.to(iconRef.current, { scale: 1, color: textColor, duration: 0.3 });
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <div
        ref={cardRef}
        className={`p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-transform relative`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          height: "250px",
          width: "100%",
        }}
      >
        <span className="absolute top-5 uppercase left-5 text-2xl font-PoppinsMedium">{name}</span>
        <div
          ref={iconRef}
          className="absolute bottom-3 right-3  text-3xl"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {typeof icon === "string" ? (
            <Image src={icon} alt={name} width={10} height={10} className="w-9 h-9" />
          ) : (
            icon
          )}
        </div>
      </div>
    </a>
  );
};

export default function FollowMe() {
  useEffect(() => {
    gsap.fromTo(
      ".heading",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  const socialMediaLinks = [
    {
      name: "X",
      icon: "/icons/X.svg",
      link: "https://facebook.com",
      bgColor: "#ffffff",
      textColor: "#000000",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram.svg",
      link: "https://instagram.com",
      bgColor: "#ffffff",
      textColor: "#000000",
    },
    {
      name: "linkedin",
      icon: "/icons/linkedin.svg",
      link: "https://tiktok.com",
      bgColor: "#ffffff",
      textColor: "#000000",
    },
    {
      name: "behance",
      icon: "/icons/behance.svg",
      link: "https://tiktok.com",
      bgColor: "#ffffff",
      textColor: "#000000",
    },
    {
      name: "dribbble",
      icon: "/icons/dribbble.svg",
      link: "https://tiktok.com",
      bgColor: "#ffffff",
      textColor: "#000000",
    },
    {
      name: "fiverr",
      icon: "/icons/fiverr.svg",
      link: "https://tiktok.com",
      bgColor: "#ffffff",
      textColor: "#000000",
    },
    {
      name: "Contra",
      icon: "/icons/Contra.svg",
      link: "https://tiktok.com",
      bgColor: "#ffffff",
      textColor: "#000000",
    },
    {
      name: "Drop me a line",
      icon: "/icons/arrow.svg",
      link: "/enquiry",
      bgColor: "#7CFC00",
      textColor: "#000000",
    },
    // Add more links as needed
  ];

  return (
    <div className="relative min-h-screen font-PoppinsRegular bg-black text-white p-8">
      <h1 className="heading text-yellow-500 uppercase text-2xl mb-4">[SX]  Touch base with me</h1>
      <p className="mb-8 uppercase text-6xl   ml-10">
        Hmm, not texting me? What are you even doing with your life? Go follow
        me everywhere online, okay~!
      </p>
      <div className="grid grid-cols-1 mt-28 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialMediaLinks.map((social, index) => (
          <SocialMediaCard
            key={index}
            icon={social.icon}
            link={social.link}
            name={social.name}
            bgColor={social.bgColor}
            textColor={social.textColor}
          />
        ))}
      </div>
    </div>
  );
}
