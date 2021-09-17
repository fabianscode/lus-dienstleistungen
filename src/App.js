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
import Team from "./components/Team/Team";
import Join from "./components/Join/Join";

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div>
                <Switch>
                    <Route path="/programming" component={Programming} />
                    <Route path="/printing" component={Printing} />
                    <Route path="/design" component={Design} />
                    <Route path="/team" component={Team} />
                    <Route path="/join" component={Join} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}