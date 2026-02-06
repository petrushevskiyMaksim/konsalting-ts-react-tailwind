import { ChangeEvent, ReactNode } from 'react';
import { useId } from 'react';

interface InputProps {
    className?: string;
    customCheckboxStyle?: string;
    isChecked?: boolean;
    onChange?: (checked: boolean) => void;
    hasError?: boolean;
    icon?: ReactNode;
}

export const Checkbox = (props: InputProps) => {
    const {
        className = '',
        isChecked,
        onChange,
        hasError,
        icon,
        customCheckboxStyle,
    } = props;
    const id = useId();

    const handleChnage = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.checked);
        }
    };

    return (
        <div className={`flex items-center ${className}`}>
            <input
                id={id}
                type='checkbox'
                checked={isChecked}
                onChange={handleChnage}
                className='hidden'
            />

            <label
                htmlFor={id}
                className={`relative flex items-center justify-center border-2 rounded cursor-pointer transition-all duration-200 ${customCheckboxStyle} ${
                    hasError
                        ? 'border-[#f90000]'
                        : 'bg-[#232829] border-[#606566]'
                }`}
            >
                {isChecked && icon}
            </label>
        </div>
    );
};
