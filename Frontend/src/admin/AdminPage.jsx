import React, { useState } from "react";
import SideBar from "./sidebar/SideBar";
import Dashboard from "./dashboard/Dashboard";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";

const AdminPage = () => {
  // keeping track of sections

  return (
    <section className="relative z-40">
      <SideBar
      // selectedSection={selectedSection}
      // setSelectedSection={setSelectedSection}
      />
      <main className="ml-64">
        <MainHeader title={"Dashboard"} />
        <section className="py-10 px-8 min-h-screen">
          <Outlet />
        </section>
      </main>
    </section>
  );
};

export default AdminPage;
