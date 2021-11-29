import React, { useRef } from 'react';
// import Counter from './components/Counter';
// import Hello from './components/Hello';
// import InputSample from './components/InputSample';
// import Wrapper from './Wrapper';
import UserList from './components/UserList'

function App() {

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

  const nextId = useRef(4);
  const onCreate = () => {

    nextId.current += 1;
  }
  
  return (
    <>
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
