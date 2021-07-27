import { OPEN_MODAL, CLOSE_MODAL, SAVE_MODAL } from './modalTypes'

export const openModal = () => {

  return {
    type: OPEN_MODAL,
    payload: true
  }

};

export const closeModal = () => {

  return {
    type: CLOSE_MODAL,
    payload: false
  }

};
