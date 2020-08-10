import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import AdministratorScreen from "../AdministratorScreen";
import ApprovedTweets from "../ApprovedTweets";
import SignUpAdministrator from "../SignUpAdministrator";
import { LoginPage } from "../LoginPage";

export const routes = {
    root: "/",
    administratorScreen: "/administratorscreen",
    approvedTweets: "/approvedtweets",
    signupAdministrator: "/signupadministrator",
    loginPage: "/login"
}

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={HomePage} />
                <Route exact path={routes.administratorScreen} component={AdministratorScreen} />
                <Route exact path={routes.approvedTweets} component={ApprovedTweets} />
                <Route exact path={routes.signupAdministrator} component={SignUpAdministrator} />
                <Route exact path={routes.loginPage} component={LoginPage} />
            </Switch>
        </ConnectedRouter>
    )
}



export default Router;