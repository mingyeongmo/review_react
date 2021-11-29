import React from 'react';

const User = ({ user }) => {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

const UserList = ( {users} ) => {

    return (
        <>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </>
    );
};

export default UserList;