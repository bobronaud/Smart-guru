import Navbar from '@/components/navbar/Navbar';
import Button from '@/components/ui/button/Button';
import HugemanSVG from '@/assets/icons/hugeman.svg';
import classNames from 'classnames/bind';
import styles from './EmptyFavourite.module.scss';
import TopBar from '@/components/header/TopBar/TopBar';
import { Link } from 'react-router-dom';
import routes from '@/routes';

const cx = classNames.bind(styles);

const EmptyFavorite = () => {
	return (
		<div className={cx('container')}>
			<Navbar />
			<TopBar />
			<div className={cx('main-part')}>
				<HugemanSVG className={cx('big-man')} />
				<h3 className={cx('text-line')}>Пока здесь ничего нет</h3>
				<Link to={routes.catalog()}>
					<div className={cx('backBtn')}>
						<Button style={{ width: '100%' }}>Перейти в каталог</Button>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default EmptyFavorite;
