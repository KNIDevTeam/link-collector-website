import React from 'react';
import {BrowserRouter as Router, Switch, Route, useRouteMatch, Redirect} from "react-router-dom";
import Login from "../views/Login";

const StartContainer = props => {

    const match = useRouteMatch();

    return(
        <Router>
            Start Container
            <Switch>
                <Route exact path={`${match.url}/login`}>
                    <Login token={props.token} setToken={props.setToken} />
                </Route>
                <Route exact path={`${match.url}/404`}>
                    ERROR 404
                </Route>
                <Route path='*'>
                    <Redirect to={`start/404`} />
                </Route>
            </Switch>
        </Router>
    )
}

export default StartContainer;