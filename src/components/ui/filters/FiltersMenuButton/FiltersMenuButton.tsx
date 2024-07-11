import { FC } from 'react';
import styles from './FiltersMenuBtn.module.scss';
import FilterIMG from './Vector 217.svg';

//FC<ReactNode>: Это обозначение для функционального компонента React, который должен возвращать ReactNode или null. ReactNode включает в себя JSX элементы, строки и числа, а также массивы и фрагменты, которые могут содержать любые из этих типов.
export const FiltersMenuBtn: FC = () => {
	return (
		<button
			disabled={false}
			onClick={() => {}}
			className={styles.filters_button}
		>
			<p>Фильтр</p>
			<FilterIMG></FilterIMG>
		</button>
	);
};
