import Image from 'next/image';

interface ImageAppProps {
    className?: string;
}

export const ImageApp = (props: ImageAppProps) => {
    const { className = '' } = props;

    return (
        <div className={`relative ${className}`}>
            <Image
                src='/sportsman-full.png'
                alt='Sportsman'
                fill
                sizes='
                    (max-width: 374px) 200px,
                    (max-width: 639px) 250px,
                    767px
                '
                priority
            />
        </div>
    );
};
