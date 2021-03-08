import React from 'react';
import { Link } from 'react-router-dom';

const UserDetail = (props) => {
    const {email,gender,location,picture} = props.user;
    const {first} = props.user.name;
    // console.log(first)
    return (
        <div className="col-md-4 g-3">
            <div className="card " >
            <img src={picture.medium} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{first}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Gender: {gender}</li>
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Location: {location.country}</li>
            </ul>
            <div className="card-body">
                <Link to ={`user/${first}`} className="btn btn-primary mx-2">Show more</Link>
                <button className="btn btn-danger">Add </button>
            </div>
            </div>
        </div>
    );
};

export default UserDetail;