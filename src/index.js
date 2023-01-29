import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXJc5-5NXOt-Ii4J012T9jT9p38-lDay0",
  authDomain: "proyecto-react-rjf.firebaseapp.com",
  projectId: "proyecto-react-rjf",
  storageBucket: "proyecto-react-rjf.appspot.com",
  messagingSenderId: "155190457385",
  appId: "1:155190457385:web:260db35009721c51185838"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  /* <React.StrictMode> */
    <App />
  /* </React.StrictMode> */
);

