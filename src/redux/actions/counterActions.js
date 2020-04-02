
// Constantes de acciones
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'


// Creadores de acciones
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

// Es una funcion que devuelve otra funcion para que se pueda usar con parametros al momento de invocarla
// La funcion devuelta es la que recibe el dispatch por parametro
export const incrementAsync = (delay) => (dispatch) => { 
  setTimeout(() => {
    dispatch({
      type: INCREMENT
    })
  }, delay)
}