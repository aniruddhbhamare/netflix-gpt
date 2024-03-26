import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          className=""
        />
      </div>
      {/* <div className="absolute p-4 m-18 w-3/12"> */}
      <form className="absolute bg-black text-white p-14 w-4/12 my-20  mx-auto right-0 left-0 rounded opacity-80">
        <h1 className="text-2xl font-bold py-4 ">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full border border-gray-500 bg-transparent rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-3 w-full border border-gray-500 bg-transparent rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full border border-gray-500 bg-transparent rounded-md"
        />
        <button
          type="submit"
          className="p-4 my-4 w-full bg-red-700 rounded-md "
        >
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-center ">Forgot Password?</p>

        <div className="mt-10">
          <h1 className="font-bold">Remember me</h1>
          <h1 className="py-2 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "Already Registered? Sign In Now."
              : " New to Netflix? Sign up now."}
          </h1>
          <h4 className="text-xs pt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </h4>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default Login;
