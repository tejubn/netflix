// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZTH-svkCK-1lKvWIs_8_z-OcH8lwN8i4",
  authDomain: "netflix-e0a06.firebaseapp.com",
  projectId: "netflix-e0a06",
  storageBucket: "netflix-e0a06.appspot.com",
  messagingSenderId: "517073581513",
  appId: "1:517073581513:web:1ec303a9d6a7b75b9ca418",
  measurementId: "G-JJN12T05X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();