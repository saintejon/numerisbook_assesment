import React from "react";

const Reminders = ({ invoice }) => {
      const setReminder = async (invoiceid) => {};

      return (
            <div className="p-3 my-5 overflow-x-scroll w-full border border-slate-300 rounded-xl flex gap-3 items-center text-[12px]">
                  <div className=" text-slate-500">REMINDERS</div>
                  <div className="overflow-x-scroll w-fit  flex gap-3 items-center">
                        {invoice?.reminders.map((reminder, index) => {
                              return (
                                    <div
                                          key={index}
                                          onClick={() =>
                                                setReminder(invoice._id)
                                          }
                                          className="rounded-full p-2 cursor-pointer flex gap-1 items-center w-fit "
                                          style={{
                                                borderWidth: reminder?.active
                                                      ? 0
                                                      : 1,
                                                backgroundColor:
                                                      reminder?.active
                                                            ? "#E6FFF0"
                                                            : "#fff",
                                          }}
                                    >
                                          <div className="">
                                                <p className="min-w-max">
                                                      {reminder.title}
                                                </p>
                                          </div>
                                          {reminder?.active && (
                                                <div className="mr-2">
                                                      <svg
                                                            width="10"
                                                            height="8"
                                                            viewBox="0 0 10 8"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                            <path
                                                                  d="M0.75 3.99998L3.58 6.82998L9.25 1.16998"
                                                                  stroke="#2DB260"
                                                                  stroke-width="1.5"
                                                                  stroke-linecap="round"
                                                                  stroke-linejoin="round"
                                                            />
                                                      </svg>
                                                </div>
                                          )}
                                    </div>
                              );
                        })}{" "}
                  </div>
            </div>
      );
};

export default Reminders;
