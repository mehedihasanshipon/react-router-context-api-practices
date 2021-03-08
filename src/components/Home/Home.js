import React, { useEffect, useState } from 'react';
import UserDetail from '../UserDetail/UserDetail'

const Home = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        const url = 'https://randomuser.me/api/?results=20';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUsers(data.results));
    },[])
    return (
        <div className="container">
            <h2>This is home</h2>
            <h2>USers : {users.length} </h2>
            <div className="row">
                {
                    users.map(user => <UserDetail user={user} />)
                }
            </div>
        </div>
    );
};

export default Home;