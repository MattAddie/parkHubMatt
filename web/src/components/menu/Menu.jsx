import React from 'react';
import { PermIdentity, AttachMoney, BarChart } from "@mui/icons-material";
import { Link, useLocation } from 'react-router-dom'; // Import Link from react-router-dom

export default function Menu() {
  const pathname = useLocation().pathname;

  return (
    <div className="sidebarMenu">
      <h3 className="sidebarTitle">Menu</h3>
      <ul className="sidebarList">
        <Link to="/home/users" className="link">
          <li className={`sidebarListItem ${pathname === '/home/users' ? 'active' : ''}`}>
            <PermIdentity className="sidebarIcon"/>
            Parking Transactions
          </li>
        </Link>
      </ul>
    </div>
  );
}
