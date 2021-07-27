import { FETCH_PAGE } from './fetchPageTypes'

const initialState = {
  page: 1,
}


const fetchPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        page: action.payload
      }

    default:
      return state
  }
}


export default fetchPageReducer