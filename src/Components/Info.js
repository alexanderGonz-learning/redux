import React from 'react'
import { connect }from 'react-redux'
import { updateName } from '../redux/actions/userActions'

const Info = ({ user, counter, updateName }) => {
  const inputRef = React.createRef()
  const handleChange = (e) => {
    const name = e.target.value
    updateName(name)  
  }

  return (
    <div>
      <h1>
        { user.name } - { user.country }
      </h1>
      <button onClick={() => updateName(inputRef.current.value)}>
        Actualizar name
      </button>
      <input type='text' ref={inputRef}  />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //Los valores de este objeto guardan funciones
    updateName: (name) => dispatch(updateName(name)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)