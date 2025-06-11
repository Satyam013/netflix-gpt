import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_IMG } from "../utils/constant";
import {USER_AVATAR} from "../utils/constant";

const Login = () => { 
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, 
          //  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rIWZdIa6hfBRsNAFtrRjPFreZQj9Zomtgg&s"
          photoURL: USER_AVATAR
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
    else{
      // Sign In Logic
    signInWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value
    )
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    });
    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
      <div>
        <Header />
        <div className="absolute">
          <img 
            src={BG_IMG}
            alt="bg-image" 
          />
        </div>

        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="absolute left-0 right-0 w-4/12 p-12 mx-auto text-white bg-black rounded-lg my-36 bg-opacity-80">

          <h1 className="py-4 text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"} 
          </h1>

          {!isSignInForm && (
            <input 
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-4 my-4 bg-gray-700"
            />
          )}

          <input 
            ref={email}
            type="text" 
            placeholder="Email Address" 
            className="w-full p-4 my-4 bg-gray-700"
          />

          <input 
            ref={password}
            type="password" 
            placeholder="Password" 
            className="w-full p-4 my-4 bg-gray-700"
          />

          <p className="py-2 text-lg font-bold text-red-500">{errorMessage}</p>

          <button className="w-full p-4 my-6 bg-red-700 rounded-lg" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered - Sign In Now"}
          </p>

        </form>
      </div>
  );
};

export default Login;
