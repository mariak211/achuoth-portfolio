
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


const Profile = () => {
  return (
    <div className='w-full h-full relative'>
        {/* i age */}
        <motion.div >
            <div className='w-[298px h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute'>
                <Image 
                src = "/assets/photo.png"
                priority quality={100} fill
                alt='profile picture'
                className='object-contain'
                 />
            </div>
        </motion.div>

        <motion.svg
  className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
  fill="transparent"
  viewBox="0 0 506 506"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#00ff99" />
      <stop offset="50%" stopColor="#ff0066" />
      <stop offset="100%" stopColor="#6600ff" />
    </linearGradient>
  </defs>
  <motion.circle
    cx="253"
    cy="253"
    r="250"
    stroke="url(#gradientStroke)"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ strokeDasharray: "24 10 0 0" }}
    animate={{
      strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
      rotate: [120, 360],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
</motion.svg>
    </div>
  )
}

export default Profile