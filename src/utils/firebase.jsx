// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8PdxOXwlSjhexKRAAmTiG5ieED9pR910",
  authDomain: "carrentalservice-98bd8.firebaseapp.com",
  projectId: "carrentalservice-98bd8",
  storageBucket: "carrentalservice-98bd8.appspot.com",
  messagingSenderId: "341310095968",
  appId: "1:341310095968:web:0003f184b00ac50a727905",
  measurementId: "G-KV58SDT4MR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fetch functions
export const getLuxurysedan = () => getDocs(collection(db, "Luxury Sedan"));
export const getSports = () => getDocs(collection(db, "CarsDoc"));
export const getEconomy = () => getDocs(collection(db, "Economy"));
export const getElectric = () => getDocs(collection(db, "Electric"));
export const getSUV = () => getDocs(collection(db, "SUV's"));
export const getUserData = () => getDocs(collection(db, "Users"));

// Map categories to functions
export const categoryFetchMap = {
  'Luxury': getLuxurysedan,
  'SUV': getSUV,
  'Sedan': getEconomy,
  'Convertible': getSports,
  'Hatchback': getElectric,
};

export default db;
