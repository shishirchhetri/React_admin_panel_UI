import React from 'react'
import './widgetLg.css'
import profile from '../../assets/profile.jpg'


const WidgerLg = () => {
const Button = ({type})=>{
  return <button className={'widgetLg-button '+type}>{type}</button>
}

  return (
    <div className='widgetLg'>
      <h2 className="widgetLg-title">
        Latest Transaction
      </h2>
      <table className="widgetLg-table">
        <tr className="widgetLg-tr">
          <th className="widgetLg-th">
Customer
          </th>
          <th className="widgetLg-th">
            Date
          </th>
          <th className="widgetLg-th">
            Amount
          </th>
          <th className="widgetLg-th">
            Status
          </th>
        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src={profile} alt="" className='widgetLg-img'/>
            <span className="widgerLg-username">Susan Carol</span>
          </td>

          <td className="widgetLg-date">
            2 jun 2021
          </td>

          <td className="widgetLg-amount">$122.00</td>

          <td className="widgetLg-status"><Button type='Approved'/></td>

        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src={profile} alt="" className='widgetLg-img'/>
            <span className="widgerLg-username">Susan Carol</span>
          </td>

          <td className="widgetLg-date">
            2 jun 2021
          </td>

          <td className="widgetLg-amount">$122.00</td>

          <td className="widgetLg-status"><Button type='Declined'/></td>

        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src={profile} alt="" className='widgetLg-img'/>
            <span className="widgerLg-username">Susan Carol</span>
          </td>

          <td className="widgetLg-date">
            2 jun 2021
          </td>

          <td className="widgetLg-amount">$122.00</td>

          <td className="widgetLg-status"><Button type='Pending'/></td>

        </tr>

        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src={profile} alt="" className='widgetLg-img'/>
            <span className="widgerLg-username">Susan Carol</span>
          </td>

          <td className="widgetLg-date">
            2 jun 2021
          </td>

          <td className="widgetLg-amount">$122.00</td>

          <td className="widgetLg-status"><Button type='Approved'/></td>

        </tr>
      </table>
    </div>
  )
}

export default WidgerLg