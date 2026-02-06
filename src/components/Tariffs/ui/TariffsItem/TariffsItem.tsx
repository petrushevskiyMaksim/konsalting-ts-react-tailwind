'use client';
import { memo, useEffect, useRef } from 'react';
import { Tariff } from '../../data/data';
import { SYMBOL_CURRENCY } from '../../consts/consts';
import { Text } from '@/components/shared/Text';
import { Procent } from '../../Procent/Procent';
import { calcProcent } from '../../lib/calcProcent';
import { useTimer } from '@/context/TimerContext/TimerContext';

interface TariffsItemProps {
    className?: string;
    tariff: Tariff;
    isFocused?: boolean;
    onClick?: () => void;
}

export const TariffsItem = memo((props: TariffsItemProps) => {
    const { className = '', tariff, isFocused, onClick } = props;
    const itemRef = useRef<HTMLLIElement>(null);
    const procent = calcProcent(tariff.price, tariff.full_price);
    const { timerEnded } = useTimer();

    useEffect(() => {
        if (isFocused && itemRef.current) {
            itemRef.current.focus({ preventScroll: true });
        }
    }, [isFocused]);

    return (
        <li
            tabIndex={0}
            ref={itemRef}
            onClick={onClick}
            className={`relative bg-bg-dark py-5 ps-5 mobm:ps-7.5 pe-4 rounded-card-sm border-2 border-solid border-[#484D4E] focus:outline-none focus:border-accent cursor-pointer 
            } ${
                tariff.is_best
                    ? 'md:w-full md:order-first md:rounded-best-card-lg md:pt-7.5 md:ps-4.75 md:pe-20 md:pb-6.5'
                    : 'md:rounded-card-lg md:pt-17.5 md:px-5 md:pb-6.5  md:w-[calc(33.333%-10px)]'
            } ${className}`}
        >
            {procent && !timerEnded && (
                <Procent
                    procent={procent}
                    className={`absolute -top-0.5 text-[13px] mobm:text-base md:text-[22px] leading-lg font-medium px-1.5 py-0.75 rounded-bl-md rounded-br-md bg-[#FD5656] ${
                        tariff.is_best
                            ? 'right-12.5 mobm:right-17 lg:left-12.5 lg:right-auto'
                            : 'right-7 lg:left-12.5 lg:right-auto'
                    }`}
                />
            )}
            {tariff.is_best && (
                <span className='absolute top-1.5 lg:top-2.5 right-3.5 lg:right-5 text-accent text-[13px] mobm:text-base md:text-[22px] leading-lg tracking-[0.03em] font-medium'>
                    хит!
                </span>
            )}

            <div
                className={`flex gap-7.5 mobm:gap-12.5 md:gap-10 ${
                    tariff.is_best
                        ? 'lg:max-w-136.5 lg:ml-auto'
                        : 'md:flex-col md:items-center'
                }`}
            >
                <div className='flex flex-col justify-between'>
                    <Text
                        text={tariff.period}
                        className={`mb-1.5 mobm:mb-4 font-medium mobm:text-lg md:text-[26px] md:text-center ${
                            tariff.is_best ? '' : 'lg:mb-7.5'
                        }`}
                    />
                    <div className='flex flex-col text-nowrap'>
                        <span
                            className={`font-semibold text-3xl mobm:text-[34px] md:text-[50px] ${
                                tariff.is_best ? 'text-accent' : ''
                            } ${timerEnded ? 'animate-jadeIn' : ''}`}
                        >
                            {timerEnded ? tariff.full_price : tariff.price}{' '}
                            {SYMBOL_CURRENCY}
                        </span>

                        <span
                            className={`${
                                timerEnded ? 'animate-jadeOut' : ''
                            } text-sm mobm:text-base md:text-2xl text-[#919191] line-through self-end`}
                        >
                            {tariff.full_price} {SYMBOL_CURRENCY}
                        </span>
                    </div>
                </div>

                {tariff.is_best ? (
                    <>
                        <Text
                            text={tariff.text}
                            className={`hidden md:block self-center text-sm md:text-base leading-lg`}
                        />
                        <Text
                            text={tariff.text_short}
                            className={`md:hidden self-center text-sm leading-lg`}
                        />
                    </>
                ) : (
                    <Text
                        text={tariff.text}
                        className={`self-center text-sm md:text-base leading-lg${
                            tariff.is_best ? '' : 'md:self-start'
                        }`}
                    />
                )}
            </div>
        </li>
    );
});

TariffsItem.displayName = 'TariffsItem';
