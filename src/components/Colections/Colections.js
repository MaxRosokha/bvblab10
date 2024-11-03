import React, { useState } from 'react';
import '../../Colections.css';
import Header from '../Header/header';
import ProductCard from '../ProductCard/ProductsCard.js';

const Collections = () => {
  const [selectedCollection, setSelectedCollection] = useState('Men');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const menProducts = [
    { title: "Basic Slim Fit T-Shirt", price: "$199", image: "Group 66" },
    { title: "Basic Heavy Weight T-Shirt", price: "$199", image: "Group 67" },
    { title: "Cotton T-Shirt", price: "$199", image: "Group 68" },
    { title: "Full Sleeve Zipper", price: "$199", image: "Group 69" },
    { title: "Another T-Shirt", price: "$199", image: "Group 70" },
    { title: "Stylish Shirt", price: "$199", image: "Group 65" },
    { title: "Casual T-Shirt", price: "$199", image: "Group 64" },
    { title: "Printed T-Shirt", price: "$199", image: "Group 37972" },
  ];

  const womenProducts = [
    { title: "Basic Slim Fit T-Shirt", price: "$199", image: "Group 66" },
    { title: "Basic Heavy Weight T-Shirt", price: "$199", image: "Group 67" },
    { title: "Cotton T-Shirt", price: "$199", image: "Group 68" },
    { title: "Full Sleeve Zipper", price: "$199", image: "Group 69" },
  ];

  const currentProducts = selectedCollection === 'Men' ? menProducts : womenProducts;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = currentProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(currentProducts.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="collections-container">
      <Header />

      <div className="main-content">
        <aside className="filters">
          <h2>Filters</h2>
          <div className="filter-section">
            <h3>Size</h3>
            <div className="size-options">
              {['\ XS \  \ S \  \ M \  \ L \  \ XL \ '].map(size => (
                <span key={size} className="size-option">{size}</span>
              ))}
            </div>
          </div>
          <div className="filter-section">
            <h3>Gender</h3>
            <label>
              <input
                type="radio"
                name="gender"
                checked={selectedCollection === 'Men'}
                onChange={() => {
                  setSelectedCollection('Men');
                  setCurrentPage(1);
                }}
              />
              Man ({menProducts.length})
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                checked={selectedCollection === 'Women'}
                onChange={() => {
                  setSelectedCollection('Women');
                  setCurrentPage(1);
                }}
              />
              Woman ({womenProducts.length})
            </label>
          </div>
        </aside>

        <div className="products">
          <h2>PRODUCTS</h2>
          <div className="products-gallery">
            {currentItems.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>

          <div className="pagination">
            <button
              className="pagination-button"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Попередня
            </button>
            <button
              className="pagination-button"
              onClick={handleNextPage}
              disabled={currentPage >= Math.ceil(currentProducts.length / itemsPerPage)}
            >
              Наступна
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
