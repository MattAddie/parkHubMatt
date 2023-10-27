import React from "react";
import "./topbar.css";


// Import your images here
import logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      signOut(auth);
      navigate("/")
    }
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <img src={logo} alt="Logo" />
          </span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
          
            <button  onClick={handleLogout} className="logoutButton">Logout</button>
          </div>

        </div>
      </div>
    </div>
  );
}
