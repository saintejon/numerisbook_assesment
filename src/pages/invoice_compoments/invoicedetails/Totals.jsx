import React from "react";
import { formatToCurrency } from "../../../utilities/formatters";

const Totals = ({ invoice }) => {
      return (
            <div className="mt-3 mb-6">
                  {/* SUBTOTALS ========================================================================================== */}
                  {/* SUBTOTALS ========================================================================================== */}
                  {/* SUBTOTALS ========================================================================================== */}
                  {/* SUBTOTALS ========================================================================================== */}
                  {/* SUBTOTALS ========================================================================================== */}
                  <div className=" grid grid-cols-2 lg:grid-cols-3 text-sm my-2">
                        <div className="col-span-1 hidden lg:block"></div>
                        <div className="col-span-1">Subtotal</div>
                        <div className="col-span-1 text-right gap-8">
                              <div className="col-span-1">
                                    {
                                          formatToCurrency(
                                                invoice.summary.subtotal,
                                                "USD"
                                          ).main
                                    }
                                    {
                                          formatToCurrency(
                                                invoice.summary.subtotal,
                                                "USD"
                                          ).cents
                                    }
                              </div>
                        </div>
                  </div>
                  {/* DISCOUNTS ========================================================================================== */}
                  {/* DISCOUNTS ========================================================================================== */}
                  {/* DISCOUNTS ========================================================================================== */}
                  {/* DISCOUNTS ========================================================================================== */}
                  <div className=" grid grid-cols-2 lg:grid-cols-3 text-sm my-2">
                        <div className="col-span-1 hidden lg:block"></div>
                        <div className="col-span-1">
                              Discount{" "}
                              {invoice.summary.discountPercentage * 100}%
                        </div>
                        <div className="col-span-1 text-right gap-8">
                              <div className="col-span-1">
                                    {
                                          formatToCurrency(
                                                invoice.summary.discount,
                                                "USD"
                                          ).main
                                    }
                                    {
                                          formatToCurrency(
                                                invoice.summary.discount,
                                                "USD"
                                          ).cents
                                    }
                              </div>
                        </div>
                  </div>

                  {/* TOTAL DUE ========================================================================================== */}
                  {/* TOTAL DUE ========================================================================================== */}
                  {/* TOTAL DUE ========================================================================================== */}
                  {/* TOTAL DUE ========================================================================================== */}
                  {/* TOTAL DUE ========================================================================================== */}
                  <div className=" grid grid-cols-2 lg:grid-cols-3 font-bold mt-4">
                        <div className="col-span-1 hidden lg:block"></div>
                        <div className="col-span-1"> Total Amount Due</div>
                        <div className="col-span-1 text-right gap-8">
                              <div className="col-span-1">
                                    {
                                          formatToCurrency(
                                                invoice.summary.totalAmountDue,
                                                "USD"
                                          ).main
                                    }
                                    {
                                          formatToCurrency(
                                                invoice.summary.totalAmountDue,
                                                "USD"
                                          ).cents
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Totals;
