import CloseSVG from '@/assets/icons/close.svg';
import PasswordInput from '@/components/forms/passwordInput/PasswordInput';
import Button from '@/components/ui/button/Button';
import { useAppDispatch } from '@/store';
import { closeModal } from '@/store/slices/modalSlice';
import { useFormik } from 'formik';
import styles from './Recovery.module.scss';

const RecoveryNewPassword = () => {
	const dispatch = useAppDispatch();
	const handleClose = () => {
		dispatch(closeModal());
	};

	const formik = useFormik({
		initialValues: {
			password: '',
			confirmPassword: '',
		},
		onSubmit: () => {
			dispatch(closeModal());
		},
	});

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.title}>Восстановление пароля</h2>
				<CloseSVG onClick={handleClose} />
			</div>
			<form className={styles.form}>
				<PasswordInput
					className={styles.input}
					name='password'
					id='password'
					onChange={formik.handleChange}
					value={formik.values.password}
					placeholder='Пароль'
				/>
				<PasswordInput
					className={styles.input}
					name='confirmPassword'
					id='confirmPassword'
					onChange={formik.handleChange}
					value={formik.values.confirmPassword}
					placeholder='Повторить пароль'
				/>
			</form>
			<Button
				onClick={formik.submitForm}
				disabled={formik.isSubmitting}
				className={styles.button}
			>
				Восстановить
			</Button>
		</div>
	);
};

export default RecoveryNewPassword;
