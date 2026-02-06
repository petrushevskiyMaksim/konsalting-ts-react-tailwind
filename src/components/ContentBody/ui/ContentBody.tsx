'use client';

import { Checkbox, CHECKED } from '@/components/shared/Checkbox';
import { Recommendation } from '@/components/Recommendation';
import { TariffsList } from '@/components/Tariffs';
import { Button } from '@/components/shared/Button';
import { Text } from '@/components/shared/Text';
import { useCallback, useState } from 'react';
import { agreementText, offerText, recommendationText } from '../consts/consts';

interface ContentBodyProps {
    className?: string;
}

export const ContentBody = (props: ContentBodyProps) => {
    const { className = '' } = props;
    const [isChecked, setIsChecked] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleCheckboxChange = useCallback((checked: boolean) => {
        setIsChecked(checked);
        if (checked) {
            setHasError(false);
        }
    }, []);

    const handleButtonClick = useCallback(() => {
        if (!isChecked) {
            setHasError(true);
        }
    }, [isChecked]);

    return (
        <div className={`${className}`}>
            <TariffsList className='mb-2.5 mobm:mb-3 lg:mb-5' />
            <Recommendation
                text={recommendationText}
                className={`flex gap-1.5 lg:gap-2 lg:max-w-125 py-3.5 lg:py-4.5 ps-3 pe-5 lg:px-5 mb-4  mobm:mb-6 lg:mb-7.5 bg-[#2D3233] rounded-2xl`}
            />
            <div className='flex gap-2.5 mobm:gap-3 mb-4  mobm:mb-5 lg:mb-4 lg:max-w-162.5 lg:items-center'>
                <Checkbox
                    icon={CHECKED}
                    className={`self-start lg:self-auto`}
                    customCheckboxStyle='w-[30px] h-[30px] lg:w-[32px] lg:h-[32px]'
                    hasError={hasError}
                    isChecked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <Text
                    text={offerText}
                    className={`text-[12px] lg:text-base text-[#CDCDCD]`}
                />
            </div>
            <Button
                onClick={handleButtonClick}
                text='Купить'
                className={`animate-pulse-glow w-full lg:max-w-88 mb-2.5 mobm:mb-5 lg:mb-3.5 py-4 mobm:py-5 px-15 text-lg lg:text-[20px] font-bold leading-lg rounded-card-sm text-[#191E1F] bg-accent`}
            />
            <Text
                text={agreementText}
                className={`text-[10px] lg:text-sm text-[#9B9B9B]`}
            />
        </div>
    );
};
