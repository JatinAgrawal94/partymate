import React, { useState } from 'react';
import {Member} from '../components/Member';

export const AddPeopleScreen = () => {
    const [member,changeMember]=useState("");
    const [list,changeList]=useState([]);

    const increementCount=()=>{
        changeList([...list,member]);
    }
    
    return (
        <div className="container p-10">
            <h1 className="text-2xl font-bold mb-2">Invite People to Your Party</h1>
            <div className="flex justify-around">
                <input type="text" placeholder="Enter Name" className="w-full border-2 border-red-400 rounded" onChange={(e)=>changeMember(e.target.value)}/>
                <button className="text-xl p-2 bg-red-400 rounded ml-2" onClick={increementCount}>Add</button>
            </div>  
            <div className="text-xl">
                {
                    list.map((item,i)=>(
                        <Member name={item} count={i} key={i}></Member>    
                    ))
                }
            </div>
        </div>
    );
};

