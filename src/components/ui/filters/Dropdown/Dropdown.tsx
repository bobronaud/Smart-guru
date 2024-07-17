import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ArrowBtn from '../Dropdown/Vector108.svg';
import styles from './Dropdown.module.scss';
import './Simplebar.scss';

//пользовательский тип, чтобы потом типизировать массив с опциями
//с помощью value будет отправлять ответ на сервер, label наша подпись к опции
export type option = { value: string | number; label: string };

//общий интерфейс для нашего функционального компонента
interface DropdownProps {
	label: string;
	options: option[];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleClose = () => {
		setIsOpen(false); // Закрываем список при выборе опции
	};

	return (
		<div
			className={`${styles.dropdown_container} ${isOpen ? styles.open : ''}`}
			onClick={toggleDropdown}
			role='button'
		>
			<div className={`${styles.label_container} ${isOpen ? styles.open : ''}`}>
				<p className={styles.dropdown_label}>{label}</p>
				<div>
					<ArrowBtn className={`${styles.arrow_button} ${isOpen ? styles.open : ''}`}></ArrowBtn>
				</div>
			</div>
			{isOpen && (
				<SimpleBar
					className={`${styles.dropdown_options} ${isOpen ? styles.open : ''} simplebar`}
					// Останавливаем распространение клика, чтобы не закрывался список
					onClick={(e) => e.stopPropagation()}
					forceVisible='y'
					autoHide={false}
				>
					<div className={styles.line_container}></div>
					<ul>
						{options.map((option, index) => (
							<li
								key={index}
								value={option.value}
								className={styles.dropdown_option}
								onClick={handleClose}
							>
								{option.label}
							</li>
						))}
					</ul>
				</SimpleBar>
			)}
		</div>
	);
};
