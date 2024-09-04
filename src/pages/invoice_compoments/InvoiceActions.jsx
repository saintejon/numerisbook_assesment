import React from "react";
import CustomIcon from "../../components/icons/CustomIcon";
import money from "../../assets/images/money.png";

const InvoiceActions = () => {
      return (
            <div className="grid grid-cols-3 gap-6 overflow-x-scroll pb-2 scrollbar-hide">
                  <div className={`${stlye} bg-primary`}>
                        <div className="mb-2">
                              <img
                                    src={money}
                                    alt="Money icon"
                                    className="w-16 h-auto"
                              />{" "}
                        </div>
                        <div>
                              <p className="text-white font-medium text-xl">
                                    Create New Invoice
                              </p>
                              <p className="text-white text-xs mt-1">
                                    Create new invoices easily
                              </p>
                        </div>
                  </div>
                  <div className={`${stlye} bg-white`}>
                        <div className="my-2">
                              <CustomIcon text={"Settings"} size={60} />
                        </div>
                        <div>
                              <p className="font-medium text-xl">
                                    Change Invoice settings
                              </p>
                              <p className="text-slate-500 text-xs mt-1">
                                    Customise your invoices
                              </p>
                        </div>
                  </div>
                  <div className={`${stlye} bg-white`}>
                        <div className="my-2">
                              <CustomIcon
                                    text={"Beneficiary Management"}
                                    size={60}
                              />
                        </div>
                        <div>
                              <p className="font-medium text-xl">
                                    Manage Customer list
                              </p>
                              <p className="text-slate-500 text-xs mt-1">
                                    Add and remove customers
                              </p>
                        </div>
                  </div>
            </div>
      );
};

const stlye = "rounded-2xl px-8 py-8 cursor-pointer  col-span-1";

export default InvoiceActions;
