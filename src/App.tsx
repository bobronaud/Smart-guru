import Button from './components/ui/button/Button';
import { useAppDispatch } from './store';
import { openModal } from './store/slices/modalSlice';

const App = () => {
	const dispatch = useAppDispatch();
	const handleclick = () => {
		dispatch(openModal('role'));
	};
	const handleclick2 = () => {
		dispatch(openModal('logIn'));
	};
	return (
		<div>
			<Button onClick={handleclick}>open modal</Button>
			<Button onClick={handleclick2}>open modal</Button>
		</div>
	);
};

export default App;
