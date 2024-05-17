'use client';

import { BevyModel, FetchBevyData } from '@/sevices/bevy.services';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function HeaderAnnounement() {
    const [eventTitle, setEventTitle] = useState<string>('');
    const [eventURL, setEventURL] = useState<string>('');

    let upcomingEventModel: BevyModel = {
        chapterId: 311,
        page_size: 1,
        status: 'Live',
        include_cohosted_events: true,
        visible_on_parent_chapter_only: true,
        order: 'start_date',
        fields: ['title', 'url'] as const,
        pageNo: 1
    };

    useEffect(() => {
        async function fetchUpcomingEvent() {
            const response = await FetchBevyData(upcomingEventModel);
            setEventTitle(response.results[0]?.title);
            setEventURL(response.results[0]?.url);
        }
        fetchUpcomingEvent();
    }, []);

    return (
        <>
            {eventTitle && (
                <button className="animate-border inline-block rounded-full bg-white bg-gradient-to-r from-google-blue  via-white to-google-blue bg-[length:400%_400%] p-[2px] mb-6 shadow-2xl z-30">
                    <Link href={eventURL} target='_blank'>
                        <span className="block rounded-full bg-white text-google-blue md:px-6 px-2 py-2 font-medium md:text-base text-xs">
                            <p dangerouslySetInnerHTML={{ __html: eventTitle }}></p>
                        </span>
                    </Link>
                </button>
            )}
        </>
    );
}

export default HeaderAnnounement;
