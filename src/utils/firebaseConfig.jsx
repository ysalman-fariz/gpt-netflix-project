// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0IGS1igq20nts1Dv3S_SSDk4pkF8SvRA",
  authDomain: "vanakkamnetflix.firebaseapp.com",
  projectId: "vanakkamnetflix",
  storageBucket: "vanakkamnetflix.firebasestorage.app",
  messagingSenderId: "235651129620",
  appId: "1:235651129620:web:79fc1d01a1390ba4812201",
  measurementId: "G-6H23EKB8M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);



