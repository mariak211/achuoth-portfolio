"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const testimonials = [
  {
    imgurl: "/assets/testimonials/georgedunning.jpeg",
    name: "George Dunning",
    company: "Canada Post",
    interest: "Co-op Supervisor, Product Management & CX Innovation",
    feedback: "You are a Rockstar Mariak!!.",
  },
  {
    imgurl: "/assets/testimonials/innovapostSendoff.jpeg",
    name: "Innovapost Mobile team",
    interest: "Mobile Platform",
    company: "Innovapost",
    feedback:
      "Thank you Mariak for your amazing work and being our co-op student of the term winner! We are excited for you and the future ahead of you!!",
  },
  {
    imgurl: "/assets/testimonials/cathy.svg",
    name: "Cathy Phung",
    interest: "Co-op supervisor, Digital Product Manager",
    company: "Canada Post",
    feedback:
      "Thanks you Mariak for the amazing work at Canada Post. You have gone above and beyond our expectation.",
  },
  {
    imgurl: "/assets/testimonials/nancy.svg",
    name: "Nancy",
    interest: "UX & UI Design Manager",
    company: "Innovapost",
    feedback:
      "It was amazing having you on our team. I was really impressed by your migration roadmap for the Canada Post app's dark mode",
  },
];

const Testimonials = () => {
  const [testimonial, setProject] = useState(testimonials[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(testimonials[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-3xl leading-none font-extrabold text-transparent text-outline">
                {testimonial.name}
              </div>
              {/* project category */}
              <h2 className="text-[12px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {testimonial.interest}
              </h2>
              {/* Testimonials */}
              <p className="text-white/60">{testimonial.feedback}</p>
              {/* stack */}
              <li className="text-xl text-accent">{testimonial.company}</li>
              <div className="border border-white/20"></div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {testimonials.map((testimonial, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={testimonial.imgurl}
                          fill
                          className="object-contain"
                          alt="Project Image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
