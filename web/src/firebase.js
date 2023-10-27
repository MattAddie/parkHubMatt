
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCL1giuajreNL7MaAlISBR_gr5AsmYW2p0",
  authDomain: "capstone-third-year.firebaseapp.com",
  databaseURL: "https://capstone-third-year-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "capstone-third-year",
  storageBucket: "capstone-third-year.appspot.com",
  messagingSenderId: "1037621155883",
  appId: "1:1037621155883:web:3b6c0804c8014b8cb2b26e",
  measurementId: "G-ZS9X3M1RQK"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }
