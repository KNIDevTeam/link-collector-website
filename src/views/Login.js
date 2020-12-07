import React, {useRef} from 'react';
import AuthService from "../services/AuthService";


const Login = props => {

    const login = useRef(null);
    const errorDiv = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();

        const value = login.current.value;
        const authService = new AuthService();

        authService.login(value).then(response => {
            if (response.success) {
                props.setToken(response.data);
                errorDiv.current.innerText = response.message;
            } else {
                errorDiv.current.innerText = response.message;
            }
        });
    }

    return(
        <div>
            <form>
                <div ref={errorDiv}></div>
                <label>Podaj to</label><br/>
                <input type="text" ref={login}/>
                <button onClick={handleClick}>Zaloguj</button>
            </form>
        </div>
    )
}

export default Login;