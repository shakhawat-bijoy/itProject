import React, { useState } from "react";
import Container from "../layer/Container";
import Image from "../layer/Image";
import home from "../../assets/home.svg";
import message from "../../assets/message.svg";
import task from "../../assets/task.svg";
import profile from "../../assets/profile.svg";
import setting from "../../assets/setting.svg";
import addSqure from "../../assets/add-square.svg";
import lamp from "../../assets/lamp.svg";
import { Link } from "react-router-dom";
import Banner from "../Banner";

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <Container className="flex justify-between">
      <div className="leftSideBa w-[250px] border-r-2 border-gray-300r pt-8">
        <div className="flex items-center p-4 cursor-pointer gap-3.5 ml-[22px]">
          <Image className="size-6 text-[#787486]" src={home} />
          <h1 className="font-medium text-[#787486] hover:text-[#262626] transition-all duration-300">
            Home
          </h1>
        </div>

        <div className="flex items-center p-4 cursor-pointer gap-3.5 ml-[22px]">
          <Image className="size-6 text-[#787486]" src={message} />
          <h1 className="font-medium text-[#787486] hover:text-[#262626] transition-all duration-300">
            Messages
          </h1>
        </div>

        <div className="flex items-center p-4 cursor-pointer gap-3.5 ml-[22px]">
          <Image className="size-6 text-[#787486]" src={task} />
          <h1 className="font-medium text-[#787486] hover:text-[#262626] transition-all duration-300">
            Tasks
          </h1>
        </div>

        <div className="flex items-center p-4 cursor-pointer gap-3.5 ml-[22px]">
          <Image className="size-6 text-[#787486]" src={profile} />
          <h1 className="font-medium text-[#787486] hover:text-[#262626] transition-all duration-300">
            Members
          </h1>
        </div>

        <div className="flex items-center p-4 cursor-pointer gap-3.5 ml-[22px]">
          <Image className="size-6 text-[#787486]" src={setting} />
          <h1 className="font-medium text-[#787486] hover:text-[#262626] transition-all duration-300">
            Settings
          </h1>
        </div>

        <p className="border-b-2 border-gray-300 mt-8 w-[224px] mx-auto"></p>

        <div
          className="mt-8 flex justify-between items-center cursor-pointer gap-3.5 ml-[22px] mr-[25.5px] p-4 mb-24 relative"
          onClick={() => setShow(!show)}
          onBlur={() => setShow(false)} // Close dropdown when clicking outside
          tabIndex={0} // Allows onBlur to work properly
        >
          <h1 className="text-xs font-bold text-[rgb(120,116,134)] uppercase">
            My Project
          </h1>
          <Image
            className="size-4 text-[#787486] cursor-pointer"
            src={addSqure}
            alt="Add"
          />

          {show && (
            <ul
              className="absolute top-full left-[-5px] mt-2 bg-white flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
            >
              <li className="flex items-center gap-2.5  hover:bg-[#f0effd] w-[225px] rounded-md">
                <svg
                  className="ml-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <circle cx="4" cy="4" r="4" fill="#7AC555" />
                </svg>
                <Link
                  href="#"
                  className="block px-4 py-2 text-[#0D062D] font-medium rounded"
                >
                  Mobile App
                </Link>
              </li>

              <li className="flex items-center gap-2.5  hover:bg-[#f0effd] w-[225px] rounded-md">
                <svg
                  className="ml-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <circle cx="4" cy="4" r="4" fill="#FFA500" />
                </svg>
                <Link
                  href="#"
                  className="block px-4 py-2 text-[#0D062D] font-medium rounded"
                >
                  Website Redesign
                </Link>
              </li>

              <li className="flex items-center gap-2.5  hover:bg-[#f0effd] w-[225px] rounded-md">
                <svg
                  className="ml-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <circle cx="4" cy="4" r="4" fill="#E4CCFD" />
                </svg>
                <Link
                  href="#"
                  className="block px-4 py-2 text-[#0D062D] font-medium rounded"
                >
                  Design System
                </Link>
              </li>

              <li className="flex items-center gap-2.5  hover:bg-[#f0effd] w-[225px] rounded-md">
                <svg
                  className="ml-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <circle cx="4" cy="4" r="4" fill="#76A5EA" />
                </svg>
                <Link
                  href="#"
                  className="block px-4 py-2 text-[#0D062D] font-medium rounded"
                >
                  Wireframes
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="pb-8">
          <div className="flex flex-col mx-auto items-center bg-gray-100 rounded-lg shadow-md w-[206px] h-[233px]">
            <div className=" p-1 rounded-full flex items-center justify-center">
              <Image src={lamp} className="size-10 rounded-lg " />
            </div>

            {/* Title */}
            <h2 className="mt-4 text-sm font-medium text-black">
              Thoughts Time
            </h2>

            {/* Description */}
            <p className="text-[#787486] text-center mt-2 text-xs w-[166px]">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>

            {/* Button */}
            <input
              className="w-[166px] text-center py-4 px-7 outline-none text-xs mt-4"
              type="text"
              placeholder="Write a message"
            />
          </div>
        </div>
      </div>

      <div className="rightSideBar w-[calc(100%-250px)] px-5">
        <Banner />
      </div>
    </Container>
  );
};

export default Home;
