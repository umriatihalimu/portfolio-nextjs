"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

// buat array
const navLinks = [
  { path: "#about", title: "About" },
  { path: "#projects", title: "Projects" },
  { path: "#contact", title: "Contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between p-4  mx-auto text-white">
        <Link href={"/"} className="lg:text-4xl text-2xl font-bold ">
          LOGO
        </Link>
        {/* block spy struktur layoutnya ke settingan default */}
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center text-slate-200 hover:text-white px-2 py-1 rounded border border-slate-200 hover:border-white "
            >
              <XMarkIcon className="h-5 w-5 " />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center text-slate-200 hover:text-white px-2 py-1 rounded border border-slate-200 hover:border-white "
            >
              {/* kasih h dan w spy muncul gambarnya */}
              <Bars3Icon className="h-5 w-5 " />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex flex-row">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
