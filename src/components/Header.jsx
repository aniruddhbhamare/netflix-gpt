import { signOut } from "@firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store?.user?.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("Error", error);
        navigate("/error");
        // An error happened.
      });
  };
  return (
    <div className=" flex justify-between items-center absolute w-screen z-10 px-3 py-1 bg-gradient-to-b from-black">
      <img
        className="max-w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {userData && (
        <div className="flex">
          <div className="max-w-12">
            <img
              className="rounded-3xl"
              src={
                userData
                  ? userData.photoURL
                  : "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              }
              alt="logo"
            />
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
