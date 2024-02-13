import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, addUserToStore } from '../utils/appSlice';
import { useNavigate } from 'react-router-dom';
import { showGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANG } from '../utils/constant';
import { changLang } from '../utils/configSlice';

const Header = () => {

    const show = useSelector(store => store.show.showingHeader);

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const showGptSearchView1 = useSelector(store => store.gpt.showGptSearch);


    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                const email = user.email;
                const displayName = user.displayName;
                const photoURL = user.photoURL;
                dispatch(addUser(uid, email, displayName, photoURL));
                navigate("/home");




                // ...
            } else {
                navigate("/");
                // User is signed out
                // ...
            }
        });
    }, [])

    const handleGPTclicked = () => {
        dispatch(showGptSearchView());
    }
    const handleLangChange = (e) => {

        dispatch(changLang(e.target.value))
    }
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-center md:justify-between '>
            <div><img className=' w-44 mx-auto md:mx-0' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='netflix-logo' /></div>
            {show && <div className='flex justify-between ' ONCL>

                {!showGptSearchView1 && <select className='p-2 m-2 bg-gray-900 text-white rounded-lg'
                    onChange={handleLangChange}>
                    {SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>}

                <button className='py-2 px-4 m-2 mx-4 bg-purple-800 text-white rounded-lg '
                    onClick={handleGPTclicked}>
                    {!showGptSearchView1 ? "Homepage" : "GPT Search"}</button>
                <img className='w-9 h-9 m-3 hidden md:block rounded-lg' src="https://catastic.pet/wp-content/uploads/2023/04/white-british-cat-are-wear-sunglass-shirt-concept-summer-yellow-background-1.jpg" alt='dp' />
                <button className='font-bold text-white' onClick={handleSignOut}>Sign out</button>
            </div>}

        </div>
    )
}

export default Header;
