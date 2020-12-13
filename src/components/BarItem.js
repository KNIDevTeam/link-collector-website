import React from "react";
import styles from "../styles/styles";

const BarItem = props => {

    return(
        <div onClick={props.onClick} style={{...styles.sideBar.item, ...styles.flexCenter,  ...props.style}} className={'btn bright'}>
            {props.children}
        </div>
    )
}

export default BarItem;