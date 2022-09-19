// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCa8boKknD5C6idkrFOF8Yz5qQpzZfu_K4",
  authDomain: "crud-portfolio.firebaseapp.com",
  projectId: "crud-portfolio",
  storageBucket: "crud-portfolio.appspot.com",
  messagingSenderId: "820090013474",
  appId: "1:820090013474:web:a4745459534a697fb4c77b"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();