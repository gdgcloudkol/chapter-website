"use client"

import SectionHeader from "./blocks/SectionHeader";
import EventsData from "../public/assets/content/events/content.json"
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "./blocks/SliderArrows";
import { BevyModel, FetchBevyData } from "@/sevices/bevy.services";
import { useEffect, useState } from "react";
import LazyImage from "./blocks/LazyImage";
import Modal from "./blocks/Modal";

export default function Events() {
    const [eventResult, setEventsResult] = useState<any[]>([])
    const [showMoreToggle, setShowMoreToggle] = useState<boolean>(false)
    const [showMoreEvents, setShowMoreEvents] = useState<any[]>([])
    const [slidesToShow, setSlidesToShow] = useState(3); // Default value for desktop
    const [page, setPage] = useState({ pageSize: 3, pageNo: 0 })

    const handleResize = () => {
        if (window.innerWidth <= 550) { // Mobile or smaller screens
            setSlidesToShow(1);
        } else if (window.innerWidth <= 850) { // Tablet screens
            setSlidesToShow(2);
        } else { // Desktop screens
            setSlidesToShow(3);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let bevyCall: BevyModel = {
        chapterId: 311,
        page_size: page.pageSize,
        status: 'Completed',
        include_cohosted_events: true,
        visible_on_parent_chapter_only: true,
        order: '-start_date',
        fields: [
            'title',
            'start_date',
            'event_type_title',
            'cropped_picture_url',
            'cropped_banner_url',
            'url',
            'cohost_registration_url',
            'description',
            'description_short',
        ] as const,
        pageNo: page.pageNo ? page.pageNo : 1
    };
    useEffect(() => {
        if (!showMoreToggle) {
            setShowMoreEvents([])
            setPage({ pageNo: 0, pageSize: 3 })
        }
    }, [showMoreToggle])
    useEffect(() => {
        async function fetchEvents() {
            const response = await FetchBevyData(bevyCall);
            console.log(response.results)
            if (page.pageNo < 1) {
                setEventsResult([...response.results]);
                // setShowMoreEvents([...eventResult])
            }
            else
                setShowMoreEvents([...showMoreEvents, ...response.results])
        }
        fetchEvents();
        console.log(page)
    }, [page.pageNo])
    const settings = {
        infinite: true,
        slidesToShow: slidesToShow,
        lazyload: true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        className: " items-center flex justify-center"
    };
    return (
        <section className="flex flex-col w-full local-container gap-6 p-4" id="events">
            <SectionHeader title1={EventsData.title_1} title_color={EventsData.title_color} title3={EventsData.title_3} description={EventsData.description} color={EventsData.color} />
            {
                showMoreToggle && showMoreEvents.length > 0 &&
                <Modal onClose={setPage} setEventsResult={setShowMoreEvents} setOpen={setShowMoreToggle} isOpen={showMoreToggle} title="Events">
                    <div className="grid gap-y-4 md:gap-0  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {showMoreEvents.map((data: Record<typeof bevyCall.fields[number], string>, key) => {
                            return (
                                <div key={key} className="p-2">
                                    <EventCard eventData={data} imageUrl={data.cropped_banner_url} title={data.title} description={data.description.replace(/<\/?[^>]+>/g, '').replace(/'RSVP.*'/, '').substring(0, 300) + "..."} />
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={() => {
                        setPage({ ...page, pageNo: page.pageNo + 1, pageSize: 9 })
                    }} className="py-2 text-google-blue text-center w-full">Load more &#8594;</button>
                </Modal>
            }
            {
                eventResult.length > 0 &&
                <Slider {...settings}>
                    {
                        eventResult.map((data: Record<typeof bevyCall.fields[number], string>, key) => {
                            return (
                                <div key={key} className="px-6">
                                    <EventCard eventData={data} imageUrl={data.cropped_banner_url} title={data.title} description={data.description.replace(/^<[^>]*>/, '').replace(/'RSVP.*'/, '').substring(0, 200) + "..."} />
                                </div>
                            )
                        })
                    }
                </Slider>
            }
            <button onClick={() => {
                setShowMoreToggle(true)
                setPage({ ...page, pageNo: page.pageNo + 1, pageSize: 9 })
                console.log(page)
            }} className="py-2 text-google-blue">See more past events &#8594;</button>
        </section >
    )
}

function EventCard({ eventData, imageUrl, title, description }: any) {
    return <div className="w-full border border-gray-400 rounded-lg h-96 flex flex-col flex-1">
        <LazyImage height="100px" lazy={true} src={imageUrl} alt={""} className="relative flex items-center px-1 justify-center rounded-t-lg border-b" />
        <div className="flex flex-col items-start flex-1 px-4 justify-between py-2 gap-y-3">
            <h4 className="text-left font-medium text-google-blue">{title}</h4>
            <p dangerouslySetInnerHTML={{ __html: description }} className=" text-gray-500 text-clip text-sm"></p>
            <a href={eventData?.url} target="_blank" className="py-3 text-google-blue">See event details &#8594;</a>
        </div>
    </div>
}