import React from 'react'
import './home.css'
import FeatureInfo from '../../components/featureInfo/FeatureInfo'
import Chart from '../../components/charts/Chart'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'


const Home = () => {
  return (
    <div className="home">
        <FeatureInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        <div className="home-widget">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home