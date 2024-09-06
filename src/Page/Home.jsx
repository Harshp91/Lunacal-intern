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
              Hello! I m Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now. I was born and
              raised in Albany, NY& have been living in Santa Carla for the past
              10 years my wife Tiffany and my 4 year old twin daughters-Emma and
              Ella. Both of them are just starting school, so my calender is
              usually blocked between 9-10 AM. This is a...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
