import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import { selectProduct } from '../redux/productSlice';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductCarousel = () => {
  const product = useSelector(selectProduct);

  return (
    <Carousel showThumbs={true} autoPlay infiniteLoop>
      {product.images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Product ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
