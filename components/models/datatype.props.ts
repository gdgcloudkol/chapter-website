export interface ISectionPropsTypes {
    title1: string;
    title_color: string;
    title3?: string;
    description: string;
    color: string;
}

export interface ILazyImgPropsTypes {
    src: string;
    height?: string;
    blurred?: string;
    alt: string;
    width?: number;
    minHeight?: number;
    className?: string;
    lazy?: boolean;
}

export interface Gallery {
    id: string;
    title: string;
    albumLink: string;
    coverLink: string
}