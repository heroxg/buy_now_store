import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import Logo from '../../images/main_logo.png'
import './Header.css'

const Header = () => {
  const quantity = useSelector(state => state.cart.cart);
  console.log(quantity)
  return (
    <Navbar bg="dark" expand="lg" className='navbar-expand'>
    <Container>
      <Navbar.Brand href="/">
        <img src={Logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          {/* <NavDropdown title="Shop by Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="/products/category/men">Men</NavDropdown.Item>
            <NavDropdown.Item href="/products/category/women">
              Women
            </NavDropdown.Item>
            <NavDropdown.Item href="/products/category/kids">Kids</NavDropdown.Item>
            <NavDropdown.Item href="/products/category/jewelery">jewelery</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav className='ml-auto'>
            <Nav.Link href="/cart">
                <BsFillCartFill />
                <span>{quantity.length}</span>
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
