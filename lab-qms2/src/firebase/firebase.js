import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjbOkYa8mz3oItRSjaI94N2-F0LjFTokI",
  authDomain: "mbl-qms2.firebaseapp.com",
  projectId: "mbl-qms2",
  storageBucket: "mbl-qms2.firebasestorage.app",
  messagingSenderId: "1009587785172",
  appId: "1:1009587785172:web:02de9dd052a659111f1a41",
  measurementId: "G-NM03LMBENM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);






const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);