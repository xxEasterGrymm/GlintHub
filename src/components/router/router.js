import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Dashboard from "../glintHub-dashboard/glintHub-dashboard";
import GlintHubLanding from "../glintHub-landing/glintHub-landing";
import AddApp from "../glintHub-dashboard/glintHub-dashboard-add-app";
import DraftedApp from "../glintHub-dashboard/glintHub-dashboard-drafted-app";
import PublishedApp from "../glintHub-dashboard/glintHub-dashboard-published-app";
import Reviews from "../glintHub-dashboard/glintHub-dashboard-reviews";

const Router = (props) => {
    console.log(props);
    return (
        <BrowserRouter>
            <Route path="/" component={GlintHubLanding} exact="true">
            </Route>
            <Route path="/glinthub" component={Dashboard}>
            </Route>
            <Route path="/add-app" component={AddApp}>
            </Route>
            <Route path="/published-app" component={PublishedApp}>
            </Route>
            <Route path="/drafted-app" component={DraftedApp}>
            </Route>
            <Route path="/reviews" component={Reviews}>
            </Route>
        </BrowserRouter>
    );
}

export default Router