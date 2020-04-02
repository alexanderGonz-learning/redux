// npm i redux
import { createStore, applyMiddleware, compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// MiddleWare
// Se detiene el flujo si no se ejecuta el metodo next
const confirmDeleteTodo = (store) => (next) => (action) => {
  
  if (action.type === 'DELETE_TODO') {
    let conf = window.confirm('Seguro que quieres elimiar el todo?')

    conf && next(action)

  }else{
    next(action)
  }

  /*setTimeout(() => {
    next(action)
    
  },1000)

  // store.dispatch
  if (action.type !== 'ADD_TODO' ) {
    setTimeout(() => {
      store.dispatch({
        type: 'ADD_TODO',
        payload: {
          text: 'Todo creado en Middleware',
          id: 'midleID',
          checked: false,
        }
      })
      
    },4000)
  }*/
}

/*const logger = (store) => (next) => (action) => {
  console.log('Ha ocurrido una accion', action)

  next(action)
}*/


// composeHenhanders nos permite acceder a las devtools de redux
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancers = composeWithDevTools({
  name: 'Redux',
  realtime: true,
  trace: true,
  tracelimit: 20
})


// Store
// Almacenamiento de nuestro estado
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(confirmDeleteTodo,logger,thunk))
  ) 


export default store