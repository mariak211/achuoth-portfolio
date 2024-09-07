"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-full h-full relative">
      {/* i age */}
      <motion.div>
        <div className="w-[298px h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="profile picture"
            className="object-contain"
          />
        </div>
      </motion.div>

      <motion.svg
        className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      ></motion.svg>
    </div>
  );
};

export default Profile;
