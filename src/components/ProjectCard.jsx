import React from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, deskripsi, prevUrl, linkUrl }) => {
  return (
    <div className="text-gray-100">
      <div
        className="relative text-white h-52  rounded-t-lg group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {/* overlay untuk styling yg tumpang tindih */}
        <div className="overlay justify-center items-center absolute bg-[#181818] bg-opacity-0 text-slate-400 w-full h-full top-0 left-0 hidden group-hover:flex group-hover:bg-opacity-50 transition-all duration-1000 ">
          <Link
            href={""}
            className="border-2 border-slate-400 hover:border-white hover:text-white p-1 rounded-full mr-2 "
          >
            <CodeBracketIcon className=" w-6 h-6 " />
          </Link>
          <Link
            href={""}
            className="border-2 border-slate-400 hover:border-white hover:text-white p-1 rounded-full "
          >
            <EyeIcon className=" w-6 h-6 " />
          </Link>
        </div>
      </div>

      <div className="bg-white bg-opacity-90 p-1 px-2 rounded-b-lg text-black">
        <h3>{title}</h3>
        <p className="text-slate-500 text-sm">{deskripsi}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
