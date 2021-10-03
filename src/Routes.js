import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { HomePage } from "./pages/Home/HomePage";
import { Cart } from "./pages/Cart/CartPage";

export const Routes = () => {

    return <Router>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>

        </Switch>
    </Router>
}
