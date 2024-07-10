import CloseSVG from '@/assets/icons/close.svg';
import Button from '@/components/ui/button/Button';
import { useAppDispatch } from '@/hooks';
import { closeModal, openModal } from '@/store/slices/modalSlice';
import { useFormik } from 'formik';
import styles from './Recovery.module.scss';

const RecoveryRequest = () => {
	const dispatch = useAppDispatch();
	const handleClose = () => {
		dispatch(closeModal());
	};

	const formik = useFormik({
		initialValues: {
			email: '',
		},
		onSubmit: () => {
			// просто для теста и наглядности открываем следующий шаг восстановления
			dispatch(openModal('recoveryNewPassword'));
		},
	});

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.title}>Восстановление пароля</h2>
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

export default RecoveryRequest;
