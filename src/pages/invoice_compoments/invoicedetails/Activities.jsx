import React from "react";
import { formatActivityDate } from "../../../utilities/formatters";

const Activities = ({ activities }) => {
      return (
            <div>
                  <div className="mb-4">
                        <p className="font-bold">Invoice Activity</p>
                  </div>

                  {activities.length > 0 &&
                        activities.map((activity, index) => (
                              <div key={index} className="flex gap-4">
                                    <div>
                                          <img
                                                src={activity.avatar}
                                                alt="User Avatar"
                                                className="w-10 h-10 rounded-full bg-primary-400"
                                          />
                                          <div className="flex justify-around mt-1">
                                                <div className="w-[1px] bg-slate-200 h-[80px]"></div>
                                          </div>
                                    </div>
                                    <div>
                                          <p className="font-bold">
                                                {activity.user}
                                          </p>
                                          <p className="text-xs text-slate-500">
                                                {formatActivityDate(
                                                      activity.time
                                                )}
                                          </p>
                                          <div className="mt-1 px-4 py-5 bg-slate-50 rounded-xl max-w-[400px]">
                                                <p className="text-xs text-slate-600">
                                                      {activity?.action}
                                                      <span className="font-medium text-black ml-1">
                                                            {activity?.details}
                                                      </span>
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        ))}
            </div>
      );
};

export default Activities;
