import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiGridVertical } from "react-icons/bi";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";

const Image = () => {
  return (
    <>
      <div className=" mt-16 h-[20rem] w-[42rem] bg-gray-400 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-lg flex">
        <div className="w-2 p-4 ">
          <div className=" flex flex-col gap-12 justify-center items-center">
            <div className="">
              <FaRegQuestionCircle size={25} style={{ cursor: "pointer" }} />
            </div>
            <div className="relative top-20">
              <BiGridVertical size={34}
                style={{ cursor: "pointer ", alignItems: "center" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="py-4  w-full flex  ">
            <div className="px-4 w-20 flex gap-56 ">
              <button class="px-6 py-3 bg-black font-semibold text-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px]  rounded-[10px] transition-transform duration-200 ease-in-out hover:scale-[1.2] hover:text-white ring-1 hover:bg-black/50">
                Gallery
              </button>

              <div className="w-[20em] flex gap-3">
                <button class="w-[10em] px-6 py-3 bg-black font-semibold text-white shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px]  rounded-[10px] transition-transform duration-200 ease-in-out hover:scale-[1.2] hover:text-white ring-1 hover:bg-black/50">
                  + Add Image
                </button>
                <IoArrowBackCircleSharp
                  className="hover:scale-[1.2] duration-150"
                  cursor={"pointer"}
                  size="3em"
                />
                <IoArrowForwardCircleSharp
                  className="hover:scale-[1.2] duration-150"
                  cursor={"pointer"}
                  size="3em"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 m pb-4 px-3 flex gap-5">
            <img className="" src="scene.png" alt="image" />
            <img className="" src="scene.png" alt="image" />
            <img className="" src="scene.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
