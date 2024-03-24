'use client'

import SectionHeader from "./blocks/SectionHeader";
import TechData from "../public/assets/content/technology/content.json"
import Slider from "react-slick";
import LazyImage from "./blocks/LazyImage";
import { ArrowLeft, ArrowRight } from "./blocks/SliderArrows";
import { useEffect, useState } from "react";

export default function Technology() {
    const [slidesToShow, setSlidesToShow] = useState(3); // Default value for desktop

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 550) { // Mobile or smaller screens
                setSlidesToShow(1);
            } else if (window.innerWidth <= 850) { // Tablet screens
                setSlidesToShow(2);
            } else { // Desktop screens
                setSlidesToShow(4);
            }
        };

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
        <section className="flex flex-col w-full max-w-6xl mx-auto gap-6 p-4">
            <SectionHeader title1={TechData.title_1} title_color={TechData.title_color} title3={TechData.title_3} description={TechData.description} color={TechData.color} />
            <Slider {...settings} >
                {TechData.images.map(image => {
                    return (
                        <div key={image.id} className="px-6">
                            <LazyImage lazy={false} src={image.src} alt={image.alt} blurred={image.blurUrl} className="border border-gray rounded-lg" />
                        </div>
                    )
                })}
            </Slider>
        </section >
    )
}