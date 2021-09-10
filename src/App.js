import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Printing from "./components/Printing/Printing";
import Design from "./components/Design/Design";
import Programming from "./components/Programming/Programming";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
                <Route path="/printing">
                    <Printing/>
                </Route>
                <Route path="/design">
                    <Design/>
                </Route>
                <Route path="/programming">
                    <Programming/>
                </Route>
            </Switch>
        </Router>
    );
}