import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../utils/store/userSlice";
import { useNavigate } from "react-router-dom";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const userData = useSelector((store) => store?.user?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (userData !== undefined) {
    console.log(userData);
  }
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    const emailValue = email?.current?.value;
    const passwordValue = password?.current?.value;
    const message = checkValidation(emailValue, passwordValue);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Signed up Logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: `${name?.current?.value}`,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // dispatch(signIn(auth.currentUser));
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, " ", errorMessage);
        });
    } else {
      //Sign IN Logic

      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("signInWithEmailAndPassword", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          className="bg-cover fixed h-screen object-cover md:h-auto"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black text-white p-14 max-w-md my-20  mx-auto right-0 left-0 rounded opacity-80"
      >
        <h1 className="text-3xl font-bold py-4 ">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full border border-gray-500 bg-transparent rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-3 w-full border border-gray-500 bg-transparent rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full border border-gray-500 bg-transparent rounded-md"
        />
        <p className="text-red-600 text-xs font-bold">{errorMessage}</p>
        <button
          onClick={handleSubmit}
          type="submit"
          className="p-4 my-4 w-full bg-red-700 rounded-md "
        >
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-center ">Forgot Password?</p>

        <div className="mt-10">
          <h1 className="font-bold">Remember me</h1>
          <h1
            className="py-2 cursor-pointer"
            onClick={() => toggleSignInForm()}
          >
            {!isSignInForm
              ? "Already Registered? Sign In Now."
              : "New to Netflix? Sign up now."}
          </h1>
          <h4 className="text-xs pt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </h4>
        </div>
      </form>
    </div>
  );
};

export default Login;
