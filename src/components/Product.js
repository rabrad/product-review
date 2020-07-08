import React from 'react';
import image from '../assets/canon-d60-dslr-2.jpg';
import Rating from './Rating';
import '../styles/App.css';

const Product = () => {
  return (
    <div>
      <div className='product-container'>
        <div className='product-info'>
          <img src={image} alt='Canon 60D DSLR' />
          <h3>Canon 60D DSLR</h3>
          <p>
            Discover your creative side with the EOS 60D. Express yourself by
            producing stunning stills or Full HD Movies using the vari-angle LCD
            screen and the advanced creative features.
          </p>
        </div>
        <Rating />
      </div>
    </div>
  );
};

export default Product;
