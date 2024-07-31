import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './DrawerMemo.module.scss';

const cx = classNames.bind(styles);
interface DrawerInputProps {
	id: string;
    name:string;
	placeholder: string;
	value: string;
	inRows: number;
}
const DrawerMemo = ({ id,name, placeholder, value, inRows }: DrawerInputProps) => {
	const [text, setText] = useState(value);
	return (
		<>
			<label htmlFor={id}>{name}</label>
			<br />
			<textarea
				id={id}
				className={cx("review")}
				placeholder={placeholder}
				value={text}
				rows={inRows}
				onChange={(event) => setText(event.currentTarget.value)}
			/>
			<br />
		</>
	);
};
export default DrawerMemo;
