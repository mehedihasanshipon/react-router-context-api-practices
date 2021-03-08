import React from 'react';
import { Navbar,Nav} from "react-bootstrap"
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div >
            <Navbar bg="light" expand="lg">
            <div className = "container">
            <NavLink className="navbar-brand" to="/home">React-Router</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <NavLink className="nav-link" to="/home">Home</NavLink>
                <NavLink className="nav-link" to="/category">Category</NavLink>
                <NavLink className="nav-link" to="/post">Post</NavLink>
                
                </Nav>
                
            </Navbar.Collapse>
            </div>
            </Navbar>
        </div>
    );
};

export default Header;