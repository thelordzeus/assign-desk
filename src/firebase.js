// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCoiaFNqpEqLd4W2q0OM-0StSVfnPWijwc",
  authDomain: "assigndesk-d0b7d.firebaseapp.com",
  projectId: "assigndesk-d0b7d",
  storageBucket: "assigndesk-d0b7d.appspot.com",
  messagingSenderId: "828122301996",
  appId: "1:828122301996:web:4532bb7ac51d8e2bbd3389",
  measurementId: "G-159PS3X1SY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);