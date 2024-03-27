import { cn } from '@/lib/utils'
import HeaderTagsContent from '@/public/assets/content/header/header.json'
export default function HeaderTags() {
    return (
        <section className='flex flex-wrap w-1/2 max-w-md text-white  absolute left-0 top-0 z-10  gap-2 items-center max-h-full overflow-y-hidden'>
            {HeaderTagsContent.tags.map((tag, idx) => <h3 key={idx} className={cn(tag.variant == "small" && "text-2xl", tag.variant == "base" && "text-3xl", tag.variant == "large" && "text-4xl", tag.variant == "x-large" && "text-6xl", "opacity-10 md:opacity-20 hover:opacity-90 duration-200 cursor-default")}>#{tag.tag} {Number(idx) % 3 == 0 && <br />}</h3>)}
        </section>
    )
}
