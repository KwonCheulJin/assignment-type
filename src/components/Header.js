import React from 'react'
import moment from 'moment'

const Header = () => {
  return (
    <header>
      <div className="title">
        <div className="name">{`[${moment(new Date()).format('YYYY-MM-DD')}. 권철진]`}</div>
      </div>
    </header>
  )
}

export default Header
