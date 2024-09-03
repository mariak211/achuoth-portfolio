import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Socials from "@/components/Socials";
import Profile from "@/components/Profile";
import Statistics from "@/components/Statistics";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-24 ">
          {/* texts */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              I'm <span className="text-accent">Mariak</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A recent Computer Engineering graduate from the{" "}
              <span className="text-accent">University of Waterloo</span> with a
              passion for human-centric engineering design that fosters
              technological inclusivity. My interests lie at the intersection of
              entrepreneurship and technology, where I am driven to create
              solutions that make a meaningful impact.
            </p>

            {/* cta sections */}

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span className="text-accent">Resume</span>
                <FiDownload className="text-xl text-accent" />
              </Button>

              {/* Socials */}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* profile photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Profile />
          </div>
        </div>

        {/* Skills section */}
        <Skills />
      </div>
    </section>
  );
};

export default Home;
