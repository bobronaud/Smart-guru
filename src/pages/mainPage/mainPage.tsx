import CardCourse from '@/components/cardCourse/CardCourse';
import { PageLayout } from '@/components/pageLayout/PageLayout';
import { FiltersMenu } from '@/components/ui/filters/FiltersMenu';
import { FC } from 'react';
import styles from './mainPage.module.scss';
import { cardData } from './mainPageCardData';

export const MainPage: FC = () => {
	return (
		<PageLayout>
			<div className={styles.main_container}>
				<FiltersMenu />
				<div className={styles.card_container}>
					{cardData.map((card) => {
						return (
							<CardCourse
								data={card}
								key={1}
							></CardCourse>
						);
					})}
				</div>
			</div>
		</PageLayout>
	);
};
