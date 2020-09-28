import React, {Component} from 'react';
import './App.css';

import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from "./components/Menu";

import {DISHES} from "./shared/dishes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes = {DISHES}/>
            </div>
        );
    }
}

export default App;
