import styles from './Checkbox.module.scss';

const Checkbox = () => {
	return (
		<label className={styles.customCheckbox}>
			<input
				className={styles.defaultCheckbox}
				type='checkbox'
			/>
			<span className={styles.checkmark}></span>
		</label>
	);
};

export default Checkbox;
