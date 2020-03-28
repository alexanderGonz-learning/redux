
export const UPDATE_NAME ='UPDATE_NAME'

export const updateName = (name) => ({
  type: UPDATE_NAME,
  payload: {
    // Podeos pasar el valor del name directamente, pero por convencion se crea un objeto payload
    name
  }
})