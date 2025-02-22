import React from "react";
import Image from "./layer/Image";
import Container from "./layer/Container";
import logo from "../assets/logo.png";
import logoText from "../assets/logoText.png";
import logoRight from "../assets/logoRight.svg";
import arrowDown from "../assets/arrow-down.svg";
import { FiSearch } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";
import { TbMessage2Question } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <Container className="border-b-2 border-gray-300 flex items-center">
        <div className="py-8 flex max-w-[250px] justify-between items-center border-r-2 border-gray-300">
          <div className="flex gap-2.5">
            <Image src={logo} />
            <Image src={logoText} />
          </div>
          <div className="mr-[25.5px]">
            <Image src={logoRight} />
          </div>
        </div>

        <div className="SearchBar ml-12 mr-[305px]">
          <div className="flex items-center gap-4 relative">
            <FiSearch className="text-[#767676] absolute left-4" />
            <input
              className="py-3.5 w-[417px] pl-14 pr-2 bg-[#f4f5f4] outline-[rgba(118,118,118,0.06)] rounded-lg"
              type="text"
              placeholder="Search for anything..."
            />
          </div>
        </div>

        <div className="flex items-center gap-6 mr-[100px]">
          <LuCalendarDays className="size-6 text-[#767676]" />
          <TbMessage2Question className="size-6 text-[#767676]" />
          <IoNotificationsOutline className="size-6 text-[#767676]" />
        </div>

        <div className="flex items-center gap-6">
          <div>
            <h2 className="font-bold text-[#0D062D]">Shakhawat Bijoy</h2>
            <p className="text-[#767676] font-light text-xs">
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="size-[38px] rounded-full overflow-hidden">
            <Image src="https://ik.imagekit.io/abpj7jifz/IMG_2809.jpg?updatedAt=1739538435692"/>
          </div>

          <Image src={arrowDown} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
