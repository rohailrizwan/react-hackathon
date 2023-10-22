// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmIRE_XRENSFHmoR7oyOQUk6fiI-vU_jE",
  authDomain: "react-hackathon-86935.firebaseapp.com",
  databaseURL: "https://react-hackathon-86935-default-rtdb.firebaseio.com",
  projectId: "react-hackathon-86935",
  storageBucket: "react-hackathon-86935.appspot.com",
  messagingSenderId: "522055099970",
  appId: "1:522055099970:web:ae48db0392d8e561d9efdb",
  measurementId: "G-G12GH3XL02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);