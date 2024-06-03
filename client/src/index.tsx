import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';

const root = document.getElementById('root');

const container = createRoot(root);

container.render(<App />);
