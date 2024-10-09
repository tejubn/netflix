import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LOGO, SUPPORTEDLANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/ConfigSlice";
const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const showGptSearch=useSelector((store)=>store.gpt.gptSearchState)
 
  const user=useSelector(store=>store.user)
  const handleSignOut=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
     navigate("/");
  }).catch((error) => {
      navigate("/error")
  });
  
}
const handleGptSearch=()=>{
dispatch(toggleGptSearchView())
}
const handleLangChange=(e)=>{
// console.log(e.target.value)
dispatch(changeLanguage(e.target.value))
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
<div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
  {/* Logo */}
  <img className="w-44" src={LOGO} alt="logo" />

  {user && (
    <div className="flex items-center space-x-4">
{  showGptSearch&&<select onChange={handleLangChange}>
       {SUPPORTEDLANGUAGES.map((data)=><option key={data.identifier} value={data.name}>{data.name}</option>)}
       </select>}
      {/* GPT Search Button */}
      <button
        onClick={handleGptSearch}
        className="bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-red-700 transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
      >
{showGptSearch?"HomePage":"GPT Search"}
      </button>

      {/* User Profile Image */}
      <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="userlogo" />

      {/* Sign Out Button */}
      <button className="text-white font-bold" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  )}
</div>

    );
  };
  export default Header;