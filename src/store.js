// npm i redux
import { createStore } from 'redux'


// Reducer
// Es una funcion pura que devuelve el estado actual 

const initialState = 0

const counter = (state= initialState , action) => {
  return  state
}

// Store
// Almacenamiento de nuestro estado
const store = createStore(counter)

console.log(store.getState());


// store.getState()
// store.getDispatch()
// store.subscribe(func)

export default store