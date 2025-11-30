// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAASWJ_Lfn-TSdxUAWerAnAP1aZ-acb2-s",
  authDomain: "react-authentication-app-f611b.firebaseapp.com",
  projectId: "react-authentication-app-f611b",
  storageBucket: "react-authentication-app-f611b.firebasestorage.app",
  messagingSenderId: "864634124712",
  appId: "1:864634124712:web:815ee3d9899a5978ca859d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize firebase authentication and get a ref for this service
export const auth = getAuth(app)