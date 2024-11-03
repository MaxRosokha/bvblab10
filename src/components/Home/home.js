import React, { useState } from 'react';
import slide from '../../image/Slide.png';
import slider from '../../image/Slider.png';
import colection1 from '../../image/colection1.png';
import colection2 from '../../image/colection2.png';
import productImage1 from '../../image/Group 66.png';
import productImage2 from '../../image/Group 67.png';
import productImage3 from '../../image/Group 68.png';
import productImage4 from '../../image/Group 69.png';
import productImage5 from '../../image/Group 70.png';
import productImage6 from '../../image/Group 65.png';
import productImage7 from '../../image/Group 64.png';
import productImage8 from '../../image/Group 37972.png';
import productImage9 from '../../image/Group 37973.png';
import { Link } from 'react-router-dom';
import ImageModal from '../Home/ImageModal';

const MainContent = () => {
    const [selectedCollection, setSelectedCollection] = useState('Men');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
      <main>
          <section className="hero-section">
              <div className="text-content">
                  <h1 className="outline-text">BOOM VAN DEHOEFTE</h1>
                  <p>
                      Praesent scelerisque justo vitae neque consectetur aliquam.
                      Sed facilisis nec enim at porta. Suspendisse gravida convallis massa,
                      at interdum dui hendrerit in. Nullam venenatis lorem non massa vehicula,
                      vitae commodo nisi tempus.
                  </p>
                  <button className="btn-primary"
                          onClick={() => document.getElementById("about-us").scrollIntoView({ behavior: "smooth" })}
                  >More information
                  </button>
              </div>
              <div className="images-wrapper">
                  <div className="circle-image">
                      <img src={slide} alt="Main fashion image" />
                  </div>
                  <div className="small-circle">
                      <img src={slider} alt="Additional image" />
                  </div>
              </div>
          </section>

          <section className="collection-section">
              <div className="collection-content">
                  <h2 className="new-collection-title">NEW COLLECTION</h2>
                  <p className="collection-season">Summer 2024</p>
                  <button className="btn-secondary">
                      <Link to="/favoritePage" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Go To Favorite ⟶
                      </Link>
                  </button>
              </div>

              <div className="image-gallery">
                  <img src={colection1} alt="Fashion item 1" className="gallery-image" />
                  <img src={colection2} alt="Fashion item 2" className="gallery-image" />
              </div>
          </section>

          <section className="new-section" id="new">
              <h2 className="new-title">
                  <span className="highlight">NEW</span> <br /> THIS WEEK
              </h2>
              <div className="product-gallery">
                  <div className="product-card" onClick={() => handleImageClick(productImage1)}>
                      <img src={productImage1} alt="Product 1" />
                      <p className="product-type">V-Neck T-Shirt</p>
                      <p className="product-name">Embroidered Seersucker Shirt</p>
                      <p className="product-price">$99</p>
                  </div>
                  <div className="product-card" onClick={() => handleImageClick(productImage2)}>
                      <img src={productImage2} alt="Product 2" />
                      <p className="product-type">Cotton T-Shirt</p>
                      <p className="product-name">Basic Slim Fit T-Shirt</p>
                      <p className="product-price">$99</p>
                  </div>
                  <div className="product-card" onClick={() => handleImageClick(productImage3)}>
                      <img src={productImage3} alt="Product 3" />
                      <p className="product-type">Henley T-Shirt</p>
                      <p className="product-name">Blurred Print T-Shirt</p>
                      <p className="product-price">$99</p>
                  </div>
                  <div className="product-card" onClick={() => handleImageClick(productImage4)}>
                      <img src={productImage4} alt="Product 4" />
                      <p className="product-type">Henley T-Shirt</p>
                      <p className="product-name">Blurred Print T-Shirt</p>
                      <p className="product-price">$99</p>
                  </div>
                  <div className="product-card" onClick={() => handleImageClick(productImage5)}>
                      <img src={productImage5} alt="Product 5" />
                      <p className="product-type">Henley T-Shirt</p>
                      <p className="product-name">Blurred Print T-Shirt</p>
                      <p className="product-price">$99</p>
                  </div>
              </div>
              {isModalOpen && <ImageModal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />}
          </section>

          <section className="spring-collection-section">
              <div className="section-header">
                  <h2 className="collection-title">SPRING COLLECTION <br /> <span className="highlight">23-24</span>
                  </h2>
              </div>
              <div className="tabs">
                  <button className="tab" onClick={() => setSelectedCollection('Men')}>Men</button>
                  <button className="tab" onClick={() => setSelectedCollection('Women')}>Women</button>
              </div>
              <div className="product-gallery-сollections">
                  {selectedCollection === 'Men' ? (
                    <>
                        <div className="product-card-сollections">
                            <img src={productImage6} alt="Men Product 1" />
                            <p className="product-type-сollections">Cotton T Shirt - $199</p>
                        </div>
                        <div className="product-card-сollections">
                            <img src={productImage7} alt="Men Product 2" />
                            <p className="product-type-сollections">Cotton Jeans - $199</p>
                        </div>
                    </>
                  ) : (
                    <>
                        <div className="product-card-сollections">
                            <img src={productImage8} alt="Women Product 1" />
                            <p className="product-type-сollections">Cotton T Shirt - $199</p>
                        </div>
                        <div className="product-card-сollections">
                            <img src={productImage9} alt="Women Product 2" />
                            <p className="product-type-сollections">Cotton Dress - $249</p>
                        </div>
                    </>
                  )}
              </div>

              <Link to="/collections" className="see-more">
                  See More
              </Link>
          </section>

          <section id="about-us" className="about-us-section">
              <h2 className="about-us-title">About Us</h2>
              <p className="about-us-description">
                  We create high-quality, stylish fashion pieces to empower people with confidence and comfort.
                  Our collections combine modern designs with timeless elements for a unique wardrobe experience.
              </p>
              <div className="about-us-gallery">
                  <div className="about-us-card">
                      <img src={productImage9} alt="Stylish man standing near building" />
                  </div>
              </div>
          </section>
      </main>
    );
};

export default MainContent;
