import { SORT_CONTENTS } from './viewTypes'


export const sortContents = (sort) => {

  return {
    type: SORT_CONTENTS,
    payload: sort,
  }

}