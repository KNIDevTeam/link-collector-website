import React, {useRef, useEffect} from 'react';
import AuthService from "../services/AuthService";
import styles from "../styles/styles";
import FullPage from "../components/FullPage";
import Button from "../components/Button";
import theme from "../styles/theme";
import {toast, ToastContainer} from "react-toastify";
import {useHistory, Redirect} from 'react-router-dom'
import gsap from 'gsap'

//Logowanie po dostaniu inputu
//Zapisanie tokena do localstorage
//przekierowanie do /main po ustawieniu tokena


const LoginView = props => {

    const login = useRef(null);
    const history = useHistory();

    const handleClick = () => {
        const value = login.current.value;

        if(!value)
        {
            toast.warning('Nie podano tokenu')
            return;
        }
        const authService = new AuthService();

        authService.login(value).then(response => {
            if (response.success) {
                props.setToken(response.data);

                localStorage.setItem('token', response.data)

                history.push('/main');
            } else {
                toast.error(response.message);
                gsap.from(login.current, {borderColor: 'red', duration: 10})
            }
        });
    }

    return(
        <FullPage fancy contentStyle={{}} backgroundStyle={{}}>
            <ToastContainer position='top-center' autoClose={3000} />
            <div style={{marginBottom: '30vh', ...styles.flexCenter, flexFlow: 'column', gap: '5vh'}}>
                <div style={{fontSize: theme.font.size.xl, fontWeight: 600}}>
                    Podaj token uwierzytelniający
                </div>
                <input ref={login} style={frame} />
                <Button className='special' style={btn} onClick={handleClick}>
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