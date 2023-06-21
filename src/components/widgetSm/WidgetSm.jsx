import React from 'react'
import './widgetSm.css'
import profile from '../../assets/profile.jpg'
import { Visibility } from '@mui/icons-material'

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <h2 className="">New Joined Members</h2>
      <ul className="WidgetSm-list">
        <li className="widgetSm-listItem">
          <img src={profile} alt="" className='widgetSm-img'/>
          <div className="widgetSm-user">
            <span className="widgetSm-username">Anna Keller</span>
            <span className="widgetSm-userTitle">Software Engineer</span>
          </div>
          <button className="widgetSm-button"><Visibility/>Display </button>
        </li>
        <li className="widgetSm-listItem">
          <img src={profile} alt="" className='widgetSm-img'/>
          <div className="widgetSm-user">
            <span className="widgetSm-username">Anna Keller</span>
            <span className="widgetSm-userTitle">Software Engineer</span>
          </div>
          <button className="widgetSm-button"><Visibility/>Display </button>
        </li>
        <li className="widgetSm-listItem">
          <img src={profile} alt="" className='widgetSm-img'/>
          <div className="widgetSm-user">
            <span className="widgetSm-username">Anna Keller</span>
            <span className="widgetSm-userTitle">Software Engineer</span>
          </div>
          <button className="widgetSm-button"><Visibility/>Display </button>
        </li>
        <li className="widgetSm-listItem">
          <img src={profile} alt="" className='widgetSm-img'/>
          <div className="widgetSm-user">
            <span className="widgetSm-username">Anna Keller</span>
            <span className="widgetSm-userTitle">Software Engineer</span>
          </div>
          <button className="widgetSm-button"><Visibility/>Display </button>
        </li>
        <li className="widgetSm-listItem">
          <img src={profile} alt="" className='widgetSm-img'/>
          <div className="widgetSm-user">
            <span className="widgetSm-username">Anna Keller</span>
            <span className="widgetSm-userTitle">Software Engineer</span>
          </div>
          <button className="widgetSm-button"><Visibility/>Display </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm