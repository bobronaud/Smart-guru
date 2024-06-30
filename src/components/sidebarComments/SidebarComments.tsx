import classNames from 'classnames/bind';
import styles from './SidebarComments.module.scss';

const cx = classNames.bind(styles);

import image from './1.jpeg';

const SidebarComments = () => {
	return (
		<div className={cx('wrapper')}>
			<h2 className={cx('title')}>Редактировать отзыв</h2>
			<div className={cx('item-wrapper')}>
				<img
					src={image}
					alt=''
					className={cx('image')}
				/>
				<div>
					<h3 className={cx('title-сourse')}>Яндекс Практикум</h3>
					<p className={cx('text')}>Программирование</p>
				</div>
			</div>
			<form className={cx('form')}>
				<div>
					<label className={cx('label')}>ФИО</label>
					<input
						type='text'
						className={cx('input')}
					/>
				</div>{' '}
				<div>
					<label className={cx('label')}>ФИО</label>
					<input
						type='text'
						className={cx('input')}
					/>
				</div>{' '}
				<div>
					<label className={cx('label')}>ФИО</label>
					<input type='text' />
				</div>
			</form>
		</div>
	);
};

export default SidebarComments;
