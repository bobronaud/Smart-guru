import CloseSVG from '@/assets/icons/close.svg';
import PasswordInput from '@/components/forms/passwordInput/PasswordInput';
import Button from '@/components/ui/button/Button';
import { useAppDispatch } from '@/store';
import { closeModal } from '@/store/modal/modalSlice';
import { useFormik } from 'formik';
import styles from './SignUp.module.scss';

const SignUp = () => {
	const dispatch = useAppDispatch();
	const handleClose = () => {
		dispatch(closeModal());
	};

	const formik = useFormik({
		initialValues: {
			email: '',
			login: '',
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
				<h2 className={styles.title}>Регистрация</h2>
				<CloseSVG onClick={handleClose} />
			</div>
			<form className={styles.form}>
				<input
					className={styles.input}
					type='text'
					name='email'
					id='email'
					onChange={formik.handleChange}
					value={formik.values.email}
					placeholder='E-mail'
				/>
				<input
					className={styles.input}
					type='text'
					name='login'
					id='login'
					onChange={formik.handleChange}
					value={formik.values.login}
					placeholder='Логин'
				/>
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
				className={styles.button}
				onClick={formik.submitForm}
				disabled={formik.isSubmitting}
			>
				Регистрация
			</Button>
		</div>
	);
};

export default SignUp;
