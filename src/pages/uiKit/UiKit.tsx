import Clock from '@/assets/icons/clock.svg';
import Button from '@/components/ui/button/Button';
import { FiltersMenu } from '@/components/ui/filters/FiltersMenu';
import styles from './UiKit.module.scss';

const UiKit = () => {
	return (
		<div className={styles.container}>
			<div /*Div с кнопками. Для удобства можно свернуть*/>
				<div className={styles.block}>
					<Button
						variant='primary'
						size='lg'
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='secondary'
						size='lg'
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='outlined'
						size='lg'
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='primary'
						size='sm'
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='secondary'
						size='sm'
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='outlined'
						size='sm'
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
				</div>
				<div className={styles.block}>
					<Button
						variant='primary'
						size='lg'
						disabled
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='secondary'
						size='lg'
						disabled
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='outlined'
						size='lg'
						disabled
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='primary'
						size='sm'
						disabled
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='secondary'
						size='sm'
						disabled
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
					<Button
						variant='outlined'
						size='sm'
						disabled
					>
						<p>Кнопка</p>
						<Clock />
					</Button>
				</div>
			</div>
			<FiltersMenu></FiltersMenu>
			<hr />
		</div>
	);
};

export default UiKit;
