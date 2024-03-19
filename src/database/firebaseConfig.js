// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfaX3ycMwYlamhJ9GRWit9x4wO0EGn4OQ",
  authDomain: "workit-eb035.firebaseapp.com",
  projectId: "workit-eb035",
  storageBucket: "workit-eb035.appspot.com",
  messagingSenderId: "541621032245",
  appId: "1:541621032245:web:397214c2e0637c2302287c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);
const imgDB = getStorage(app);

export { app, auth, provider, database, imgDB };
