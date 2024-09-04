import React from "react";

const MainButton = ({
      isSubmiting = false,
      text = "Enter Text",
      bgcolor = "bg-primary",
      onClick,
      altText,
      borderColor,
      textColor = "text-white",
}) => {
      return (
            <div className="">
                  <button
                        className={`${
                              isSubmiting ? "opacity-50" : "opacity-100"
                        } hover:opacity-90 ${textColor} font-semibold py-4  px-10  ${bgcolor} border border-${borderColor} flex justify-around hover:-translate-y-0.5 hover:translate-x-0.5 transition-all my-2  w-fit rounded-full`}
                        onClick={onClick}
                        disabled={isSubmiting}
                  >
                        {!isSubmiting ? text : altText}
                  </button>
            </div>
      );
};

export default MainButton;
