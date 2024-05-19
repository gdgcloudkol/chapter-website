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
    const [upcomingEventResult, setUpcomingEventsResult] = useState<any[]>([])
    const [conductedEventResult, setConductedEventsResult] = useState<any[]>([])
    const [showMoreUpcomingToggle, setShowMoreUpcomingToggle] = useState<boolean>(false)
    const [showMoreConductedToggle, setShowMoreConductedToggle] = useState<boolean>(false)
    const [showMoreUpcomingEvents, setShowMoreUpcomingEvents] = useState<any[]>([])
    const [showMoreConductedEvents, setShowMoreConductedEvents] = useState<any[]>([])
    const [slidesToShow, setSlidesToShow] = useState(3); // Default value for desktop
    const [upcomingPage, setUpcomingPage] = useState({ pageSize: 3, pageNo: 0 })
    const [conductedPage, setConductedPage] = useState({ pageSize: 3, pageNo: 0 })

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

    let bevyCall: BevyModel[] = [
        {
            chapterId: 311,
            page_size: upcomingPage.pageSize,
            status: 'Live',
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
            pageNo: upcomingPage.pageNo ? upcomingPage.pageNo : 1
        },
        {
            chapterId: 311,
            page_size: conductedPage.pageSize,
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
            pageNo: conductedPage.pageNo ? conductedPage.pageNo : 1
        }
    ]

    useEffect(() => {
        if (!showMoreUpcomingToggle) {
            setShowMoreUpcomingEvents([])
            setUpcomingPage({ pageNo: 0, pageSize: 3 })
        }
    }, [showMoreUpcomingToggle])

    useEffect(() => {
        if (!showMoreConductedToggle) {
            setShowMoreConductedEvents([])
            setConductedPage({ pageNo: 0, pageSize: 3 })
        }
    }, [showMoreConductedToggle])

    useEffect(() => {
        async function fetchEvents() {
            const response1 = await FetchBevyData(bevyCall[0]);

            const res = await Promise.all([response1])
            if (upcomingPage.pageNo < 1) {
                setUpcomingEventsResult([...res[0].results]);
                // setUpcomingEventsResult([...res[1].results]);
                // setShowMoreEvents([...eventResult])
            }
            else if (res[0].results)
                setShowMoreUpcomingEvents([...showMoreUpcomingEvents, ...res[0].results])
        }
        fetchEvents();
    }, [upcomingPage.pageNo])

    useEffect(() => {
        async function fetchEvents() {
            // const response1 = await FetchBevyData(bevyCall[0]);
            const response2 = await FetchBevyData(bevyCall[1]);

            const res = await Promise.all([response2])
            if (conductedPage.pageNo < 1) {
                setConductedEventsResult([...res[0].results]);
                // setUpcomingEventsResult([...res[1].results]);
                // setShowMoreEvents([...eventResult])
            }
            else if (res[0].results)
                setShowMoreConductedEvents([...showMoreConductedEvents, ...res[0].results])
        }
        fetchEvents();
    }, [conductedPage.pageNo])

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
        <>
            <section className="flex flex-col w-full local-container gap-6 p-4" id="events">
                <SectionHeader title1={EventsData[0].title_1} title_color={EventsData[0].title_color} title3={EventsData[0].title_3} description={EventsData[0].description} color={EventsData[0].color} />
                {
                    showMoreUpcomingToggle && showMoreUpcomingEvents.length > 0 &&
                    <Modal onClose={setUpcomingPage} setEventsResult={setShowMoreUpcomingEvents} setOpen={setShowMoreUpcomingToggle} isOpen={showMoreUpcomingToggle} title="Events">
                        <div className="grid gap-y-4 md:gap-0  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {showMoreUpcomingEvents.map((data: Record<string, string>, key) => {
                                return (
                                    <div key={key} className="p-2">
                                        <EventCard eventData={data} imageUrl={data.cropped_banner_url} title={data.title} description={data.description.replace(/<\/?[^>]+>/g, '').replace(/'RSVP.*'/, '').substring(0, 300) + "..."} />
                                    </div>
                                )
                            })}
                        </div>
                        <button onClick={() => {
                            setUpcomingPage({ ...upcomingPage, pageNo: upcomingPage.pageNo + 1, pageSize: 9 })
                        }} className="py-2 text-google-blue text-center w-full">Load more &#8594;</button>
                    </Modal>
                }
                {
                    upcomingEventResult.length > 0 &&
                    <Slider {...settings}>
                        {
                            upcomingEventResult.map((data: Record<string, string>, key) => {
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
                    setShowMoreUpcomingToggle(true)
                    setUpcomingPage({ ...upcomingPage, pageNo: upcomingPage.pageNo + 1, pageSize: 9 })
                }} className="py-2 text-google-blue">See more live events &#8594;</button>
            </section >


            <section className="flex flex-col w-full local-container gap-6 p-4" id="events">
                <SectionHeader title1={EventsData[1].title_1} title_color={EventsData[1].title_color} title3={EventsData[1].title_3} description={EventsData[1].description} color={EventsData[1].color} />
                {
                    showMoreConductedToggle && showMoreConductedEvents.length > 0 &&
                    <Modal onClose={setConductedPage} setEventsResult={setShowMoreConductedEvents} setOpen={setShowMoreConductedToggle} isOpen={showMoreConductedToggle} title="Events">
                        <div className="grid gap-y-4 md:gap-0  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {showMoreConductedEvents.map((data: Record<string, string>, key) => {
                                return (
                                    <div key={key} className="p-2">
                                        <EventCard eventData={data} imageUrl={data.cropped_banner_url} title={data.title} description={data.description.replace(/<\/?[^>]+>/g, '').replace(/'RSVP.*'/, '').substring(0, 300) + "..."} />
                                    </div>
                                )
                            })}
                        </div>
                        <button onClick={() => {
                            setConductedPage({ ...conductedPage, pageNo: conductedPage.pageNo + 1, pageSize: 9 })
                        }} className="py-2 text-google-blue text-center w-full">Load more &#8594;</button>
                    </Modal>
                }
                {
                    conductedEventResult.length > 0 &&
                    <Slider {...settings}>
                        {
                            conductedEventResult.map((data: Record<string, string>, key) => {
                                return (
                                    <div key={key} className="px-6">
                                        <EventCard eventData={data} imageUrl={data.cropped_banner_url} title={data.title} description={data.description.replace(/^<[^>]*>/, '').replace(/'RSVP.*'/, '').substring(0, 200) + "..."} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                }
                {
                    <button onClick={() => {
                        setShowMoreConductedToggle(true)
                        setConductedPage({ ...conductedPage, pageNo: conductedPage.pageNo + 1, pageSize: 9 })
                    }} className="py-2 text-google-blue">See more past events &#8594;</button>
                }
            </section >
        </>

    )
}

function EventCard({ eventData, imageUrl, title, description }: any) {
    return <div className="w-full border border-gray-400 rounded-lg h-96 flex flex-col flex-1">
        <LazyImage height="100px" lazy={true} src={imageUrl} alt={""} className="relative flex items-center px-1 justify-center rounded-t-lg border-b" />
        <div className="flex flex-col items-start flex-1 px-4 justify-between py-2 gap-y-3">
            <h4 className="text-left font-medium text-google-blue" dangerouslySetInnerHTML={{ __html: title }}></h4>
            <p dangerouslySetInnerHTML={{ __html: description }} className=" text-gray-500 text-clip text-sm"></p>
            <a href={eventData?.url} target="_blank" className="py-3 text-google-blue">See Event Details &#8594;</a>
        </div>
    </div>
}