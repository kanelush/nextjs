// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrAjmpRNObjsFc75m7aGXjXIxkYSB7Vxo",
  authDomain: "madeitbite.firebaseapp.com",
  projectId: "madeitbite",
  storageBucket: "madeitbite.appspot.com",
  messagingSenderId: "771501865939",
  appId: "1:771501865939:web:53341708fd0e74590c4d26",
  measurementId: "G-2SGZGRY0YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth };