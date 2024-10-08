// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
<<<<<<< HEAD
import { getAuth } from "firebase/auth";
=======
>>>>>>> 53466590d10f2e963122ee7227363570d6a5f0c9
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyDZTH-svkCK-1lKvWIs_8_z-OcH8lwN8i4",
  authDomain: "netflix-e0a06.firebaseapp.com",
  projectId: "netflix-e0a06",
  storageBucket: "netflix-e0a06.appspot.com",
  messagingSenderId: "517073581513",
  appId: "1:517073581513:web:1ec303a9d6a7b75b9ca418",
  measurementId: "G-JJN12T05X5"
=======
  apiKey: "AIzaSyBxUAMcWHUZz9bFt_N7skqBj-8PSr9Eb0c",
  authDomain: "netflix-ce2df.firebaseapp.com",
  projectId: "netflix-ce2df",
  storageBucket: "netflix-ce2df.appspot.com",
  messagingSenderId: "992206299472",
  appId: "1:992206299472:web:0a24f0f03c1b850f6d8c55",
  measurementId: "G-5HFB28TKEN"
>>>>>>> 53466590d10f2e963122ee7227363570d6a5f0c9
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
const analytics = getAnalytics(app);
export const auth = getAuth();
=======
const analytics = getAnalytics(app);
>>>>>>> 53466590d10f2e963122ee7227363570d6a5f0c9
