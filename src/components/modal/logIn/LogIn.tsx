import CloseSVG from '@/assets/icons/close.svg';
import PasswordInput from '@/components/forms/passwordInput/PasswordInput';
import Button from '@/components/ui/button/Button';
import Checkbox from '@/components/ui/checkbox/Checkbox';
import { useAppDispatch } from '@/hooks';
import { closeModal, openModal } from '@/store/slices/modalSlice';
import { useFormik } from 'formik';
import styles from './LogIn.module.scss';

const LogIn = () => {
	const dispatch = useAppDispatch();
	const handleClose = () => {
		dispatch(closeModal());
	};

	const handleSignUp = () => {
		dispatch(openModal('signUp'));
	};

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: () => {
			dispatch(closeModal());
		},
	});

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.title}>Авторизация</h2>
				<CloseSVG onClick={handleClose} />
			</div>
			<form
				className={styles.form}
				onSubmit={formik.handleSubmit}
			>
				<input
					className={styles.input}
					type='text'
					name='email'
					id='email'
					onChange={formik.handleChange}
					value={formik.values.email}
					placeholder='Логин или e-mail'
				/>
				<PasswordInput
					className={styles.input}
					name='password'
					id='password'
					onChange={formik.handleChange}
					value={formik.values.password}
					placeholder='Пароль'
				/>
				<div className={styles.additional}>
					<div className={styles.savePassword}>
						<Checkbox />
						<span className={styles.secondaryText}>Сохранить пароль</span>
					</div>
					<span className={`${styles.recovery} ${styles.secondaryText}`}>Забыли пароль?</span>
				</div>
				<div className={styles.buttons}>
					<Button type='submit'>Войти</Button>
					<span className={styles.secondaryText}>или</span>
					<Button
						variant='outlined'
						onClick={handleSignUp}
					>
						Регистрация
					</Button>
				</div>
			</form>
		</div>
	);
};

export default LogIn;
