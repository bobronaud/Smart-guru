import NotFoundManSVG from '@/assets/icons/notfoundman.svg';
import { PageLayout } from '@/components/pageLayout/PageLayout';
import Button from '@/components/ui/button/Button';
import routes from '@/routes';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './notFound.module.scss';

const cx = classNames.bind(styles);

const NotFound = () => {
	return (
		<PageLayout>
			<div className={cx('main-container')}>
				<NotFoundManSVG className={cx('not-found-man')} />
				<h3 className={cx('text-line')}>Страница не найдена</h3>
				<Link to={routes.catalog()}>
					<div className={cx('backBtn')}>
						<Button style={{ width: '100%' }}>Перейти в каталог</Button>
					</div>
				</Link>
			</div>
		</PageLayout>
	);
};

export default NotFound;
