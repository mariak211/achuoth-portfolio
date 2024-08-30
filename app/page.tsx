import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Socials from "@/components/Socials";
import Profile from "@/components/Profile";
import Statistics from "@/components/Statistics";


const  Home = () => {
  return (
   <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
         {/* texts */}
         <div className="text-center xl:text-left order-2 xl:order-none" >
          <span className="text-xl"> Software Engineer</span>
          <h1 className="h1 mb-6"> 
            Hello I'm  <br /> <span className="text-accent">Mariak</span>
          </h1>
       
          <p className="max-w-[500px] mb-9 text-white/80">
          I am passionate and technology enthusiasts graduating from toop engineering school in Canada, the University of Waterloo. 
          </p>

          {/* cta sections */}

        <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2"
            >
              <span className="text-accent">Resume</span>
              <FiDownload className="text-xl text-accent"/>
            </Button>

            {/* Socials */}
            <div className="mb-8 xl:mb-0">
              <Socials 
              containerStyles="flex gap-6" 
              iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div> 
            </div>
            </div>

        {/* profile photo */}
        <div 
        className="order-1 xl:order-none mb-8 xl:mb-0">
          <Profile/>
        </div>
      </div>
    </div>
    <Statistics/>
   </section>
  );
}

export default Home
