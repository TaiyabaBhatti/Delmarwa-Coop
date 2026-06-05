import React from "react";
import { NavLink } from "react-router-dom";
import TabsBlock from "./TabsBlock.jsx";
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames.js";

const NavigationTabs = ({ parentStyle }) => {
  return (
    <nav className={`${parentStyle}`}>
      <TabsBlock text={"Home"} path={APP_ROUTES_NAME.homePage} />
      <TabsBlock text={"shop products"} path={APP_ROUTES_NAME.productsPage} />
      <TabsBlock text={"farm systems"} path={APP_ROUTES_NAME.farmSystemPage} />
      <TabsBlock text={"bulk feed"} path={APP_ROUTES_NAME.bulkFeedPage} />
      <TabsBlock text={"resources"} path={APP_ROUTES_NAME.resourcesPage} />
      <TabsBlock text={"about us"} path={APP_ROUTES_NAME.aboutPage} />
      <TabsBlock text={"contact"} path={APP_ROUTES_NAME.contactPage} />
    </nav>
  );
};

export default NavigationTabs;
