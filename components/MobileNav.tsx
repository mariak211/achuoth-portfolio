"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";


const m_links = [
    {
       name: "About Me",
       path: "/",
    },
    {
        name: "Services",
        path: "/Services",
     },
     {
        name: "resume",
        path: "/resume",
     },
     {
        name: "work",
        path: "/work",
     },
     {
        name: "contact",
        path: "/contact",
     },
    ];

const MobileNav = () => {
    const pathname = usePathname();
  return (
   
    <Sheet>
        <SheetTrigger className="flex justify-center items-center"> 
            <CiMenuFries className = "text-[32px] text-accent"/>
        </SheetTrigger>

        <SheetContent className="flex flex-col">
            
            <div className=" mt-32 mb-40 text-center text-2xl">
                <Link href= "/">
               <h1 className="text-4xl font-semibold" >Alkaida2<span className=" text-accent">.</span>O
               </h1>
               </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {m_links.map((link, index) => {
                    return (<Link 
                        href={link.path}
                        key={index}
                        className={`capitalize font-medium hover:text-accent transition-all ${
                            link.path === pathname ? 'text-accent border-b-2 border-accent' : ''}`}>
                                {link.name}
                    </Link>)
                })}
            </nav>
        </SheetContent>
    </Sheet>
    );
};

export default MobileNav
