"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import NavbarData from "@/public/assets/content/navbar/content.json";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { X, Grip } from "lucide-react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const pathname = usePathname()
  return (
    <section className="w-full flex flex-col">
      <div className="w-full h-14 md:pt-0 px-4 flex flex-wrap items-center gap-10 bg-google-blue text-white">
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
            className="cursor-pointer z-30 md:hidden"
          >
            {
              nav ? (
                <Button className={"hover:bg-blue-400 hover:text-white"} variant={"ghost"} onClick={() => setNav(!nav)}>
                  <X className={"h-6 w-6"} />
                </Button>
              ) : (
                <Button className={"hover:bg-blue-400 hover:text-white"} onClick={() => setNav(!nav)} variant={"ghost"} >
                  <Grip className={"h-6 w-6"} />
                </Button>
              )
            }
          </div>
        </div>

        <ul className="h-full hidden md:flex items-center gap-4">
          {NavbarData.sections.map((section) => (
            <Link
              href={section.link}
              key={section.title}
              className={cn("h-full px-3 text-lg flex items-center justify-center cursor-pointer hover:bg-white hover:text-google-blue", pathname.includes(section.title.toLowerCase().replaceAll(" ", "-")) && "bg-white text-google-blue ")}
            >
              <li>{section.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      {/* mobile nav */}

      <ul className={cn("flex flex-col border-b-4 border-blue-500 md:hidden duration-200 overflow-y-hidden", nav ? "h-50" : "h-0 pointer-events-none")}>
        {NavbarData.sections.map((section) => (
          <li
            key={section.title}
            className="px-6 cursor-pointer capitalize py-3 text-xl hover:bg-blue-100"
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
