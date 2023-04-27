// Write your code here
import {Component} from 'react'
import {RiErrorWarningFill} from 'react-icons/ri'

import {AiFillCheckCircle} from 'react-icons/ai'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

const initialAlertList = [
  {
    id: 1,
    title: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    id: 2,
    title: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    id: 3,
    title: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 4,
    title: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

class AlertNotifications extends Component {
  state = {alertList: initialAlertList}

  onDeleteAlert = id => {
    const {alertList} = this.state

    const updatedList = alertList.filter(eachAlert => eachAlert.id !== id)
    this.setState({alertList: updatedList})
  }

  render() {
    const {alertList} = this.state
    return (
      <div className="alert-notifications-container">
        <h1>Alert Notifications</h1>
        <ul className="notifications-list-container">
          {alertList.map(eachAlert => {
            const {id} = eachAlert
            const alertIcon = () => {
              switch (id) {
                case 1:
                  return <AiFillCheckCircle className="icon" />
                case 2:
                  return <RiErrorWarningFill className="icon" />
                case 3:
                  return <MdWarning className="icon" />
                case 4:
                  return <MdInfo className="icon" />

                default:
                  return null
              }
            }
            return (
              <Notification
                key={id}
                id={eachAlert.id}
                onDeleteAlert={this.onDeleteAlert}
              >
                <>{alertIcon()}</>
                <div>
                  <h1>{eachAlert.title}</h1>
                  <p>{eachAlert.description}</p>
                </div>
              </Notification>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default AlertNotifications
