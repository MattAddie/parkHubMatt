import React from 'react'


import { LineStyle, Timeline } from "@mui/icons-material";
import { Link, useLocation } from 'react-router-dom';

export default function Dashboard() {
  const pathname = useLocation().pathname;

  return (
    <div className="sidebarMenu">
    <h3 className="sidebarTitle">Dashboard</h3>
    <ul className="sidebarList">

    <Link to='/home/dashboard' className='link'>
      <li className={`sidebarListItem ${pathname === '/home/dashboard' ? 'active' : ''}`}>
        <LineStyle className="sidebarIcon"/>
        Home
      </li>
    </Link>

    <Link to='/home/analytics' className='link'>
      <li className={`sidebarListItem ${pathname === '/home/analytics' ? 'active' : ''}`}>
        <Timeline className="sidebarIcon"/>
        Analytics
      </li>
    </Link>

    
    </ul>
  </div>
  )
}
