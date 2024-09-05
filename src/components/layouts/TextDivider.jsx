import React from "react";

const TextDivider = ({ text, color }) => {
      return (
            <div className="flex gap-4 items-center my-6">
                  <div>
                        <p className="text-lg font-medium">{text}</p>
                  </div>
                  <div
                        className="h-[1px] w-[70%]"
                        style={{ backgroundColor: color }}
                  ></div>
            </div>
      );
};

export default TextDivider;
