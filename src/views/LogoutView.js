import React, {useEffect} from "react";
import FullPage from "../components/FullPage";
import Button from "../components/Button";
import theme from "../styles/theme";
import {useHistory} from 'react-router-dom'

const LogoutView = props => {

    const history = useHistory();

    useEffect(() => {
        localStorage.clear();
        props.setToken(null);
        props.setCounter(0);
    })

    const move = () => {
        history.push('/login')
    }

    return(
        <FullPage fancy contentStyle={{flexFlow: 'column', gap: '5vh'}}>
            <span style={{fontSize: theme.font.size.m}}>Pomyślnie wylogowano.</span>
            <Button className='special' onClick={() => move()} style={btn}>
                Zaloguj się ponownie.
            </Button>
        </FullPage>
    )
}

const btn = {
    width: '20vw',
    height: '8vh',
}

export default LogoutView;
