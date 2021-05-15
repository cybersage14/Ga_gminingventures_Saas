import React from "react";

import "./index.scss";

const Hero = ({ title, slogan, image }) => {
  return (
    <div className={`hero-container`}>
      <div className={`flex flex-col lg:flex-row h-full items-center`}>
        <div className="w-full lg:w-1/2 flex-1 flex flex-col justify-center pl-8 lg:pl-24">
          {title && (
            <h1 className="text-5xl lg:text-6xl mb-1 text-white">{title}</h1>
          )}
          {slogan && (
            <h2 className="text-xl lg:text-2xl text-secondary uppercase w-10/12 lg:w-3/5">
              {slogan}
            </h2>
          )}
        </div>
        <div
          style={{
            backgroundImage: `url(${image?.file?.url})`,
          }}
          className={`w-1/2 hero-image`}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
