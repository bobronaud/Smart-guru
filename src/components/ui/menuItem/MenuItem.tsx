import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './MenuItem.module.scss';

interface MenuItemProps {
	children: React.ReactNode;
	active?: boolean;
	to?: string;
}

const MenuItem = ({ children, active, to, ...restProps }: MenuItemProps) => {
	const classes = cn(styles.menuItem, active && styles.active);
	return (
		<Link
			to={to}
			className={classes}
			{...restProps}
		>
			<div className={styles.children}>{children}</div>
		</Link>
	);
};

export default MenuItem;
