import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiGridVertical } from "react-icons/bi";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className=" h-fit w-[42rem] bg-gray-400 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-lg flex">
        <div className="w-2 p-4 ">
          <div className=" flex flex-col gap-12 justify-center items-center">
            <div className="">
              <FaRegQuestionCircle size={25} style={{ cursor: "pointer" }} />
            </div>
            <div className="relative top-14" >
              <BiGridVertical size={34}
                style={{ cursor: "pointer " }}
              />
            </div>
          </div>
        </div>
        <div className="p-4 w-full flex flex-col justify-center items-center">
          <div className=" py-2 w-[30em] flex gap-4 justify-evenly bg-black rounded-2xl text-white">
            <button class="px-2 py-1  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px]   rounded-[10px] transition-transform duration-200 ease-in-out hover:scale-[1.2] hover:text-white  hover:bg-black/50">
              About Me
            </button>
            <button class="px-2 py-1  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px]   rounded-[10px] transition-transform duration-200 ease-in-out hover:scale-[1.2] hover:text-white  hover:bg-black/50">
              Experiences
            </button>
            <button class="px-2 py-1  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px]   rounded-[10px] transition-transform duration-200 ease-in-out hover:scale-[1.2] hover:text-white  hover:bg-black/50">
              Recommended
            </button>
          </div>
          <div className="py-7 px-4 text-stone-900 font-jakarta font-semibold">
            <p>
              Hi, I'm a Computer Science and Engineering (CSE) student with a strong passion for technology and problem-solving.
              Throughout my studies, I've developed a solid foundation in programming languages like Java, Python, and C++, as well as experience with web development frameworks and databases. I'm particularly interested in areas like software development, algorithms, and data structures, and have worked on a few projects, including building web apps and implementing machine learning models.
              Aside from technical skills, I'm always looking to improve my soft skills like teamwork, communication, and time management. I'm eager to keep learning, work on real-world problems, and contribute to impactful projects in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
