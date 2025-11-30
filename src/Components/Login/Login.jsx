import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    console.log("login with google clicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    console.log("sing out completed");
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>this is login page</h2>
      <h3 className="text-3xl">Please Login </h3>
      {user ? (
        <button onClick={handleSignOut} className="btn">
          Sign out
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="btn">
          login with google
        </button>
      )}

      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <img className="mx-auto" src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
