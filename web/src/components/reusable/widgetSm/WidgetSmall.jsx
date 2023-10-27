import React from "react";
import "./widgetSmall.css";
import { Visibility } from "@mui/icons-material";

//import image =============>
import profile from "../../../assets/images/profile.jpg";

export default function WidgetSmall() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={profile} alt="" className="widgetSmImg"></img>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Allen Walter De Guzman</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>

          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon"  />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={profile} alt="" className="widgetSmImg"></img>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Allen Walter De Guzman</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>

          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={profile} alt="" className="widgetSmImg"></img>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Allen Walter De Guzman</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>

          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={profile} alt="" className="widgetSmImg"></img>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Allen Walter De Guzman</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>

          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={profile} alt="" className="widgetSmImg"></img>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Allen Walter De Guzman</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>

          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>

    
  );
}
