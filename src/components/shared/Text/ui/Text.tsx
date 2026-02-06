import { ReactNode } from 'react';
import { headerTagClass, HeaderTagType } from '../types/types';

interface TextProps {
    className?: string;
    title?: ReactNode;
    text?: ReactNode;
    headerTag?: HeaderTagType;
}

export const Text = (props: TextProps) => {
    const { className = '', title, text, headerTag = 'h1' } = props;

    const HeaderTag = headerTagClass[headerTag];

    return (
        <>
            {title && <HeaderTag className={`${className}`}>{title}</HeaderTag>}
            {text && <p className={`${className}`}>{text}</p>}
        </>
    );
};
