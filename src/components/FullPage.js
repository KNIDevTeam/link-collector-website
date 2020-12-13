import React, {useEffect, useRef} from 'react'
import styles from "../styles/styles";
import Round from "../assets/images/round.png";
import gsap from "gsap";

const FullPage = React.forwardRef((props, ref) => {

    const content = useRef(null);

    useEffect(() => {
        if(props.animated)
            gsap.from(content.current, {y: -300, duration: 1})
    }, [])

    return (
        <div style={{height: '100vh', width: '100vw', position: 'relative', ...props.backgroundStyle}}>
            <div ref={ref} style={{...styles.page, ...styles.flexCenter}}>
                {props.toastify}
                <div ref={content} style={{...styles.flexCenter, ...props.contentStyle, zIndex: 2}}>
                    {props.children}
                </div>
            </div>
            {
                (props.fancy) ? <img src={Round} style={styles.round} alt='' className='round' /> : <div/>
            }
        </div>
    )
})

export default FullPage;