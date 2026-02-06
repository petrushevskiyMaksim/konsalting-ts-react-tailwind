interface ButtonProps {
    className?: string;
    text?: string;
    hasError?: boolean;
    onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
    const { className, onClick, text } = props;

    return (
        <button onClick={onClick} className={`${className}`}>
            {text}
        </button>
    );
};
