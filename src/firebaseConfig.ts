// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const key = process.env.FIREBASE_API_KEY
const firebaseConfig = {
    apiKey: key,
    authDomain: "portfolio-a0a11.firebaseapp.com",
    projectId: "portfolio-a0a11",
    storageBucket: "portfolio-a0a11.appspot.com",
    messagingSenderId: "861786096074",
    appId: "1:861786096074:web:ad23204155c84816690f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }