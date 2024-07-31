import CloseSVG from '@/assets/icons/close.svg';
import imgRoleOrganization from '@/assets/images/roleOrganization.png';
import imgRoleUser from '@/assets/images/roleUser.png';
import Button from '@/components/ui/button/Button';
import { useAppDispatch } from '@/store';
import { closeModal } from '@/store/slices/modalSlice';
import styles from './Role.module.scss';

const Role = () => {
	const dispatch = useAppDispatch();
	const handleClose = () => {
		dispatch(closeModal());
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.title}>Выберите роль</h2>
				<CloseSVG onClick={handleClose} />
			</div>
			<div className={styles.roles}>
				<div className={styles.role}>
					<h4 className={styles.title}>Пользователь</h4>
					<img
						src={imgRoleUser}
						alt='Изображение роли пользователя'
					/>
				</div>
				<div className={styles.role}>
					<h4 className={styles.title}>Организация</h4>
					<img
						src={imgRoleOrganization}
						alt='Изображение роли организации'
					/>
				</div>
			</div>
			<Button
				onClick={handleClose}
				className={styles.button}
			>
				Продолжить
			</Button>
		</div>
	);
};

export default Role;
