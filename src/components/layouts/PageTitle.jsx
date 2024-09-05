import React, { useState } from "react";
import { ArrowDown, ArrowDown2, NotificationBing } from "iconsax-react";
import Hamburger from "../icons/Hamburger";
import { fullname } from "../../data/dataStore";
import SideBar from "./SideBar";
import MobileMenu from "./MobileMenu";

const PageTitle = ({ title }) => {
      const firstChars = fullname
            .split(" ")
            .map((word) => word.charAt(0))
            .join("");
      return (
            <div className="flex justify-between items-center border-b-slate-200 border-b pb-2 relative">
                  <div className="font-Neue text-xl  uppercase font-bold text-slate-500 flex items-center ml-6 lg:ml-0">
                        <div>
                              <p>{title}</p>
                        </div>
                  </div>
                  <div className="flex justify-between gap-4">
                        <div className="rounded-full p-4 flex items-center justify-around bg-white cursor-pointer">
                              <NotificationBing
                                    size="18"
                                    color="#697598"
                                    variant="TwoTone"
                              />
                        </div>
                        <div className="rounded-full p-2 flex items-center justify-between gap-3 bg-white cursor-pointer">
                              <div className="bg-primary text-white rounded-full p-2">
                                    <p>{firstChars}</p>
                              </div>
                              <ArrowDown2 size={12} />
                        </div>
                  </div>
            </div>
      );
};

export default PageTitle;
