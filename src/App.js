import React, { useRef, useState, useMemo, useCallback } from 'react';
// import Counter from './components/Counter';
// import Hello from './components/Hello';
// import InputSample from './components/InputSample';
// import Wrapper from './Wrapper';
import UserList from './components/UserList'
import CreateUser from './components/CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'minmo',
        email: 'mingyeongmp@naver.com',
        active: true
    },
    {
        id: 2,
        username: 'moci',
        email: 'moci@gmail.com',
        active: false
    },
    {
        id: 3,
        username: 'bye',
        email: 'bye@naver.com',
        active: false
    }
]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
  //setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  });
  
  const onRemove = useCallback(
    id => {
    setUsers(users.filter(user => user.id !== id));
    // 파라미터로 받은 user.id가 아닌걸 setUsers로 설정한다.
    },
    [users]
  );

  const onToggle = useCallback(
    id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
        )
    );
    },
    [users]
  );
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
