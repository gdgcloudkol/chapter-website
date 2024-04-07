'use client'

import SectionHeader from "./blocks/SectionHeader";
import TechData from "../public/assets/content/technology/content.json"
import Slider from "react-slick";
import LazyImage from "./blocks/LazyImage";
import { ArrowLeft, ArrowRight } from "./blocks/SliderArrows";
import { useEffect, useState } from "react";

export default function Technology() {
    const [slidesToShow, setSlidesToShow] = useState(4); // Default value for desktop

    const handleResize = () => {
        if (window.innerWidth <= 550) { // Mobile or smaller screens
            setSlidesToShow(1);
        } else if (window.innerWidth <= 850) { // Tablet screens
            setSlidesToShow(2);
        } else { // Desktop screens
            setSlidesToShow(4);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const settings = {
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        prevArrow: <ArrowRight to="next" />,
        nextArrow: <ArrowLeft to="prev" />,
        className: " items-center justify-center "
    };
    return (
        <section className="flex flex-col w-full local-container gap-6 p-4">
            <SectionHeader title1={TechData.title_1} title_color={TechData.title_color} title3={TechData.title_3} description={TechData.description} color={TechData.color} />
            <Slider {...settings} >
                {TechData.images.map(image => {
                    return (
                        <div key={image.id} className="px-6 ">
                            <div className="border-2 py-2 border-gray-400 rounded-lg">
                                <LazyImage height="100px" lazy={false} src={image.src} alt={image.alt} className=" items-center p-6 justify-center px-3" />
                                <h4 className="text-2xl pb-2 text-center font-extrabold">{image.title}</h4>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </section >
    )
}