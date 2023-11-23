import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQze76HRWOZ2FhyncY4s7I9VwNaOl8uRg",
  authDomain: "tiktokphoneclonesnap.firebaseapp.com",
  projectId: "tiktokphoneclonesnap",
  storageBucket: "tiktokphoneclonesnap.appspot.com",
  messagingSenderId: "905937468926",
  appId: "1:905937468926:web:d252d58a64d8bed70c14af",
  measurementId: "G-Y4SN55YHXV",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;
