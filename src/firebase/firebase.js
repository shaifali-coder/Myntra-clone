import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcZsTW7gR3pDwuKacG_D8YmLB25Am2eG4",
  authDomain: "test-2c8d2.firebaseapp.com",
  messagingSenderId: "665314616298",
  storageBucket: "test-2c8d2.firebasestorage.app",
  projectId: "test-2c8d2",
  appId: "1:665314616298:web:8a510ddd8fbaecee208893",
   measurementId: "G-C4WJX88906"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


