import React, { useRef, useState } from 'react';
import checkValidate from '../utils/validate';
import Header from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/appSlice';
import { BG_IMG } from '../utils/constant';

const Login = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const [errorMessage, setErrorMessage] = useState(null);
    const [isItSignIn, setIsItSignIn] = useState(true);
    const handleSignin = () => {
        setIsItSignIn(!isItSignIn);

    }

    const handleClicks = () => {


        const message = checkValidate(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isItSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://catastic.pet/wp-content/uploads/2023/04/white-british-cat-are-wear-sunglass-shirt-concept-summer-yellow-background-1.jpg"
                    }).then(() => {
                        const uid = user.uid;
                        const email = user.email;
                        const displayName = user.displayName;
                        const photoURL = user.photoURL
                        dispatch(addUser(uid, email, displayName, photoURL));
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + errorMessage);
                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + errorMessage);
                });
        }

    }

    return (

        <div>
            <Header />
            <div className='absolute'>
                <img className=' h-screen object-cover md:h-auto no-scrollbar ' src={BG_IMG}
                    alt='netflix-bg' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='py-24 rounded-lg w-full md:w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4 '>{isItSignIn ? "Sign in" : "Sign up"}</h1>
                {!isItSignIn && <input type='text' placeholder='Your name' className='my-2 p-4 w-full bg-gray-700 bg-opacity-80' />}
                <input ref={email} type='text' placeholder='Email or username' className='my-2 p-4 w-full bg-gray-700 bg-opacity-80' />

                <input ref={password} type='password' placeholder='password' className='my-2 p-4 w-full bg-gray-700 bg-opacity-80' />
                <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='my-2 p-4 text-white w-full bg-red-700' onClick={handleClicks} >
                    {isItSignIn ? "Sign in" : "Sign up"}
                </button>
                <p onClick={handleSignin} className='cursor-pointer'>{isItSignIn ? "New to Netflix? why don't sign up" : "already have an account sign in"}</p>
            </form>


        </div>
    )
}

export default Login;
