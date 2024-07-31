import classNames from 'classnames/bind';
import { ReactNode } from "react";
import styles from "./DrawerCourseHeader.module.scss";
const cx = classNames.bind(styles);
interface DrawerCurseHeaderProps{
    children:ReactNode
}
const DrawerCourseHeader=({children}:DrawerCurseHeaderProps)=>{
    return(
        <div className={cx("course-header")}>
            {children}
        </div>
    )
}
export default DrawerCourseHeader