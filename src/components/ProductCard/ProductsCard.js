import React from 'react';
import { Link } from 'react-router-dom';
import '../ProductCard/ProductСard.css';
import product1 from '../../image/Group 66.png';
import product2 from '../../image/Group 67.png';
import product3 from '../../image/Group 68.png';
import product4 from '../../image/Group 69.png';
import product5 from '../../image/Group 70.png';
import product6 from '../../image/Group 65.png';
import product7 from '../../image/Group 64.png';
import product8 from '../../image/Group 37972.png';
import product9 from '../../image/Group 37973.png';

const ProductsCard = ({ title, price, image }) => {
  const images = {
    'Group 66': product1,
    'Group 67': product2,
    'Group 68': product3,
    'Group 69': product4,
    'Group 70': product5,
    'Group 65': product6,
    'Group 64': product7,
    'Group 37972': product8,
    'Group 37973': product9,
  };

  return (
    <div className="product-card">
      <Link to={`/product/${title}`}>
        <img src={images[image]} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
      </Link>
    </div>
  );
};

export default ProductsCard;
