import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "/firebaseConfig"; // Перевірте правильність шляху
import { useUser } from "../UserContext/UserContext";
import logo from '../../image/Logo1.png';
import '../../Auth.css';
import { setDoc, doc } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth'; // Імпорт setDoc та doc

const SignUp = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { signUp, error: signupError } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, "users", uid), {
        email,
        firstName,
        lastName,
        coupons: [],
      });


      setUser({
        email,
        firstName,
        lastName,
        coupons: [],
      });
      navigate('/account');
    } catch (error) {
      setError(error.message);
      console.error("Sign up error:", error.message);
    }
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <Link to="/" className="auth-logo-link">
          <img src={logo} alt="Boom Van Behoefte Logo" className="auth-logo" />
        </Link>
        <nav className="auth-nav">
          <Link to="/signin" className="auth-link">SIGN IN</Link>
          <Link to="/signup" className="auth-link active">SIGN UP</Link>
        </nav>
      </header>
      <div className="auth-content">
        <h2 className="auth-title">SIGN UP</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="auth-form" onSubmit={handleSignUp}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="auth-input"
            required
          />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="auth-input"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="auth-input"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="auth-input"
            required
          />
          <button type="submit" className="auth-button">Sign Up →</button>
        </form>
        <p className="auth-footer">
          <Link to="/signin">I already have an account</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
