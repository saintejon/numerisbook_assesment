import React from "react";
import Card from "../../components/layouts/Card";
import MainButton from "../../components/inputs/MainButton";
import { recentActivities } from "../../data/dataStore";
import InvoiceActivity from "./InvoiceActivity";

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

                        {recentActivities.map((activity, index) => (
                              <InvoiceActivity
                                    key={index}
                                    activity={activity}
                              />
                        ))}
                  </Card>
            </div>
      );
};

export default RecentActivities;
