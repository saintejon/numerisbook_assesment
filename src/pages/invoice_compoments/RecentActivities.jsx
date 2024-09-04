import React from "react";
import Card from "../../components/layouts/Card";
import MainButton from "../../components/inputs/MainButton";
import { recentActivities } from "../../data/dataStore";
import { formatActivityDate } from "../../utilities/formatters";

const RecentActivities = () => {
      return (
            <div className="mt-4">
                  <Card>
                        <div className="flex justify-between items-center gap-4 mb-2">
                              <div>
                                    <h2 className="text-lg font-bold">
                                          Recent Activities
                                    </h2>
                              </div>
                              <MainButton
                                    text="VIEW ALL"
                                    borderColor={"slate-200"}
                                    bgcolor="bg-white"
                                    textColor={"text-primary"}
                              />
                        </div>

                        {recentActivities.map((activity) => (
                              <div
                                    key={activity.id}
                                    className="flex items-start space-x-4 mb-4"
                              >
                                    <img
                                          src={activity.avatar}
                                          alt="User Avatar"
                                          className="w-10 h-10 rounded-full bg-primary-400"
                                    />
                                    <div>
                                          <p className="font-bold">
                                                {activity.type}
                                          </p>
                                          <p className="text-sm text-gray-500">
                                                {formatActivityDate(
                                                      activity.date
                                                )}
                                          </p>
                                          <div className="mt-1 px-4 py-5 bg-gray-100 rounded-xl">
                                                <p className="text-sm text-slate-600">
                                                      Created invoice{" "}
                                                      <span className="font-bold text-black">
                                                            {
                                                                  activity
                                                                        .invoice
                                                                        .id
                                                            }
                                                      </span>
                                                      /
                                                      {activity.invoice.creator}
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </Card>
            </div>
      );
};

export default RecentActivities;
