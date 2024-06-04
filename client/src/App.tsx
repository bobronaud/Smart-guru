import { useState } from 'react';
//коммент
const App = () => {
	const [count, setCount] = useState(0);
	const handleclick = () => {
		setCount((prev) => prev + 1);
	};
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleclick}>plus</button>
		</div>
	);
};

export default App;
