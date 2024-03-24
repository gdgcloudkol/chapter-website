import { cn } from '@/lib/utils';
import { ILazyImgPropsTypes } from '@/public/assets/types/datatype.props'

const LazyImage = ({
    src,
    blurred,
    alt,
    width,
    minHeight,
    className,
    lazy = true
}: ILazyImgPropsTypes) => {
    return (
        <div
            style={{ minHeight }}
            className={cn('relative w-full overflow-hidden', className)}
        >
            <div style={{ backgroundImage: `url('${blurred}')` }} className="absolute top-0 left-0 right-0 bottom-0 bg-cover" />
            {/* Actual image */}
            <img
                src={src}
                alt={alt}
                width={width}
                loading={lazy ? 'lazy' : 'eager'}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                }}
            />
        </div>
    );
};

export default LazyImage;
