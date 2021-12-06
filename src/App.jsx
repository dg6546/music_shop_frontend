import React from 'react';
import Home from "./pages/Home"
import Detail from "./pages/Detail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Auth from "./Auth";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { useState } from "react";
import { AutoGraph } from '@mui/icons-material';

const App = () => {
    const [auth, setAuth] = useState(false);
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    return(
            <Router>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/songs/:category"><Home /></Route>
                    <Route path="/song/:id"><Detail /></Route>
                    <Route path="/cart"><Cart /></Route>
                    <Route path="/register">{auth? <Redirect to="/" /> : <Register />}</Route>
                    <Route path="/login">{auth? <Redirect to="/" /> : <Login />}</Route>
                </Switch>
            </Router>
    );
};

export default App;
