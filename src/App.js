import './App.css';
import React, {useState} from "react";
import StartContainer from "./containers/StartContainer";
import AppContainer from "./containers/AppContainer";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

function App() {
    const [token, setToken] = useState(null);

    return (
        <Router>
            <Switch>
                <Route path='/start/'>
                    <StartContainer token={token} setToken={setToken}/>
                </Route>
                <Route path='/app/'>
                    <AppContainer/>
                </Route>
                <Route path='*'>
                    <Redirect to={`start/404`}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
