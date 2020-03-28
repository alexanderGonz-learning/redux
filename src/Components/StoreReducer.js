import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Logo from './Logo'

import Counter from './Counter'
import Info from './Info'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Store, Reducer Acciones con Redux <Logo size={7} /></h1>
        <Info />
        <Counter hey='hey'/>
      </div>
    </Provider>
  )
}

export default App