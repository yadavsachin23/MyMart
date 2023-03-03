import React, { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

const useGetData = (collectionName) => {
  const [data, setDate] = useState([]);
  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionRef);
      setDate(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, [collectionRef]);

  return { data };
};

export default useGetData;
