import moment from 'moment'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchPage } from '../../redux'


const CategoryCard = ({ lists, adsItem, fetchPage }) => {
  const history = useHistory();

  if (lists === undefined) {
    return null
  }

  const makeCard = lists.map((card, index) => (
    <div className="contents-list" key={`${card.id}-${index + 1}`} id={card.id}>
      <div className="category">
        <div className="category-name">{card.category_name}</div>
        <div className="category-id">{card.category_id}</div>
      </div>
      <hr />
      <div className="user">
        <div className="user-id">{card.user_id}</div>
        <div className="created-date">created_at({moment(card.created_at).format('YYYY-MM-DD')})</div>
      </div>
      <div className="item-title">{card.title}</div>
      <div className="item-contents">{card.contents}</div>
    </div>
  ))

  const makeAdsCard = adsItem.map((card, index) => (
    <div className="contents-ads" key={`${card.id}-${index + 1}`}>
      <div className="sponsored">sponsored</div>
      <div className="ads-container">
        <div className="image-container">
          <div className="ads-image">
            <img src={`https://cdn.comento.kr/assignment/${card.img}`} alt={`${adsItem.img}`} className="image" />
          </div>
        </div>
        <div className="ads-main">
          <p className="ads-title">{card.title}</p>
          <p className="ads-contents">{card.contents}</p>
        </div>
      </div>
    </div>
  ))

  const selectCard = (event) => {
    const card = event.target.parentNode.id
    fetchPage(parseInt(card))
    history.push(`/view/:${parseInt(card)}`);
  }

  return (
    <>
      <div className='contenst-container' onClick={selectCard}>
        {makeCard}
        {makeAdsCard}
      </div>
    </>
  )
}


const mapDispatchToProps = {
  fetchPage: (page) => fetchPage(page)
}

export default connect(null, mapDispatchToProps)(CategoryCard)
