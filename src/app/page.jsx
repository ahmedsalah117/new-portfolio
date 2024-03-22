'use client'
import Image from "next/image.js";
import {motion} from "framer-motion"
import { useRouter } from "next/navigation.js";
import Link from "next/link.js";
const Homepage = () => {
  const router = useRouter()
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row  items-center">
        {/* image container */}

        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center relative">
          <div className="w-fit h-[80%] m-auto bg-yellow-300 overflow-hidden rounded-3xl shadow-xl">
            <img
              src={"/hero.jpg"}
              alt="bahnasy image"
         
              quality={100}
              className=" object-cover w-full h-full"
            />
          </div>
        </div>
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experience. Designing Tomorrow 💪
          </h1>
          {/* Desc */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            happen. With a keen eye for aesthetics 😉
          </p>
          {/* Buttons */}
          <div className=" w-full flex gap-4">
            <button
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:-translate-y-1 focus:translate-y-1 duration-150"
              onClick={() => {
                router.replace("/portfolio");
              }}
            >
              View My Work
            </button>
            <button
              className="p-4 rounded-lg ring-1 ring-black hover:-translate-y-1 focus:translate-y-1 duration-150"
              onClick={() => {
                router.replace("/contact");
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: 1, y: "10px" }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="flex justify-end absolute right-12 bottom-6"
        >
          <Link href={"/about"} className="text-4xl flex gap-3 items-center">
            Next
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
              className="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </Link>
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default Homepage;
