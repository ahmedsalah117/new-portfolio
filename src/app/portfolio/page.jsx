"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "../../constants/index.js";


const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0.08, 1], ["0%", "-91.5%"]);

  useEffect(() => {
  },[scrollYProgress])
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-2 items-center justify-center text-8xl text-center">
          <p>My Work</p>
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            className={"mt-4"}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
          <motion.p
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="text-xl "
          >
            Scroll down
          </motion.p>
        </div>

        <div className="sticky top-0 flex py-6 bg-red-900 h-screen gap-4 items-center overflow-hidden">
          {/* This x value equals transform: translateX(x), so basically as long as we are scrolling in the ref div , we are generating an x value between 0% and -80% and this value is added to the transform translateX. */}
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {projects.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id+Math.random()*500000}
              >
                <div className="flex flex-col h-[80%] gap-4 text-white">
                  <h1 className="text-xl text-black font-bold md:text-4xl lg:text-5xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-full min-h-[50%] shadow-lg rounded-lg overflow-hidden">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] lg:text-lg text-black">
                    {item.desc}
                  </p>
                  <div className="flex justify-between w-80 md:w-96 lg:w-[500px] xl:w-[600px]">
                    <Link
                      href={item.repo}
                      target="_blank"
                      className="flex justify-end hover:scale-105 duration-200"
                    >
                      <button className="flex gap-2 p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold rounded duration-200 hover:bg-black hover:text-white ">
                        Repo
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-github"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </button>
                    </Link>
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex justify-end hover:scale-105 duration-200"
                    >
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold rounded duration-200 hover:bg-black hover:text-white ">
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20 xl:px-35 pt-10">
        <br/>
        <h1 className="md:text-7xl text-5xl ">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                className="p-2"
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer &nbsp; React & Next JS
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-[80px] h-[80px] md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
