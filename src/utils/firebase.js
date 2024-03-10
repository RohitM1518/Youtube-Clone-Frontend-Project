// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChZDlan_ydBTes8I1rHjxfEsdIU2_ENgw",
  authDomain: "clone-16678.firebaseapp.com",
  projectId: "clone-16678",
  storageBucket: "clone-16678.appspot.com",
  messagingSenderId: "725374315380",
  appId: "1:725374315380:web:7fbfdb47f8bf31ecfd1a21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app;