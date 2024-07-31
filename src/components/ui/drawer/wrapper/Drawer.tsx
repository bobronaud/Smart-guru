import classNames from 'classnames/bind';
import styles from './Drawer.module.scss';

const cx = classNames.bind(styles);
interface DrawerProps{
    isOpen:boolean,
    children:React.ReactNode
}
const Drawer=({isOpen,children}:DrawerProps)=>{
    return(
        isOpen
        &&
        <div className={cx("sidebar")}>
            <div className={cx("wrapper")}>
                {children}
            </div>
        </div>
    )
}
export default Drawer
