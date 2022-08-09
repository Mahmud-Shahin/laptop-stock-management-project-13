// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqoaiDYqq5n6qUZP8qutNH_SdCE30qmKQ",
  authDomain: "laptop-stock-management.firebaseapp.com",
  projectId: "laptop-stock-management",
  storageBucket: "laptop-stock-management.appspot.com",
  messagingSenderId: "796115399443",
  appId: "1:796115399443:web:e4f57a14c43f415dc660e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;