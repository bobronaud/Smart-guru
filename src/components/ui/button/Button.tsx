import styles from './Button.module.scss';

// eslint-disable-next-line
const Button = (props: any) => {
	return (
		<button
			{...props}
			className={styles.btn}
		></button>
	);
};

export default Button;
