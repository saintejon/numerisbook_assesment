import React from "react";

const Card = ({ children }) => {
      return (
            <div className="bg-white rounded-2xl  md:py-6 py-4 md:px-8 px-4 border border-slate-100 min-w-fit">
                  {children}
            </div>
      );
};

export default Card;
