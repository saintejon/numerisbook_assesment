import React from "react";
import MainButton from "../../components/inputs/MainButton";

const ActionBlock = () => {
      return (
            <div className="flex justify-between items-center my-4 gap-4">
                  <div>
                        <p className="font-bold text-xl">Invoice</p>
                  </div>
                  <div className="md:flex items-center justify-between gap-4">
                        <MainButton
                              text="SEE WHAT'S NEW"
                              borderColor={"slate-200"}
                              bgcolor="bg-white"
                              textColor={"text-slate-400"}
                        />
                        <MainButton text="CREATE" borderColor={"primary"} />
                  </div>
            </div>
      );
};

export default ActionBlock;
