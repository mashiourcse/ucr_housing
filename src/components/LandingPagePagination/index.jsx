import React from "react";

import { Button } from "components";

const LandingPagePagination = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-start justify-start rounded-md w-auto md:w-full">
          <Button
            className="!text-gray-400 border border-gray-400 border-solid cursor-pointer font-bold font-montserrat min-w-[87px] text-base text-center tracking-[0.10px]"
            shape="square"
            color="gray_100_01"
            size="md"
            variant="fill"
          >
            {props?.firstbutton}
          </Button>
          <Button
            className="!text-deep_orange-600 border border-gray-200 border-solid cursor-pointer font-bold font-montserrat min-w-[47px] text-base text-center tracking-[0.10px]"
            shape="square"
            color="white_A700"
            size="md"
            variant="fill"
          >
            {props?.onebutton}
          </Button>
          <Button
            className="border border-gray-200 border-solid cursor-pointer font-bold font-montserrat min-w-[50px] text-base text-center tracking-[0.10px]"
            shape="square"
            color="deep_orange_600"
            size="md"
            variant="fill"
          >
            {props?.twobutton}
          </Button>
          <Button
            className="!text-deep_orange-600 border border-gray-200 border-solid cursor-pointer font-bold font-montserrat min-w-[50px] text-base text-center tracking-[0.10px]"
            shape="square"
            color="white_A700"
            size="md"
            variant="fill"
          >
            {props?.threebutton}
          </Button>
          <Button
            className="!text-deep_orange-600 border border-gray-200 border-solid cursor-pointer font-bold font-montserrat min-w-[90px] text-base text-center tracking-[0.10px]"
            shape="square"
            color="white_A700"
            size="md"
            variant="fill"
          >
            {props?.nextbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

LandingPagePagination.defaultProps = {
  firstbutton: "First",
  onebutton: "1",
  twobutton: "2",
  threebutton: "3",
  nextbutton: "Next",
};

export default LandingPagePagination;
