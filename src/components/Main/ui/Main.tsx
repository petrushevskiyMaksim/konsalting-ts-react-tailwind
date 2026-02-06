import { Content } from '@/components/Content';
import { Text } from '@/components/shared/Text';

interface MainProps {
    className?: string;
}

export const Main = (props: MainProps) => {
    const { className } = props;
    const title = (
        <>
            Выбери подходящий для себя{' '}
            <span className='text-accent'>тариф</span>
        </>
    );

    return (
        <main className={`${className}`}>
            <Text
                title={title}
                headerTag='h1'
                className='font-bold text-[22px] mobm:text-2xl md:text-[40px] leading-sm tracking-[0.01em]'
            />
            <Content />
        </main>
    );
};
