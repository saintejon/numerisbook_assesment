import React from "react";
import PageTitle from "../components/layouts/PageTitle";
import ActionBlock from "./invoice_compoments/ActionBlock";
import { account_overview } from "../data/overview";
import Summary from "./invoice_compoments/Summary";
import TextDivider from "../components/layouts/TextDivider";
import InvoiceActions from "./invoice_compoments/InvoiceActions";

const Invoice = () => {
      return (
            <div className="overflow-y-scroll overscroll-y-auto mx-4 md:mx-6 my-6">
                  <PageTitle title={"Invoice"} />
                  <ActionBlock />
                  <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
                        {account_overview.length > 0 &&
                              account_overview.map((summary, index) => (
                                    <Summary key={index} summary={summary} />
                              ))}
                  </div>
                  <TextDivider color={"#fff"} text={"Invoice Actions"} />
                  <InvoiceActions />
            </div>
      );
};

export default Invoice;
