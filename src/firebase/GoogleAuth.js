import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    // :one: Open Google popup
    const result = await signInWithPopup(auth, provider);

    // :two: Get Firebase ID token
    const firebaseToken = await result.user.getIdToken();

    // :three: Send token to backend
    const response = await axios.post(
      "http://localhost:5000/api/auth/google",
      { token: firebaseToken }
    );

    // :four: Save backend JWT (VERY IMPORTANT)
    localStorage.setItem("token", response.data.token);

    console.log("Google signup successful");

    // :five: Redirect user (example)
    window.location.href = "/dashboard";

  } catch (error) {
    console.error("Google signup failed:", error);
  }
};

export default signInWithGoogle;


// import { auth } from "./firebase";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import axios from "axios";

// const provider = new GoogleAuthProvider();

// const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);

//     const token = await result.user.getIdToken();

//     const res = await axios.post(
//       "http://localhost:5000/api/auth/google",
//       { token }
//     );

//     localStorage.setItem("token", res.data.token);

//     console.log("Signup Success");

//     return res.data;  
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }

       
// };

// export default signInWithGoogle;









































// import { auth } from "./firebase";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import axios from "axios";

// const provider = new GoogleAuthProvider();

// const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);

//     const token = await result.user.getIdToken();

//     const res = await axios.post(
//       "http://localhost:5000/api/auth/google",
//       { token }
//     );

//     localStorage.setItem("token", res.data.token);

//     console.log("Signup Success");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default signInWithGoogle;