import Header from '@/components/Header'
import SectionHeader from '@/components/blocks/SectionHeader'
import COC from '@/public/assets/content/coc/content.json'
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";

function ContentBlock({ title, description }: { title: string, description: string }) {
    return <div className='flex flex-col'>
        <h3 className="text-3xl">{title}</h3>
        <p className='text-md'> {description} </p>
    </div>
}

export default function page() {
    return (
        <section className='flex flex-col w-full space-y-8'>
            <Header />
            <section className='flex flex-col local-container gap-6 p-4'>
                <SectionHeader title1={COC.title_1} title_color={COC.title_color} color={COC.color} description={COC.description} />
                <p className='text-md'>{COC.content}</p>
                {
                    COC.sections.map((content, index) => {
                        return <ContentBlock key={index} title={content.title} description={content.description} />
                    })
                }
            </section>
            <Socials />
            <Footer />
        </section>
    )
}