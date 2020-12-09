import React from 'react'
import styles from "../styles/styles";
import Round from "../assets/images/round.png";


const FullPage = props => {
    return (
        <div style={{height: '100vh', width: '100vw', position: 'relative', ...props.backgroundStyle}}>

            <div style={{...styles.page, ...styles.flexCenter, ...props.contentStyle}}>

                {props.children}

            </div>
            {
                (props.fancy) ? <img src={Round} style={styles.round} alt='' /> : <div/>
            }
        </div>
    )
}

export default FullPage;