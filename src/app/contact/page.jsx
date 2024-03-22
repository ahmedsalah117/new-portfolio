"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setIsLoading(false);
        },
        () => {
          setError(true);
          setIsLoading(false);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col justify-center gap-0 md:gap-4 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-35 pb-4">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-3xl md:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index+letter+ Math.random()*500000}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-2/3 lg:h-full lg:w-[40%] bg-red-50 rounded-xl text-sm md:text-xl flex flex-col justify-between gap-4  px-4 md:px-8 py-3 overflow-y-auto"
        >
          <span className="">Dear Ahmed Bahnasy,</span>
          <textarea
            onClick={(e) => {
              console.log("textarea clicked");
            }}
            rows={6}
            autoFocus
            required
            className="h-fit p-1 bg-transparent border-b-2 border-b-black outline-none resize-none duration-100 overflow-x-hidden overflow-y-auto placeholder:duration-200 focus:placeholder:translate-x-2 focus:border-b-yellow-500"
            name="message"
            placeholder="Write your message here..."
          />
          <span className="">Email address:</span>
          <input
            required
            name="from_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none placeholder:duration-200 focus:placeholder:translate-x-2 focus:border-b-yellow-500"
            placeholder="e.g: email@example.com"
          />
          <span className="">Regards</span>
          <button
            disabled={isLoading}
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
          {success && (
            <span className="text-green-600 font-semibold text-center">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-center">
              Something went wrong! Please try again
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
