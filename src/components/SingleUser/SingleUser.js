import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleUser = () => {
    const {id}=useParams();
    const [user,setUser] = useState({});
    useEffect(()=>{
        const url = `https://randomuser.me/api/?name=${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data.results[0]))
    },[id])
    console.log(user)
    const {gender,email,phone} = user;
    const {first} = user.name;
    const {medium} = user.picture;
    
    return (
        <div className="container">
            <h2>This is single User: {id}</h2>
            <div className="card bg-dark text-white">
            <img src={medium} alt=""/>
            <div className="card-img-overlay">
                <h4>Name: {first} </h4>
                <h5 className="card-title">{gender}</h5>
                <p>Phone: {phone} </p>
                <p className="card-text">{email}</p>
                <p className="card-text">Last updated 3 mins ago</p>
            </div>
            </div>
        </div>
    );
};

export default SingleUser;