import React from "react";
import { invoices } from "../../data/dataStore";
import {
      getBadgeColor,
      groupInvoicesByDate,
} from "../../utilities/invoiceformatter";
import { formatDate, formatToCurrency } from "../../utilities/formatters";
import Card from "../../components/layouts/Card";
import MainButton from "../../components/inputs/MainButton";

const RecentInvoices = () => {
      const groupedInvoices = groupInvoicesByDate(invoices);
      return (
            <div className="mt-4">
                  <Card>
                        <div className="flex justify-between items-center mb-2 gap-4">
                              <div>
                                    <h2 className="text-lg font-bold">
                                          Recent Invoices
                                    </h2>
                              </div>
                              <MainButton
                                    text="VIEW ALL INVOICES"
                                    borderColor={"slate-200"}
                                    bgcolor="bg-white"
                                    textColor={"text-primary"}
                              />
                        </div>

                        {Object.keys(groupedInvoices).map((dateKey, index) => (
                              <div key={index} className="mb-6">
                                    <h3 className="text-gray-600 text-sm font-semibold mb-2">
                                          {dateKey}
                                    </h3>
                                    {groupedInvoices[dateKey].map(
                                          (invoice, idx) => (
                                                <div
                                                      key={idx}
                                                      className="flex justify-between items-center mb-4 p-2 ml-4 cursor-pointer hover:bg-slate-50 rounded-xl transition-all duration-200 ease-in-out"
                                                >
                                                      <div>
                                                            <p className="font-medium">
                                                                  Invoice -{" "}
                                                            </p>
                                                            <p className="text-gray-500 text-sm">
                                                                  {invoice.id ||
                                                                        ""}
                                                            </p>
                                                      </div>
                                                      <div>
                                                            <p className="font-medium text-xs text-slate-400">
                                                                  DUE DATE
                                                            </p>
                                                            <p className="text-gray-500 text-sm">
                                                                  {formatDate(
                                                                        invoice?.dueDate
                                                                  )}
                                                            </p>
                                                      </div>
                                                      <div className="text-right">
                                                            <p className="text-xl font-semibold">
                                                                  {formatToCurrency(
                                                                        invoice.amount,
                                                                        "USD"
                                                                  ).main ||
                                                                        formatToCurrency(
                                                                              0,
                                                                              "USD"
                                                                        ).cents}
                                                                  {formatToCurrency(
                                                                        invoice.amount,
                                                                        "USD"
                                                                  ).cents ||
                                                                        formatToCurrency(
                                                                              0,
                                                                              "USD"
                                                                        ).cents}
                                                            </p>
                                                            <div className="flex justify-end">
                                                                  <p
                                                                        className={`text-[10px] rounded-full py-1 px-4 mt-2 w-fit text-right ${getBadgeColor(
                                                                              invoice?.status
                                                                        )}`}
                                                                  >
                                                                        {
                                                                              invoice?.status
                                                                        }
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </div>
                                          )
                                    )}
                              </div>
                        ))}
                  </Card>
            </div>
      );
};

export default RecentInvoices;
