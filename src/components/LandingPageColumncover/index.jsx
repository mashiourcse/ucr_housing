import React from "react";

import { Img } from "components";

const LandingPageColumncover = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[590px] relative rounded-[5px] w-full">
          <Img
            className="h-[590px] m-auto object-cover rounded-[5px] w-full"
            src="images/img_cover.png"
            alt="cover"
          />
          <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[248px] md:px-10 sm:px-5 rounded-[5px] w-full">
            <div className="bg-deep_orange-600 flex flex-col items-center justify-start sm:px-5 px-[36.8px] py-[34.8px] rounded-[50%] w-[92px]">
              <Img
                className="h-[23px] w-[19px]"
                src="images/img_icnplayicnsm.svg"
                alt="icnplayicnsm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageColumncover.defaultProps = {};

export default LandingPageColumncover;
