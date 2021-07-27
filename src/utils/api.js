import axios from 'axios'

export const getCategory = async () => {
  console.log("first");
  const res = await axios.get('https://problem.comento.kr/api/category')
    .then(res => res.data.category.map(item => item.id))
  return res
}

export const getListItem = async (sortType, category_id, limit = 8) => {
  console.log('second');
  const res = await axios({
    method: "GET",
    url: 'https://problem.comento.kr/api/list',
    params: { page: 1, ord: sortType, category: category_id, limit: limit }
  })
    .then(res => res.data.data)
  return res

}

export const getAds = async (limit = 2) => {
  const res = await axios({
    method: "GET",
    url: 'https://problem.comento.kr/api/ads',
    params: { page: 1, limit: limit }
  })
    .then(res => res.data.data)
  return res
}


export const getDtailView = async (page = 1) => {
  const res = await axios({
    method: "GET",
    url: 'https://problem.comento.kr/api/view',
    params: { id: page }
  })
    .then(res => res.data.data)
  return res
}


export const getFilterCategory = async () => {
  const res = await axios.get('https://problem.comento.kr/api/category')
    .then(res => res.data.category)
  return res
}