import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Logo from './Logo'

// import Counter from './Counter'
// import Info from './Info'
// import Fruits from './Fruits'
import Todos from './Todos'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Store, Reducer Acciones con Redux <Logo size={7} /></h1>
        {/* <Info /> */}
        {/* <Counter hey='hey'/> */}
        {/* <Fruits /> */}
        <Todos />
      </div>
    </Provider>
  )
}

export default App