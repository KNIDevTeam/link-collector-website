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
        <FullPage animated fancy contentStyle={{flexFlow: 'column', gap: '5vh'}}>
            <span style={{fontSize: theme.font.size.m}}>Najwyraźniej nie masz uprawnień do przeglądania tej zawartości.</span>
            <Button className='special' onClick={() => move()}>
                Przejdź do ekranu logowania
            </Button>
        </FullPage>
    )
}


export default DeniedView;
