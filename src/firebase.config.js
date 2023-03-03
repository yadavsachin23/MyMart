import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxmOhUqnDelupXTxMf1jrR8F1RuyAN4ek",
  authDomain: "mymart-9eb8e.firebaseapp.com",
  projectId: "mymart-9eb8e",
  storageBucket: "mymart-9eb8e.appspot.com",
  messagingSenderId: "858053564409",
  appId: "1:858053564409:web:6ab0211bcdce70bf6a0f28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
