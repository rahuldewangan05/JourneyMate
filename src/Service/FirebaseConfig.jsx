// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN4TgV91HTZhxJK5moKhJ9tEkZ3a134Zs",
  authDomain: "journeymate-e0fa3.firebaseapp.com",
  projectId: "journeymate-e0fa3",
  storageBucket: "journeymate-e0fa3.firebasestorage.app",
  messagingSenderId: "212523356081",
  appId: "1:212523356081:web:ae9b837c53510fc0b87790"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



