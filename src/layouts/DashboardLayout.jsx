import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import SideBar from "../components/layouts/SideBar";
import { Outlet } from "react-router-dom";
import MobileMenu from "../components/layouts/MobileMenu";
import Hamburger from "../components/icons/Hamburger";

const DashboardLayout = () => {
      const [mobileMenuHidden, setMobileMenuHidden] = useState(false);

      const toggleMenu = () => {
            setMobileMenuHidden(!mobileMenuHidden);
      };

      return (
            <div className="bg-white min-h-screen flex relative">
                  {/* AUTOMATICALLY SCROLL TO TOP OF PAGE */}
                  <ScrollToTop />

                  {/* DESKTOP & TABLET MENU================================================================= */}
                  <div className="lg:block hidden">
                        <SideBar />
                  </div>
                  <div
                        className="mr-3 cursor-pointer block lg:hidden fixed top-7 ml-1 z-50 mt-[2px]"
                        onClick={toggleMenu}
                  >
                        <Hamburger color="#3b42c4" />
                  </div>
                  <div
                        className={`${
                              mobileMenuHidden
                                    ? "translate-x-0"
                                    : "-translate-x-full"
                        } block lg:hidden fixed top-0 left-0 transition-all duration-300 ease-in-out z-50`}
                  >
                        <MobileMenu toggleMenu={toggleMenu} />
                  </div>
                  {/* OUTLET================================================================= */}
                  <div className=" w-full  h-screen bg-[#F5F6FA] ">
                        <Outlet />
                  </div>
            </div>
      );
};

export default DashboardLayout;
