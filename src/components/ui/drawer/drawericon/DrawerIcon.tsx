import classNames from 'classnames/bind';
import { ReactNode } from "react";
import styles from './DrawerIcon.module.scss';
const cx=classNames.bind(styles)
interface DrawerIcon{
    children:ReactNode
}
const DrawerIcon=({children}:DrawerIcon)=>{
    return(
        <div className={cx("drawer-course-icon")}>
        {children}
        </div>
    )
}
export default DrawerIcon