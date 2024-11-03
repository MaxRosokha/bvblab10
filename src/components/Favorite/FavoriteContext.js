import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoriteContext = createContext();

export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    return storedItems;
  });

  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addFavoriteItem = (item) => {
    setFavoriteItems((prevItems) => {
      const existingItem = prevItems.find((prevItem) =>
        prevItem.title === item.title &&
        prevItem.selectedColor === item.selectedColor &&
        prevItem.selectedSize === item.selectedSize
      );

      if (existingItem) {
        // Якщо товар вже є в улюблених, оновлюємо його кількість
        return prevItems.map((prevItem) =>
          prevItem.title === existingItem.title &&
          prevItem.selectedColor === existingItem.selectedColor &&
          prevItem.selectedSize === existingItem.selectedSize
            ? { ...prevItem, quantity: (prevItem.quantity || 1) + 1 }
            : prevItem
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFavoriteItem = (item) => {
    setFavoriteItems((prevItems) =>
      prevItems
        .map((prevItem) =>
          prevItem.title === item.title &&
          prevItem.selectedColor === item.selectedColor &&
          prevItem.selectedSize === item.selectedSize
            ? { ...prevItem, quantity: prevItem.quantity - 1 }
            : prevItem
        )
        .filter((prevItem) => prevItem.quantity > 0) // Фільтруємо товари з нульовою кількістю
    );
  };

  return (
    <FavoriteContext.Provider value={{ favoriteItems, addFavoriteItem, removeFavoriteItem }}>
      {children}
    </FavoriteContext.Provider>
  );
};
