import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase.init';

const Login = () => {

    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = ()=> {
        console.log("login with google clicked");
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <h2>this is login page</h2>
            <h3 className='text-3xl'>Please Login </h3>
            <button onClick={handleGoogleSignIn} className="btn">login with google</button>
        </div>
    );
};

export default Login;