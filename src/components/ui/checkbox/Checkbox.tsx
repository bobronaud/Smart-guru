import styles from './Checkbox.module.scss';

const Checkbox = () => {
	return (
		<label>
			<input
				className={styles.checkbox}
				type='checkbox'
			/>
			{/* <span className={styles.custom}></span> */}
		</label>
	);
};

export default Checkbox;
