import { SYMBOL_PROCENT } from '../consts/consts';

interface ProcentProps {
    className?: string;
    procent?: number;
}

export const Procent = (props: ProcentProps) => {
    const { className, procent } = props;

    return (
        <div className={`${className}`}>
            <span>
                {procent?.toFixed(1)}
                {SYMBOL_PROCENT}
            </span>
        </div>
    );
};
