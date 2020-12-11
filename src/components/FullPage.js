import React, {useEffect, useRef} from 'react'
import styles from "../styles/styles";
import Round from "../assets/images/round.png";
import gsap from "gsap";
const FullPage = props => {


    return (
        <div style={{height: '100vh', width: '100vw', position: 'relative', ...props.backgroundStyle}}>
            <div style={{...styles.page, ...styles.flexCenter, ...props.contentStyle}}>
                {props.children}
            </div>
            {
                (props.fancy) ? <img src={Round} style={styles.round} alt='' className='round' /> : <div/>
            }
        </div>
    )
}

export default FullPage;