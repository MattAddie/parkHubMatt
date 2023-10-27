import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from '../topbar/Topbar';
import { Outlet } from "react-router-dom";
import ProtectedRoutes from '../protectedRoutes/protectedRoutes';

export const MainLayout = () => {
  return (
    <ProtectedRoutes>
        <Topbar/>
        <div className="container">
            <Sidebar />
            <Outlet />
        </div>
    </ProtectedRoutes>
  )
}
