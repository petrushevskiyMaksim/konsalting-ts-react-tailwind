'use client';
import { memo, useCallback, useMemo, useState } from 'react';
import { tariffs } from '../../data/data';
import { TariffsItem } from '../TariffsItem/TariffsItem';

interface TariffsProps {
    className?: string;
}

export const TariffsList = memo((props: TariffsProps) => {
    const { className = '' } = props;
    const bestTariff = () => {
        const bestTariff = tariffs.find((t) => t.is_best);
        return bestTariff ? bestTariff.id : '';
    };
    const [focusedId, setFocusedId] = useState<string>(bestTariff);

    const handleItemClick = useCallback((id: string) => {
        setFocusedId(id);
    }, []);

    const tarrifsSortByFullPrice = useMemo(
        () => [...tariffs].sort((a, b) => b.full_price - a.full_price),
        []
    );

    return (
        <ul
            className={`flex flex-col gap-1.5 mobm:gap-2 lg:gap-3.5 md:flex-row md:flex-wrap ${className}`}
        >
            {tarrifsSortByFullPrice.map((tariff) => {
                return (
                    <TariffsItem
                        tariff={tariff}
                        key={tariff.id}
                        isFocused={focusedId === tariff.id}
                        onClick={() => handleItemClick(tariff.id)}
                    ></TariffsItem>
                );
            })}
        </ul>
    );
});

TariffsList.displayName = 'TariffsList';
