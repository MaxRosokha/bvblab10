import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from "../UserContext/UserContext";
import logo from '../../image/Logo1.png';
import '../../Auth.css';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth, db } from '/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';

const SignIn = () => {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { signIn, error } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const authInstance = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
      const uid = userCredential.user.uid;

      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        throw new Error("No such user document!");
      }
      const userData = userDoc.data();
      console.log('User Data:', userData);
      setUser(userData);
      navigate('/account');

    } catch (error) {
      console.error("Error during sign-in:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <Link to="/" className="auth-logo-link">
          <img src={logo} alt="Boom Van Behoefte Logo" className="auth-logo" />
        </Link>
        <nav className="auth-nav">
          <Link to="/signin" className="auth-link active">SIGN IN</Link>
          <Link to="/signup" className="auth-link">SIGN UP</Link>
        </nav>
      </header>
      <div className="auth-content">
        <h2 className="auth-title">SIGN IN</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form className="auth-form" onSubmit={handleSignIn}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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
          <button type="submit" className="auth-button">Sign In →</button>
        </form>
        <p className="auth-footer">
          <Link to="/signup">I don't have an account</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
