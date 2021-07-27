import { useEffect, useState } from 'react'
import moment from 'moment'
import { getDtailView } from '../utils/api'
import LodingIndicator from './contents/LodingIndicator';

const ViewContents = ({ page }) => {

  // userContents
  const [titleData, setTitleData] = useState('');
  const [contentsData, setContentsData] = useState('');
  const [createData, setCreateData] = useState('');

  // replyItems
  const [replyCount, setReplyCount] = useState(0);
  const [replyUser, setReplyUser] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true)

    const result = await getDtailView(page)

    const makeUserContents = (items) => {
      setTitleData(items.title);
      setContentsData(items.contents);
      setCreateData(moment(items.created_at).format('YYYY-MM-DD'))
    }

    const makeReplyItems = (items) => {
      const user = items.map(item => {
        return { key: item.user.id, userName: item.user.name, contents: item.contents, created: moment(item.created_at).format('YYYY-MM-DD') };
      })
      setReplyUser(user);
      setReplyCount(items.length)
    }
    makeUserContents(result);
    makeReplyItems(result.reply);
    setLoading(false)

  }, [])

  return (
    <div className="view-container">
      <div className="view-item">
        <p className="view-item-title">{titleData}</p>
        <p className="view-item-contents">{contentsData}</p>
        <p className="view-item-create-date">create_at({createData})</p>
      </div>

      <div className="reply">
        <div className="reply-answer">
          <p className="reply-answer-text">답변</p>
          <p className="reply-answer-count">{replyCount}</p>
        </div>
        {replyUser.map((user, index) => (
          <ul key={`${user.key}-${index}`} className="reply-item">
            <li className="reply-item-user-name">{user.userName}</li>
            <hr />
            <li className="reply-item-contents">{user.contents}</li>
            <li className="reply-item-create">created_at({user.created})</li>
          </ul>
        ))}

      </div>
      {/* <LodingIndicator loading={loading} /> */}
    </div>
  )

}

export default ViewContents