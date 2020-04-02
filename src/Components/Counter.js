import React from 'react'
import { connect } from 'react-redux' // importacion de funcion que conecta un componente con el store
import { increment, decrement} from '../redux/actions/counterActions' // importacion de los creadores de acciones del store

const Counter = (props) => { // A las props llega lo que se retorna en mapStateToProps y mapDispatchToProps
  // console.log(props);
  
  const { increment, decrement, counter, name } = props
  return (
    <div>
      <button onClick={increment}>
        +
      </button>
      <button onClick={decrement}>
        -
      </button>
      <h1>{ counter }</h1> 
      <p>
        { name }
      </p>
    </div>
  )
}

const mapStateToProps = (state) => { // Primera funcion para el metodo connect. Por parametro recive el state del store
  // Es el state del store porque el componente Counter esta dentro de un Provider al que se le especifica el store
  
  return { //return state -> cada reducer es una prop mas
           // return {state} -> objeto state es una prop
    name: state.user.name,
    counter: state.counter
  }
}

//Cuando esta funcion no se pasa al connect, el componenete recibe directamente el metodo dispatch
const mapDispatchToProps = (dispatch) => { // Segunda funcion para el metodo connect. Por parametro recibe el metodo dispatch del store
  return {
    increment: () => dispatch(increment()),  // Los valores de estre objetos guardan funciones
    decrement: () => dispatch(decrement())  // Las funciones increment y decrement son las importadas desde counterActions
  }
}

// 1ra ejecucion: parametro1: state, pareametro2: dispatch. 2da Ejecucion: Componente que conectamos al store
export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (Counter)