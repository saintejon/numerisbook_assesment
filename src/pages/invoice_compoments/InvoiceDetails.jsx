import React, { useState } from "react";
import { invoiceData } from "../../data/dataStore";
import MainButton from "../../components/inputs/MainButton";
import InvoiceTitleBlock from "./invoicedetails/InvoiceTitleBlock";
import PaymentType from "./invoicedetails/PaymentType";
import Reminders from "./invoicedetails/Reminders";

import Activities from "./invoicedetails/Activities";
import Details from "./invoicedetails/Details";

const InvoiceDetails = ({ invoiceId }) => {
      const invoice = invoiceData.find(
            (inv) => inv.invoiceNumber === invoiceId
      );

      //   IF THERE'S NO ITEM FOUND PROBABLY FROM FAULTY DATA OR FAILED API CALL, RENDER NOT FOUND
      if (!invoice)
            return (
                  <div className="flex justify-around items-center">
                        <div>No data found</div>
                  </div>
            );

      return (
            <div>
                  {/* TITLE BLOCK HOLDING THE INVOICE INFO AND QUICK ACTIONS============================================= */}

                  <InvoiceTitleBlock invoice={invoice} />

                  <div className="lg:max-h-[80vh] overflow-y-scroll">
                        {/* SCROLLABLE REMINDER COMPONENT FOR============================================= */}
                        {/* SCROLLABLE REMINDER COMPONENT FOR============================================= */}
                        {/* SCROLLABLE REMINDER COMPONENT FOR============================================= */}
                        <Reminders invoice={invoice} />
                        <div className="lg:grid  grid-cols-5 gap-x-8 ">
                              {/* INVOICE DETAILS COMPONENT============================================= */}
                              {/* INVOICE DETAILS COMPONENT============================================= */}
                              <div className="col-span-3 max-w-[700px]">
                                    <Details invoice={invoice} />
                              </div>

                              {/* INVOICE ACTIVITIES ============================================= */}
                              {/* INVOICE ACTIVITIES ============================================= */}
                              {/* INVOICE ACTIVITIES ============================================= */}
                              <div className="col-span-2 max-h-full overflow-y-scroll mt-4 lg:mt-0 mb-6">
                                    <Activities
                                          activities={invoice.invoiceActivity}
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default InvoiceDetails;
