import { Route, Routes } from 'react-router-dom';
import App from './App';
import MyCertificates from './pages/myCertificates/MyCertificates';
import UiKit from './pages/uiKit/UiKit';
import routes from './routes';
import EmptyFavorite from './pages/emptyFavourite/EmptyFavourite';

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
			<Route
				path={routes.emptyFavourite()}
				element={<EmptyFavorite />}
			/>
		</Routes>
	);
};

export default AppRoutes;
