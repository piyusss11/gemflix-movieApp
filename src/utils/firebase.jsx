// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSiwVzGS35yCKcjwqJKYCa5cJVRgSTpJs",
  authDomain: "netflixgpt-6a242.firebaseapp.com",
  projectId: "netflixgpt-6a242",
  storageBucket: "netflixgpt-6a242.appspot.com",
  messagingSenderId: "64928708458",
  appId: "1:64928708458:web:94d2730999dd3ac90d1713",
  measurementId: "G-M52Z4RFVBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();