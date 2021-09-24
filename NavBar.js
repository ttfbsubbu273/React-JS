import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'
//import { Button } from 'bootstrap';

const NavigationBar=()=>{
    return(
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar className="me-auto">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#pricing">Pricing</NavLink>
            </Navbar>
            </Container>
        </Navbar>
        <br />
    </>
    )
}

export default NavigationBar;