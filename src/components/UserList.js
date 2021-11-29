import React from 'react';

const User = ({ user }) => {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

const UserList = () => {

    const users = [
        {
            id: 1,
            username: 'minmo',
            email: 'mingyeongmp@naver.com'
        },
        {
            id: 2,
            username: 'moci',
            email: 'moci@gmail.com'
        },
        {
            id: 3,
            username: 'bye',
            email: 'bye@naver.com'
        }
    ];

    return (
        <>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </>
    );
};

export default UserList;