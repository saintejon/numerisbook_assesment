import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "../icons/Hamburger";

import CustomIcon from "../icons/CustomIcon";

const SideBar = () => {
      const location = useLocation();

      const windowWidth = window.innerWidth;
      // CONDITIONALLY SHOW OR HIDE SIDEBAR BASED ON SCREEN SIZE=============================================
      const [showLinks, setShowLinks] = useState(
            windowWidth > 1024 ? true : false
      );

      const sidebarWidth = showLinks ? 250 : 50;

      const toggleLinks = () => setShowLinks(!showLinks);

      // ROUTE HANDLING FOR SIDEBAR NAVIGATION=============================================
      const routes = [
            {
                  name: "Getting Started",
                  path: "/getstarted",
            },
            {
                  name: "Overview",
                  path: "/overview",
            },
            {
                  name: "Accounts",
                  path: "/accounts",
            },
            {
                  name: "Invoice",
                  path: "/invoice",
            },

            {
                  name: "Beneficiary Management",
                  path: "/beneficiarymanagement",
            },
            {
                  name: "Help Center",
                  path: "/helpcenter",
            },
            {
                  name: "Settings",
                  path: "/settings",
            },
      ];

      return (
            <div
                  className="  bg-white relative ml-0 min-h-screen overflow-y-scroll   transition-all duration-200 ease-out text-[#697598] pl-2"
                  style={{ minWidth: sidebarWidth }}
            >
                  <div className="flex items-center ml-2 gap-4 ">
                        <div
                              className="mt-6 cursor-pointer "
                              onClick={toggleLinks}
                        >
                              <Hamburger color="#3b42c4" />
                        </div>
                  </div>
                  {/* // RENDER ROUTES ON THE SIDEBAR============================================= */}
                  <div className=" min-w-fit">
                        {routes.map((route, index) => (
                              <div key={index} className="mb-4 h-9 ">
                                    <Link to={route.path}>
                                          <div
                                                className={
                                                      location.pathname ===
                                                      route.path
                                                            ? `py-3 pl-3 mr-2 pr-4 curspr-pointer rounded-full border-4 border-[#F8F8FB] hover:ml-1 transition-all ease-in-out duration-200 min-w-fit`
                                                            : "py-3 pl-3 mr-2 hover:ml-2 transition-all curspr-pointer ease-in-out duration-200"
                                                }
                                          >
                                                <div className="flex justify-between items-center">
                                                      <div className="flex  items-center">
                                                            {/* CUSTOME SITE-WIDE ICON============================================= */}
                                                            <CustomIcon
                                                                  text={
                                                                        route.name
                                                                  }
                                                            />
                                                            <div>
                                                                  {showLinks && (
                                                                        <div className="text-[14px] ml-2">
                                                                              <p>
                                                                                    {
                                                                                          route.name
                                                                                    }
                                                                              </p>
                                                                        </div>
                                                                  )}
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </Link>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default SideBar;
