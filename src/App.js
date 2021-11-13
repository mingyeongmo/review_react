import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  const name = "hi";
  return (
    <>
      <Wrapper>
        <Hello name="경모" color="pink" />
        <Hello name="현서" color="blue" />
        <Hello name="하트" color="red" />
        <Hello />
        <div>{name}</div>
      </Wrapper>
    </>
  );
}

export default App;
