import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

class Navbar extends Component {
    
    render() { 
        return ( 
            <NavWrapper className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
                <Link to="/">
                    <i className="fas fa-cloud navbar-brand"></i>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/store" className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus"></i>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
         );
    }
}

const NavWrapper = styled.nav`

    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize !important;
    }

`

export default Navbar;