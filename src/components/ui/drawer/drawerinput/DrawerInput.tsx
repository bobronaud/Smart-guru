import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './DrawerInput.module.scss';

const cx = classNames.bind(styles);
interface DrawerInputProps {
	id: string;
	name: string;
	type: string;
	value: string;
}
const DrawerInput = ({ id, name, type, value }: DrawerInputProps) => {
	const [text, setText] = useState(value);
	return (
		<>
			<label htmlFor={id}>{name}</label>
			<br />
			<input
				className={cx('text-field')}
				id={id}
				type={type}
				value={text}
				onChange={(event) => setText(event.currentTarget.value)}
			/>
			<br />
		</>
	);
};
export default DrawerInput;
