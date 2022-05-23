// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCqpaNAnC_SDcluxBn3wH-smXgMauC7-I",
  authDomain: "recipe-risotto-e2ace.firebaseapp.com",
  projectId: "recipe-risotto-e2ace",
  storageBucket: "recipe-risotto-e2ace.appspot.com",
  messagingSenderId: "894704944820",
  appId: "1:894704944820:web:cd228b8bcee91b549979e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

const db = getFirestore();

export { app, google, facebook, db };
