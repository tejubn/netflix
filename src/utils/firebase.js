// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxUAMcWHUZz9bFt_N7skqBj-8PSr9Eb0c",
  authDomain: "netflix-ce2df.firebaseapp.com",
  projectId: "netflix-ce2df",
  storageBucket: "netflix-ce2df.appspot.com",
  messagingSenderId: "992206299472",
  appId: "1:992206299472:web:0a24f0f03c1b850f6d8c55",
  measurementId: "G-5HFB28TKEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);