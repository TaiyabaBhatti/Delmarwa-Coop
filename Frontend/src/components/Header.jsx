import React, { useEffect, useState } from "react";
import PageIcon from "./navElements/PageIcon";
import SearchBlock from "./navElements/SearchBlock";
import AccountBlock from "./navElements/AccountBlock";
import CartBlock from "./navElements/CartBlock";
import NavigationTabs from "./navElements/NavigationTabs";
import PathDisplay from "./navElements/PathDisplay";
import Wrapper from "./Wrapper";
import { TiThMenu } from "react-icons/ti";
import Menu from "./navElements/Menu";
import Backdrop from "./Backdrop";
import ButtonIconStyle from "./navElements/ButtonIconStyle";

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    console.log("hello");
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuState]);

  return (
    <header
      className={`w-full relative z-40 ${menuState ? "" : "overflow-hidden"}`}
    >
      {/* upper */}
      <div className="grid w-full items-center p-0 sm:px-14 sm:py-3.5  justify-center max-[1129px]:justify-between  gap-x-8 gap-y-4 min-[1130px]:grid-cols-[auto_auto_auto] max-[1129px]:grid-cols-[auto_auto]">
        {/* icon */}
        <PageIcon />

        {/*search */}
        <SearchBlock />

        {/* account and cart menu icon */}
        <div className=" flex p-3.5 sm:p-0 flex-row gap-x-2 md:gap-x-4 items-center justify-self-end">
          <AccountBlock />
          <CartBlock />
          <div className="block md:hidden">
            <ButtonIconStyle func={() => setMenuState(true)}>
              {" "}
              <TiThMenu className="text-blue-zodiac text-lg font-black" />
            </ButtonIconStyle>
          </div>
        </div>
      </div>

      {/*navigation links and drop downs*/}
      <section className="border-t hidden  md:block border-gray-200 border-b-2 border-b-athens-gray shadow-2xs">
        <Wrapper>
          <NavigationTabs
            parentStyle={
              "grid  md:grid-cols-[repeat(4,auto)] lg:grid-cols-[repeat(7,auto)] items-center gap-x-3 "
            }
          />
        </Wrapper>
      </section>

      {/* path route display */}
      <PathDisplay />

      <Menu setMenuState={setMenuState} menuState={menuState} />
      {menuState && <Backdrop />}
    </header>
  );
};

export default Header;
