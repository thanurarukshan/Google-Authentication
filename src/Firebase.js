import { initializeApp } from "firebase/app";

// import firebase suth related stuff
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6uJIDQKavMNSJAU2dkGwaaoAu6PjmYg8",
  authDomain: "authentication-6ff13.firebaseapp.com",
  projectId: "authentication-6ff13",
  storageBucket: "authentication-6ff13.appspot.com",
  messagingSenderId: "1083605653137",
  appId: "1:1083605653137:web:0ef7212fd770dfcc145130"
};

const app = initializeApp(firebaseConfig);

// authentiction related stuff again
export const auth = getAuth(app);

// authenticate using google
const provider = new GoogleAuthProvider();

// create a function to sign in with google

export const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const name = user.displayName;
        const email = user.email;
        const pic = user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("pic", pic);
  
        return user; // Return the user object
      })
      .catch((error) => {
        console.log(error);
      });
  };