import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/svg/Logo.svg";
import Discordicon from "../assets/svg/Discordicon.svg";
import DarkLighticon from "../assets/svg/DarkLighticon.svg";
import Wallet from "../assets/svg/Wallet.svg";
import { LINKS } from "../constants/links";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollTo = (id) => () => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" container w-[100vw] m-auto bg-[#040B11] text-[#ffffff]">
      <div className="flex items-center justify-between px-4 py-3 lg:justify-center lg:py-0">
        {/* Logo */}
        <div className="flex mt-3 mb-3 lg:mt-[33px] lg:mb-[33px]">
          <div className="flex hover:opacity-80" to="/">
            <img
              className="mr-[17px]"
              src={Logo}
              alt="Logo"
              width={36}
              height={40}
            />
            <h4 className="text-3xl">NFTALIEN</h4>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden mr-5">
          <button onClick={toggleMobileMenu} className="text-3xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links and dropdowns */}
        <div
          className={`lg:flex lg:items-center lg:gap-8 ml-[118px] ${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            <li className="zoomin hover:opacity-80 p-2 border-b border-b-gray-900">
              <div
                className="cursor-pointer text-base flex"
                onClick={scrollTo("#")}>
                Home
               
              </div>
            </li>
            <li className="zoomin hover:opacity-80 p-2 lg:border-b border-b-gray-900">
              <div
                className="cursor-pointer text-base flex"
                onClick={scrollTo(LINKS.ABOUT)}>
                About
                
              </div>
            </li>
            <li className="zoomin hover:opacity-80 p-2  lg:border-b border-b-gray-900">
              <div
                className="cursor-pointer text-base flex"
                onClick={scrollTo("#")}>
                Roadmap
               
              </div>
            </li>
            <li className="zoomin hover:opacity-80 p-2 lg:border-b border-b-gray-900">
              <div
                className="cursor-pointer text-base flex"
                onClick={scrollTo(LINKS.COLLECTION)}>
                Collection
              </div>
            </li>
            <li className="zoomin hover:opacity-80 p-2 lg:border-b border-b-gray-900">
              <div
                className="cursor-pointer text-base flex"
                onClick={scrollTo("#")}>
                Faqs
                
              </div>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex gap-[20px] ml-[120px]">
          <button className="zoomin bg-[#141B22] w-12 h-12 p-3 rounded-[40px]  hover:opacity-80">
            <img src={DarkLighticon} alt="toggle" />
          </button>
          <button className="flex  zoomin bg-[#141B22] text-base font-normal pt-3 pb-3 pr-6 rounded hover:opacity-80">
            <img
              className="pl-6 pr-[10px] mt-1"
              src={Discordicon}
              alt="discord"
            />
            <span className="">Discord</span>
          </button>
          <button className="flex zoomin bg-[#21E786] text-[#141B22] text-base font-normal pt-3 pb-3 pr-6 rounded hover:opacity-80">
            <img className="pl-6 pr-[10px] mt-1" src={Wallet} alt="discord" />
            <span className="">Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
