import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import Counter from './components/Counter';
// import Hello from './components/Hello';
// import InputSample from './components/InputSample';
// import Wrapper from './Wrapper';
import UserList from './components/UserList'
import CreateUser from './components/CreateUser';
import useInputs from './hooks/useInputs';
import produce from 'immer';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

  const initialState = {
    inputs: {
      username: '',
      email: ''
    },
    users: [
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
  ]
};

  function reducer(state, action) {
    switch (action.type) {
      case 'CREATE_USER':
        return produce(state, draft => {
          draft.users.push(action.user);
          // inputs: initialState.inputs,
          // users: state.users.concat(action.user)
        });
      case 'TOGGLE_USER':
        return produce(state, draft => {
          const user = draft.users.find(user => user.id === action.id);
          user.active = !user.active;
          // ...state,
          // users: state.users.map(user =>
          //   user.id === action.id ? { ...user, active: !user.active } : user
          //   )
        });
      case 'REMOVE_USER':
        return produce(state, draft => {
          const index = draft.users.findIndex(user => user.id === action.id);
          draft.users.splice(index, 1);
          // ...state,
          // users: state.users.filter(user => user.id !== action.id)
        });
      default:
        return state;
    }
    
  }

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {

  const [{ username, email }, onChange, reset] = useInputs({
    username: '',
    email: ''
  });
  //const { username, email } = state.inputs;
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;
  


  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    reset();
    nextId.current += 1;
  }, [username, email]);


  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <UserDispatch.Provider value={dispatch}>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
          />
        <UserList users={users} />
        <div>활성사용자 수 : {count}</div>
      </UserDispatch.Provider>
    </>
  );
}

export default App;