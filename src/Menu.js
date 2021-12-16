import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom";
import Pic from "./Pic";
import Clock from "./Clock";
import App from "./App";
import UserTableInfo from "./UserTableInfo";
import MarkdownView from "./MarkdownView";
import {Xmind} from "./Xmind";
import {MutiField} from "./MutiField";



const Menu = () => {
    let routes = useRoutes([
        { path: "/", element: <Pic /> },
        { path: "/c", element: <Clock  numbers={["java"]}/> },
        { path: "/p", element: <App />},
        { path: "/u", element: <UserTableInfo />},
        {path: "/m",element: <MarkdownView />},
        {path: "/x",element: <Xmind />},
        {path: "/muti",element: <MutiField />},
    ]);
    return routes;
};

const AppWrapper = () => {
    return (
        <Router>
            <Menu />
        </Router>
    );
};

export default AppWrapper;