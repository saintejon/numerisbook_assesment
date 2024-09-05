import React from "react";

import CustomIcon from "../../components/icons/CustomIcon";
import { formatToCurrency } from "../../utilities/formatters";
import Card from "../../components/layouts/Card";

const Summary = ({ summary }) => {
      // ============================================= CUSTOM BACKGROUND COLORS FOR UNIQUE NUMBER DISPLAY
      const getBackgroundColor = (title) =>
            title === "TOTAL PAID"
                  ? "#B6FDD3" // Green
                  : title === "TOTAL OVERDUE"
                  ? "#FFB7BD" // Red
                  : title === "TOTAL DRAFT"
                  ? "#D9D9E0" // Gray
                  : title === "TOTAL UNPAID"
                  ? "#F8E39B" // Yellow
                  : "#E0E0E0";

      return (
            <Card>
                  <div className="cursor-pointer">
                        <CustomIcon text="Overview" size={24} />
                        <div className="flex gap-2 items-center mt-2">
                              <div>
                                    <p className="text-xs text-slate-400">
                                          {summary.title || "Tile"}
                                    </p>
                              </div>
                              <div
                                    style={{
                                          backgroundColor: getBackgroundColor(
                                                summary?.title
                                          ),
                                    }}
                                    className="rounded-full py-1 px-3"
                              >
                                    <p className=" text-[#373B47]">
                                          {summary.count || 0}
                                    </p>
                              </div>
                        </div>
                        <div className="mt-3">
                              <p className="text-2xl font-medium">
                                    {
                                          formatToCurrency(
                                                summary.amount || 0,
                                                "USD"
                                          ).main
                                    }
                                    <span className="text-sm align-baseline text-slate-400">
                                          {
                                                formatToCurrency(
                                                      summary.amount || 0,
                                                      "USD"
                                                ).cents
                                          }
                                    </span>
                              </p>
                        </div>{" "}
                  </div>
            </Card>
      );
};

export default Summary;
