import React from 'react'
import Table from 'react-bootstrap/Table';
import {Container, Row, Col} from 'react-bootstrap';
import './Cart.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';
import { BsArrowRightShort } from "react-icons/bs";

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch()
    console.log(cart);

    let cartTotal = 0;
    cart.forEach(item => {
        cartTotal += item.total
    })

  return (
    <>
        <main>
        <Header />
        <div className='cart__wrapper'>
        {cart.length === 0 ? 
        <div className='cart__heading'>
            <h1>You have no item on cart</h1> 
            <a href='/products' className='custom_btn'>Continue Shopping <BsArrowRightShort /> </a>
        </div>
        : 
      <Container>
        <Row className='cart__wrapper__inner'>
        <h1>Cart</h1>
            <Col xs={8}>
                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                        {cart.map(product => {
                            return (
                                <tr>
                                    <td>
                                        <img src={product.image} width="125" height="125" />
                                        <p>{product.title}</p>
                                        <button onClick={(e) => dispatch(removeFromCart(product))} className='custom_btn'>
                                            Remove
                                        </button>
                                    </td>
                                    <td>${product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.total}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Col>
            <Col xs={3} className="cart__summary">
                <h3>Cart Summary</h3>
                <h5>Total ${cartTotal.toFixed(2)}</h5>
                <button className='custom_btn'>Proceed to checkout</button>
            </Col>
        </Row>
      </Container>}
    </div>
    <div className='more-content'>
        <Container>
            <Row>
              
            </Row>
        </Container>
    </div>
        </main>
        <Footer />
    </>
  )
}

export default Cart
