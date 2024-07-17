import { FC } from 'react';
import styles from './RadioButton.module.scss';

interface RadioButtonProps {
	value: string;
	label: string;
	isChecked: boolean;
	// React.ChangeEvent<HTMLInputElement> - это тип события (event type) в библиотеке React, который представляет собой событие изменения (change event), происходящее в элементе <input> HTML
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: FC<RadioButtonProps> = ({ label, value, isChecked, onChange }) => {
	return (
		<label className={styles.radio_label}>
			<input
				// тип радиокнопка
				type='radio'
				value={value}
				// атрибут для, отслеживания выбрана ли кнопка или нет
				checked={isChecked}
				className={styles.visually_hidden}
				onChange={onChange}
			/>
			<span className={styles.radio_button}></span>
			{label}
		</label>
	);
};
