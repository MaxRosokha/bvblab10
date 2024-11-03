import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './style.css';
import Header from './components/Header/header';
import MainContent from './components/Home/home';
import Footer from './components/footer/footer';
import Loading from './components/Loading/Loading';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import FavoritePage from './components/Favorite/favoritePage';
import Account from './components/Account/Account';
import Colections from './components/Colections/Colections';
import { UserProvider } from './components/UserContext/UserContext';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { FavoriteProvider } from './components/Favorite/FavoriteContext';



const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const isMainPage = location.pathname === '/';

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {isMainPage && <Header />}
          <UserProvider>
            <FavoriteProvider>
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/favoritePage" element={<FavoritePage />} />
                <Route path="/account" element={<Account />} />
                <Route path="/collections" element={<Colections />} />
                <Route path="/product/:title" element={<ProductDetail />} />
                <Route path="/favorites" element={<FavoritePage />} />
              </Routes>
            </FavoriteProvider>
          </UserProvider>
          {isMainPage && <Footer />}
        </>
      )}
    </div>
  );
};

export default App;
