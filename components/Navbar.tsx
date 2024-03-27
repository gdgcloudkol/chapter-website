"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import NavbarData from "@/public/assets/content/navbar/content.json";
import { usePathname } from "next/navigation";

function Navbar() {
  const [nav, setNav] = useState(false);
  const pathname = usePathname()
  return (
    <section className="w-full flex flex-col">
      <div className="w-full h-20 py-2 md:pt-0 px-4 flex flex-wrap items-center gap-10 bg-google-blue text-white">
        {/* desktop nav */}
        <div className="w-full md:w-auto flex justify-between items-center">
          <Link href={"/"}> <Image
            src={NavbarData.logo}
            alt="logo"
            height={60}
            width={60}
            className="bg-blend-screen brightness-0 invert"
          />
          </Link>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer z-30 md:hidden mr-8"
          >
            <span
              aria-hidden="true"
              className={cn(
                "block absolute h-0.5 w-7 bg-white transform transition duration-500 ease-in-out",
                nav ? "rotate-45" : "-translate-y-1.5"
              )}
            ></span>
            <span
              aria-hidden="true"
              className={cn(
                "block absolute h-0.5 w-7 bg-white transform transition duration-500 ease-in-out",
                nav ? "opacity-0" : ""
              )}
            ></span>
            <span
              aria-hidden="true"
              className={cn(
                "block absolute h-0.5 w-7 bg-white transform transition duration-500 ease-in-out",
                nav ? "-rotate-45" : "translate-y-1.5"
              )}
            ></span>
          </div>
        </div>

        <ul className="h-full hidden md:flex items-center gap-4">
          {NavbarData.sections.map((section) => (
            <Link
              href={section.link}
              key={section.title}
              className={cn("h-full px-3 text-lg flex items-center justify-center rounded-b-md transition-colors ease-in duration-200 cursor-pointer hover:bg-white hover:text-google-blue", pathname.includes(section.title.toLowerCase().replaceAll(" ", "-")) && "bg-white text-google-blue ")}
            >
              <li>{section.title}</li>
            </Link>
          ))}
        </ul>


        {/* mobile nav */}
        {/* {nav && (
        <ul className="z-20 flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 opacity-95">
          {NavbarData.sections.map((section) => (
            <li
              key={section.title}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={section.link}>
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      )} */}
      </div>
      {/* mobile nav */}

      <ul className={cn("flex flex-col md:hidden duration-200 overflow-y-hidden", nav ? "h-50" : "h-0 pointer-events-none")}>
        {NavbarData.sections.map((section) => (
          <li
            key={section.title}
            className="px-6 cursor-pointer capitalize py-3 text-xl"
          >
            <Link onClick={() => setNav(!nav)} href={section.link}>
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Navbar;
