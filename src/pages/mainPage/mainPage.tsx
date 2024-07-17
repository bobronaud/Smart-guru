import TopBar from '@/components/header/TopBar/TopBar';

import CardCourse from '@/components/cardCourse/CardCourse';
import Navbar from '@/components/navbar/Navbar';
import { FiltersMenu } from '@/components/ui/filters/FiltersMenu';
import styles from './mainPage.module.scss';
import { cardData } from './mainPageCardData';

export const MainPage = () => {
	return (
		<div className={styles.settings_container}>
			<Navbar></Navbar>
			<div className={styles.settings_content}>
				<TopBar></TopBar>
				<div className={styles.main_container}>
					<FiltersMenu></FiltersMenu>
					<div className={styles.card_container}>
						{cardData.map((card) => {
							return <CardCourse data={card}></CardCourse>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
