// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA02hTFSdixQ6eDrYalRKkJsFWApIYInY",
  authDomain: "to-do-list-app-5e453.firebaseapp.com",
  databaseURL: "https://to-do-list-app-5e453-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "to-do-list-app-5e453",
  storageBucket: "to-do-list-app-5e453.firebasestorage.app",
  messagingSenderId: "569007910427",
  appId: "1:569007910427:web:e0ee1f678af706044e52be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);