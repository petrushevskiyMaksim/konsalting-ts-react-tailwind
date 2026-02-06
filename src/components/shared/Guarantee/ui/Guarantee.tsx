import { ReactNode } from 'react';

interface GuaranteeProps {
    className?: string;
    children?: ReactNode;
}

export const Guarantee = (props: GuaranteeProps) => {
    const { className = '', children } = props;

    return <section className={`${className}`}>{children}</section>;
};
