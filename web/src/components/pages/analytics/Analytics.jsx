import React from 'react'
import './analytics.css'

import CarPark from '../../reusable/carPark/CarPark';
import CarStatsChart from '../../reusable/carStats/CarStatsChart';
import UserPie from '../../reusable/pieChart/Pie';
import WidgetLarge from '../../reusable/widgetLg/WidgetLarge';

export default function Analytics() {
  return (
    <div className='analytics'>
     <div className="statics">
        <div className="stats">
          <h3 className="stats_title">Parking Weekly Statistic</h3>
          <CarPark/>
        </div>

        <div className="stats">
          <h3 className="stats_title">Parking Statistics</h3>
          <CarStatsChart/>
        </div>

        <div className='stats'>
        <WidgetLarge/>
        </div>
      </div>
      
    </div>
  )
}
