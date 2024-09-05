import React from "react";
import { formatToCurrency } from "../../../utilities/formatters";

const InvoiceItems = ({ items }) => {
      return (
            <div className="overflow-x-scroll">
                  {items.length > 0 &&
                        items.map((item, index) => (
                              <div
                                    className="grid grid-cols-5 gap-6 text-sm"
                                    key={index}
                              >
                                    <div className="col-span-2 mb-6">
                                          <div>{item.title}</div>
                                          <div className="text-[10px] text-slate-500">
                                                {item.description}
                                          </div>
                                    </div>
                                    <div className="col-span-1 text-center">
                                          {item.quantity}
                                    </div>
                                    <div className="col-span-1 text-right">
                                          {
                                                formatToCurrency(
                                                      item.unitPrice,
                                                      "USD"
                                                ).main
                                          }
                                    </div>
                                    <div className="col-span-1 text-right">
                                          {
                                                formatToCurrency(
                                                      item.total,
                                                      "USD"
                                                ).main
                                          }
                                          {
                                                formatToCurrency(
                                                      item.total,
                                                      "USD"
                                                ).cents
                                          }
                                    </div>
                              </div>
                        ))}
            </div>
      );
};

export default InvoiceItems;
