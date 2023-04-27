// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children, id, onDeleteAlert} = props

  const className = () => {
    switch (id) {
      case 1:
        return 'success'
      case 2:
        return 'error'
      case 3:
        return 'warning'
      case 4:
        return 'info'

      default:
        return null
    }
  }
  const onCross = () => {
    onDeleteAlert(id)
  }
  return (
    <li className={className()}>
      {children}
      <button type="button" onClick={onCross}>
        <GrFormClose className="cross-icon" />
      </button>
    </li>
  )
}

export default Notification
