import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

//* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  // firebase method for registering a new user
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (error) {
    alert(error);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userLogin = await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    console.log(userLogin);
  } catch (error) {
    alert(error);
  }
};
