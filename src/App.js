import React from 'react';
import Hello from './Hello';

function App() {
  const name = "hi";
  return (
    <>
      <Hello name="경모" />
      <Hello name="현서" />
      <Hello name="하트" />
      <div>{name}</div>
    </>
  );
}

export default App;
