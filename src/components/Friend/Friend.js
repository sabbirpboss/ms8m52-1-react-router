import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, username, id} = friend;
    
    const navigate = useNavigate();

    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
        // navigate(`/friend/${id}`); //direct navigate
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={'/friend/' + id}>Show Detail</Link>
            <button onClick={showFriendDetail}>{username}:{id}</button>
        </div>
    );
};

export default Friend;