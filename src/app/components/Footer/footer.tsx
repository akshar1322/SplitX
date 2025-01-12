"use client";
import { useEffect, useState, useRef } from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaCookieBite } from "react-icons/fa";
import Link from "next/link";
import gsap from "gsap";

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const footerContentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (footerContentRef.current) {
      footerContentRef.current.style.opacity = "1";
      footerContentRef.current.style.transform = "translateY(0)";
    } else {
      console.error("Footer content ref is not defined.");
    }
  }, []);

  useEffect(() => {
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        rotation: 360,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);

  const footerLinks = [
    {
      title: "FOLLOW US",
      links: [
        { name: "Instagram", href: "https://www.instagram.com/splixtech?igsh=MTZyZmxjeml4MG0yYg==" },
        { name: "X", href: "https://x.com/SplixTech?t=em9kASWMdz5KpmlCggxkxg&s=08" },
        { name: "Bēhance", href: "https://www.behance.net/aksharpatel24" },
        { name: "Dribbble", href: "https://dribbble.com/Akshar_09" },
        { name: "GitHub", href: "https://github.com/akshar1322" }
      ]
    },
    {
      title: "NAVIGATION",
      links: [
        { name: "Services", href: "/Service" },
        { name: "About", href: "/about-us" },
        { name: "Just For Fun", href: "/just-for-fun" },
        { name: "Tea Time with Us", href: "/enquiry" },
      ]
    }
  ];

  return (
    <footer className="relative bg-black font-PoppinsRegular text-white p-10 md:p-16 lg:p-24 overflow-hidden">
      {/* Rotating SVG Background */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0 opacity-50">
        <svg
          ref={svgRef}
          width="350"
          height="350"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0_332_180" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
            <path d="M0 0H200V200H0V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_332_180)">
            <path
              d="M99.8886 91.8932L100.885 91.8967C105.333 41.2371 147.745 1.4705 199.499 1.21524C199.242 53.2111 159.103 95.7776 108.107 99.8886L108.103 100.885C158.762 105.333 198.529 147.745 198.785 199.499C146.789 199.242 104.222 159.103 100.111 108.107L99.1149 108.103C94.6667 158.762 52.2546 198.529 0.501236 198.785C0.757689 146.789 40.8956 104.222 91.8942 100.111L91.8977 99.1149C41.2381 94.6667 1.47051 52.2546 1.21524 0.501236C53.2111 0.757695 95.7776 40.8966 99.8886 91.8932ZM99.5119 99.8807L99.3848 100.389L99.8989 100.492L99.9039 100.493L100.394 100.591L100.492 100.101L100.493 100.096L100.613 99.498H100.003H99.998H99.6076L99.5129 99.8767L99.5119 99.8807Z"
              stroke="#6A516C"
            />
          </g>
        </svg>
      </div>

      <div
        ref={footerContentRef}
        className="footer-content relative flex flex-col md:flex-row justify-between items-start opacity-0 transform translate-y-10 duration-1000 z-10"
      >
        {/* Left Links Section */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 mb-8 md:mb-0 w-full md:w-auto">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lime-500 font-PoppinsSemiBold text-2xl uppercase mb-4">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="mb-2 cursor-pointer hover:translate-x-1 transition-transform duration-300">
                    <Link className="hover:text-lime-500 text-2xl" target="_blank" href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-left md:text-right mb-8 md:mb-0">
          <h3 className="text-lime-500 font-PoppinsSemiBold text-2xl uppercase mb-4">
            LET&apos;S CONNECT
          </h3>
          <p
            className="text-2xl md:text-5xl font-PoppinsLight mb-5 cursor-pointer hover:text-lime-500 transition-colors"
            onClick={() => window.location.href = "mailto:aksharpatel528@gmail.com"}
          >
            aksharpatel528@gmail.com
          </p>
          <p
            className="text-2xl md:text-5xl font-PoppinsLight cursor-pointer hover:text-lime-500 transition-colors"
            onClick={() => window.location.href = "https://wa.me/6352191174"}
          >
            +91 6352 191 174
          </p>
        </div>
      </div>

      {/* Bottom Line with Hover Effect */}
      <div className="w-full h-1 mt-4 bg-black group relative">
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-r from-orange-500 to-yellow-500  scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
      </div>

      {/* Bottom Copyright and Info */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 font-PoppinsMedium text-sm text-gray-500 space-y-4  uppercase md:space-y-0">
        <p> V SX-ACT 30r.mx.50.1</p>
        <p> © {currentYear} Splix llc. All rights reserved.</p>
        <div className="flex items-center  space-x-3">
          <span className="transform rotate-180 font-PoppinsThin transition-transform duration-300">🌐</span>
          <p className="text-lg md:text-2xl">Based in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
