import styles from './Navbar.module.scss';

import MenuItem from '../ui/menuItem/MenuItem';

import CatalogSvg from '@/assets/icons/catalog.svg';
import CertifitacesSvg from '@/assets/icons/certifitaces.svg';
import RecordsSvg from '@/assets/icons/records.svg';
import ReviewsSvg from '@/assets/icons/reviews.svg';
import SettingsSvg from '@/assets/icons/settings.svg';
import SignOutSvg from '@/assets/icons/signOut.svg';
import LogoDesktop from '@/assets/logos/logoDesktop.svg';
import routes from '@/routes';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	const navButtons = [
		{
			name: 'Каталог',
			path: routes.catalog(),
			svg: <CatalogSvg />,
		},
		{
			name: 'Записи',
			path: routes.records(),
			svg: <RecordsSvg />,
		},
		{
			name: 'Сертификаты',
			path: routes.myCertificates(),
			svg: <CertifitacesSvg />,
		},
		{
			name: 'Отзывы',
			path: routes.reviews(),
			svg: <ReviewsSvg />,
		},
	];

	return (
		<div className={styles.container}>
			<div>
				<LogoDesktop className={styles.logo} />
				<nav>
					<ul className={styles.menuNav}>
						{navButtons.map(({ name, path, svg }) => (
							<li
								className={styles.menuItem}
								key={name}
							>
								<MenuItem
									to={path}
									active={currentPath === path}
								>
									{svg}
									<p className={styles.buttonText}>{name}</p>
								</MenuItem>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<nav className={styles.menuExit}>
				<div>
					<MenuItem
						to={routes.settings()}
						active={currentPath === routes.settings()}
					>
						<SettingsSvg />
						<p>Настройки</p>
					</MenuItem>

					<MenuItem>
						<SignOutSvg />
						<p>Выход</p>
					</MenuItem>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
