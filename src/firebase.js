// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRzw4fH4AQKC_2z1KmXxFzsNTgPRS_vNk",
  authDomain: "easy-wash-f6d10.firebaseapp.com",
  projectId: "easy-wash-f6d10",
  storageBucket: "easy-wash-f6d10.appspot.com",
  messagingSenderId: "825076771968",
  appId: "1:825076771968:web:ce8735ff658dfcfa6e4a65",
  measurementId: "G-1H4JYYQHE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db };