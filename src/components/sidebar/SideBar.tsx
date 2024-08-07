import { useEffect, useState } from 'react';

import Button from '@/components/ui/button/Button';
import CloseButton from '@/components/ui/closebutton/CloseButton';

import Raiting from '@/components/ui/raiting/Raiting';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

import CameraSVG from '@/assets/icons/camera.svg';
import ErrorSVG from '@/assets/icons/Error.svg';
import SuccessSvg from '@/assets/icons/Success.svg';

import {
	Drawer,
	DrawerCourseHeader,
	DrawerIcon,
	DrawerInput,
	DrawerMemo,
	DrawerTitle,
} from '@/components/ui/drawer/drawer';
import { Dropdown } from '@/components/ui/filters/Dropdown/Dropdown';
import { SideBarProps } from '@/types/sidebar';

const cx = classNames.bind(styles);

const SideBar = ({ isAdd, isEdit, isEditProfile, isOpen, setOpen, accounts, statuses, data }: SideBarProps) => {
	if (!isEditProfile && (!accounts || !statuses)) {
		return;
	}
	const [doneStatus, setDoneStatus] = useState(false);
	const [isDone, setDone] = useState(false);
	const [rating, setRating] = useState(data?.rating | 0);
	const [isShowCamera,setShowCamera] = useState(false)

	useEffect(() => {
		setDone(!isOpen);
		setDoneStatus(true);
	}, [isOpen]);
	return (
		isOpen && (
			<Drawer isOpen={isOpen}>
				{(isEditProfile || isEdit || isAdd) && (
					<div className={cx('drawer-conteiner')}>
						<DrawerTitle>
							{isEdit && 'Редактировать Отзыв'}
							{isAdd && 'Оставить Отзыв'}
							{isEditProfile && 'Редактировать профиль'}
							<CloseButton onClose={setOpen} />
						</DrawerTitle>
						{!isDone && (isAdd || isEdit) && (
							<DrawerCourseHeader>
								<DrawerIcon>{data.icon}</DrawerIcon>
								<div className={cx('drawer-course-header-text')}>
									<div className={cx('nameOfCourse')}>{data.nameCourse}</div>
									<div>{data.category}</div>
								</div>
							</DrawerCourseHeader>
						)}
						{isDone ? (
							doneStatus ? (
								<div className={cx('done-conteiner')}>
									<SuccessSvg />
									{isAdd && 'Озыв успешно добавлен'}
									{isEdit && 'Отзыв успешно отредактирован'}
									{isEditProfile && 'Профиль успешно отредактирован'}
								</div>
							) : (
								<div className={cx('done-conteiner')}>
									<ErrorSVG />
									{isAdd && 'Озыв не добавлен'}
									{isEdit && 'Отзыв не отредактирован'}
									{isEditProfile && 'Профиль не отредактирован'}
								</div>
							)
						) : (
							<div className={'sidebar-content'}>
								<div className={cx('profile-photo')}>
									<div className={cx('svg-wrapper')}>
										<img onMouseLeave={()=>setShowCamera(false)} onMouseEnter={()=>setShowCamera(true)}  src={data.photo}></img>
										{isShowCamera&&<div className={cx('svg-camera')}><CameraSVG/></div>}
									</div>
								</div>
								<form className={cx('form')}>
									<div className={'form-item'}>
										{isEditProfile ? (
											<>
												<DrawerInput
													id='login'
													name={'Логин'}
													type='text'
													value={data.login}
												/>
											</>
										) : (
											<>
												<label>ФИО</label>
												<Dropdown
													label={data.name}
													options={accounts}
												/>
											</>
										)}
									</div>
									{isEditProfile ? (
										<DrawerInput
											id='role'
											name={'Email'}
											type='text'
											value={data.role || data.email}
										/>
									) : (
										<div className={'form-item'}>
											<label>Состояние </label>
											<Dropdown
												label={data.role}
												options={statuses}
											/>
										</div>
									)}

									{isEditProfile && (
										<DrawerInput
											id='password'
											name='Пароль'
											type='password'
											value={data.role || data.password}
										/>
									)}
									{(isEdit || isAdd) && (
										<DrawerMemo
											id='review'
											name='Отзыв'
											placeholder='Добавьте отзыв'
											value={isEdit ? data.review : ''}
											inRows={data?.review?.length / (10 * 4)}
										/>
									)}
									{(isAdd || isEdit) && (
									<div className={cx('rating-conteiner')}>
										Рейтинг:
										<Raiting score={rating} />
									</div>
								)}
								</form>
								<div className={cx('btn-conteiner')}>
									{(isEditProfile || isEdit || isAdd) && !isDone && (
										<Button
											onClick={() => setDone(true)}
											size={'lg'}
										>
											{(isEdit || isEditProfile) && 'Сохранить'}
											{isAdd && 'Добавить'}
										</Button>
									)}
								</div>
							</div>
						)}
					</div>
				)}
			</Drawer>
		)
	);
};
export default SideBar;
