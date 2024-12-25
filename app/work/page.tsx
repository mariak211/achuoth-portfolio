// "use client";

// import { experience } from "@/Constants";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
// import Image from "next/image";

// const work = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
//       }}
//       className="h-screen flex items-center justify-center"
//     >
//       <Swiper
//         modules={[Navigation, Pagination]}
//         navigation
//         pagination={{ clickable: true }}
//         className="w-full h-full"
//         spaceBetween={50}
//         slidesPerView={1}
//       >
//         {experience.items.map((item, index) => (
//           <SwiperSlide
//             key={index}
//             className="flex items-center justify-center h-full p-16 text-accent"
//           >
//             <div className="w-full h-full flex flex-col xl:flex-row justify-between items-center bg-gray-800 text-white p-8 shadow-lg rounded-sm">
//               {/* Content Section */}
//               <div className="w-full xl:w-1/2 h-full flex flex-col justify-center text-center xl:text-left mb-8 xl:mb-0 sm:h-full">
//                 <h3 className="text-4xl font-bold mb-4">{item.position}</h3>
//                 <div className="flex items-center gap-4 mb-2">
//                   {/* Icon */}

//                   <Image
//                     src={item.icon}
//                     alt={`${item.company} logo`}
//                     className="w-24 h-24 object-contain rounded-md shadow-sm bg-gray-600"
//                     width={64}
//                     height={64} // Adjusted size for better alignment
//                   />

//                   {/* Text Section */}
//                   <div className="flex flex-col justify-center text-left mb-2">
//                     {/* Company Name */}
//                     <span className="text-white text-lg font-semibold">
//                       {item.company}
//                     </span>

//                     {/* Location and Period */}
//                     <div className="flex justify-center xl:justify-start items-center gap-4 text-sm text-white/60 mb-6">
//                       <div className="flex items-center gap-2 text-accent">
//                         <FaMapMarkerAlt />
//                         <span>{item.location}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <FaRegCalendarAlt />
//                         <span>{item.duration}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <p className="text-base mb-6">{item.description}</p>
//                 <p className="text-base mb-6">{item.summary}</p>
//                 <h4 className="text-2xl text-accent font-semibold mb-4">
//                   Tools & Technologies
//                 </h4>
//                 <ul className="flex gap-4 flex-wrap">
//                   {item.stack.map((tech, idx) => (
//                     <li
//                       key={idx}
//                       className="bg-accent text-black text-sm py-2 px-4 rounded-lg shadow-md"
//                     >
//                       {tech.name}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               {/* Image Section */}
//               <div className="w-full xl:w-1/2 h-full flex justify-center items-center">
//                 <img
//                   src={item.image}
//                   alt={`${item.company} project`}
//                   className="rounded-xl shadow-lg object-contain w-full h-full max-h-[600px]"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </motion.div>
//   );
// };

// export default work;

// "use client";

// import { experience } from "@/Constants";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
// import Image from "next/image";

// const Work = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
//       }}
//       className="h-screen flex items-center justify-center"
//     >
//       <Swiper
//         modules={[Navigation, Pagination]}
//         navigation
//         pagination={{ clickable: true }}
//         className="w-full h-full"
//         spaceBetween={30}
//         slidesPerView={1}
//       >
//         {experience.items.map((item, index) => (
//           <SwiperSlide
//             key={index}
//             className="flex items-center justify-center h-full p-4 sm:p-8 text-accent"
//           >
//             <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center bg-gray-800 text-white p-6 sm:p-8 shadow-lg rounded-md">
//               {/* Content Section */}
//               <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left mb-8 lg:mb-0">
//                 <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
//                   {item.position}
//                 </h3>
//                 <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
//                   {/* Icon */}
//                   <Image
//                     src={item.icon}
//                     alt={`${item.company} logo`}
//                     className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-md shadow-sm bg-gray-600"
//                     width={96}
//                     height={96}
//                   />

//                   {/* Text Section */}
//                   <div className="flex flex-col justify-center text-left">
//                     {/* Company Name */}
//                     <span className="text-white text-lg sm:text-xl font-semibold">
//                       {item.company}
//                     </span>

//                     {/* Location and Period */}
//                     <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-white/60">
//                       <div className="flex items-center gap-2 text-accent">
//                         <FaMapMarkerAlt />
//                         <span>{item.location}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <FaRegCalendarAlt />
//                         <span>{item.duration}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <p className="text-sm sm:text-base mb-4">{item.description}</p>
//                 <p className="text-sm sm:text-base mb-6">{item.summary}</p>
//                 <h4 className="text-lg sm:text-xl lg:text-2xl text-accent font-semibold mb-4">
//                   Tools & Technologies
//                 </h4>
//                 <ul className="flex gap-2 sm:gap-4 flex-wrap justify-center lg:justify-start">
//                   {item.stack.map((tech, idx) => (
//                     <li
//                       key={idx}
//                       className="bg-accent text-black text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-lg shadow-md"
//                     >
//                       {tech.name}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Image Section */}
//               <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
//                 <img
//                   src={item.image}
//                   alt={`${item.company} project`}
//                   className="rounded-xl shadow-lg object-contain w-full max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </motion.div>
//   );
// };

// export default Work;
"use client";

import { experience } from "@/Constants";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex flex-col items-center justify-start"
    >
      {/* Title Section */}
      <div className="w-full text-center py-4">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          {experience.title}
        </h3>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
        spaceBetween={30}
        slidesPerView={1}
      >
        {experience.items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-full p-4 sm:p-8 text-accent"
          >
            <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center bg-gray-800 text-white p-6 sm:p-8 shadow-lg rounded-md">
              {/* Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left mb-8 lg:mb-0">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  {item.position}
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                  {/* Icon */}
                  <Image
                    src={item.icon}
                    alt={`${item.company} logo`}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-md shadow-sm bg-gray-600"
                    width={96}
                    height={96}
                  />

                  {/* Text Section */}
                  <div className="flex flex-col justify-center text-left">
                    {/* Company Name */}
                    <span className="text-white text-lg sm:text-xl font-semibold">
                      {item.company}
                    </span>

                    {/* Location and Period */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-2 text-accent">
                        <FaMapMarkerAlt />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaRegCalendarAlt />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base mb-4">{item.description}</p>
                <p className="text-sm sm:text-base mb-6">{item.summary}</p>
                <h4 className="text-lg sm:text-xl lg:text-2xl text-accent font-semibold mb-4">
                  Tools & Technologies
                </h4>
                <ul className="flex gap-2 sm:gap-4 flex-wrap justify-center lg:justify-start">
                  {item.stack.map((tech, idx) => (
                    <li
                      key={idx}
                      className="bg-accent text-black text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-lg shadow-md"
                    >
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
                <img
                  src={item.image}
                  alt={`${item.company} project`}
                  className="rounded-xl shadow-lg object-contain w-full max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Work;
