import React, { useEffect } from "react";
import Browser from "./Browser";
import {
  RouterProvider,
  createBrowserRouter,
  // useNavigate,
} from "react-router-dom";
import Login from "./Login";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "../utils/store/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(signIn(user));

        // We cannot use Navigate() method heade in Body as we wrap Body in RouterProvider
        //to use  navigate("/") here we need to move the route lofic to App.js

        // navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(signOut());

        // navigate("/");

        // ...
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
