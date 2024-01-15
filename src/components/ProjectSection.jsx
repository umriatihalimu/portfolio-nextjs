"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const DATA_PROJECTS = [
  {
    id: 1,
    title: "Coffee Website",
    image: "/images/projects/1.png",
    desc: "HTML, CSS Project",
    tag: ["All", "Web"],
    prevUrl: "/",
    gitUrl: "/",
  },
  {
    id: 2,
    title: "Anime Website",
    image: "/images/projects/1.png",
    desc: "React Project",
    tag: ["All", "Web"],
    prevUrl: "/",
    gitUrl: "/",
  },
  {
    id: 3,
    title: "Portfolio",
    image: "/images/projects/1.png",
    desc: "React Project",
    tag: ["All", "Mobile"],
    prevUrl: "/",
    gitUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  // untuk update tagnya tag mana yg dipilih
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // untuk filter antara mobile,web,all
  const filteredProject = DATA_PROJECTS.filter((data) =>
    data.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-white lg:text-3xl text-xl  flex justify-center p-2 pb-4 font-semibold">
        My Project
      </h2>
      <div className="flex flex-row gap-2 items-center justify-center pb-3 text-white">
        <ProjectTag
          tag={"All"}
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          tag={"Web"}
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          tag={"Mobile"}
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((data) => {
          return (
            <ProjectCard
              key={data.id}
              imgUrl={data.image}
              title={data.title}
              deskripsi={data.desc}
              tags={data}
              prevUrl={data.prevUrl}
              linkUrl={data.linkUrl}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectSection;
