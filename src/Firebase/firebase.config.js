// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDydJalkDfDFpFfgOZ-AAfvdyEG_zh4xgo",
  authDomain: "ema-john-ff9e0.firebaseapp.com",
  projectId: "ema-john-ff9e0",
  storageBucket: "ema-john-ff9e0.appspot.com",
  messagingSenderId: "435327814004",
  appId: "1:435327814004:web:9d421ddfb5aa3ffbdac421",
  measurementId: "G-TT095GBM3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;