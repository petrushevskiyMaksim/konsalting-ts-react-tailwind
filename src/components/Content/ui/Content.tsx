import { ContentBody } from '@/components/ContentBody';
import { Guarantee } from '@/components/shared/Guarantee';
import { ImageApp } from '@/components/shared/ImageApp';
import { Text } from '@/components/shared/Text';
import { descriptionText, lableText } from '../consts/consts';

interface ContentProps {
    className?: string;
}

export const Content = (props: ContentProps) => {
    const { className = '' } = props;

    return (
        <section className={`${className}`}>
            <div
                className={`w-full flex flex-col items-center mb-5.5 lg:flex-row`}
            >
                <ImageApp
                    className={`shrink-0 flex items-center w-25 h-50 mobm:w-31.25 mobm:h-62.5 lg:w-95 lg:h-191.75`}
                />
                <ContentBody className='lg:max-w-187 lg:ml-auto' />
            </div>
            <Guarantee className='flex flex-col gap-2.5 lg:gap-7.5 p-3 lg:p-5 border border-border-primary rounded-card-sm lg:rounded-[30px]'>
                <Text
                    text={lableText}
                    className='mobm:px-4.5 lg:px-7.5 pt-2.5 pb-3 lg:py-4 font-medium text-center border-2 border-[#81FE95] rounded-[30px] text-[#81FE95] leading-md mobm:text-lg mobm:self-start lg:text-[28px]'
                />
                <Text
                    text={descriptionText}
                    className='text-[13px] mobm:text-sm lg:text-2xl text-[#DCDCDC] leading-lg'
                />
            </Guarantee>
        </section>
    );
};
