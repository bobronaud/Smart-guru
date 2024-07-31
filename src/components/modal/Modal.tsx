import { useAppDispatch, useAppSelector } from '@/store';
import { closeModal } from '@/store/modal/modalSlice';
import getModlaType from '@/store/modal/selectors/getModalType';
import isOpenModal from '@/store/modal/selectors/isOpenModal';
import { ModalType } from '@/types/modal';
import { useEffect } from 'react';
import styles from './Modal.module.scss';
import LogIn from './logIn/LogIn';
import RecoveryNewPassword from './recovery/RecoveryNewPassword';
import RecoveryRequest from './recovery/RecoveryRequest';
import Role from './role/Role';
import SignUp from './signUp/SignUp';

type ModalComponent = {
	[key in ModalType]: JSX.Element;
};

const Modal = () => {
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector(isOpenModal);
	const type = useAppSelector(getModlaType);
	const modals: Partial<ModalComponent> = {
		signUp: <SignUp />,
		logIn: <LogIn />,
		role: <Role />,
		recoveryRequest: <RecoveryRequest />,
		recoveryNewPassword: <RecoveryNewPassword />,
	};

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				dispatch(closeModal());
			}
		};

		window.addEventListener('keydown', handleEscape);

		return () => {
			window.removeEventListener('keydown', handleEscape);
		};
	}, []);

	return (
		isOpen && (
			<div className={styles.bg}>
				<div className={styles.wrapper}>{modals[type]}</div>
			</div>
		)
	);
};

export default Modal;
