import React from "react";
import { LINKS } from "../constants/links";
import FeatureBox from "./FeatureBox";

const About = () => {
  return (
    <div
      className="about mt-[280px] flex justify-center items-center mx-auto"
      id={LINKS.ABOUT}>
      <div className="max-w-[1420px]">
        <div className="flex justify-center items-center flex-col lg:flex-row text-[#ffffff] m-auto gap-[64px] flex-col:md">
          <div className="zoomin max-w-[50%] lg:max-w-[50% ml-8 justify-center items-center ">
            <h3 className="text-[44px] leading-[56px] m-auto">THE STORY</h3>
            <p className="text-[18px] font-normal poppins m-auto mt-4">
              Our collection's priority is to reward NFT holders by developing
              utilities they can use in their current everyday life. Not in a
              hypothetical future.
            </p>
            <div className="flex flex-wrap  gap-5 mt-10">
              <div>
                <h6 className="text-xl leading-5">Total Items</h6>
                <p className="text-[56px] shadow-sm leading-[68px]">2240+</p>
              </div>
              <div>
                <h6 className="text-xl leading-5">Profiles Whitelisted</h6>
                <p className=" text-[56px] leading-[68px]">1000+</p>
              </div>
            </div>
            <button className="border-2 zoomin text-base pt-3 pb-3 pr-6 pl-6 mt-10 rounded border-[#21E786] hover:opacity-80">
              Read More
            </button>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center  lg:max-w-[50%] gap-4">
            <div>
              <FeatureBox
                number="01"
                title="Daily Tokens"
                description="Earn interstellar tokens passively by staking your collectible NFT."
              />
              <FeatureBox
                number="02"
                title="Exclusive Discounts"
                description="Tokens and NFTs can be used for discounts at top fashion brands."
              />
            </div>
            <div>
              <FeatureBox
                number="03"
                title="VIP Access"
                description="Get exclusive access to upcoming drops and events."
              />
              <FeatureBox
                number="04"
                title="Community Perks"
                description="Join a community of like-minded individuals with exclusive perks."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
