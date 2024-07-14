import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './StarRating.module.scss';

interface StarRatingProps {
	count?: number;
	activeStyle?: React.CSSProperties;
	currentItem: number;
	setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
}

const cx = classNames.bind(styles);
const StarRating: React.FC<StarRatingProps> = ({
	count = 5,
	activeStyle = { fill: 'orange', stroke: 'orange' },
	currentItem,
	setCurrentItem,
}) => {
	const stars = Array(count).fill(0);

	const [hoverItem, setHoverItem] = useState<number | undefined>(undefined);

	return (
		<div className={cx('stars')}>
			{stars.map((_, index) => {
				const currentStyle = index <= currentItem ? activeStyle : { stroke: '#9EA5AD', fill: 'none' };
				const hoverStyle = index <= hoverItem ? activeStyle : {};
				return (
					<div
						key={index}
						style={{ ...currentStyle, ...hoverStyle }}
						onMouseMove={() => setHoverItem(index)}
						onMouseOut={() => setHoverItem(undefined)}
						onClick={() => setCurrentItem(index)}
					>
						<svg
							width='40.000000'
							height='40.000000'
							viewBox='0 0 40 40'
							xmlns='http://www.w3.org/2000/svg'
							className={cx('svg')}
						>
							<desc>Created with Pixso.</desc>
							<defs>
								<clipPath id='clip590_21633'>
									<rect
										id='Star'
										width='40.000000'
										height='40.000000'
										fillOpacity='0'
									/>
								</clipPath>
							</defs>

							<g clipPath='url(#clip590_21633)'>
								<path
									id='Star 2'
									d='M14.72 11.99C14.58 12.26 14.32 12.45 14.01 12.51L4.74 14.11C3.95 14.25 3.64 15.22 4.2 15.79L10.75 22.53C10.97 22.76 11.07 23.07 11.02 23.37L9.68 32.68C9.57 33.48 10.39 34.08 11.12 33.72L19.55 29.57C19.83 29.44 20.16 29.44 20.44 29.57L28.87 33.72C29.6 34.08 30.42 33.48 30.31 32.68L28.97 23.37C28.92 23.07 29.02 22.76 29.24 22.53L35.79 15.79C36.35 15.22 36.04 14.25 35.25 14.11L25.98 12.51C25.67 12.45 25.41 12.26 25.27 11.99L20.88 3.67C20.5 2.96 19.49 2.96 19.11 3.67L14.72 11.99Z'
									strokeOpacity='1.000000'
									strokeWidth='2.000000'
									strokeLinejoin='round'
								/>
							</g>
						</svg>
					</div>
				);
			})}
		</div>
	);
};

export default StarRating;
