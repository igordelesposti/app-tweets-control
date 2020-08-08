import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import AdministratorScreen from "../AdministratorScreen";

export const routes = {
    root: "/",
    administratorScreen: "/administratorscreen",
    // approvedTweets: "/approvedtweets"
}

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={HomePage} />
                <Route exact path={routes.administratorScreen} component={AdministratorScreen} />
                {/* <Route exact path={routes.approvedTweets} component={ApprovedTweets} /> */}
            </Switch>
        </ConnectedRouter>
    )
}



export default Router;