"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import feedbackData from "../../../data/FeedbackData"; // Import feedback data

const Feedback = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="font-semibold bg-black text-lime-500 p-4">
      
      <div className="p-5">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white text-center">
        Stories Behind Success
        </h1>
        <p
        className="text-lg sm:text-xl md:text-2xl mb-16 font-light clients-tagline text-white text-center"
        >
          Listening to Elevate Every Step Forward
        </p>
      </div>
      <Swiper
        slidesPerView={3} // Show 3 full cards
        spaceBetween={30} // Increase space between cards
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: {
            slidesPerView: 2, // Show 2 cards on smaller screens
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3, // Show 3 cards on medium screens
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, // Show 3 cards on large screens
            spaceBetween: 40,
          },
        }}
      >
        {feedbackData.map((feedback) => (
          <SwiperSlide key={feedback.customerName} >
            <motion.div
               className="group relative
               rounded-tl-xl
               rounded-bl-none
               rounded-tr-none
               rounded-br-xl
               p-8
               border-2 border-gray-600
               shadow-md
               overflow-hidden
               cursor-pointer
               transition-transform duration-300 ease-in-out
               hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => handleCardClick(feedback.projectURL)}
            >

              <Image
                src={feedback.projectImage}
                alt={feedback.customerName}
                width={500} // Increased size for image
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute mt-16 right-0 bg-lime-600 text-white px-8 py-2 bottom-0 text-sm rounded-tl-lg rounded-br-xl">

                {feedback.projectName}

              </div>
              <h2 className="text-xl md:text-2xl text-gray-600 mt-6">
              <samp className="text-lime-400 m-2">{feedback.larow}</samp>
                {feedback.customerName}
                <samp className="text-lime-400 m-2">{feedback.rarow}</samp>
              </h2>
              <p className="text-sm mt-4 mb-5 text-white">
                {feedback.feedbackMessage}
              </p>
            </motion.div>
            <br />
            <br />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex text-xl md:text-2xl lg:text-3xl justify-end space-x-4 mt-4">
        <button
          onClick={handlePrevClick}
          className="bg-black hover:bg-lime-500 text-lime-500 hover:text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-md"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNextClick}
          className="bg-black hover:bg-lime-500 text-lime-500 hover:text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-md"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Feedback;
