import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import MembershipSide from "./MembershipSide";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AccountPage = () => {
  const [accountToggle, setAccountToggle] = useState(true);
  return (
    <section className="bg-gray-100 h-full">
      <Wrapper properties={"py-12"}>
        <section className="flex flex-row gap-x-16">
          {accountToggle ? (
            <LoginForm setAccountToggle={setAccountToggle} />
          ) : (
            <RegisterForm setAccountToggle={setAccountToggle} />
          )}
          <MembershipSide />
        </section>
      </Wrapper>
    </section>
  );
};

export default AccountPage;
