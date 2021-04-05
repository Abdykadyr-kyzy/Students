import React from 'react';
import "./User.css";

export const User = ({color, el}) => {

    return <div className="user-card">
        <img className="foto" src={el.img} />
        <div>
            <h2>{el.full_name}</h2>
            <h4>Age:{el.age}</h4>
            <h3>Coutry:{el.country}</h3>
        </div>
    </div>
}