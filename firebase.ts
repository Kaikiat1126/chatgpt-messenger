import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8LRcmjOixjofMQJgUcOi66lQQVUYm5is",
  authDomain: "chatgpt-messenger-908f1.firebaseapp.com",
  projectId: "chatgpt-messenger-908f1",
  storageBucket: "chatgpt-messenger-908f1.appspot.com",
  messagingSenderId: "1057628587686",
  appId: "1:1057628587686:web:e1f2b3ea4899577230d667",
  measurementId: "G-4KSS33F8KK"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };