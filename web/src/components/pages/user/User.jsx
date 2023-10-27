import React from "react";
import "./user.css";
import profile from "../../../assets/images/profile.jpg";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish  } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle"> Edit User</h1>

        <Link to='/newUser/'>
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={profile} alt="" className="userShowImg"></img>
            <div className="userShowTopTitle">
              <span className="userShowUsername">
                Allen Walter F. De Guzman
              </span>
              <span className="userShowUsertitle "> Web Developer</span>
            </div>
          </div>

          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">AllenDG</span>
            </div>

            <div className="userShowInfo">
            <CalendarToday className="userShowIcon" />
            <span className="userShowInfoTitle">09/05/2002</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">+63 948 742 7663</span>
            </div>

            <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle">Allenwalterfiestada@gmail.com</span>
            </div>

            <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowInfoTitle">Mangaldan,Pangasinan | Philippines</span>
            </div>

            
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">

              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="AllenDG" className="userUpdateInput"></input>
              </div>

              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="Allen Walter " className="userUpdateInput"></input>
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="Allenwalterfiestada@gmail.com" className="userUpdateInput"></input>
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder="+63 948 742 7663" className="userUpdateInput"></input>
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="Mangaldan,Pangasinan | Philippines" className="userUpdateInput"></input>
              </div>

              
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src={profile} alt="profile Photo"/>

                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                <input type="file" id="file" style={{display:"none"}}/>
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
