import BigLogoSVG from '@/assets/icons/biglogo.svg';
import HeartSVG from '@/assets/icons/heart.svg';
import SmallLogoSVG from '@/assets/icons/smalllogo.svg';
import Bell from '@/components/ui/bell/Bell';
import useWindowWidth from '@/hooks/useWindowWidth';
import classes from './TopBar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import routes from '@/routes';

const TopBar = () => {
	const location = useLocation();
	const isFavourite = location.pathname === '/empty-favourite';
	const dispWidth = useWindowWidth();
	const bigWidth = dispWidth <= 1000 && dispWidth > 600;
	const smallWidth = dispWidth <= 600;

	return (
		<section className={classes.topBar}>
			{bigWidth && <BigLogoSVG className={classes.bigLogo} />}
			{smallWidth && <SmallLogoSVG className={classes.smallLogo} />}
			<div className={classes.box}>
				<div className={classes.btnBox}>
					<Link to={routes.emptyFavourite()}>
						<button className={`${classes.favBtn} ${isFavourite && classes.active}`}>
							<HeartSVG />
						</button>
					</Link>
					<Bell />
				</div>
				<div className={classes.profBox}>
					{!smallWidth && (
						<div className={classes.nameBox}>
							<p className={classes.user}>Пользователь</p>
							<p className={classes.userName}>Семечки Джинн</p>
						</div>
					)}
					<div className={classes.photoBox}>
						<img
							className={classes.photo}
							src='https://main-cdn.sbermegamarket.ru/hlr-system/-37/138/702/172/917/56/100028794497b0.png'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopBar;
