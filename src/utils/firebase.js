// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVOUASciFx9a6LjVwbiEk4GVgg6vNbVpU",
    authDomain: "netflixapp-a75c8.firebaseapp.com",
    projectId: "netflixapp-a75c8",
    storageBucket: "netflixapp-a75c8.appspot.com",
    messagingSenderId: "728100375323",
    appId: "1:728100375323:web:de1113f2add85d580521be",
    measurementId: "G-493DV2NM1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();