import React from 'react';

export const Member = (props) => {
    return (
        <div className="w-max flex bg-green-300 rounded border-2">
            <p className="text-2xl">{props.count+1})</p>
            <p className="text-2xl" >{props.name.toUpperCase()}</p>
        </div>
    );
};
