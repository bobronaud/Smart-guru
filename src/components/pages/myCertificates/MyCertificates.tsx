import classNames from 'classnames/bind';
import styles from './MyCertificates.module.scss';

const cx = classNames.bind(styles);

import image1 from './1.jpeg';
import image2 from './2.jpeg';
const MyCertificates = () => {
	return (
		<section className={cx('certificates')}>
			<div className={cx('container')}>
				<h1 className={cx('title')}>Мои сертификаты</h1>
				<ul className={cx('list')}>
					<li className={cx('item')}>
						<h2 className={cx('item-title')}>Аналитик данных c нуля</h2>
						<div className={cx('item-wrapper')}>
							<img
								src={image2}
								alt=''
							/>
							<div>
								<h3 className={cx('title-сourse')}>Skypro</h3>
								<p className={cx('text')}>Анализ данных</p>
							</div>
						</div>
						<img
							src={image1}
							alt=''
							className={cx('image-сourse')}
						/>
						<div className={cx('item-wrapper')}>
							<div className={cx('wrapper-course-info')}>
								<p className={cx('duration')}>Длительность:</p>
								<p className={cx('duration')}>24 месяца</p>
							</div>
							<div className={cx('wrapper-course-info')}>
								<h3 className={cx('сourse-passed')}>Пройден</h3>
								<p className={cx('duration')}>25.02.2024</p>
							</div>
						</div>
						<a
							href='image_location.zip'
							className={cx('button-download')}
							download
						>
							Скачать
						</a>
					</li>
					<li className={cx('item')}>
						<h2 className={cx('item-title')}>Аналитик данных c нуля</h2>
						<div className={cx('item-wrapper')}>
							<img
								src={image2}
								alt=''
							/>
							<div>
								<h3 className={cx('title-сourse')}>Skypro</h3>
								<p className={cx('text')}>Анализ данных</p>
							</div>
						</div>
						<img
							src={image1}
							alt=''
							className={cx('image-сourse')}
						/>
						<div className={cx('item-wrapper')}>
							<div className={cx('wrapper-course-info')}>
								<p className={cx('duration')}>Длительность:</p>
								<p className={cx('duration')}>24 месяца</p>
							</div>
							<div className={cx('wrapper-course-info')}>
								<h3 className={cx('сourse-passed')}>Пройден</h3>
								<p className={cx('duration')}>25.02.2024</p>
							</div>
						</div>
						<a
							href='image_location.zip'
							className={cx('button-download')}
							download
						>
							Скачать
						</a>
					</li>
					<li className={cx('item')}>
						<h2 className={cx('item-title')}>Аналитик данных c нуля</h2>
						<div className={cx('item-wrapper')}>
							<img
								src={image2}
								alt=''
							/>
							<div>
								<h3 className={cx('title-сourse')}>Skypro</h3>
								<p className={cx('text')}>Анализ данных</p>
							</div>
						</div>
						<img
							src={image1}
							alt=''
							className={cx('image-сourse')}
						/>
						<div className={cx('item-wrapper')}>
							<div className={cx('wrapper-course-info')}>
								<p className={cx('duration')}>Длительность:</p>
								<p className={cx('duration')}>24 месяца</p>
							</div>
							<div className={cx('wrapper-course-info')}>
								<h3 className={cx('сourse-passed')}>Пройден</h3>
								<p className={cx('duration')}>25.02.2024</p>
							</div>
						</div>
						<a
							href='image_location.zip'
							className={cx('button-download')}
							download
						>
							Скачать
						</a>
					</li>
				</ul>
			</div>
			;
		</section>
	);
};

export default MyCertificates;
