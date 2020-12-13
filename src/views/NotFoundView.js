import React from "react";
import FullPage from "../components/FullPage";
import {useHistory} from "react-router-dom";
import theme from "../styles/theme";
import Button from "../components/Button";


const NotFoundView = props => {
    const history = useHistory();

    const move = () => {
        history.push('/')
    }

    return(
        <FullPage animated fancy contentStyle={{flexFlow: 'column', gap: '5vh'}}>
            <span style={{fontSize: theme.font.size.xl}}>404</span>
            <span style={{fontSize: theme.font.size.m}}>Nie możemy znaleźć tego, czego szukasz.</span>
            <Button className='special' onClick={() => move()}>
                Przejdź do strony głównej
            </Button>
        </FullPage>
    )
}


export default NotFoundView;