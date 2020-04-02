import React from 'react'
import { connect } from 'react-redux'
import { incrementAsync } from '../redux/actions/counterActions'

const Controller = (props) => {
  console.log(props);
  
  const handler = () => {
    // Si el dispatch envia una funcion, el middleware thunk entiende que sera una accion asincrona
    // Y le llega el metodo dispatch por parametro al declararla (mira en counterActions)
    // La funcion esta siendo ejecutada (parentesis), pero nos devulve otra funcion, que solo ha sido retornada, no ejecutada
    props.dispatch(incrementAsync(4000)) 
  }

  return (
    <div>
      <button onClick={handler}> 
        Dispatch
      </button>
      <h1>{ props.counter }</h1>
    </div>
  )
}

const mapStateToProps = (state) => { 
  return state
}

export default connect(mapStateToProps)(Controller)