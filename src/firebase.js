import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdu1M1-Tvrc16qdJjxeAki48bNO_Ry8VY",
  authDomain: "react-authentication-7b457.firebaseapp.com",
  projectId: "react-authentication-7b457",
  storageBucket: "react-authentication-7b457.appspot.com",
  messagingSenderId: "525351646384",
  appId: "1:525351646384:web:d0c84c97aff92b9842f775",
  measurementId: "G-ZKP8NJCR2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;