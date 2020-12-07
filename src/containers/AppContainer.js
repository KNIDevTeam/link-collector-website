import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

const AppContainer = props => {
    return(
        <Router>
            AppContainer

            <Switch>
                <Route path='/'>
                    Hello
                </Route>
                <Route path='*'>
                    <Redirect to={`start/404`} />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppContainer;