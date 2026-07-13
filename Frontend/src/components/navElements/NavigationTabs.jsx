import React from "react";
import { NavLink } from "react-router-dom";
import TabsBlock from "./TabsBlock.jsx";
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames.js";

const NavigationTabs = ({ parentStyle }) => {
  return (
    <nav className={`${parentStyle}`}>
      <TabsBlock text={"Home"} path={"/"} />
      <TabsBlock text={"shop products"} path={"/shop"} />
      <TabsBlock text={"farm systems"} path={"/farm-systems"} />
      <TabsBlock text={"bulk feed"} path={"/bulk-feed"} />
      <TabsBlock text={"resources"} path={"/resources"} />
      <TabsBlock text={"about us"} path={"/about"} />
      <TabsBlock text={"contact"} path={"/contact"} />
    </nav>
  );
};

export default NavigationTabs;
