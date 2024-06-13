import React from "react";

import Alien1 from "../assets/images/Alien1.png";
import Alien2 from "../assets/images/Alien2.png";
import Alien3 from "../assets/images/Alien3.png";
import Alien4 from "../assets/images/Alien4.png";
import Alien5 from "../assets/images/Alien5.png";
import Alien6 from "../assets/images/Alien6.png";
import Alien7 from "../assets/images/Alien7.png";
import Alien8 from "../assets/images/Alien8.png";
import { LINKS } from "../constants/links";
import Animation from "./animation/Animation";

const HotCollection = () => {
  return (
    <Animation animationType="fadeInUp">
      <div className="mt-[60px]" id={LINKS.COLLECTION}>
        <div className="text-center:sm :md  ml-[68px] font-normal text-[44px] text-[#ffffff]">
          Hot Collections
        </div>
        <div className="flex flex-col gap-5 justify-center items-center mt-[60px]">
          <div className="flex flex-wrap justify-center   gap-[30px]">
            
            <div className="box zoomin ">
              <img className="p-5" src={Alien1} alt="Alien 1" />
              <p className="text-xl text-[#ffffff] pt-[14px] pb-[20px] pl-[20px]">
                sKISIRS #02
              </p>
            </div>

       
            <div className="box zoomin">
              <img className="p-5" src={Alien2} alt="Alien 2" />
              <p className="text-xl text-[#ffffff] pt-[14px] pb-[20px] pl-[20px]">
                sKELATON #01
              </p>
            </div>

          
            <div className="box zoomin">
              <img className="p-5" src={Alien3} alt="Alien 3" />
              <p className="text-xl text-[#ffffff] pt-[14px] pb-[20px] pl-[20px]">
                sKISIRS #02
              </p>
            </div>

           
            <div className="box zoomin">
              <img className="p-5" src={Alien4} alt="Alien 4" />
              <p className="text-xl text-[#ffffff] pt-[14px] pb-[20px] pl-[20px]">
                sKISIRS #02
              </p>
            </div>

        
          </div>
          <div className="flex flex-wrap justify-center gap-[30px]">
            <div className="box zoomin">
              <img className="p-5" src={Alien5} alt="Alien 5" />
              <p className="text-xl text-[#ffffff] pt-[14px] pb-[20px] pl-[20px]">
                sKISIRS #02
              </p>
            </div>

           
            <div className="box zoomin">
              <img className="p-5" src={Alien6} alt="Alien 6" />
              <p className="text-xl text-[#ffffff] pt-[14px] pb-[20px] pl-[20px]">
                sKELATON #01
              </p>
            </div>

            
            <div className="box zoomin">
              <img className="p-5" src={Alien7} alt="Alien 7" />
              <p className="text-xl text-[#ffffff] pt-[14px] pb-[20px] pl-[20px]">
                sKISIRS #02
              </p>
            </div>

         
            <div className="box zoomin">
              <img className="p-5" src={Alien8} alt="Alien 8" />
              <p className="text-xl text-[#ffffff] pt-[14px] pb-[20px] pl-[20px]">
                sKISIRS #02
              </p>
            </div>
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default HotCollection;
