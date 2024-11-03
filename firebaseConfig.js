import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYNwR-SltG7yJfNYFohtkZpuLvLbxFxIg",
  authDomain: "boom-van-behoefte-web.firebaseapp.com",
  projectId: "boom-van-behoefte-web",
  storageBucket: "boom-van-behoefte-web.appspot.com",
  messagingSenderId: "214187524271",
  appId: "1:214187524271:web:57c5f5bad269ee29a6545a",
  measurementId: "G-NBR3P2BK92"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db };
