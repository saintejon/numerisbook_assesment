import React from "react";
import { formatDate, formatToCurrency } from "../../utilities/formatters";
import { getBadgeColor } from "../../utilities/invoiceformatter";

const InvoiceHistoryItem = ({ invoice }) => {
      // REUSABLE INVOICE HISTORY ITEM =============================================
      // REUSABLE INVOICE HISTORY ITEM =============================================
      // REUSABLE INVOICE HISTORY ITEM =============================================
      // REUSABLE INVOICE HISTORY ITEM =============================================
      return (
            <div className="flex gap-6 justify-between items-center mb-4 p-2 ml-4 cursor-pointer hover:bg-slate-50 rounded-xl transition-all duration-200 ease-in-out ">
                  <div className="min-w-fit">
                        <p className="font-medium">Invoice - </p>
                        <p className="text-gray-500 text-sm">
                              {invoice.id || ""}
                        </p>
                  </div>
                  <div className="min-w-fit">
                        <p className="font-medium text-xs text-slate-400">
                              DUE DATE
                        </p>
                        <p className="text-gray-500 text-sm">
                              {formatDate(invoice?.dueDate)}
                        </p>
                  </div>
                  <div className="text-right min-w-fit">
                        <p className="text-lg font-semibold">
                              {formatToCurrency(invoice.amount, "USD").main ||
                                    formatToCurrency(0, "USD").cents}
                              {formatToCurrency(invoice.amount, "USD").cents ||
                                    formatToCurrency(0, "USD").cents}
                        </p>
                        <div className="flex justify-end">
                              <p
                                    className={`text-[10px] rounded-full py-1 px-4 mt-2 w-fit text-right ${getBadgeColor(
                                          invoice?.status
                                    )}`}
                              >
                                    {invoice?.status}
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default InvoiceHistoryItem;
