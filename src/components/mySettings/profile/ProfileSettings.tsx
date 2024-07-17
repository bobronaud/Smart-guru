import { FC } from 'react';
import styles from './ProfileSettings.module.scss';

interface MySettingsProps {
	imageSrc: string;
	login: string;
	email: string;
	password: string;
}

export const ProfileSettings: FC<MySettingsProps> = ({ imageSrc, login, email, password }) => {
	return (
		<div className={styles.profile_settings}>
			<div>
				<img
					className={styles.user_avatar}
					src={imageSrc}
					alt='Аватар пользователя'
				/>
			</div>

			<div className={styles.profile_srttings_container}>
				<div className={styles.text_contant}>
					<h2 className={styles.text_content_title}>Логин</h2>
					<p className={styles.text_container}>{login}</p>
				</div>
				<div className={styles.text_contant}>
					<h2 className={styles.text_content_title}>E-mail</h2>
					<p className={styles.text_container}>{email}</p>
				</div>
				<div className={styles.text_contant}>
					<h2 className={styles.text_content_title}>Пароль</h2>
					<p className={styles.text_container}>{password}</p>
				</div>
				<button className={styles.profile_button}>Сменить пароль</button>
				<button className={styles.profile_button}>Удалить аккаунт</button>
			</div>
		</div>
	);
};
