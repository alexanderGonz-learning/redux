import { combineReducers } from 'redux'
import counter from './counterReducer'
import user from './userReducer'
import fruits from './fruitReducer'
import todo from './todoReducer'


export default combineReducers({
  counter,
  user,
  fruits,
  todo
})