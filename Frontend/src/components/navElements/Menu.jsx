import React from "react";
import { ImCross } from "react-icons/im";
import NavigationTabs from "./NavigationTabs";
import ButtonIconStyle from "./ButtonIconStyle";

const Menu = ({ setMenuState, menuState }) => {
  return (
    <div
      className={`space-y-7 absolute z-50 right-0 top-0 w-72 min-h-screen bg-white p-5 transition-transform duration-300 ease-in-out ${
        menuState ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="border-b pb-3.5 border-b-athens-gray flex justify-between items-center">
        <h5 className="text-lg font-bold text-blue-zodiac">Menu</h5>
        <ButtonIconStyle func={() => setMenuState(false)}>
          <ImCross className="text-lg text-scarpa-flow active:text-tall-poppy font-black" />
        </ButtonIconStyle>
      </div>
      <NavigationTabs parentStyle={"flex flex-col"} />
    </div>
  );
};

export default Menu;
