import { FC } from 'react';
import styles from './NotificationsSettings.module.scss';

interface NotificationsSettingsProps {
	label: string;
}

export const NotificationsSettings: FC<NotificationsSettingsProps> = ({ label }) => {
	return (
		<div className={styles.switch_container}>
			<label className={styles.switch}>
				<input
					type='checkbox'
					className={styles.visually_hidden}
				/>
				<span className={styles.slider}></span>
			</label>
			<span className={styles.switch_label}>{label}</span>
		</div>
	);
};
