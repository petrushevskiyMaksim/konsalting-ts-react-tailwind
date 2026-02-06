import { ReactNode } from 'react';

interface CounterProps {
    className?: string;
    children?: ReactNode;
    isWarning?: boolean;
}

export const Counter = (props: CounterProps) => {
    const { className = '', children, isWarning } = props;

    return (
        <div
            className={` ${
                isWarning ? 'text-counter animate-blink' : 'text-counter'
            } ${className}`}
        >
            {children}
        </div>
    );
};
