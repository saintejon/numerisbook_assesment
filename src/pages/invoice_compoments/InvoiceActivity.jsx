import React from "react";
import { formatActivityDate } from "../../utilities/formatters";

const InvoiceActivity = ({ activity }) => {
      return (
            <div className="flex items-start space-x-4 mb-4">
                  <img
                        src={activity.avatar}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full bg-primary-400"
                  />
                  <div>
                        <p className="font-bold">{activity.type}</p>
                        <p className="text-sm text-gray-500">
                              {formatActivityDate(activity.date)}
                        </p>
                        <div className="mt-1 px-4 py-5 bg-slate-50 rounded-xl">
                              <p className="text-sm text-slate-600">
                                    Created invoice{" "}
                                    <span className="font-bold text-black">
                                          {activity.invoice.id}
                                    </span>
                                    /{activity.invoice.creator}
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default InvoiceActivity;
