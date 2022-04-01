import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    return (
        <div>
            <h2>This is detail of a friend: {friendId}</h2>
        </div>
    );
};

export default FriendDetail;