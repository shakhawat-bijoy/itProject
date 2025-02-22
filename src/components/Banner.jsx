import Image from "./layer/Image";
import pen from "../assets/pen.png";
import link from "../assets/link.png";
import React, { useState } from "react";

// react icons
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";
const Banner = () => {
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="mt-10 mx-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <h1 className="text-[#0d062d] text-[46px] font-medium capitalize">
            Mobile App
          </h1>
          <div className="flex items-center gap-3">
            <Image src={pen} />
            <div className="size-[28px] bg-[rgba(81,48,229,0.2)] flex items-center justify-center rounded-lg">
              <Image className="" src={link} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M6 9H12"
                stroke="#5030E5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 12V6"
                stroke="#5030E5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
                fill="#5030E5"
                fill-opacity="0.2"
              />
            </svg>
            <h1 className="text-[#5030E5] font-medium capitalize">Invite</h1>
          </div>
          <div
            className="relative w-fit h-full flex items-center justify-center"
            onMouseEnter={() => setIsProfileHovered(true)}
            onMouseLeave={() => setIsProfileHovered(false)}
          >
            {/*  initial profile picture  */}
            <Image
              src="https://ik.imagekit.io/abpj7jifz/IMG_2809.jpg?updatedAt=1739538435692"
              alt="profile"
              className="w-[50px] h-[50px] rounded-full object-cover border-[3px] cursor-pointer border-[#3B9DF8]"
            />

            {/*  tooltip  */}
            <div
              className={` ${
                isProfileHovered
                  ? "opacity-100 z-20 translate-y-0"
                  : "opacity-0 z-[-1] translate-y-[20px]"
              } absolute bottom-[-270px] left-[50%] transform translate-x-[-50%] bg-white w-[250px] rounded-md p-[15px] shadow-md transition-all duration-300`}
            >
              {/*  socials  */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-[7px]">
                <p className="text-[1rem] font-[600] text-gray-700">Socials</p>
                <div className="flex items-center gap-[8px]">
                  <Link to="https://www.linkedin.com/in/shakhawat-bijoy">
                    <FaLinkedin className="text-[1.3rem] text-gray-700 hover:text-[#3B9DF8] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out" />
                  </Link>
                  <Link to="https://github.com/shakhawat-bijoy">
                    <FaGithubSquare className="text-[1.3rem] text-gray-700 hover:text-[#3B9DF8] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out" />
                  </Link>
                  <Link to="https://www.instagram.com/bijoy_shakhawat">
                    <FaInstagramSquare className="text-[1.3rem] text-gray-700 hover:text-[#3B9DF8] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out" />
                  </Link>
                </div>
              </div>

              {/*  account details  */}
              <div className="flex items-center justify-center flex-col mt-5">
                <div className="relative">
                  <img
                    src="https://ik.imagekit.io/abpj7jifz/IMG_2809.jpg?updatedAt=1739538435692"
                    alt="profile"
                    className="w-[80px] h-[80px] rounded-full object-cover"
                  />
                  <div className="w-[10px] h-[10px] rounded-full bg-green-400 absolute top-[7px] right-[8px] border-[2px] border-white"></div>
                </div>
                <h4 className="text-[1.1rem] font-[600] text-gray-700 mt-2">
                  Shakhawat Bijoy
                </h4>
                <p className="text-[0.8rem] text-gray-600">Developer</p>
              </div>

              {/*  send message  */}
              <button className="flex mx-auto hover:underline items-center gap-[8px] font-[500] text-[0.9rem] text-[#3B9DF8] mt-4">
                <FiMessageCircle className="text-[1.1rem]" />
                Send Message
              </button>

              {/*  bottom arrow  */}
              <div className="bg-white w-[15px] h-[15px] rotate-[45deg] absolute bottom-[-7px] left-[50%] transform translate-x-[-50%]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10 mb-12">
        <div className="flex items-center gap-5">
        <select className="outline-none text-[#AAAAAA] py-3 flex justify-start bg-transparent w-[122px] border border-[#787486] rounded-md">
          <option className="">
            <span className="py-4">Filter</span>
          </option>
          <option className="">
            <span className="py-4"></span>
          </option>
          <option className="">
            <span className="py-4">1 person</span>
          </option>
          <option className="">
            <span className="py-4">2 person</span>
          </option>
          <option className="">
            <span className="py-4">3 person</span>
          </option>
        </select>

        <div
          className="w-[122px] border border-[#787486] rounded-md relative cursor-pointer"
          onClick={() => setIsCalendlyOpen(!isCalendlyOpen)}
          onBlur={() => setIsCalendlyOpen(false)} // Close dropdown when clicking outside
        >
          <p className="py-3 text-[#AAAAAA] text-center">Today</p>

          {isCalendlyOpen && (
            <div
              className="w-[1000px] absolute left-[-100px]"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
            >
              <InlineWidget
                url="https://calendly.com/piyash2003b/30min?month=2025-02"
                styles={{ height: "800px" }}
              />
            </div>
          )}
        </div>
        </div>

        <div>
          <div className="flex items-center gap-2 py-3 px-4 border border-[#787486] rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.1064 7.74666C6.0864 7.74666 6.07307 7.74666 6.05307 7.74666C6.01973 7.73999 5.97307 7.73999 5.93307 7.74666C3.99973 7.68666 2.53973 6.16666 2.53973 4.29333C2.53973 2.38666 4.09307 0.833328 5.99973 0.833328C7.9064 0.833328 9.45973 2.38666 9.45973 4.29333C9.45307 6.16666 7.9864 7.68666 6.1264 7.74666C6.11973 7.74666 6.11307 7.74666 6.1064 7.74666ZM5.99973 1.83333C4.6464 1.83333 3.53973 2.93999 3.53973 4.29333C3.53973 5.62666 4.57973 6.69999 5.9064 6.74666C5.9464 6.73999 6.03307 6.73999 6.11973 6.74666C7.4264 6.68666 8.45307 5.61333 8.45973 4.29333C8.45973 2.93999 7.35307 1.83333 5.99973 1.83333Z"
                fill="#787486"
              />
              <path
                d="M11.0264 7.83334C11.0064 7.83334 10.9864 7.83334 10.9664 7.82667C10.6931 7.85334 10.4131 7.66001 10.3864 7.38667C10.3597 7.11334 10.5264 6.86667 10.7997 6.83334C10.8797 6.82667 10.9664 6.82667 11.0397 6.82667C12.0131 6.77334 12.7731 5.97334 12.7731 4.99334C12.7731 3.98001 11.9531 3.16 10.9397 3.16C10.6664 3.16667 10.4397 2.94001 10.4397 2.66667C10.4397 2.39334 10.6664 2.16667 10.9397 2.16667C12.4997 2.16667 13.7731 3.44001 13.7731 5.00001C13.7731 6.53334 12.5731 7.77334 11.0464 7.83334C11.0397 7.83334 11.0331 7.83334 11.0264 7.83334Z"
                fill="#787486"
              />
              <path
                d="M6.11307 15.0333C4.80641 15.0333 3.49307 14.7 2.49974 14.0333C1.57307 13.42 1.06641 12.58 1.06641 11.6667C1.06641 10.7533 1.57307 9.90667 2.49974 9.28667C4.49974 7.96001 7.73974 7.96001 9.72641 9.28667C10.6464 9.90001 11.1597 10.74 11.1597 11.6533C11.1597 12.5667 10.6531 13.4133 9.72641 14.0333C8.72641 14.7 7.41974 15.0333 6.11307 15.0333ZM3.05307 10.1267C2.41307 10.5533 2.06641 11.1 2.06641 11.6733C2.06641 12.24 2.41974 12.7867 3.05307 13.2067C4.71307 14.32 7.51307 14.32 9.17307 13.2067C9.81307 12.78 10.1597 12.2333 10.1597 11.66C10.1597 11.0933 9.80641 10.5467 9.17307 10.1267C7.51307 9.02 4.71307 9.02 3.05307 10.1267Z"
                fill="#787486"
              />
              <path
                d="M12.2264 13.8333C11.9931 13.8333 11.7864 13.6733 11.7397 13.4333C11.6864 13.16 11.8597 12.9 12.1264 12.84C12.5464 12.7533 12.9331 12.5867 13.2331 12.3533C13.6131 12.0667 13.8197 11.7067 13.8197 11.3267C13.8197 10.9467 13.6131 10.5867 13.2397 10.3067C12.9464 10.08 12.5797 9.92 12.1464 9.82C11.8797 9.76 11.7064 9.49333 11.7664 9.22C11.8264 8.95333 12.0931 8.78 12.3664 8.84C12.9397 8.96666 13.4397 9.19333 13.8464 9.50666C14.4664 9.97333 14.8197 10.6333 14.8197 11.3267C14.8197 12.02 14.4597 12.68 13.8397 13.1533C13.4264 13.4733 12.9064 13.7067 12.3331 13.82C12.2931 13.8333 12.2597 13.8333 12.2264 13.8333Z"
                fill="#787486"
              />
            </svg>

            <p className="text-[#787486]">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
