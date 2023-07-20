// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHsO8cNkzbBQ8itXwqzJzzlidEG3NKP9I",
  authDomain: "expense-tracker-96888.firebaseapp.com",
  projectId: "expense-tracker-96888",
  storageBucket: "expense-tracker-96888.appspot.com",
  messagingSenderId: "260741451405",
  appId: "1:260741451405:web:132c3014a1d1ddcbe51cc4",
  measurementId: "G-4M3GDLM951"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);