import cn from 'classnames';
import classes from './Button.module.scss';

type ButtonProps = {
    onClick?: () => void
    variant?: string
    size?: string
    type?: "button" | "submit" | "reset" | undefined
    children?: any
}

export const Button = ({onClick, variant = '', size = 'medium', type = 'button', children}: ButtonProps) => {
    const mainCn = cn(
        classes.button,
        classes[size],
        classes[variant],
    );

    return (
        <button
            className={mainCn}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
