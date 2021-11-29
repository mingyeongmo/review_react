import React, { useRef, useState } from 'react';
// import Counter from './components/Counter';
// import Hello from './components/Hello';
// import InputSample from './components/InputSample';
// import Wrapper from './Wrapper';
import UserList from './components/UserList'
import CreateUser from './components/CreateUser';

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
]);

  const nextId = useRef(4);
  const onCreate = () => {
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
  };
  
  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
      {/* <InputSample /> */}
      {/* <Counter/> */}
    
      {/* <Wrapper>
        <Hello name="경모" color="pink" size="1.5rem" isSpecial={true}/> */}
        {/* isSpecial만 써도 true로 간주함 */}
        {/* <Hello name="현서" color="blue" size="1.3rem"/>
        <Hello name="하트" color="red" size="1rem"/>
        <Hello />
      </Wrapper> */}
    </>
  );
}

export default App;
