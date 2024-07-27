import { useEffect, useState } from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import { Dropdown, option } from './Dropdown/Dropdown';
import styles from './FiltersMenu.module.scss';
import { FiltersMenuBtn } from './FiltersMenuButton/FiltersMenuButton';
import { RadioGroup } from './RadioGroup/RadioGroup';

export const FiltersMenu = () => {
	const options1: option[] = [
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
	];
	const options2: option[] = [
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
	];
	const options3: option[] = [
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
		{ value: 'option1', label: 'До 2 месяцев' },
		{ value: 'option1', label: 'До 6 месяцев' },
		{ value: 'option1', label: 'До 10 месяцев' },
		{ value: 'option1', label: 'Более 10 месяцев' },
	];
	const options4: option[] = [
		{ value: 'option1', label: 'Неделя' },
		{ value: 'option1', label: 'До месяца' },
	];
	const [isScreenSize, setScreenSize] = useState(false);
	useEffect(() => {
		// если размер окна меньше 1023px то true и будет рендериться кнопка фильтра
		const handleScreenSize = () => {
			setScreenSize(window.innerWidth <= 1280);
		};
		// вызываем функцию для установки начального значения isScreenSize при первоначальном рендере компонента
		handleScreenSize();
		// устанавливаем слушатель resize который будет срабатывать всегда, когда пользователь меняет размер экрана
		window.addEventListener('resize', handleScreenSize);
		return () => {
			window.removeEventListener('resize', handleScreenSize);
		};
	}, []);
	return (
		<div>
			{isScreenSize ? (
				<FiltersMenuBtn></FiltersMenuBtn>
			) : (
				<div className={styles.menu_container}>
					<Dropdown
						label='Длительность'
						options={options1}
					></Dropdown>
					<Dropdown
						label='Длительность'
						options={options2}
					></Dropdown>
					<Dropdown
						label='Длительность'
						options={options4}
					></Dropdown>
					<Dropdown
						label='Длительность'
						options={options3}
					></Dropdown>
					<RadioGroup></RadioGroup>
				</div>
			)}
		</div>
	);
};
