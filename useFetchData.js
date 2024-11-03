import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpfYr3QfUmFf4vMmR6vvZ4HqsBAbmVNDM",
  authDomain: "boom-van-behoefte.firebaseapp.com",
  projectId: "boom-van-behoefte",
  storageBucket: "boom-van-behoefte.appspot.com",
  messagingSenderId: "1071538640908",
  appId: "1:1071538640908:web:a908d9347363861b7fb629",
  measurementId: "G-CZ1V63JPZN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useFetchData = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        if (isMounted) {
          const dataList = querySnapshot.docs.map(doc => doc.data());
          setData(dataList);
        }
      } catch (err) {
        if (isMounted) setError("Failed to fetch data.");
        console.error("Error fetching data:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };


    return () => {
      isMounted = false;
    };
  }, [collectionName]);

  return { data, loading, error };
};
