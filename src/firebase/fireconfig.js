import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBsbWYkSAwEHI4qGJpbn6mIyPEtxUIStVg",
    authDomain: "swift-hands.firebaseapp.com",
    projectId: "swift-hands",
    storageBucket: "swift-hands.appspot.com",
    messagingSenderId: "471671654582",
    appId: "1:471671654582:web:1e369184bb28573d27be17"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);

  const db = getFirestore();
  export {db}