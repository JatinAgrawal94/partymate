import React from 'react';
import {Link} from 'react-router-dom';
export const HomeScreen = () => {
   
    return (
        <div className="bg-gray-50">
            <div className="flex justify-start px-14">
                <div className="p-4 leading-loose">
                    <p className=" text-left text-indigo-400 quote tracking-wide">“Telling an introvert</p>
                    <p className=" text-left text-indigo-400 quote tracking-wide">to go to a party is like</p>
                    <p className=" text-left text-indigo-400 quote tracking-wide">telling a saint to go to Hell.”</p>
                </div>
                <img src="./images/girl.png" alt="girl" className="w-4/12"/>
            </div>
            <div className="flex px-10 justify-around mt-2 bg-gray-200 p-4">
                <p className="text-3xl font-bold">Need A Break ?</p>
                <Link className="bg-red-400 p-2 font-bold text-xl border-2 rounded-md border-red-400 hover:bg-red-300 ..." to='/hostingparty'>Host a Party</Link>
            </div>
            <div className="px-14">
                <p className="text-left text-4xl tracking-wide google-font text-green-500">Get Rid of Social Anxiety 😔</p>
                <p className="text-left text-4xl tracking-wide google-font text-green-500">With PartyMate 🧑‍🤝‍🧑</p>
                <p className="text-left text-3xl tracking-wide google-font text-gray-500 leading-loose">⭐Follow Simple Steps</p>
                <ul>
                    <li className="text-red-500 text-2xl text-left">👉 Get a Party Invite 💌</li>
                    <li className="text-red-500 text-2xl text-left">👉 Set your Status for the party 🚩</li>
                    <li className="text-red-500 text-2xl text-left">👉 Hurrah! Check Other's Status and hang with them at the party 👯</li>
                </ul>
            </div>
       </div> 
    );
};

