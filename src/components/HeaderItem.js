import React from 'react'
import {NavLink} from "react-router-dom";
import styles from "../styles/styles";
import theme from "../styles/theme";

const item = styles.header.item;

const HeaderItem = (props) => {

    const first = {
        fontSize: (props.first) ? theme.font.size.l : styles.header.item.normal.fontSize,
        fontWeight: (props.first) ? 700 : 600
    }

    return(
        <NavLink className='btn' onClick={props.onClick} exact to={props.url}
                 activeStyle={styles.header.item.active}
                 style={{...styles.header.item.normal, ...props.style, ...first}}>
            {props.children}
        </NavLink>
    )
}

export default HeaderItem;