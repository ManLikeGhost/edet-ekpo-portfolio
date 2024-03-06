import React from "react";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2024 | Edet Ekpo</p>
        <p className="hidden sm:block">Web Developer</p>
        <p className="hidden sm:block">Graphic Designer</p>
        <p className="hidden sm:block">Mobile Developer</p>
        {/* <p className="hidden sm:block">Designed by @ernestechie</p> */}
      </div>
    </div>
  );
};

export default Footer;
