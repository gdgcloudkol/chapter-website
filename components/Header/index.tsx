import Image from "next/image";
import background from "@/public/assets/images/map.png";
import HeaderData from "@/public/assets/content/header/header.json";

function Header() {
  return (
    <>
      <div className="relative w-full h-[380px]">
        <div className="absolute -z-10 w-full h-full">
          <Image
            src={background}
            alt="hero image"
            className="w-full h-full object-cover"
            fill={true}
            priority={false}
          />
        </div>
        <div className="w-full h-full bg-gray-500 opacity-70"></div>
        <div className="absolute top-0 h-full w-full p-6 flex flex-col md:items-center justify-center text-white">
          <h1 className="text-6xl">{HeaderData.header}</h1>
          <h3 className="text-3xl md:text-4xl py-4">
            {HeaderData.isCloud ? "Cloud •" : ""} {HeaderData.chapterName}
          </h3>
        </div>
      </div>
    </>
  );
}

export default Header;
