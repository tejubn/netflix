import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
<<<<<<< HEAD
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
=======
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState();
>>>>>>> 53466590d10f2e963122ee7227363570d6a5f0c9
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
<<<<<<< HEAD
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
=======
setErrorMessage(checkValidData(email.current.value,password.current.value))
>>>>>>> 53466590d10f2e963122ee7227363570d6a5f0c9
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
<<<<<<< HEAD
          src={BG_URL}
=======
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
>>>>>>> 53466590d10f2e963122ee7227363570d6a5f0c9
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
