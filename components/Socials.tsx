import React from 'react'
import SectionHeader from './blocks/SectionHeader'
import SocialData from "@/public/assets/content/social/content.json";
import Link from 'next/link';
import Image from 'next/image';
export default function Socials() {
    return (
        <section className="flex flex-col w-full local-container gap-6 p-4" id='contact'>
            <SectionHeader title1={SocialData.title_1} title_color={SocialData.title_color} color={SocialData.color} description={SocialData.description} />
            <div className="flex flex-wrap items-center gap-x-4 mx-auto">

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
        </section>
    )
}
