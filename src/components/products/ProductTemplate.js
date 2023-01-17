import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProductTemplate = ({id, title, price, img}) => {
  return (
    <Col xs={6} sm={6} md={6} lg={4} className="card__wrap">
      <Card style={{ width: '14rem' }}>
        <a href={`/product/${id}`}>
        <Card.Img variant="top" src={img} width="230" height="256" />
        </a>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            ${price}
          </Card.Text>
          <a href={`/product/${id}`}>View Product</a>
        </Card.Body>
      </Card>
    </Col>
    
  )
}

export default ProductTemplate
