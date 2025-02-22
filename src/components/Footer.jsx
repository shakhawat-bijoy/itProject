import React from "react";
import Container from "./layer/Container";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <footer className="bg-white rounded-xl w-full p-3 md:p-4 relative">
        <div className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px]">
          

          <p className="text-[0.9rem] text-center sm:text-start text-gray-600">
            High level experience in web design and development knowledge,
            producing quality work.
          </p>

          <button className="py-3 px-6 rounded-full bg-[#7443dc] text-white">
            Contact Us
          </button>

          <div className="flex gap-[15px] text-black mt-4">
            <Link className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
              <CgFacebook />
            </Link>
            <Link className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
              <BsTwitter />
            </Link>
            <Link className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
              <BsInstagram />
            </Link>
            <Link className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
              <BsLinkedin />
            </Link>
          </div>
        </div>

        <div className=" bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
          <p className="text-[0.9rem] text-gray-500">
            © 2025 All Rights Reserved
          </p>

          <SlArrowUp className="p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-500" />
        </div>

      </footer>
    </Container>
  );
};

export default Footer;
