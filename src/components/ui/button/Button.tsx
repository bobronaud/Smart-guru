import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outlined';
	size?: 'lg' | 'sm';
}
const Button = (props: ButtonProps) => {
	const { variant = 'primary', size = 'lg', children, ...restProps } = props;
	const classes = cn(styles.btn, styles[variant], styles[size]);

	return (
		<button
			{...restProps}
			className={classes}
		>
			<div className={styles.children}>{children}</div>
		</button>
	);
};

export default Button;
