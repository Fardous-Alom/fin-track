import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtixmpHmOvG9Cl8NY9TvVXMMK7SBEa2CM",
  authDomain: "expense-tracker-5cebd.firebaseapp.com",
  projectId: "expense-tracker-5cebd",
  storageBucket: "expense-tracker-5cebd.firebasestorage.app",
  messagingSenderId: "916566299279",
  appId: "1:916566299279:web:d7a8250841332b3751d6fa",
  measurementId: "G-03RED6YLPJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

//next steps:
//firebase init
//firebase deploy
