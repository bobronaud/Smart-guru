import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/mainPage/mainPage';
import MyCertificates from './pages/myCertificates/MyCertificates';
import { MySettings } from './pages/mySettings/MySettingsPage';
import UiKit from './pages/uiKit/UiKit';
import routes from './routes';

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				index
				element={<MainPage />}
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
				path={routes.settings()}
				element={<MySettings />}
			/>
		</Routes>
	);
};

export default AppRoutes;
