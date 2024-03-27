// PageWrapper.js
import React, { useState } from "react";
import "./PageWrapper.css";
import UploadFile from "../uploadfile/UploadFile";
import InnerLogo from "../../assets/logo/innerlogo.svg";
import { DashboardData } from "../../constants/Constants";
import Dashboard from "../dashboard/Dashboard";

const PageWrapper = () => {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderTabs = () => {
    if (selectedTab === "dashboard") {
      return <Dashboard />;
    } else if (selectedTab === "upload") {
      return <UploadFile />;
    } else {
      return null;
    }
  };
  return (
    <div className="flex h-screen w-screen ">
      <div className="sidebar pt-16 pl-16 pr-16">
        <img src={InnerLogo} alt="innerlogo" />
        <div className="pt-20">
        {DashboardData.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 align-middle mb-10 hover:cursor-pointer"
              onClick={() => handleTabClick(item.title.toLowerCase())} 
            >
              <img src={item.icon} alt=""/>
              <h4 className={selectedTab === item.title.toLowerCase() ? "text-customBlue" : "text-gray-400"}>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="tabs_Section">{renderTabs()}</div>
    </div>
  );
};

export default PageWrapper;
