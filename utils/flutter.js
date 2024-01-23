// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiZVHYax7JjZy7zd3sJ4SFn0Stn2Z-UqE",
  authDomain: "educapp-17ddf.firebaseapp.com",
  projectId: "educapp-17ddf",
  storageBucket: "educapp-17ddf.appspot.com",
  messagingSenderId: "1098510679929",
  appId: "1:1098510679929:web:49f20af7093ca0322d79a8",
  measurementId: "G-M1J72BM06H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);