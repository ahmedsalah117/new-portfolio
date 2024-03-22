'use client'
import Link from 'next/link.js'
import React, { useState } from 'react'
import Image from "next/image.js"
import NavLink from './NavLink.jsx'
import {motion} from "framer-motion"
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
  
]
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity:1
    },
    opened: {
      opacity: 45,
    }
  }
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)"
    },
  };


  const menuVariants = {
    closed: {
      x:"100vw"
    },
    opened: {
      x: 0,
      transition: {
        when:"beforeChildren",
        staggerChildren:0.1
      }
    },
  }

  const listItemsVariants = {
    opened: {x:0,opacity:1},
    closed: {
      x: -10,
      opacity: 0
    }
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-35 text-xl">
      {/* links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => {
          return <NavLink key={link + Math.random()*500000} link={link} />;
        })}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex lg:w-1/3 lg:justify-center">
        {/* <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Bahnasy</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link> */}

        <button className="p-2 text-sm rounded-lg ring-1 ring-black bg-black text-white hover:-translate-y-1 focus:translate-y-1 duration-150 flex items-center gap-2">
          <a
            href={"/ahmed-bahnasy-cv.pdf"}
            download="Resume - Ahmed Bahnasy - Front End Developer - React - NextJs"
          >
            Download CV
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-download"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
        </button>
      </div>
      {/* social icons */}
      <div className="hidden md:flex justify-end gap-4 w-1/3 ">
        {/* linkedin link */}
        <Link
          href={"https://www.linkedin.com/in/eng-ahmed-bahnasy/"}
          target="_blank"
          className="hover:scale-125 duration-200"
        >
          <Image
            src="/linkedin.png"
            alt="linkedin-logo"
            width={24}
            height={24}
          />
        </Link>
        {/* github link */}
        <Link
          href={"https://github.com/ahmedsalah117"}
          target="_blank"
          className="hover:scale-125 duration-200"
        >
          <Image src="/github.png" alt="github-logo" width={24} height={24} />
        </Link>
        {/* dribble link */}
        {/* <Link href={"#"}>
          <Image
            src="/dribbble.png"
            alt="dribbble-logo"
            width={24}
            height={24}
          />
        </Link> */}
        {/* Instagram link */}
        <Link
          href={"https://www.instagram.com/ahmedsalah58/"}
          target="_blank"
          className="hover:scale-125 duration-200"
        >
          <Image
            src="/instagram.png"
            alt="instagram-logo"
            width={24}
            height={24}
          />
        </Link>
        {/* facebook link */}
        <Link
          href={"https://www.facebook.com/profile.php?id=100002649422623"}
          target="_blank"
          className="hover:scale-125 duration-200"
        >
          <Image
            src="/facebook.png"
            alt="facebook-logo"
            width={24}
            height={24}
          />
        </Link>
        {/* pintrest link */}
        {/* <Link href={"#"}>
          <Image
            src="/pinterest.png"
            alt="pinterest-logo"
            width={24}
            height={24}
          />
        </Link> */}
      </div>
      {/* Responsive menu */}
      <div className="md:hidden">
        {/* Menu button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => {
            setIsMenuOpen((prevState) => !prevState);
          }}
        >
          <motion.div
            variants={topVariants}
            animate={isMenuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={isMenuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={isMenuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu list */}
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => {
              return (
                <motion.div key={link.title +Math.random()*500000} variants={listItemsVariants}>
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar