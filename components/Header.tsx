import Image from "next/image";
import background from "@/public/assets/images/map3.png";
import HeaderData from "@/public/assets/content/header/content.json";
import SocialData from "@/public/assets/content/social/content.json";
import Link from "next/link";
import HeaderTags from "./blocks/HeaderTags";
import HeaderAnnounement from "./blocks/HeaderAnnounement";

function Header() {
  return (
    <>
      <div className="relative w-full h-[520px] border-b-8 border-gray-300">
        <div className="absolute -z-10 w-full h-full">
          <Image
            src={background}
            alt="hero image"
            className="w-full h-full object-cover opacity-10"
            fill={true}
            priority={true}
          />
        </div>
        <HeaderTags />
        <div className="absolute top-0 h-full w-full p-6 flex flex-col md:items-center justify-center text-black">
          <HeaderAnnounement />
          <h1 className="text-6xl">{HeaderData.header}</h1>
          <h3 className="text-3xl md:text-4xl py-4">
            <span className={"text-google-blue"}>{HeaderData.isCloud ? "Cloud •" : ""}</span> {HeaderData.chapterName}
          </h3>
          {HeaderData.hasSocials && (
            <div className="flex items-center gap-4 pt-2">
              {SocialData.socials.map((each) => (
                <Link href={each.hyperlink} key={each.title} target="_blank">
                  <Image
                    src={each.imgDarkSrc}
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
