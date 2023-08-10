// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbc59pB4I0PFQ0A8ywY-aeVNkGztqol4E",
  authDomain: "jcwd2502.firebaseapp.com",
  projectId: "jcwd2502",
  storageBucket: "jcwd2502.appspot.com",
  messagingSenderId: "471568406823",
  appId: "1:471568406823:web:a0a6f67cf0b734ffd4b102"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)