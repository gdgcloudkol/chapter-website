import { Gallery } from "@/components/models/datatype.props";
import * as GALLERY from "@/public/assets/content/gallery/content.json";
import Link from "next/link";

function page() {
    const galleryLink = 'https://gallery.gdgcloudkol.org';
    // const galleryLink = 'http://localhost:3000';
    return (
        <div className="flex justify-center w-full p-16">
            <div className="grid grid-cols-4 gap-6">
                {GALLERY.map((item: Gallery) => {
                    return <>
                        {/*  */}
                        <Link href={`${galleryLink}/?id=${item.albumLink}`}>
                            <div className="p-5 w-80 h-52 border-2 cursor-pointer shadow-lg flex flex-col justify-center">
                                <span className="font-bold">
                                    {item.title}
                                </span>
                                <hr className="mt-2" />
                                <img className="pt-2 h-36" src={item.coverLink} alt={item.title} />
                            </div>
                        </Link>
                    </>
                })}
            </div>
        </div>
    );
}

export default page;