import React, { useEffect, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { closeModal } from '../redux'
import { connect } from 'react-redux'
import { getFilterCategory } from '../utils/api'



const Modal = ({ closeModal }) => {
  const [filterCategory, setFilterCategory] = useState([]);
  const [saveFilter, setSaveFilter] = useState(true);


  useEffect(async () => {

    const fetchFilterCategory = await getFilterCategory()

    const makeFilterCategory = (items) => {
      const filterItem = items.map(item => {
        return { key: item.id, name: item.name };
      });

      setFilterCategory(filterItem)
    }

    makeFilterCategory(fetchFilterCategory)
  }, [])

  const filterName = filterCategory.map(item => (
    <div className="modal-contents" key={item.key}>
      <input className="modal-contents-check" type="checkbox" name="filterName" id={item.name} defaultChecked onClick={(e) => setSaveFilter(e.target.checked)} />
      <label htmlFor={item.name} className="modal-contents-label" >{item.name}</label>
    </div>
  ))
  console.log(saveFilter)
  return (
    <>
      <div className="background-overlay"></div>
      <div className="modal-container">
        <div className="modal">
          <CloseIcon className="modal-close-button" onClick={() => closeModal()} />
          <div className="modal-title">필터</div>

          {filterName}

          <button className="modal-save-button btn" onClick={() => closeModal()}>저장하기</button>
        </div>

      </div>
    </>
  )
}


const mapDispatchToProps = {
  closeModal
}

export default connect(null, mapDispatchToProps)(Modal)
