import { FETCH_PAGE } from './fetchPageTypes'

export const fetchPage = (page) => {

  return {
    type: FETCH_PAGE,
    payload: Number(page),
  }

};

