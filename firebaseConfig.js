// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCT-9dYQ5Nuf2l7gciBFpYFwQb9jJTUa_s",
  authDomain: "ai-powered-e4bd1.firebaseapp.com",
  projectId: "ai-powered-e4bd1",
  storageBucket: "ai-powered-e4bd1.appspot.com",
  messagingSenderId: "389427833077",
  appId: "1:389427833077:web:f9f00683f3de9aac027dbc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;