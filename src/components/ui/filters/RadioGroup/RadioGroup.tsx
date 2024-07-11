import { useState } from 'react';
import { RadioButton } from './RadioButton/RadioButton';
import styles from './RadioGroup.module.scss';

export const RadioGroup = () => {
	// в состоянии храним, какая кнопка сейчас активна
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	// записываем в стейт выбранную радиокнопку
	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value); // Обновляем selectedValue на основе значения радиокнопки
	};

	return (
		<div className={styles.radio_container}>
			<RadioButton
				value='paid'
				label='Платный'
				isChecked={selectedValue === 'paid'}
				onChange={handleRadioChange}
			></RadioButton>
			<RadioButton
				value='free'
				label='Бесплатный'
				isChecked={selectedValue === 'free'}
				onChange={handleRadioChange}
			></RadioButton>
		</div>
	);
};
