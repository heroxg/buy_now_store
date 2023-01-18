import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './Product.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/cartAction'
import LoadingSpinner from '../spinner/LoadingSpinner'


const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    const productId = location.pathname.split('/')[2]
    const fetchProduct = async () => {
        setLoading(true)
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        console.log(res.data)
        setProduct(res.data)
        setLoading(false)
    }

    //increase quantity
    const increaseQty = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

     //increase quantity
     const decreaseQty = () => {
       if(quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1)
       }
     }

     //add product to cart 
     const addProductToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(product, quantity))
     }

    useEffect(() => {
        fetchProduct()
    },[productId])
  return (
    <>  
        {loading ? <LoadingSpinner />
        : 
        <>
         <Header />
            <Container className='product__details__wrap'>
                <Row className='product__details__row'>
                    <Col sm={4}>
                        <img src={product.image} width="350" />
                    </Col>
                    <Col sm={8} className="product__details__inner">
                        <h1>{product.title}</h1>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                        <div className='quantity_wrap'>
                            <span className='min' onClick={decreaseQty}>-</span>
                            <span className='qty'>{quantity}</span>
                            <span className='plus' onClick={increaseQty}>+</span>
                        </div>
                        <button onClick={addProductToCart} className="custom_btn">Add to cart</button>
                    </Col>
                </Row>
            </Container>
        <Footer />
        </>
        }
    </>
  )
}

export default ProductDetails
