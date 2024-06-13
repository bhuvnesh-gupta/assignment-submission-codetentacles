import React from "react";

import Animation from "./animation/Animation";
import cards from "../assets/svg/cards.svg";
import cart from "../assets/svg/cart.svg";
import paper from "../assets/svg/paper.svg";
import piggybank from "../assets/svg/piggybank.svg";

const HowTo = () => {
  return (
    <Animation animationType="fadeInUp">
      <div className="flex flex-col  gap-[60px] justify-center items-center mt-[180px]">
        <div className="lg:text-[44px] sm:text-2xl md:text-3xl  font-normal text-[#ffffff]">
          HOW TO <span className="text-[#21E786]">NFTALIEN</span> WORK
        </div>

        <div className="flex  flex-wrap justify-center gap-[30px]">
          <div className="box box-1 zoomin flex  flex-col justify-center items-center pt-[30px] pb-[26px] pl-[52px] pr-[52px] leading-5W">
            <img src={cards} alt="cards" />
            <h5 className=" text-[#21E786] text-[22px]">Step 1</h5>
            <p className="text-[#ffffff] text-2xl">Connect Your Wallet</p>
          </div>
          <div className="box box-2 zoomin flex flex-col justify-center items-center pt-[30px] pb-[26px] pl-[52px] pr-[52px]  leading-5 ">
            <img src={paper} alt="paper" />
            <h5 className=" text-[#21E786] text-[22px]">Step 2</h5>
            <p className="text-[#ffffff] text-2xl">Select Your Quality</p>
          </div>
          <div className="box box-3 zoomin flex flex-col justify-center items-center pt-[30px] pb-[26px] pl-[27px] pr-[27px]  leading-5 ">
            <img src={piggybank} alt="piggybank" />
            <h5 className=" text-[#21E786] text-[22px]">Step 3</h5>
            <p className="text-[#ffffff] text-2xl">Confirm the Transaction</p>
          </div>
          <div className="box box-4 zoomin flex flex-col justify-center items-center pt-[30px] pb-[26px] pl-[62px] pr-[62px]  leading-5 ">
            <img src={cart} alt="cart" />
            <h5 className=" text-[#21E786] text-[22px]">Step 4</h5>
            <p className="text-[#ffffff] text-2xl">receive Your NFTs</p>
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default HowTo;
