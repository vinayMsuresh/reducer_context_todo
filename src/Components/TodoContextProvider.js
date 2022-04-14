import React, { useReducer } from 'react'
import { reducer } from '../helpers/reducer';
import {initialState} from '../helpers/initialState';
import {todoContext} from '../helpers/todoContext';
function TodoContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <todoContext.Provider value={{state, dispatch}}>
        {children}
    </todoContext.Provider>
  )
}

export default TodoContextProvider