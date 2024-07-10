import { FC, useState } from 'react';
import styles from './MySettings.module.scss';
import { ProfileSettings } from './profile/ProfileSettings';
import Avatar from './Rectangle 119.png';

export const MySettingsComponent: FC = () => {
	const [activeTab, setActiveTab] = useState('profile');

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	const userData = {
		imageSrc: Avatar,
		login: 'Overcast',
		email: 'maslow.boris2017@yandex.ru',
		password: '*****',
	};
	return (
		<div className={styles.main_container}>
			<h1>Настройки</h1>
			<div className={styles.tabs_container}>
				<button
					className={`${styles.tab_button} ${activeTab === 'profile' ? styles.active : ''}`}
					onClick={() => handleTabClick('profile')}
				>
					Профиль
				</button>
				<button
					className={`${styles.tab_button} ${activeTab === 'notifications' ? styles.active : ''}`}
					onClick={() => handleTabClick('notifications')}
				>
					Уведомления
				</button>
			</div>
			<div id='profile'>
				<ProfileSettings
					imageSrc={userData.imageSrc}
					login={userData.login}
					email={userData.email}
					password={userData.password}
				/>
			</div>
		</div>
	);
};
