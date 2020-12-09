import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import NotFoundView from "./views/NotFoundView";
import EntranceView from "./views/EntranceView";
import LoginView from "./views/LoginView";
import MainView from "./views/MainView";
import Header from "./components/Header";
import DeniedView from "./views/DeniedView";
import styles from "./styles/styles";

function App() {
    const [token, setToken] = useState(null);


    return (
        <div id='app' style={styles.app}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <EntranceView token={token} setToken={setToken}/>
                    </Route>

                    <Route exact path='/login'>
                        <LoginView token={token} setToken={setToken}/>
                    </Route>
                    <Route exact path='/main'>
                        <Header/>
                        <MainView token={token} setToken={setToken}/>
                    </Route>

                    <Route path='/404' component={NotFoundView}/>
                    <Route path='/denied' component={DeniedView}/>
                    <Route path='*'>
                        <Redirect to={`/404`}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
