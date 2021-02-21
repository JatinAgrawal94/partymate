import React from 'react';
import { Link } from 'react-router-dom';

export const HostingParty = () => {
    return (
        <div className="container text-xl p-10">
            <h1 className="text-2xl font-bold ">Host A Party</h1>
                <div className="flex flex-col content-around h-5/6">
                    <div className="flex flex-col mb-2">
                        <label htmlFor="partyname" className="text-left mb-2" >Enter Title</label>
                        <input type="text" placeholder="Give a Name to Your Party"  className="border-2 w-full rounded text-lg hover:border-pink-400 ..." />    
                    </div>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="partydate" className="text-left mb-2" >Enter Date</label>
                        <input type="date" placeholder="Enter Date"  className="border-2  w-full rounded text-lg hover:border-pink-400 ..." />    
                    </div>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="partytime" className="text-left mb-2" >Enter Timings</label>
                        <input type="time" placeholder="Enter Timings"  className="border-2  w-full rounded text-lg hover:border-pink-400 ..." />    
                    </div> 
                    <Link to='/addpeople' className="bg-red-400 border-2 rounded-lg py-1 mt-2">Invite People</Link>
                </div>    
        </div>
    );
};

