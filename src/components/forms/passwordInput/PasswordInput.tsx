import EyeSvg from '@/assets/icons/eye.svg';
import EyeOffSvg from '@/assets/icons/eyeOff.svg';
import { InputHTMLAttributes, useState } from 'react';
import styles from './PasswordInput.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = (props: Props) => {
	const [isVisiblePassword, setVisiblePassword] = useState(false);

	const handleShowPassword = () => {
		setVisiblePassword(!isVisiblePassword);
	};

	return (
		<>
			<input
				className={styles.input}
				type={isVisiblePassword ? 'text' : 'password'}
				{...props}
			/>
			<div
				className={styles.showPasswordSwitcher}
				onClick={handleShowPassword}
			>
				{isVisiblePassword ? <EyeOffSvg /> : <EyeSvg />}
			</div>
		</>
	);
};

export default PasswordInput;
