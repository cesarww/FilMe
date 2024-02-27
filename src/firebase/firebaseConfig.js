// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbZd0LJ13QTw7M9wEql2TgngRxfVsLb-w",
  authDomain: "filme-29eea.firebaseapp.com",
  projectId: "filme-29eea",
  storageBucket: "filme-29eea.appspot.com",
  messagingSenderId: "901381067540",
  appId: "1:901381067540:web:a975961fc243931339e801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Create a separate firestore object
const firestore = db;

export { db, auth, firestore }; // Export db, auth, and firestore
