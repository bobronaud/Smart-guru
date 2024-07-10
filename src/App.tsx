import Button from './components/ui/button/Button';
import { useAppDispatch } from './hooks';
import { openModal } from './store/slices/modalSlice';

const App = () => {
	const dispatch = useAppDispatch();
	const handleclick = () => {
		dispatch(openModal('recoveryNewPassword'));
	};
	return (
		<div>
			<Button onClick={handleclick}>open modal</Button>
		</div>
	);
};

export default App;
