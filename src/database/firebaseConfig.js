// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfaX3ycMwYlamhJ9GRWit9x4wO0EGn4OQ",
  authDomain: "workit-eb035.firebaseapp.com",
  projectId: "workit-eb035",
  storageBucket: "workit-eb035.appspot.com",
  messagingSenderId: "541621032245",
  appId: "1:541621032245:web:397214c2e0637c2302287c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();