// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBX140oNXemq28RwKagV7NbECmeiC_n_L4",
  authDomain: "kingcomm-f6e49.firebaseapp.com",
  projectId: "kingcomm-f6e49",
  storageBucket: "kingcomm-f6e49.appspot.com",
  messagingSenderId: "957989568382",
  appId: "1:957989568382:web:b2b63dbe21dfba904abd2f",
  measurementId: "G-3ZVHCZK1LY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);