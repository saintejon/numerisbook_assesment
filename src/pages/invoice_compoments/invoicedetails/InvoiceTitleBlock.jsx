import React, { useState } from "react";
import MainButton from "../../../components/inputs/MainButton";

const InvoiceTitleBlock = ({ invoice }) => {
      const [showMore, setShowMore] = useState(false);
      return (
            <div className="md:flex items-center justify-between gap-16 relative">
                  <div>
                        <h2 className="text-lg font-bold">
                              Invoice - {invoice.invoiceNumber}
                        </h2>
                        <p className="text-slate-500 text-[10px]">
                              View the details and activity of this invoice
                        </p>
                  </div>
                  <div className="flex gap-2 items-center">
                        <MainButton
                              text="dowload as pdf"
                              borderColor={"slate-200"}
                              bgcolor="bg-white"
                              textColor={"text-primary"}
                        />
                        <MainButton
                              text="send invoice"
                              borderColor={"primary"}
                              bgcolor="bg-primary"
                              textColor={"text-white"}
                        />
                        <MainButton
                              text="more"
                              borderColor={"slate-200"}
                              bgcolor="bg-white"
                              textColor={"text-primary"}
                              onClick={() => setShowMore(!showMore)}
                        />
                        {showMore && (
                              <div className="uppercase text-slate-500 text-[12px] font-medium absolute right-4 top-14 z-50 bg-white rounded-2xl px-4 border border-slate-300 w-[200px] py-3 shadow-xl">
                                    <p className="cursor-pointer my-3">
                                          duplicate invoice
                                    </p>
                                    <p className="cursor-pointer my-3">
                                          Get sharable link
                                    </p>
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default InvoiceTitleBlock;
