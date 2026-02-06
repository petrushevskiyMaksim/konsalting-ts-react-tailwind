'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface TimerContextType {
    timeLeft: number;
    timerEnded: boolean;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const useTimer = () => {
    const context = useContext(TimerContext);
    if (!context) {
        throw new Error('useTimer must be used within TimerProvider');
    }
    return context;
};

// 2. Провайдер
export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [timeLeft, setTimeLeft] = useState<number>(2 * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <TimerContext.Provider
            value={{
                timeLeft,
                timerEnded: timeLeft === 0,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};
