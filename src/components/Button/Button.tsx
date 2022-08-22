import cn from 'classnames';
import classes from './style/Button.module.scss';

type ButtonProps = {
    onClick?: () => void
    variant?: string
    size?: string
    type?: "button" | "submit" | "reset" | undefined
    children?: any
}

export const Button = ({onClick, variant = '', size = 'medium', type = 'button', children}: ButtonProps) => {
    return (
        <button
            className={cn(classes.button, classes[size], classes[variant])}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
