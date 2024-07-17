import TopBar from '@/components/header/TopBar/TopBar';
import { MySettingsComponent } from '@/components/mySettings/MySettings';
import Navbar from '@/components/navbar/Navbar';
import styles from './MySettings.module.scss';

export const MySettings = () => {
	return (
		<div className={styles.settings_container}>
			<Navbar></Navbar>
			<div className={styles.settings_content}>
				<TopBar></TopBar>
				<MySettingsComponent />
			</div>
		</div>
	);
};
