import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BG_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    setErrorMessage(
      checkValidData(email.current.value, password.current.value)
    );
    if (errorMessage) return;
    if(!isSignInForm)
    {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: AVATAR_URL
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
     
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          navigate("/browse");

          // Profile updated!
          // ...
        }).catch((error) => {
          setErrorMessage(error.message)
          // An error occurred
          // ...
        });
        
        // console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" "+errorMessage);
        // ..
      });
    }
    else
    {
      signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" "+errorMessage);
      });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-700 font-semibold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
