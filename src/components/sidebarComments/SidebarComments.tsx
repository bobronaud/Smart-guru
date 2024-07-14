import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './SidebarComments.module.scss';

const cx = classNames.bind(styles);

import ImageExit from '../../assets/icons/arrowExit.svg';
import StarRating from '../ui/starRating/StarRating';
import image from './1.jpeg';
interface SidebarCommentsProps {
	title: string;
	sendText: string;
}
const SidebarComments: React.FC<SidebarCommentsProps> = ({ title, sendText }) => {
	const [toggle, setToggle] = useState(true);
	const [currentItem, setCurrentItem] = useState();
	const toggleFunc = () => {
		setToggle((prevState) => !prevState);
	};

	useEffect(() => {
		if (toggle) {
			document.body.classList.add(styles['body']);
		} else {
			document.body.classList.remove(styles['body']);
		}

		return () => {
			document.body.classList.remove(styles['body']);
		};
	}, [toggle]);
	return (
		<div className={cx(toggle ? 'container' : null)}>
			{' '}
			<div className={cx('wrapper', toggle ? 'active' : null)}>
				<div className={cx('wrapper-title')}>
					<h2 className={cx('title')}>{title}</h2>

					<ImageExit
						width='24'
						height='24'
						className={cx('image-exit')}
						onClick={toggleFunc}
					/>
				</div>
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
					</div>
					<div>
						<label className={cx('label')}>Ваша роль</label>
						<select
							id='fruits'
							name='fruits'
							className={cx('input', 'select')}
						>
							<option value='Проходил курс'>Проходил курс</option>
							<option value='Видел обзор на курс'>Видел обзор на курс</option>
							<option value='Яблоко'>Яблоко</option>
						</select>
					</div>
					<div>
						<label className={cx('label')}>Введите текст отзывы</label>
						<input
							type='text'
							className={cx('input', 'input-reviews')}
						/>
					</div>
					<div className={cx('wrapper-reting')}>
						<p className={cx('text')}>Рейтинг:</p>
						<StarRating
							currentItem={currentItem}
							setCurrentItem={setCurrentItem}
						/>
					</div>

					<button className={cx('button')}>{sendText}</button>
				</form>
			</div>
		</div>
	);
};

export default SidebarComments;
