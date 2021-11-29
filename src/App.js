import React from 'react';
// import Counter from './components/Counter';
// import Hello from './components/Hello';
// import InputSample from './components/InputSample';
// import Wrapper from './Wrapper';
import UserList from './components/UserList'

function App() {
  
  return (
    <>
      <UserList />
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
