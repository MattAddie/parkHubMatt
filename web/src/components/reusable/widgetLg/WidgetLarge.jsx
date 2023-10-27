import React, { useState, useEffect } from 'react';
import './widgetLarge.css';
import profile from '../../../assets/images/profile.jpg';
import axios from 'axios';

export default function WidgetLarge() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => { 
    axios
      .get('http://localhost:5000/reserve/getAll')
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error(error));
  }, []);

  const Button = ({ type }) => {
    return <button className={'widgetLgBtn ' + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Parking Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        {transactions.map((transaction, index) => (
          <tr key={index} className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={profile} alt="" className="widgetLgImg" />
              <span className="widgetLgName">{transaction.customerName}</span>
            </td>

            <td className="widgetLgDate">{transaction.date}</td>
            <td className="widgetLgAmount">${transaction.amount.toFixed(2)}</td>
            <td className="widgetLgStatus">
              <Button type={transaction.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
