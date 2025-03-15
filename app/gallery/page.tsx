import { Gallery } from '@/components/models/datatype.props';
import GALLERYDATA from '@/public/assets/content/gallery/content.json';
import Link from 'next/link';

function page() {
    const galleryLink = 'https://gallery.gdgcloudkol.org';
    // const galleryLink = 'http://localhost:3000';
    return (
        <div className="flex justify-center w-full p-16">
            <div className="grid grid-cols-4 gap-6">
                {GALLERYDATA.map((item: Gallery) => {
                    return (
                        <>
                            <div>
                                <div className="p-5 w-80 h-52 border-2 cursor-pointer shadow-lg flex flex-col justify-center">
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold">
                                            {item.title}
                                        </span>
                                        <Link
                                            target="_blank"
                                            href={`https://photos.app.goo.gl/${item.albumLink}`}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-link-2"
                                            >
                                                <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                                                <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                                                <line
                                                    x1="8"
                                                    x2="16"
                                                    y1="12"
                                                    y2="12"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                    <hr className="mt-2" />
                                    <Link
                                        href={`${galleryLink}/?id=${item.albumLink}`}
                                        target="_blank"
                                        className="w-full"
                                    >
                                        <img
                                            className="pt-2 h-36 w-full"
                                            src={item.coverLink}
                                            alt={item.title}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default page;
