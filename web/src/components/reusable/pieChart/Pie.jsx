import React from "react";
import { data01,data02 } from "../../../DummyData";
import { PieChart,Pie } from 'recharts'
import './pie.css'

export default function pie() {
  return (
    <div className="pieChart">
    <PieChart width={730} height={250}>
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      />
      <Pie
        data={data02}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#82ca9d"
        label
      />
    </PieChart>
    </div>
  );
}
