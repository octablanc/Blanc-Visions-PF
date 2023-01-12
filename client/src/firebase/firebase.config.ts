// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, verifyBeforeUpdateEmail, GoogleAuthProvider  } from 'firebase/auth';
import { User } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import {v4} from 'uuid';

// Cuenta de Octa
// const firebaseConfig = {
//   apiKey: "AIzaSyBX140oNXemq28RwKagV7NbECmeiC_n_L4",
//   authDomain: "kingcomm-f6e49.firebaseapp.com",
//   projectId: "kingcomm-f6e49",
//   storageBucket: "kingcomm-f6e49.appspot.com",
//   messagingSenderId: "957989568382",
//   appId: "1:957989568382:web:b2b63dbe21dfba904abd2f",
//   measurementId: "G-3ZVHCZK1LY"
// };

// Cuenta de KingComm
const firebaseConfig = {
  apiKey: "AIzaSyBnfWd43fFpCxe1UxtA6fLnNhZlu3_Edwo",
  authDomain: "kingcomm-6e03a.firebaseapp.com",
  projectId: "kingcomm-6e03a",
  storageBucket: "kingcomm-6e03a.appspot.com",
  messagingSenderId: "608613318573",
  appId: "1:608613318573:web:1fe536f23072614039eb24",
  measurementId: "G-DBXDWL9MD5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

export async function uploadFile(file: any/*File | Blob | Uint8Array | ArrayBuffer | null*/){
  const storageRef = ref(storage, v4());
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}
