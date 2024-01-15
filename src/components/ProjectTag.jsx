import React from "react";

const ProjectTag = ({ tag, onClick, isSelected }) => {
  const btnClassProject = isSelected
    ? "border-purple-500 "
    : " border-slate-400 hover:border-white";
  return (
    <div>
      <button
        onClick={() => onClick(tag)}
        className={`${btnClassProject} border-2 rounded-full p-1 px-4`}
      >
        {tag}
      </button>
    </div>
  );
};

export default ProjectTag;
