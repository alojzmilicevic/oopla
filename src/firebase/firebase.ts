// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAALJ9LcStIfofMxbkjv0tR8qRDG-ZOim8",
  authDomain: "oopla-services.firebaseapp.com",
  projectId: "oopla-services",
  storageBucket: "oopla-services.firebasestorage.app",
  messagingSenderId: "299783267316",
  appId: "1:299783267316:web:8da150d0534d590a1bcfa1",
  measurementId: "G-8G76QQZRSV"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const messaging = getMessaging(app);