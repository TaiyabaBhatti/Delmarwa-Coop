import React, { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { GrDocumentPerformance } from "react-icons/gr";
import { SiOpenmediavault } from "react-icons/si";
import { IoPeople } from "react-icons/io5";
import dashboardAsideImg from "../assets/images/dashbaord-aside-image.jpg";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import TabItem from "../TabItem";
import AccountBlock from "../../components/navElements/AccountBlock";
import PageIcon from "../../components/navElements/PageIcon";
import { MENU_ITEMS } from "../../manualData/raw_data";
import SubItemNavBlock from "./subItemNavBlock";
import { NavLink } from "react-router-dom";

const SideBar = ({}) => {
  const iconMap = {
    dashboard: <RxDashboard className="text-gray-600" />,
    listing: <HiMiniBuildingStorefront className="text-gray-600" />,
    media: <SiOpenmediavault className="text-gray-600" />,
    performance: <GrDocumentPerformance className="text-gray-600" />,
    visit: <IoPeople className="text-gray-600" />,
  };

  const [activeTab, setActiveTab] = useState(null);
  const [sidebarActive, setSidebarActive] = useState(true);

  useEffect(() => {}, [sidebarActive]);

  const handleTabClick = (id) => {
    setActiveTab((prev) => (prev === id ? null : id));
    // setSelectedSection(id);
  };

  return (
    <aside className="h-screen border-r-2 border-r-gray-200 w-3xs fixed left-0 top-0 overflow-y-auto z-50 flex flex-col justify-between scrollbar-thin scrollbar-thumb-gray-200 scroll-smooth bg-white p-5">
      <div className="">
        {/* logo */}
        <div className="mb-6">
          <PageIcon />
        </div>
        {/* side bar navigation tabs */}
        <div className="space-y-32 p-3">
          <div className="space-y-3.5">
            {MENU_ITEMS.map((item) => {
              return (
                <div key={item.id}>
                  {/* main tab */}
                  <TabItem
                    text={item.text}
                    icon={iconMap[item.icon]}
                    onClick={() => handleTabClick(item.id)}
                  />

                  {/* subtab */}
                  {activeTab === item.id && (
                    <div className="ml-2 pl-2 mt-2 space-y-2 border-l-2 border-l-gray-200">
                      {item.subItems.map((subObject, index) => (
                        <NavLink
                          to={subObject.path}
                          key={index}
                          className="text-sm text-gray-950 cursor-pointer hover:text-black bg-green-haze opacity-60 hover:opacity-70 rounded-lg px-2 py-1"
                        >
                          {subObject.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* admin account */}
      <AccountBlock />
    </aside>
  );
};

export default SideBar;
