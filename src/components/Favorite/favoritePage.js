import React, { useState } from 'react';
import { useFavoriteContext } from './FavoriteContext';
import Header from '../Header/header';
import '../../FavoritePage.css';

const FavoritePage = () => {
  const { favoriteItems, removeFavoriteItem } = useFavoriteContext(); // Імпортуємо функцію видалення
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = favoriteItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="favorite-container">
      <Header />
      <h1 className="favorite-title">Favorite Items</h1>
      {favoriteItems.length === 0 ? ( // Перевірка наявності товарів
        <h10 className="no-favorites">You have no favorite items yet.</h10>
      ) : (
        <>
          <div className="favorite-grid">
            {currentItems.map((item) => (
              <div key={item.title + item.selectedColor + item.selectedSize} className="favorite-item">
                <img src={item.image} alt={item.title} className="favorite-item-image" />
                <p className="favorite-item-name">{item.title}</p>
                <p className="favorite-item-price">{item.price}</p>
                <p className="favorite-item-color">Color: {item.selectedColor}</p>
                <p className="favorite-item-size">Size: {item.selectedSize}</p>
                <p className="favorite-item-quantity">Quantity: {item.quantity || 1}</p> {/* Відображаємо кількість */}
                <button
                  className="remove-button"
                  onClick={() => removeFavoriteItem(item)} // Видалити товар
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="pagination-button" onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button className="pagination-button" onClick={handleNextPage} disabled={currentPage >= Math.ceil(favoriteItems.length / itemsPerPage)}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FavoritePage;
