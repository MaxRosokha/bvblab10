import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "/firebaseConfig";

export const useFetchData = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const dataList = querySnapshot.docs.map(doc => doc.data());
        setData(dataList);
      } catch (err) {
        setError("Failed to fetch data from Firestore.");
        console.error("Firestore fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

  }, [collectionName]);

  return { data, loading, error };
};
