import { Route, Routes } from 'react-router-dom';
import App from './App';
import MyCertificates from './pages/myCertificates/MyCertificates';
import UiKit from './pages/uiKit/UiKit';
import routes from './routes';

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				index
				element={<App />}
			/>
			<Route
				path={routes.uiKit()}
				element={<UiKit />}
			/>
			<Route
				path={routes.myCertificates()}
				element={<MyCertificates />}
			/>
		</Routes>
	);
};

export default AppRoutes;
