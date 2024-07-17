import { FC, useState } from 'react';
import styles from './MySettings.module.scss';
import { NotificationsSettings } from './notificators/NotificationsSettings';
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
			<div
				id='profile'
				className={`${styles.tab_content} ${activeTab === 'profile' ? styles.active : ''}`}
			>
				<ProfileSettings
					imageSrc={userData.imageSrc}
					login={userData.login}
					email={userData.email}
					password={userData.password}
				/>
			</div>
			<div
				id='notifications'
				className={`${styles.tab_content} ${activeTab === 'notifications' ? styles.active : ''}`}
			>
				<div className={styles.switch_tab_content}>
					<NotificationsSettings label='Отправлять на e-mail' />
					<NotificationsSettings label='Уведомления о записанных курсах' />
					<NotificationsSettings label='Уведомления о получении сертификата' />
					<NotificationsSettings label='Еще что-то' />
				</div>
			</div>
		</div>
	);
};
