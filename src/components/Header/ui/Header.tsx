'use client';

import { Counter } from '@/components/shared/Counter';
import { STAR_ICON } from '@/components/shared/Counter/consts/consts';
import { formatTime } from '@/components/shared/Counter/lib/formateTime';
import { Text } from '@/components/shared/Text';
import { useTimer } from '@/context/TimerContext';

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className = '' } = props;
    const { timeLeft } = useTimer();

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const isWarning = timeLeft <= 30 && timeLeft > 0;
    const text = 'Успейте открыть пробную неделю';

    return (
        <header className={`${className}`}>
            <Text
                text={text}
                className='font-semibold text-sm mobm:text-lg sm:text-2xl leading-lg'
            />
            <Counter
                isWarning={isWarning}
                className='flex items-center gap-2 font-bold text-[28px] mobm:text-[32px] sm:text-[40px] leading-sm'
            >
                {' '}
                {STAR_ICON}
                <span className={`flex items-center gap-1.5`}>
                    <span>{formatTime(minutes)}</span>:
                    <span>{formatTime(seconds)}</span>
                </span>
                {STAR_ICON}
            </Counter>
        </header>
    );
};
