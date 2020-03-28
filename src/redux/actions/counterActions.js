
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