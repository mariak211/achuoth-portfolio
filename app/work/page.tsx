'use client';
import {motion} from 'framer-motion';
import React, {useState} from 'react';
import  {Swiper, SwiperSlide} from 'swiper/react';
import  "swiper/css";
import Link from 'next/link';
import Image from 'next/image';
import {BsArrowUpRight, BsGithub} from 'react-icons/bs'
import { Tooltip,TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const projects = [ 
  {
    num: "01",
    title: "SoulScribe AI",
    category: "backend",
    description: "Ai powered journalling app",
    stack:[
      {
        name: ""
      }
    ]
  },
  {
    num: "01",
    title: "NileRemit",
    category: "backend",
    description: "Ai powered journalling app"
  },
  {
    num: "01",
    title: "NilePay",
    category: "backend",
    description: "Ai powered journalling app"
  }
]

const work = () => {
  return (
    <div>work experience page</div>
  )
}

export default work