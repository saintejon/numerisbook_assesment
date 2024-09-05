import React from "react";

const CustomerDetails = ({ invoice }) => {
      return (
            <div className="bg-[#FCDDEC] rounded-2xl p-4 text-slate-500 ">
                  <div className="lg:flex justify-between gap-6 ">
                        <div>
                              <div className="text-xs">SENDER</div>
                              <div className="flex gap-4 mt-3">
                                    <div>
                                          <img
                                                src={invoice?.sender?.avatar}
                                                alt={`${invoice?.sender.name} Avatar`}
                                                className="w-10 h-10 rounded-full bg-primary-400"
                                          />
                                    </div>
                                    <div>
                                          <p className="font-medium text-black mb-1">
                                                {invoice?.sender?.name}
                                          </p>
                                          <p className="text-[12px] mb-1">
                                                {invoice?.sender?.phone}
                                          </p>
                                          <p className="text-[12px] mb-1">
                                                {invoice?.sender?.address}
                                          </p>
                                          <p className="text-[12px] mb-1">
                                                {invoice?.sender?.email}
                                          </p>
                                    </div>
                              </div>
                        </div>
                        <div>
                              <div className="text-xs mb-3 mt-6 lg:mt-0">
                                    CUSTOMER
                              </div>
                              <div>
                                    <p className="font-medium text-black mb-1">
                                          {invoice?.customer?.name}
                                    </p>
                                    <p className="text-[12px] mb-1">
                                          {invoice?.customer?.phone}
                                    </p>
                                    <p className="text-[12px] mb-1">
                                          {invoice?.customer?.address}
                                    </p>
                                    <p className="text-[12px] mb-1">
                                          {invoice?.customer?.email}
                                    </p>
                              </div>
                        </div>
                  </div>
                  <div>
                        <div className="text-xs mt-4 mb-2 font-medium">
                              INVOICE DETAILS
                        </div>
                        <div className="md:grid grid-cols-4 gap-2 text-[12px]">
                              <div className="col-span-1">
                                    <p className="text-[10px] mb-1">
                                          INVOICE NO
                                    </p>
                                    <p className="text-black font-medium">
                                          {invoice.invoiceNumber}
                                    </p>
                              </div>
                              <div className="col-span-1">
                                    <p className="text-[10px] mb-1">
                                          ISSUE DATE
                                    </p>
                                    <p className="text-black font-medium">
                                          {invoice?.invoiceDetails?.invoiceDate}
                                    </p>
                              </div>
                              <div className="col-span-1">
                                    <p className="text-[10px] mb-1">DUE DATE</p>
                                    <p className="text-black font-medium">
                                          {invoice?.invoiceDetails?.dueDate}
                                    </p>
                              </div>
                              <div className="col-span-1">
                                    <p className="text-[10px] mb-1">
                                          BILLING CURRENCY
                                    </p>
                                    <p className="text-black font-medium">
                                          {
                                                invoice?.invoiceDetails
                                                      ?.billingCurrency
                                          }
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CustomerDetails;
