import React from "react";

import SliderImage from "../assets/images/Slider.png";
import Vector1 from "../assets/svg/Vector1.svg";
import Vector from "../assets/svg/Vector.svg";
import { LINKS } from "../constants/links";
import Animation from "./animation/Animation";

const Slider = () => {
  return (
    <div className="relative" id={LINKS.SLIDER}>
      <div className="slider-container">
        <img className="w-full h-auto" src={SliderImage} alt="ALIENS" />
        <img
          className="relative top-[113px] left-[437px] z-10 "
          src={Vector1}
          alt="Vector1"
          width={100}
          height={102}
        />
        <img
          className="relative top-[-35px] left-[962px] z-10"
          src={Vector}
          alt="Vector"
          width={90}
          height={92}
        />
      </div>

      <div className="absolute top-[303px] left-0 w-full h-full flex flex-col justify-center items-center text-center text-[#ffffff] z-20">
        <div className="w-full mx-auto px-4 bg-gradient-to-t from-[#040B11] from-50% zoomin">
          <Animation animationType="fadeInUp">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              EXPLORE NFT COLLECTION
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-normal max-w-2xl mx-auto poppins">
              A collection of 2525 highly-fashionable NFTs on the ETH
              Blockchain. Unique, metaverse-ready, and designed to benefit their
              holders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <button className="zoomin bg-[#21E786] text-[#141B22] text-base font-normal py-3 px-6 rounded hover:opacity-80">
                Connect Wallet
              </button>
              <button className="zoomin border-2 text-base py-3 px-6 rounded border-[#21E786] hover:opacity-80">
                Whitelist Now
              </button>
            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default Slider;
