import React from "react";

const PaymentType = ({ invoice }) => {
      return (
            <div className="rounded-full bg-primary-50 border border-slate-300 w-fit px-4 text-[10px] font-bold uppercase py-1 text-primary mt-2 mb-2">
                  {invoice.paymentType} payment
            </div>
      );
};

export default PaymentType;
