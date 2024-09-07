"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const myskills = [
  {
    num: "01",
    title: "Mobile iOS Development",
    description:
      "3+ years of internship experience in creating high performance and human-centric iOS applications",
    href: "",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Build highly scalable and reliable backend service for NilePay. An API services destined to empower South Sudanese diaspora community in their quest to deliver their financial supports to their loved ones back home.",
    href: "",
  },
  {
    num: "03",
    title: "Full Stack Development",
    description:
      "Over a year of full stack development experience in creating small to medium full stack applications including my personal website as well as Nilepay web application.",
    href: "",
  },
];

const skills = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {myskills.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                </div>
                {/* title */}
                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default skills;
