import React, {useRef} from 'react';
import AuthService from "../services/AuthService";
import styles from "../styles/styles";
import Round from '../assets/images/round.png'
import FullPage from "../components/FullPage";
import Button from "../components/Button";
import theme from "../styles/theme";

//Logowanie po dostaniu inputu
//Zapisanie tokena do localstorage
//przekierowanie do /main po ustawieniu tokena


const LoginView = props => {

    const login = useRef(null);
    const errorDiv = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();

        const value = login.current.value;
        const authService = new AuthService();

        authService.login(value).then(response => {
            if (response.success) {
                console.log(response)
                props.setToken(response.data);
                errorDiv.current.innerText = response.message;
            } else {
                errorDiv.current.innerText = response.message;
            }
        });
    }

    return(
        <FullPage fancy contentStyle={{}} backgroundStyle={{}}>
            <div style={{marginBottom: '30vh', ...styles.flexCenter, flexFlow: 'column', gap: '5vh'}}>
                <div style={{fontSize: theme.font.size.xl, fontWeight: 600}}>
                    Podaj token uwierzytelniający
                </div>
                <input style={frame} />
                <Button style={btn}>
                    Zaloguj
                </Button>
            </div>
        </FullPage>
    )
}

const frame = {
    border: '1px solid' + theme.dark.text,
    width: '30vw',
    height: '8vh',
    background: theme.dark.background,
    color: theme.dark.text,
    fontSize: theme.font.size.m
}

const btn = {
    width: '10vw',
    height: '8vh',
}

export default LoginView;