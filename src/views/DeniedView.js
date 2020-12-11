import React from "react";
import FullPage from "../components/FullPage";
import Button from "../components/Button";
import theme from "../styles/theme";
import {useHistory} from 'react-router-dom'

//info
//przekierowanie na login po kliknięciu

const DeniedView = props => {

    const history = useHistory();

    const move = () => {
        history.push('/login')
    }

    return(
        <FullPage fancy contentStyle={{flexFlow: 'column', gap: '5vh'}}>
            <span style={{fontSize: theme.font.size.m}}>Najwyraźniej nie masz uprawnień do przeglądania tej zawartości.</span>
            <Button className='special' onClick={() => move()} style={btn}>
                Przejdź do ekranu logowania
            </Button>
        </FullPage>
    )
}

const btn = {
    width: '20vw',
    height: '8vh',
}

export default DeniedView;
