import CloseSVG from "@/assets/icons/close.svg";
import classNames from 'classnames/bind';
import React from "react";
import styles from "./CloseButton.module.scss";
const cx = classNames.bind(styles);
interface CloseButtonProps{
    onClose:React.Dispatch<React.SetStateAction<boolean>>
}
const CloseButton=({onClose}:CloseButtonProps)=>{
    return(
        <button className={cx("btn")} onClick={()=>onClose(false)}>
            <CloseSVG/>
        </button>
    )
}
export default CloseButton