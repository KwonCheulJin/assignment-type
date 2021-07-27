import { SORT_CONTENTS } from './viewTypes'

const initialState = {
  sort: 'asc',
}


const sortContentsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SORT_CONTENTS:
      return {
        ...state,
        sort: action.payload
      }

    default:
      return state
  }
}


export default sortContentsReducer