// src/hooks/useAuth.js
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth, db } from '/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const useAuth = () => {
  const [error, setError] = useState(null);

  const signIn = async (email, password) => {
    const authInstance = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
      const uid = userCredential.user.uid;

      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        throw new Error("No such user document!");
      }
      return userDoc.data();
    } catch (error) {
      setError(error.message);
      console.error("Error during sign-in:", error);
      throw error; // повторно викинути помилку для обробки в компоненті
    }
  };

  const signUp = async (email, password, firstName, lastName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, "users", uid), {
        email,
        firstName,
        lastName,
        coupons: [],
      });
      return { email, firstName, lastName };
    } catch (error) {
      setError(error.message);
      console.error("Sign up error:", error.message);
      throw error;
    }
  };

  return { signIn, signUp, error };
};
