import React from "react";

// terima 3 props
// children itu isinya
const TabBtn = ({ active, selectTab, children }) => {
  const btnClass = active
    ? "text-pink-200 border-b border-purple-500"
    : "text-gray-200";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 hover:text-pink-200 ${btnClass}`}>{children}</p>
    </button>
  );
};

export default TabBtn;
