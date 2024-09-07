"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaApple,
  FaSwift,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import SkillsCard from "./SkillsCard";

const skillList = [
  {
    icon: <FaApple />,
    name: "iOS Development",
  },
  {
    icon: <FaSwift />,
    name: "Swift",
  },
  {
    icon: <FaHtml5 />,
    name: "html 5",
  },
  {
    icon: <FaCss3 />,
    name: "css 3",
  },
  {
    icon: <FaJs />,
    name: "javascript",
  },
  {
    icon: <FaReact />,
    name: "react.js",
  },
  {
    icon: <SiNextdotjs />,
    name: "next.js",
  },
  {
    icon: <SiTailwindcss />,
    name: "tailwind.css",
  },
  {
    icon: <FaNodeJs />,
    name: "node.js",
  },
  {
    icon: <FaFigma />,
    name: "figma",
  },
];

const Skills = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-col overflow-x-auto">
          <h1 className="h2 mb-6">
            <span className="text-accent border-b-2 border-white">
              Technical Skills
            </span>
          </h1>

          <div className="flex flex-nowrap gap-4 xl:gap-[30px]">
            {skillList.map((skill, index) => (
              <SkillsCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
