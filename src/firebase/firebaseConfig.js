// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export const db = getFirestore(app);
export const auth = getAuth(app);

