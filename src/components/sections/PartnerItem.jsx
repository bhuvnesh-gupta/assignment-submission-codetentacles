// src/components/PartnerItem.jsx
import React from "react";

const PartnerItem = ({ logo, name }) => {
  return (
    <div className="flex zoomin items-center m-auto justify-center pt-[20px] pb-[20px] pr-[24px] pl-[24px] rounded hover:opacity-50 bg-[#040b11]">
      <img src={logo} alt={name} className="max-h-12" />
    </div>
  );
};

export default PartnerItem;
