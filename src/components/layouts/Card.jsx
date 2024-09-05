import React from "react";

const Card = ({ children }) => {
      return (
            <div className="bg-white rounded-2xl  py-6 px-8 border border-slate-100 min-w-fit">
                  {children}
            </div>
      );
};

export default Card;
