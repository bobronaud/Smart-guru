import styles from "./DrawerTitle.module.scss";

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DrawerTitle =({children}:any)=>{
    return(
        <h1 className={cx("drawer-title")}>
            {children}
        </h1>
    )
}
export default DrawerTitle