import { useEffect, useState } from 'react'
import { getCategory, getListItem, getAds } from '../../utils/api';
import { connect } from 'react-redux';
import LodingIndicator from './LodingIndicator';
import CategoryCard from './CategoryCard';


const Category = ({ sort }) => {

  const [lists, setLists] = useState([]);
  const [sortType, setSortType] = useState('asc');
  const [adsItem, setAdsItem] = useState([]);

  useEffect(() => {
    setSortType(sort)
  }, [])

  useEffect(async () => {

    const category_id = await getCategory()

    const listItems = await getListItem(sortType, category_id)
    const adsResult = await getAds()
    const newListItems = listItems.map(item => {
      console.log('third');
      if (item.category_id === 1) {
        return {
          ...item,
          category_name: 'apple'
        }
      } else if (item.category_id === 2) {
        return {
          ...item,
          category_name: "banana"
        }
      } else {
        return {
          ...item,
          category_name: "coconut"
        }
      }
    })

    setAdsItem(adsResult);
    setLists(newListItems);

  }, [sortType])


  return (
    <>
      <CategoryCard lists={lists} adsItem={adsItem} />
      {/* <LodingIndicator loading={listLimit !== 0 && loading} setListLimit={setListLimit} setAdsLimit={setAdsLimit} /> */}
    </>
  )
}

const mapStateToProps = ({ sortContents }) => {
  return {
    sort: sortContents.sort,
  }
}

export default connect(mapStateToProps)(Category)
