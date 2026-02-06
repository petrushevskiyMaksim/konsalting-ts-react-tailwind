import { Text } from '@/components/shared/Text';
import { ALERT } from '../../consts/consts';

interface RecommendationProps {
    className?: string;
    text?: string;
}

export const Recommendation = (props: RecommendationProps) => {
    const { className = '', text } = props;

    return (
        <div className={`${className}`}>
            <span className='shrink-0 w-5.5 h-6 lg:w-6 lg:h-6.5 self-start'>
                {ALERT}
            </span>
            <Text
                text={text}
                className={`text-[12px] lg:text-base leading-lg`}
            />
        </div>
    );
};
