import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../utils/store/userSlice";
import { onAuthStateChanged, signOut as fSignOut } from "firebase/auth";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store?.user?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(signIn(user));
        navigate("/browse");
      } else {
        dispatch(signOut());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    fSignOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("Error", error);
        // An error happened.
      });
  };

  return (
    <div className=" flex justify-between items-center absolute w-screen z-10 px-3 py-1 bg-gradient-to-b from-black">
      <img className="max-w-48" src={LOGO} alt="logo" />
      {userData && (
        <div className="flex">
          <div className="max-w-12">
            <img className="rounded-3xl" src={userData?.photoURL} alt="logo" />
            <div className="text-center text-red-700">
              {userData.displayName}
            </div>
          </div>
          <button onClick={handleSignOut} className="text-white font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
