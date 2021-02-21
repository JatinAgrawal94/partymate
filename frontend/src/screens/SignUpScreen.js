import React from 'react';
import { Link } from 'react-router-dom';

export const SignUpScreen = () => {

    const signuphandler=(e)=>{
        e.preventDefault();
    }

    return (
        <div className="flex flex-col content-around h-5/6 p-10">
            <div className="flex flex-col mb-2">
                        <label htmlFor="name" className="text-left mb-2" >Name</label>
                        <input type="text" placeholder="Enter Name"  className="border-2 w-full rounded text-lg hover:border-pink-400 ..." />    
            </div>
            <div className="flex flex-col mb-2">
                        <label htmlFor="Email" className="text-left mb-2" >Email</label>
                        <input type="text" placeholder="Enter Email"  className="border-2 w-full rounded text-lg hover:border-pink-400 ..." />    
            </div>
            <div className="flex flex-col mb-2">
                        <label htmlFor="gender" className="text-left mb-2" >Gender</label> 
                        <select name="gender" className="border-2 w-full rounded text-lg hover:border-pink-400 ...">
                            <option value="">Choose an Option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>   
            </div>
            <div className="flex flex-col mb-2">
                        <label htmlFor="password" className="text-left mb-2" >Password</label>
                        <input type="text" placeholder="Enter Password"  className="border-2 w-full rounded text-lg hover:border-pink-400 ..." />    
            </div>
            <div className="flex flex-col mb-2">
                        <label htmlFor="password" className="text-left mb-2" >Confirm Password</label>
                        <input type="text" placeholder="Confirm Password"  className="border-2 w-full rounded text-lg hover:border-pink-400 ..." />    
            </div>
            <button className="bg-red-400 border-2 rounded-lg py-1 mt-2 text-xl" onSubmit={signuphandler}>SignUp</button>
            <p className="text-gray-400">Already have an Account? <Link to="/login" className="hover:text-red-400">SignIn</Link></p>
        </div>
    );
};

