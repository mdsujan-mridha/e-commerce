// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvyHhw6GMPtHrsfQJ6kRhlg5cQcQOoYOo",
  authDomain: "e-commerce-7f82f.firebaseapp.com",
  projectId: "e-commerce-7f82f",
  storageBucket: "e-commerce-7f82f.appspot.com",
  messagingSenderId: "289192173290",
  appId: "1:289192173290:web:ca4131a8fcfcbaa1f60193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;