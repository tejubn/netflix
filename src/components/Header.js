import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";
const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  
  const user=useSelector(store=>store.user)
  const handleSignOut=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
     navigate("/");
  }).catch((error) => {
      navigate("/error")
  });
  
}

useEffect(()=>{
 const unsubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      navigate("/browse")
      } else {
      dispatch(removeUser());
      navigate("/")
    }
  });
return unsubscribe;
},[])
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
          className="w-44"
          src={LOGO}
          alt="logo"
        />
{user&&        <div className="flex">
          <img className="w-12 h-12" src={user.photoURL} alt="userlogo"/>
          <button className="text-white font-bold" onClick={handleSignOut}>SignOut</button>
        </div>}
      </div>
    );
  };
  export default Header;