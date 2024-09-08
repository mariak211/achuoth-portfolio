"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { nav_links } from "@/Constants";
import { Button } from "./ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      {/* Make the sheet content scrollable */}
      <SheetContent className="flex flex-col max-h-[80vh] overflow-y-auto">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-sm font-semibold border border-green-400 rounded-xl p-4">
              Achuoth<span className="text-accent">.</span>Mariak
            </h1>
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {nav_links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`capitalize font-medium hover:text-accent transition-all ${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent"
                    : ""
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="flex items-center gap-8">
            <Link href="/contact" onClick={handleLinkClick}>
              <Button>Hire Me</Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
