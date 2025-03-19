// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO- Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAKUaW73D6e0LijVU7PIZ3p2X0uNU8uQ8",
  authDomain: "tutorials-f3107.firebaseapp.com",
  projectId: "tutorials-f3107",
  storageBucket: "tutorials-f3107.appspot.com",
  messagingSenderId: "540628215818",
  appId: "1:540628215818:web:f53df757ed865855d357f3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
