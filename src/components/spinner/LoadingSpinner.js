import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className='laoding__wrapper'>
       <Spinner animation="border" variant="warning" />
    </div>
  )
}

export default LoadingSpinner
