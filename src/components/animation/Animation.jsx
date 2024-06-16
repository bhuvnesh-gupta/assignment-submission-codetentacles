import React from "react";
import { useInView } from "react-intersection-observer";

const Animation = ({ children, animationType }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,

  const animationClasses = {
    fadeInUp: "transition-all duration-1000 opacity-0 transform translate-y-20",
    fadeInLeft:
      "transition-all duration-1000 opacity-0 transform translate-x-20",
    fadeInRight:
      "transition-all duration-1000 opacity-0 transform -translate-x-20",
    fadeInDown:
      "transition-all duration-1000 opacity-0 transform -translate-y-20",
    zoomIn: "transition-all duration-1000 opacity-0 transform scale-75",
  };

  const inViewClasses = {
    fadeInUp: "opacity-100 transform translate-y-0",
    fadeInLeft: "opacity-100 transform translate-x-0",
    fadeInRight: "opacity-100 transform -translate-x-0",
    fadeInDown: "opacity-100 transform -translate-y-0",
    zoomIn: "opacity-100 transform scale-100",
  };

  const baseClasses = animationClasses[animationType] || "";
  const activeClasses = inView ? inViewClasses[animationType] || "" : "";

  return (
    <div ref={ref} className={`${baseClasses} ${activeClasses}`}>
      {children}
    </div>
  );
};

export default Animation;
