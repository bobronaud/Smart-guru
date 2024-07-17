import { useState } from 'react';

const App = () => {
	const [count, setCount] = useState(0);
	const handleclick = () => {
		setCount(prev => prev + 1);
	};
	return (
		<div>
			<h1>Smart-guru describers {count}</h1>
			<button onClick={handleclick}>Describe</button>
		</div>
	);
};

export default App;
