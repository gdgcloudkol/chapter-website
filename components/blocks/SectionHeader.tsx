
import React from 'react'

export default function SectionHeader({ title1, title_color, title3, description, color }: { title1: string, title_color: string, title3?: string, description: string, color: string }) {
    const TextColorMap: { [key: string]: string } = {
        googleBlue: 'text-googleBlue',
        googleRed: 'text-googleRed',
        googleYellow: 'text-googleYellow',
        googleGreen: 'text-googleGreen',
    };
    const colorClass = TextColorMap[color] || '';
    return (
        <div className='flex flex-col items-center justify-center max-w-xl mx-auto text-center gap-2 px-4'>
            <h2 className='text-3xl md:text-4xl font-bold'>{title1} <span className={colorClass}>{title_color}</span> {title3}</h2>
            <h6 className='font-semibold'>{description}</h6>
        </div>
    )
}
