import React from "react";
import Card from "../../../components/layouts/Card";

const PaymentInfo = ({ invoice }) => {
      const paymentInformation = {
            accountName: "Fabulous Enterprise",
            accountNumber: "10203040",
            achRoutingNo: "March 30th, 2023",
            dueDate: "May 19th, 2023",
            bankName: "USD ($)",
      };
      return (
            <Card>
                  <div className="flex flex-wrap gap-6 uppercase text-[10px]">
                        <div className="">
                              <p className="">ACCOUNT NAME</p>
                              <p className="text-black font-bold">
                                    {invoice?.paymentInformation?.accountName}
                              </p>
                        </div>
                        <div className="">
                              <p className="">ACCOUNT number</p>
                              <p className="text-black font-bold">
                                    {invoice?.paymentInformation?.accountNumber}
                              </p>
                        </div>
                        <div className="">
                              <p className="">ACh routing no</p>
                              <p className="text-black font-bold">
                                    {invoice?.paymentInformation?.achRoutingNo}
                              </p>
                        </div>
                        <div className="">
                              <p className="">bank name</p>
                              <p className="text-black font-bold">
                                    {invoice?.paymentInformation?.bankName}
                              </p>
                        </div>
                        <div className="">
                              <p className="">bank address</p>
                              <p className="text-black font-bold">
                                    {invoice?.paymentInformation?.bankAddress}
                              </p>
                        </div>
                  </div>
            </Card>
      );
};

export default PaymentInfo;
