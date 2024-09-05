import React from "react";
import Card from "../../../components/layouts/Card";
import CustomerDetails from "./CustomerDetails";
import TextDivider from "../../../components/layouts/TextDivider";
import InvoiceItems from "./InvoiceItems";
import Totals from "./Totals";
import PaymentInfo from "./PaymentInfo";
import Note from "./Note";

const Details = ({ invoice }) => {
      return (
            <Card>
                  <CustomerDetails invoice={invoice} />
                  <TextDivider text={"Items"} color={"#E3E6EF"} />
                  <InvoiceItems items={invoice.items} />
                  <Totals invoice={invoice} />
                  <PaymentInfo invoice={invoice} />
                  <Note invoice={invoice} />
            </Card>
      );
};

export default Details;
