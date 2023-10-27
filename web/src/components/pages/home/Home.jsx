import React from 'react'
import './home.css'
import FeaturedInfo from '../../contents/featuredInfo/FeaturedInfo'
import Chart from '../../reusable/chart/Chart'
import {userData} from '../../../DummyData'
import WidgetSmall from '../../reusable/widgetSm/WidgetSmall'
import WidgetLarge from '../../reusable/widgetLg/WidgetLarge'


export default function Home() {
  return (
    <div className='home'>
      
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className='homeWidgets'>
        <WidgetLarge/>
      </div>
      
    </div>
    
  )
}
