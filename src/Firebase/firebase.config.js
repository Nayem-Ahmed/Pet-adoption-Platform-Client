// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl6drGOb8MYyaRH7YVrMNBWy8iUmewQCI",
  authDomain: "pet-adoption-ee50c.firebaseapp.com",
  projectId: "pet-adoption-ee50c",
  storageBucket: "pet-adoption-ee50c.appspot.com",
  messagingSenderId: "289772690180",
  appId: "1:289772690180:web:6cf53a73fa5d5ce3808e51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 