import React from "react";

import TrustWallet from "../assets/svg/partner/TrustWallet.svg";
import Binance from "../assets/svg/partner/Binance.svg";
import Coinbase from "../assets/svg/partner/Coinbase.svg";
import DappRadar from "../assets/svg/partner/DappRadar.svg";
import Domains from "../assets/svg/partner/Domains.svg";
import GivingBlock from "../assets/svg/partner/GivingBlock.svg";
import HuobiWallet from "../assets/svg/partner/HuobiWallet.svg";
import Instad from "../assets/svg/partner/Instad.svg";
import LiveCoin from "../assets/svg/partner/LiveCoin.svg";
import Near from "../assets/svg/partner/Near.svg";
import Pillar from "../assets/svg/partner/Pillar.svg";
import Synthetix from "../assets/svg/partner/Synthetix.svg";
import Unstoppable from "../assets/svg/partner/Unstoppable.svg";
import Venly from "../assets/svg/partner/Venly.svg";
import Zapper from "../assets/svg/partner/Zapper.svg";
import Zerion from "../assets/svg/partner/Zerion.svg";
import ATOken from "../assets/svg/partner/ATOken.svg";
import BitPay from "../assets/svg/partner/BitPay.svg";
import { LINKS } from "../constants/links";

const PARTNERS = [
  { name: "Near", logo: Near },
  { name: "Binance Chain", logo: Binance },
  { name: "Coinbase Wallet", logo: Coinbase },
  { name: "Zerion", logo: Zerion },
  { name: "Zapper", logo: Zapper },
  { name: "InstaDapp", logo: Instad },
  { name: "ATOken", logo: ATOken },
  { name: "Trust Wallet", logo: TrustWallet },
  { name: "Giving Block", logo: GivingBlock },
  { name: "Venly", logo: Venly },
  { name: "Pillar", logo: Pillar },
  { name: "DappRadar", logo: DappRadar },
  { name: "Synthetix", logo: Synthetix },
  { name: "Unstoppable", logo: Unstoppable },
  { name: "Live Coin Watch", logo: LiveCoin },
  { name: "BitPay", logo: BitPay },
  { name: "Unstoppable Domains", logo: Domains },
  { name: "Huobi Wallet", logo: HuobiWallet },
];

const Partners = () => {
  return (
    <div
      className=" flex flex-col justify-center items-center pl-[60px] pr-[60px] mt-[130px]   text-[#ffffff] "
      id={LINKS.PARTNERS}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl pb-[58px] font-bold mb-8 ">
          <span className="text-green-500"> BINABOX </span>PARTNER
        </h2>

        <div className="grid grid-cols-1  gap-[30px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className={`flex   zoomin items-center m-auto justify-center pt-[20px] pb-[20px] pr-[24px] pl-[24px] rounded hover:opacity-50 ${
                ((index % 6) % 2 === 0 && Math.floor(index / 6) % 2 === 0) ||
                ((index % 6) % 2 === 1 && Math.floor(index / 6) % 2 === 1)
                  ? "bg-[#040b11]"
                  : "bg-[#141B22]"
              }`}>
              <img src={partner.logo} alt={partner.name} className="max-h-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
