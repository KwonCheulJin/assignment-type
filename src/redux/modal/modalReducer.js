import { OPEN_MODAL, CLOSE_MODAL } from './modalTypes'

const initialState = false

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: action.payload
      }

    case CLOSE_MODAL:
      return {
        ...state,
        open: action.payload
      }

    default:
      return state
  }
}


export default modalReducer