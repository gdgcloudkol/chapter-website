import { ISectionPropsTypes } from "@/components/models/datatype.props";

export default function SectionHeader({ title1, title_color, title3, description, color }: ISectionPropsTypes) {
    const TextColorMap: { [key: string]: string } = {
        googleBlue: 'text-google-blue',
        googleRed: 'text-google-red',
        googleYellow: 'text-google-yellow',
        googleGreen: 'text-google-green',
    };
    const colorClass = TextColorMap[color] || '';
    return (
        <div className='flex flex-col items-center justify-center max-w-2xl mx-auto text-center gap-2 px-4'>
            <h2 className='text-3xl md:text-4xl font-bold'>{title1} <span className={colorClass}>{title_color}</span> {title3}</h2>
            <h6 className='font-semibold w-full'>{description}</h6>
        </div>
    )
}
