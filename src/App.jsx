import React from 'react';
import Home from "./pages/Home"
import Detail from "./pages/Detail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { useState } from "react";

const App = () => {
    const [auth, setAuth] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    console.log(auth);
    return(
            <Router>
                <Navbar auth={auth} setAuth={setAuth} username={username}/>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/songs/:category"><Home /></Route>
                    <Route path="/song/:id"><Detail /></Route>
                    <Route path="/cart"><Cart /></Route>
                    <Route path="/register">{auth? <Redirect to="/" /> : <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}</Route>
                    <Route path="/login">{auth? <Redirect to="/" /> : <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} setAuth={setAuth}  />}</Route>
                </Switch>
            </Router>
    );
};

export default App;
