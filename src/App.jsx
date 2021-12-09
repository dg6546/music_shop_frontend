import React from 'react';
import Home from "./pages/Home"
import Detail from "./pages/Detail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar"
import Cookies from 'universal-cookie';
import Checkout from './pages/Checkout';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

const App = () => {
    const cookies = new Cookies();
    const isLogged = cookies.get('username') === undefined ? false : true;
    return(
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/songs/:category"><Home /></Route>
                    <Route path="/search/:keywords"><Home /></Route>
                    <Route path="/song/:id"><Detail /></Route>
                    <Route path="/cart"><Cart /></Route>
                    <Route path="/register">{isLogged? <Redirect to="/" /> : <Register />}</Route>
                    <Route path="/login">{isLogged? <Redirect to="/" /> : <Login />}</Route>
                    <Route path="/checkout"> <Checkout /></Route>
                </Switch>
            </Router>
    );
};

export default App;
