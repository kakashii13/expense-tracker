import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCwkeRRjevOBjGxk8I7cjiyLaHyljDpq8",
  authDomain: "expense-tracker-c24c1.firebaseapp.com",
  projectId: "expense-tracker-c24c1",
  storageBucket: "expense-tracker-c24c1.appspot.com",
  messagingSenderId: "496776064593",
  appId: "1:496776064593:web:d528492d9dae28834e1270",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};

export const auth = getAuth(app);
