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

      if (!invoice)
            return (
                  <div className="flex justify-around items-center">
                        <div>No data found</div>
                  </div>
            );

      return (
            <div>
                  <InvoiceTitleBlock invoice={invoice} />

                  <div className="lg:max-h-[80vh] overflow-y-scroll">
                        <Reminders invoice={invoice} />
                        <div className="lg:grid  grid-cols-5 gap-x-8 ">
                              <div className="col-span-3 max-w-[700px]">
                                    <Details invoice={invoice} />
                              </div>
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
