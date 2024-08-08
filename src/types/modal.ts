export type ModalType = 'logIn' | 'signUp' | 'role' | 'recoveryRequest' | 'recoveryNewPassword';

export type State = {
	type: ModalType;
	isOpen: boolean;
};
