// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwIShkFr-mBlbiLyHIDBgrIZ0xRUAXAys",
  databaseURL: "https://tatweer-e08bf-default-rtdb.europe-west1.firebasedatabase.app",
  authDomain: "tatweer-e08bf.firebaseapp.com",
  projectId: "tatweer-e08bf",
  storageBucket: "tatweer-e08bf.firebasestorage.app",
  messagingSenderId: "879162382873",
  appId: "1:879162382873:web:ffda90260957eb1ac22888",
  measurementId: "G-YE7N48V427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);
export {database}
