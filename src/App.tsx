import Button from './components/ui/button/Button';
import { useAppDispatch } from './hooks';
import { openModal } from './store/slices/modalSlice';

const App = () => {
	const dispatch = useAppDispatch();
	const handleclick = () => {
		dispatch(openModal('logIn'));
	};
	return (
		<div>
			<Button onClick={handleclick}>Describe</Button>
		</div>
	);
};

export default App;
