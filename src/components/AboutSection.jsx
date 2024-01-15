"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabBtn from "./TabBtn";

// buat array untuk isinya skills dll
// className="list-disc pl-3" untuk styling agar ada marknya
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-3">
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
        <li>JavaScipt</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "edu",
    content: (
      <ul className="list-disc pl-3">
        <li>Halu Oleo University, Kendari </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-3">
        <li>Oracle Academy (Java Certification) </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  // useState('skills') itu idnya
  const [tab, setTab] = useState("skills");
  const [isPending, starTransistion] = useTransition();

  const handleTabChange = (id) => {
    starTransistion(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 mt-16 xl:gap-16 sm:py-16 py-8 px-4 ">
        <div className="ms-0 ">
          <Image
            src={"/images/about-image.png"}
            alt="..."
            width={350}
            height={350}
          />
        </div>
        <div className=" lg:mt-0 mt-4 text-gray-100 ">
          <h2 className=" lg:text-3xl text-xl font-bold  mb-2">About</h2>
          <p className="lg:text-base text-sm">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="mt-3 lg:text-base text-sm ">
            <TabBtn
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              Skills
            </TabBtn>
            <TabBtn
              active={tab === "edu"}
              selectTab={() => handleTabChange("edu")}
            >
              Education
            </TabBtn>
            <TabBtn
              active={tab === "certifications"}
              selectTab={() => handleTabChange("certifications")}
            >
              Certifications
            </TabBtn>
          </div>

          {/* tampilkan isi array DATA_TAB */}
          <div className="mt-3 font-extralight text-sm">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
