import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from '../screens/Home';
import Contact from '../screens/Contact';
import About from '../screens/About'

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg" >
                        <Navbar.Brand href="#" style={{fontSize:22}}>CleanThisShit(CTS)</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home" style={{color:'white',fontSize:18}}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/about" style={{color:'white',fontSize:18}}>About</Nav.Link>
                                <Nav.Link as={Link} to="/contact" style={{color:'white',fontSize:18}}>Contact</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
