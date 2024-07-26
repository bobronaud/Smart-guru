import TopBar from '@/components/header/TopBar/TopBar';

import Navbar from '@/components/navbar/Navbar';
import { FC, ReactNode } from 'react';
import styles from './PageLayout.module.scss';

type PageLayoutProps = {
	children: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	return (
		<div className={styles.page_container}>
			<Navbar />
			<div className={styles.page_content}>
				<TopBar />
				{children}
			</div>
		</div>
	);
};
