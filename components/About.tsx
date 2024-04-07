
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AboutData from '../public/assets/content/about/content.json';
import LazyImage from './blocks/LazyImage';

const BgColorMap: { [key: string]: string } = {
    googleBlue: 'bg-google-blue',
    googleRed: 'bg-google-red',
    googleYellow: 'bg-google-yellow',
    googleGreen: 'bg-google-green',
};

const WideImageDiv = ({ image }: { image: any }) => {
    const colorClass = BgColorMap[image.color] || '';
    return (
        <div key={image.id} className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
            <div className="relative space-y-8">
                <div className="flex items-center gap-x-2">
                    <h3 className='text-4xl font-semibold text-google-grey'>{image.title}</h3>
                    {/*<span className={cn(`h-2 w-14 flex `, colorClass)}></span>*/}
                </div>
                <h6 className={"text-3xl w-full text-gray-500"}>{image.description}</h6>
                <Link target={"_blank"} href={"https://gdg.community.dev/gdg-cloud-kolkata/"} className={"inline-block"}>
                    <Button className={"flex flex-row px-8 py-6 bg-blue-700 hover:bg-blue-600"} size={"lg"}>
                        <span className={"text-xl"}>Join The Community</span>
                        <ArrowRight className={"h-6 w-6 ml-2"} />
                    </Button>
                </Link>
            </div>
            <LazyImage alt={image.alt} minHeight={200} src={image.src} blurred={image.blurUrl}
                className='rounded-lg border' />
        </div>
    )
}

const ImageDiv = ({ image }: { image: any }) => {
    const colorClass = BgColorMap[image.color] || '';
    return <div key={image.id} className='mt-16 flex flex-col gap-y-2 w-auto mx-auto'>
        <div className="relative space-y-1">
            <div className="flex items-center gap-x-2">
                <h3 className='text-2xl font-semibold'>{image.title}</h3>
                <span className={cn(`h-2 w-14 flex `, colorClass)}></span>
            </div>
            <h6 className={"text-base w-full"}>{image.description}</h6>
        </div>
        <LazyImage alt={image.alt} minHeight={200} src={image.src} blurred={image.blurUrl}
            className='rounded-lg border' />
    </div>
}

export default function About() {
    return (
        <section className='flex flex-col w-full local-container gap-6 p-4' id='about'>
            <WideImageDiv image={AboutData.images[0]} />
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-10 gap-y-4">
                {AboutData.images.slice(1).map(image => <ImageDiv image={image} key={image.id} />)}
            </div>
        </section>
    )
}
