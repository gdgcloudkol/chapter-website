import Image from "next/image";
import background from "@/public/assets/images/map.png";
import HeaderData from "@/public/assets/content/header/header.json";
import SocialData from "@/public/assets/content/social/content.json";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="relative w-full h-[380px]">
        <div className="absolute -z-10 w-full h-full opacity-65">
          <Image
            src={background}
            alt="hero image"
            className="w-full h-full object-cover"
            fill={true}
            priority={true}
          />
        </div>
        {/* <div className="w-full h-full bg-gray-500 opacity-70"></div> */}
        <div className="absolute top-0 h-full w-full p-6 flex flex-col md:items-center justify-center text-white bg-gray-800/60">
          <h1 className="text-6xl">{HeaderData.header}</h1>
          <h3 className="text-3xl md:text-4xl py-4">
            {HeaderData.isCloud ? "Cloud •" : ""} {HeaderData.chapterName}
          </h3>
          {HeaderData.hasSocials && (
            <div className="flex items-center gap-4 pt-2">
              {SocialData.socials.map((each) => (
                <Link href={each.hyperlink} key={each.title} target="_blank">
                  <Image
                    src={each.imgSrc}
                    width={40}
                    height={40}
                    alt={each.title}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
