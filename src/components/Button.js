import React from 'react'
import styles from "../styles/styles";

const Button = props => {

    return (
        <div className={'btn ' + props.className} onClick={props.onClick} style={{...styles.btn, ...props.style}}>
            {props.children}
        </div>
    )
}

export default Button;