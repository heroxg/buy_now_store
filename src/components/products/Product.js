import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductTemplate from './ProductTemplate';
import './Product.css'
import { Link, useLocation } from 'react-router-dom';
import LoadingSpinner from '../spinner/LoadingSpinner';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const [category, setCategory] = useState([])
    const productCategory = location.pathname.split("/")[3];
    const [filterProduct, setfilterProduct] = useState([])
    console.log(productCategory);

    const displayProducts  = async () => {
        setLoading(true)
        const res = await axios.get(productCategory ? `https://fakestoreapi.com/products/category/${category}`
        :'https://fakestoreapi.com/products'
        );
        setProducts(res.data);
        setLoading(false)
    }

    const displayCategory = async () => {
        const res = await axios.get('https://fakestoreapi.com/products/categories')
        setCategory(res.data);
        console.log(res.data)
    }

    //display filtered products
    const displayFilteredProduct = () => {
        const selectedPorduct = products.filter(product => product.category === productCategory)
        setfilterProduct(selectedPorduct);
    }

    useEffect(() => {
        displayProducts()
    },[])

    useEffect(() => {
        displayCategory();
    },[])

    useEffect(() => {
        displayFilteredProduct();
    },[productCategory])

  return (
    <>
    {loading ? <LoadingSpinner /> : 
    <Container className='product__container'>
        <Row className='product_wrap'>
            <Col xs={3} className="product__grid__right">
                <h4>Shop by Category</h4>
                <ul className='category__wraper'>
                    <li><Link to='/products'>All</Link></li>
                    {category.map(category => {
                        return (
                            <li>
                              <Link to={`/products/category/${category}`}>{category}</Link> 
                            </li>
                        )
                    })}
                </ul>
            </Col>
            <Col xs={8} className="product__grid__left">
                <Row className='product_wrap_inner'>
                {productCategory ?
                <>
                    {filterProduct.map(product => {
                        return (
                            <ProductTemplate    
                            id= {product.id}
                            img = {product.image}
                            title = {product.title}
                            price = {product.price}
                            />
                        )
                    })}
                </>
                :
                <>
                {products.map(product => {
                return (
                    <ProductTemplate    
                    id= {product.id}
                    img = {product.image}
                    title = {product.title}
                    price = {product.price}
                    />
                )
                })}
                </>}
                </Row>
            </Col>
        </Row>
    </Container>}
    </>
  )
}

export default Product
