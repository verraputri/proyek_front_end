import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKEdhwwGf67amPDzRvML63RSppUBDohHY",
  authDomain: "admin-library-5cf84.firebaseapp.com",
  databaseURL: "https://admin-library-5cf84-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "admin-library-5cf84",
  storageBucket: "admin-library-5cf84.appspot.com",
  messagingSenderId: "1098282379211",
  appId: "1:1098282379211:web:1f0946e769e6b6e3c9f84e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
