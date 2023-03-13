import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8LRcmjOixjofMQJgUcOi66lQQVUYm5is",
  authDomain: "chatgpt-messenger-908f1.firebaseapp.com",
  projectId: "chatgpt-messenger-908f1",
  storageBucket: "chatgpt-messenger-908f1.appspot.com",
  messagingSenderId: "1057628587686",
  appId: "1:1057628587686:web:c1349e38b0fa7f4b30d667",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };