import React from "react";
import "./sidebar.css";
import Dashboard from "../dashboard/Dashboard";
import Menu from "../menu/Menu";



export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div>
          <Dashboard/>
          <Menu/>
         
          
        </div>

      </div>
    </div>
  );
}
