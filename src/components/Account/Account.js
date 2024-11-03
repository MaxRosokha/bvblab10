import React, { useState } from 'react';
import Header from '../Header/header';
import '../../Account.css';
import Discount1 from '/src/image/Group 39.png';
import Discount2 from '/src/image/Group 39.png';
import Discount3 from '/src/image/Group 39.png';
import { useUser } from '../UserContext/UserContext.js';
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth } from '/firebaseConfig';

const Account = () => {
  const [showCoupons, setShowCoupons] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const { user } = useUser();

  const coupons = [
    { discount: '10%', code: 'FLAT10', validTill: '28th June 2023', image: Discount1 },
    { discount: '15%', code: 'SAVE15', validTill: '15th July 2023', image: Discount2 },
    { discount: '20%', code: 'SUMMER20', validTill: '1st August 2023', image: Discount3 }
  ];

  const handleUpdatePassword = async () => {
    if (!auth.currentUser) {
      alert("Користувача не автентифіковано.");
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        currentPassword
      );
      await reauthenticateWithCredential(auth.currentUser, credential);
      await updatePassword(auth.currentUser, newPassword);
      setNewPassword('');
      setCurrentPassword('');
      alert('Пароль оновлено');
    } catch (error) {
      console.error('Помилка оновлення пароля:', error);
      alert('Не вдалося оновити пароль. Перевірте правильність даних.');
    }
  };

  const toggleCoupons = () => setShowCoupons(!showCoupons);
  const togglePasswordForm = () => setShowPasswordForm(!showPasswordForm);

  return (
    <div>
      <Header />
      <div className="account-container">
        <header className="account-header">
          <h1 className="user-name">{user?.firstName} {user?.lastName}</h1>
          <p className="user-location">Ukraine</p>
          <p className="user-status">A good person</p>
          <button className="coupon-button" onClick={toggleCoupons}>
            My coupons {showCoupons ? '▲' : '▼'}
          </button>
        </header>

        {showCoupons && (
          <div className="coupons-container">
            {coupons.length > 0 ? (
              coupons.map((coupon, index) => (
                <div key={index} className="coupon">
                  <img src={coupon.image} alt={`Coupon ${index + 1}`} className="coupon-image" />
                  <p className="discount">{coupon.discount} Off</p>
                  <p className="code">Code: {coupon.code}</p>
                  <p className="validity">Valid till {coupon.validTill}</p>
                </div>
              ))
            ) : (
              <p>No coupons available.</p>
            )}
          </div>
        )}

        <button className="toggle-password-form" onClick={togglePasswordForm}>
          Змінити пароль
        </button>

        {showPasswordForm && (
          <div className="update-form">
            <h3>Змінити пароль</h3>
            <input
              type="password"
              placeholder="Поточний пароль"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Новий пароль"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleUpdatePassword}>Оновити пароль</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
