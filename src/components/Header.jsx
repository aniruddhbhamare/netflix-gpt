import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../utils/store/userSlice";
import { onAuthStateChanged, signOut as fSignOut } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/store/gptSlice";
import { changeLanguage } from "../utils/store/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store?.user?.user);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

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

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSelectLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
    // console.log("Value", e.target.value);
  };
  return (
    <div className="flex justify-between items-center absolute w-screen z-10 px-3 py-1 bg-gradient-to-b from-black flex-col md:flex-row">
      <img className="max-w-48" src={LOGO} alt="logo" />
      {userData && (
        <div className="flex px-4 md:px-4 w-full md:w-auto justify-between md:justify-center items-center">
          {showGptSearch && (
            <div className="mx-3">
              <label className="text-white ">Lang</label>

              <select
                className="p-2 bg-black text-white opacity-70"
                onChange={handleSelectLanguage}
              >
                {SUPPORTED_LANGUAGES.map((lang) => {
                  return (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  );
                })}
                {/* <option value="us">US</option>
                  <option value="hindi">Hindi</option>
                  <option value="spanish">Spanish</option> */}
              </select>
            </div>
          )}
          <div className="p-2 mr-2 bg-red-800 rounded-md">
            <button onClick={handleGptSearch} className="text-white font-bold">
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
          </div>
          <div className="hidden md:inline-block max-w-12">
            <img className="rounded-3xl" src={userData?.photoURL} alt="logo" />
            <div className="text-center text-red-700">
              {/* {userData.displayName} */}
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
