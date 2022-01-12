import React from 'react'
import { useEffect, useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.png'
import '../layout.css'
const Header = () => {
    const SignIn = React.lazy(() => import('../../Components/SignIn/SignIn'))
    const [expanded, setExpanded] = useState(false);
    const scrollgoTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" expanded={expanded}
                className="fixed-top bg-theme" style={{
                    backgroundImage: "linear-gradient(315deg, #537895 0%, #09203f 74%)" ,
                    backgroundColor:  'white',
                    boxShadow: '0px 0px 15px #000' ,
                }}>

                <Container>
                    <Navbar.Brand className='logo' href='/'>
                        <span className='text-white'><img src={logo} style={{width:"50px"}}/></span>Drinkizz
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"
                        onClick={() => setExpanded(expanded ? false : "expanded")} />
                    <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end ">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link text-white"
                                to="/" onClick={() => { scrollgoTop(); setExpanded(false); }}>Home</NavLink>

                            <NavLink className="nav-link text-white"
                                to="/compare" onClick={() => { scrollgoTop(); setExpanded(false); }}>
                                Compare
                            </NavLink>
                            <NavLink className="nav-link text-white"
                                to="/cart" onClick={() => { scrollgoTop(); setExpanded(false); }}>
                                Cart
                            </NavLink>
                            <NavLink className="nav-link text-white"
                                to="/wishlist" onClick={() => { scrollgoTop(); setExpanded(false); }}>
                                Wishlist
                            </NavLink>
                            <SignIn />

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


export default Header
