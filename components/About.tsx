
import SectionHeader from './blocks/SectionHeader'
import AboutData from '../public/assets/content/about/content.json';
import LazyImage from './blocks/LazyImage';
import { bgColorMap, cn, textColorMap } from '@/lib/utils';

const BgColorMap: { [key: string]: string } = {
    googleBlue: 'bg-google-blue',
    googleRed: 'bg-google-red',
    googleYellow: 'bg-google-yellow',
    googleGreen: 'bg-google-green',
};

const ImageDiv = ({ image }: { image: any }) => {
    const colorClass = BgColorMap[image.color] || '';
    return <div key={image.id} className='flex flex-col gap-y-2 w-auto mx-auto'>
        <LazyImage alt={image.alt} minHeight={200} src={image.src} blurred={image.blurUrl} className='rounded-lg border' />
        <div className="relative space-y-1">
            <div className="flex items-center gap-x-2">
                <h3 className='text-2xl font-semibold'>{image.title}</h3>
                <span className={cn(`h-2 w-14 flex `, colorClass)}></span>
            </div>
            <h6 className={"text-base w-full"}>{image.description}</h6>
        </div>
    </div>
}

export default function About() {
    return (
        <section className='flex flex-col w-full container gap-6 p-4'>
            <SectionHeader title1={AboutData.title_1} title_color={AboutData.title_color} title3={AboutData.title_3} description={AboutData.description} color={AboutData.color} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-10 gap-y-4">
                {AboutData.images.map(image => <ImageDiv image={image} key={image.id} />)}
            </div>
        </section>
    )
}
