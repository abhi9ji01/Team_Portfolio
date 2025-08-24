import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyASyteMPWSpdB9AGO036OlQn9SrKQ_P36Y",
  authDomain: "portfolio-2f58f.firebaseapp.com",
  projectId: "portfolio-2f58f",
  storageBucket: "portfolio-2f58f.firebasestorage.app",
  messagingSenderId: "1043581390055",
  appId: "1:1043581390055:web:21d45176d8cbb5dcde2642",
  measurementId: "G-5KW4503QDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);