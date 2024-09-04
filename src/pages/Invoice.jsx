import React from "react";
import PageTitle from "../components/layouts/PageTitle";
import ActionBlock from "./invoice_compoments/ActionBlock";
import { account_overview } from "../data/dataStore";
import Summary from "./invoice_compoments/Summary";
import TextDivider from "../components/layouts/TextDivider";
import InvoiceActions from "./invoice_compoments/InvoiceActions";
import RecentInvoices from "./invoice_compoments/RecentInvoices";
import RecentActivities from "./invoice_compoments/RecentActivities";

const Invoice = () => {
      return (
            <div className="overflow-y-scroll overscroll-y-auto mx-4 md:mx-6 my-6 h-[97%]">
                  <PageTitle title={"Invoice"} />
                  <div className="overflow-y-scroll lg:h-[90%]">
                        <ActionBlock />
                        <div className="grid grid-cols-4 gap-4 overflow-x-scroll scrollbar-hide">
                              {account_overview.length > 0 &&
                                    account_overview.map((summary, index) => (
                                          <Summary
                                                key={index}
                                                summary={summary}
                                          />
                                    ))}
                        </div>
                        <TextDivider color={"#fff"} text={"Invoice Actions"} />
                        <InvoiceActions />
                        <div className="lg:grid grid-cols-5 gap-6">
                              <div className="col-span-3">
                                    <RecentInvoices />
                              </div>
                              <div className="col-span-2">
                                    <RecentActivities />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Invoice;
