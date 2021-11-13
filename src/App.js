import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  
  return (
    <>
      <Wrapper>
        <Hello name="경모" color="pink" size="1.5rem"/>
        <Hello name="현서" color="blue" size="1.3rem"/>
        <Hello name="하트" color="red" size="1rem"/>
        <Hello />
      </Wrapper>
    </>
  );
}

export default App;
