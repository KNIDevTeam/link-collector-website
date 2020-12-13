import './App.css';
import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import NotFoundView from "./views/NotFoundView";
import EntranceView from "./views/EntranceView";
import LoginView from "./views/LoginView";
import MainView from "./views/MainView";
import Header from "./components/Header";
import DeniedView from "./views/DeniedView";
import styles from "./styles/styles";
import 'react-toastify/dist/ReactToastify.css';
import LogoutView from "./views/LogoutView";

function App() {
    const [token, setToken] = useState(null);
    const [mainCounter, setMainCounter] = useState(0);
    const [tokenLoaded, setTokenLoaded] = useState(false)

    useEffect(() => {
        const localToken = localStorage.getItem('token');
        setToken(localToken);
        setTokenLoaded(true);
    }, [])

    return (
        <div id='app' style={styles.app}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <EntranceView token={token} setToken={setToken}/>
                    </Route>

                    <Route exact path='/login'>
                        { (!token) ? <LoginView setTokenLoaded={setTokenLoaded} token={token} setToken={setToken}/> : <Redirect to='/main' />}
                    </Route>
                    <Route exact path='/main'>
                        <Header/>
                        <MainView tokenLoaded={tokenLoaded} token={token} setToken={setToken} counter={mainCounter} setCounter={setMainCounter}/>
                    </Route>

                    <Route path='/404' component={NotFoundView}/>
                    <Route path='/denied' component={DeniedView}/>
                    <Route path='/logout' >
                        <LogoutView setToken={setToken} setCounter={setMainCounter} />
                    </Route>
                    <Route path='*'>
                        <Redirect to={`/404`}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
