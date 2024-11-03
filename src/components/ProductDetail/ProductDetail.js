import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import product1 from '../../image/Group 66.png';
import product2 from '../../image/Group 67.png';
import product3 from '../../image/Group 68.png';
import product4 from '../../image/Group 69.png';
import product5 from '../../image/Group 70.png';
import product6 from '../../image/Group 65.png';
import product7 from '../../image/Group 64.png';
import product8 from '../../image/Group 37972.png';
import Header from '../Header/header';
import { useFavoriteContext } from '../Favorite/FavoriteContext';

const ProductDetail = () => {
  const { title } = useParams();
  const { addFavoriteItem } = useFavoriteContext();

  const images = [
    product1, product2, product3, product4, product5,
    product6, product7, product8,
  ];

  const products = [
    { title: "Basic Slim Fit T-Shirt", price: "$99", image: product1 },
    { title: "Basic Heavy Weight T-Shirt", price: "$99", image: product2 },
    { title: "Cotton T-Shirt", price: "$99", image: product3 },
    { title: "Full Sleeve Zipper", price: "$99", image: product4 },
    { title: "Another T-Shirt", price: "$99", image: product5 },
    { title: "Stylish Shirt", price: "$99", image: product6 },
    { title: "Casual T-Shirt", price: "$99", image: product7 },
    { title: "Printed T-Shirt", price: "$99", image: product8 },
  ];

  const product = products.find(p => p.title === title);
  const [mainImage, setMainImage] = useState(product?.image || product1);

  // Додані стани для кольору та розміру
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) return <div className="not-found">Product not found</div>;

  const handleAddToFavorites = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select a color and a size before adding to favorites.');
      return;
    }

    const favoriteProduct = {
      ...product,
      selectedColor,
      selectedSize,
    };

    addFavoriteItem(favoriteProduct);
    alert(`${product.title} has been added to favorites!`);
  };

  return (
    <div>
      <Header />
      <div className="product-detail-container">
        <div className="left-column">
          <div className="main-image">
            <img src={mainImage} alt={product.title} />
          </div>
          <div className="miniature-images">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Miniature ${index + 1}`}
                onClick={() => setMainImage(img)}
                className={mainImage === img ? 'active' : ''}
              />
            ))}
          </div>
        </div>
        <div className="right-column">
          <h2>{product.title}</h2>
          <p className="price">{product.price}</p>
          <p className="description">Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.</p>

          <div className="color-options">
            <h3>Color:</h3>
            <div className="colors">
              <div className={`color-swatch green ${selectedColor === 'green' ? 'selected' : ''}`} onClick={() => setSelectedColor('green')}></div>
              <div className={`color-swatch blue ${selectedColor === 'blue' ? 'selected' : ''}`} onClick={() => setSelectedColor('blue')}></div>
              <div className={`color-swatch grey ${selectedColor === 'grey' ? 'selected' : ''}`} onClick={() => setSelectedColor('grey')}></div>
              <div className={`color-swatch black ${selectedColor === 'black' ? 'selected' : ''}`} onClick={() => setSelectedColor('black')}></div>
            </div>
          </div>

          <div className="size-options">
            <h3>Size:</h3>
            <div className="sizes">
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <span
                  key={size}
                  className={`size ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <button className="add-to-cart" onClick={handleAddToFavorites}>ADD TO FAVORITES</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
