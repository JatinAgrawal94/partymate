import React from 'react';
import { Link } from 'react-router-dom';
import {signin} from '../data';
export const SignInScreen = () => {
    const signInHandler=(e)=>{
        e.preventDefault();
    }
    console.log(signin)
    return (
        <div className="flex flex-col content-around h-5/6 p-10">
            <div className="flex flex-col mb-2">
                        <label htmlFor="Email" className="text-left mb-2" >Email</label>
                        <input type="text" placeholder="Enter Email"  className="border-2 w-full rounded text-lg hover:border-pink-400 ..." />    
            </div>
            <div className="flex flex-col mb-2">
                        <label htmlFor="password" className="text-left mb-2" >Password</label>
                        <input type="text" placeholder="Enter Password"  className="border-2 w-full rounded text-lg hover:border-pink-400 ..." />    
            </div>
            <button className="bg-red-400 border-2 rounded-lg py-1 mt-2 text-xl" onSubmit={signInHandler}>SignIn</button>
            <p className="text-gray-400">Don't have an Account? <Link to="/signup" className="hover:text-red-400">SignUp</Link></p>
        </div>
    );
};

