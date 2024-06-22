import { useState } from 'react';
import classes from './Header.module.scss';
import TopBar from './TopBar/TopBar';
const Header = () => {
	const [advertisement, setAdvertisement] = useState(false);
	const handleclick = () => {
		setAdvertisement(!advertisement);
	};
	return (
		<header className={classes.mainContainer}>
			<TopBar />
			<section className={classes.preCont}>
				<div className={classes.captionBox}>
					<h1 className={classes.caption}>Каталог</h1>
				</div>
				<div className={classes.bannerBox}>
					{advertisement ? (
						<img
							onClick={handleclick}
							className={classes.banner}
							src='https://avatars.dzeninfra.ru/get-zen_doc/3940836/pub_621b82a616b4077ea9c412e4_621b8373cddbf118aab0ae31/scale_1200'
						/>
					) : (
						<button onClick={handleclick}>Показать баннер</button>
					)}
				</div>
			</section>
		</header>
	);
};

export default Header;
