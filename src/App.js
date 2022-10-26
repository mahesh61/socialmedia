import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/Home/List/List";

const App = () => {
    console.log("hekllo...");

    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/hotels"
        element = { < List / > }
        /> <
        /Routes> <
        /BrowserRouter>
    );
};

export default App;