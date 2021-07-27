import React from 'react'
import { openModal, sortContents } from '../../redux'
import { connect } from 'react-redux'


const Top = ({ openModal, sortContents }) => {
  return (
    <div className="contents-top">
      <div className="sort">
        <div className="sort-item">
          <input type="radio" name="sort" id="asc" className="item-radio" defaultChecked />
          <label htmlFor="asc" className="item-label" onClick={(e) => sortContents(e.target.htmlFor)}>오름차순</label>
        </div>
        <div className="sort-item">
          <input type="radio" name="sort" id="desc" className="item-radio" />
          <label htmlFor="desc" className="item-label" onClick={(e) => sortContents(e.target.htmlFor)}>내림차순</label>
        </div>
      </div>
      <button
        className="btn btn__filter"
        onClick={() => openModal()}>필터</button>
    </div >
  )
}


const mapDispatchToProps = {
  openModal,
  sortContents: (sort) => sortContents(sort),
}

export default connect(null, mapDispatchToProps)(Top)
