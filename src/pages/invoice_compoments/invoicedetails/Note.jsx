import React from "react";

const Note = ({ invoice }) => {
      return (
            <div className="p-4 bg-slate-100 rounded-xl text-sm my-4">
                  <div className="text-slate-400">NOTE</div>
                  <div>{invoice?.notes}</div>
            </div>
      );
};

export default Note;
