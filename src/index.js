import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyAXJc5-5NXOt-Ii4J012T9jT9p38-lDay0",
  authDomain: "proyecto-react-rjf.firebaseapp.com",
  projectId: "proyecto-react-rjf",
  storageBucket: "proyecto-react-rjf.appspot.com",
  messagingSenderId: "155190457385",
  appId: "1:155190457385:web:260db35009721c51185838"
}; */

const api_key: process.env.apiKey;
console.log(api_key)
var _0x647e=["\x41\x49\x7A\x61\x53\x79\x41\x58\x4A\x63\x35\x2D\x35\x4E\x58\x4F\x74\x2D\x49\x69\x34\x4A\x30\x31\x32\x54\x39\x6A\x54\x39\x70\x33\x38\x2D\x6C\x44\x61\x79\x30","\x70\x72\x6F\x79\x65\x63\x74\x6F\x2D\x72\x65\x61\x63\x74\x2D\x72\x6A\x66\x2E\x66\x69\x72\x65\x62\x61\x73\x65\x61\x70\x70\x2E\x63\x6F\x6D","\x70\x72\x6F\x79\x65\x63\x74\x6F\x2D\x72\x65\x61\x63\x74\x2D\x72\x6A\x66","\x70\x72\x6F\x79\x65\x63\x74\x6F\x2D\x72\x65\x61\x63\x74\x2D\x72\x6A\x66\x2E\x61\x70\x70\x73\x70\x6F\x74\x2E\x63\x6F\x6D","\x31\x35\x35\x31\x39\x30\x34\x35\x37\x33\x38\x35","\x31\x3A\x31\x35\x35\x31\x39\x30\x34\x35\x37\x33\x38\x35\x3A\x77\x65\x62\x3A\x32\x36\x30\x64\x62\x33\x35\x30\x30\x39\x37\x32\x31\x63\x35\x31\x31\x38\x35\x38\x33\x38"];const firebaseConfig={apiKey:_0x647e[0],authDomain:_0x647e[1],projectId:_0x647e[2],storageBucket:_0x647e[3],messagingSenderId:_0x647e[4],appId:_0x647e[5]}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  /* <React.StrictMode> */
    <App />
  /* </React.StrictMode> */
);


