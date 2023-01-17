import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Product from '../../components/products/Product'

const Home = () => {
  return (
      <>
        <main>
          <Header />
          <Product />
        </main>
        <Footer />
      </>
  )
}

export default Home
