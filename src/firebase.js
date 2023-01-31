// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfZufbiaOmfc8m38eVVKukz-kM-idN0W0",
  authDomain: "netflixclone-34284.firebaseapp.com",
  projectId: "netflixclone-34284",
  storageBucket: "netflixclone-34284.appspot.com",
  messagingSenderId: "643770247141",
  appId: "1:643770247141:web:2c9b966c5b932c2c06b10c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
