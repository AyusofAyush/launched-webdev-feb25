import React from 'react';
import Carousel from '../components/Carousel';
import ProductDetails from '../components/ProductDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Carousel />
        <ProductDetails />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
