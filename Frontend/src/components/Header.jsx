import React from "react";
import PageIcon from "./navElements/PageIcon";
import SearchBlock from "./navElements/SearchBlock";
import AccountBlock from "./navElements/AccountBlock";
import CartBlock from "./navElements/CartBlock";
import NavigationTabs from "./navElements/NavigationTabs";
import PathDisplay from "./navElements/PathDisplay";
import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <header className="w-full">
      {/* upper */}
      <div className="flex flex-row items-center justify-center p-3.5 gap-x-8 ">
        {/* icon */}
        <PageIcon />

        {/*serach */}
        <SearchBlock />

        {/* account and cart */}
        <div className="flex flex-row gap-x-4 items-center">
          <AccountBlock />
          <CartBlock />
        </div>
      </div>
      {/*navigation links and drop downs*/}
      <section className="border-t border-b border-gray-200 shadow-2xs">
        <Wrapper>
          <NavigationTabs />
        </Wrapper>
      </section>
      {/*displaying selected route*/}

      <Wrapper properties={"py-4"}>
        <PathDisplay />
      </Wrapper>
    </header>
  );
};

export default Header;
