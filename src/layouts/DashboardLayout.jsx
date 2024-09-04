import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import SideBar from "../components/layouts/SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
      const [mobileMenuHidden, setMobileMenuHidden] = useState(false);

      const toggleMenu = () => {
            setMobileMenuHidden(!mobileMenuHidden);
      };

      return (
            <div className="bg-white min-h-screen flex relative">
                  {/* AUTOMATICALLY SCROLL TO TOP OF PAGE */}
                  <ScrollToTop />

                  <div
                        className={`${
                              mobileMenuHidden
                                    ? "translate-x-0"
                                    : "-translate-x-[105%]"
                        } block lg:hidden fixed transition-all duration-500 ease-in-out z-50`}
                  >
                        {/* <CreatorSidebarMobile toggleMenu={toggleMenu} /> */}
                  </div>
                  {/* DESKTOP & TABLET MENU================================================================= */}
                  <div className="lg:block hidden">
                        <SideBar />
                  </div>
                  {/* OUTLET================================================================= */}
                  <div className=" w-full  min-h-screen bg-[#F5F6FA]">
                        <Outlet />
                  </div>
            </div>
      );
};

export default DashboardLayout;
