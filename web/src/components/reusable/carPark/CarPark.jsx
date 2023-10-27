import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts'

import {mileData} from '../../../DummyData'

export default function CarPark() {
  return (
    <ResponsiveContainer width="100%" >
    <BarChart data={mileData}>
      <XAxis dataKey="name" stroke="#202d41"/>
     <Bar
     dataKey="parkingStats"
     stroke="202d41"
     fill="#202d41"
     barSize={30}
     />
      <Tooltip wrappedClassName="tooltip_style" cursor={false} />
    </BarChart>
  </ResponsiveContainer>

  )
}
