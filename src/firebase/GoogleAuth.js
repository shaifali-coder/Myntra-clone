import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    console.log("User Info:", user);

    alert(`Welcome ${user.displayName}`);
  } catch (error) {
    console.error(error);
  }
};

export default signInWithGoogle;



