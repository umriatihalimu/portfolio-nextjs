"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  // untk ambil yg diisikan pengguna di email section
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);
    if (response.status === 200) {
      console.log("Message Sent.");
      setEmailSubmitted(true);
    } else console.log("gagal");
  };

  return (
    <section className="grid lg:grid-cols-2  text-white mt-24 gap-8 relative">
      {/* detail circle di bg */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h4 className="font-semibold text-xl">Let's Connect</h4>
        <p>
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex flex-row p-2 gap-1">
          <Link href={"github.com"}>
            <Image src={GithubIcon} alt="..." className="w-10 h-10" />
          </Link>
          <Link href={"linkedin.com"}>
            <Image src={LinkedinIcon} alt="..." className="w-10 h-10" />
          </Link>
        </div>
      </div>

      {/* email form */}
      <div className="z-10">
        <form className="flex flex-col text-sm " onSubmit={handleSubmit}>
          {/* htmlFor="email" adlh pasangan dari label untuk dikaitkan klo label ini isinya email tdk boleh yg lain */}
          <label htmlFor="email" className="font-medium mb-2">
            Your email
          </label>
          {/* required itu spy formnya wajib diisi */}
          <input
            name="email"
            type="email"
            id="email"
            required
            placeholder="acme<onboarding@resend.dev>"
            className="bg-[#18191E] p-1 px-2 border border-[#33353F] rounded-lg"
          />
          <label htmlFor="subject" className="font-medium mb-2 mt-2">
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            placeholder="Just say hi!"
            className="bg-[#18191E] p-1 px-2 border border-[#33353F] rounded-lg"
          />
          {/* textareanya */}
          <div className="flex flex-col mt-2 gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Let's talk about..."
              className="bg-[#18191E] p-1 px-2 border border-[#33353F] rounded-lg"
            />
            <button
              type="submit"
              className="text-white w-full bg-gradient-to-r from-pink-500 to-purple-600 py-1.5 p-1 rounded-lg"
            >
              Send message
            </button>
          </div>

          {emailSubmitted && (
            <p className="text-sm text-green-600 py-2">Pesan terkirim</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
