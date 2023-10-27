import { useState, useEffect} from 'react'
import './featuredInfo.css'
import {Person,BusinessCenter,DriveEta} from '@mui/icons-material';
import axios from 'axios';


export default function FeaturedInfo() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => { 
    axios
      .get('http://localhost:5000/reserve/getAll')
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className='featured'>
      <div className='featuredItem' style={{backgroundColor:'#27374D'}}>
        <span className='featuredTitle'>Available Parking Slot</span>
        <div className='featuredContainer'>
          <span className='featuredUser'>6
          <div className='icons'><BusinessCenter/></div>
          </span>
       
        </div>
       
      </div>

      <div className='featuredItem' style={{backgroundColor:'#8A8F94'}} >
        <span className='featuredTitle'>Finished Parking Transactions</span>
        <div className='featuredContainer'>
          <span className='featuredUser'>{transactions.filter(transaction =>  transaction.status === "done").length}
          <div className='icons'><DriveEta/></div>
          </span>
        </div>
     
      </div>
    </div>
  )
}
