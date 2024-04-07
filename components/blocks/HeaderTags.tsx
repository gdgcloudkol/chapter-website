'use client';

import { cn } from '@/lib/utils';
import HeaderTagsContent from '@/public/assets/content/header/content.json';
import { useEffect, useState } from 'react';

export default function HeaderTags() {
    const [items, setItems] = useState(HeaderTagsContent.tags);

    useEffect(() => {
        const addRemoveClasses = () => {
            let timeout = 300;

            items.forEach((item, index) => {
                setTimeout(() => {
                    const updatedItems = [...items];
                    updatedItems[index].show = 'md:opacity-90 opacity-40';
                    setItems(updatedItems);
                }, timeout);

                setTimeout(() => {
                    const updatedItems = [...items];
                    updatedItems[index].show = '';
                    setItems(updatedItems);
                }, timeout + 300);

                timeout += 400;
            });
        };

        addRemoveClasses();
        return () => clearTimeout(1);
    }, []);

    return (
        <section className="md:w-1/2 w-full max-w-md text-black absolute left-0 top-0 z-10  gap-2 items-center max-h-full overflow-y-hidden">
            {HeaderTagsContent.tags.map((tag, idx) => (
                <h3
                    key={idx}
                    className={cn(
                        tag.variant == 'small' && 'text-2xl',
                        tag.variant == 'base' && 'text-3xl',
                        tag.variant == 'large' && 'text-4xl',
                        tag.variant == 'x-large' && 'text-5xl',
                        'opacity-10 md:opacity-20 hover:opacity-90 duration-200 cursor-default',
                        tag.show
                    )}
                >
                    #{tag.tag} {Number(idx) % 3 == 0 && <br />}
                </h3>
            ))}
        </section>
    );
}
