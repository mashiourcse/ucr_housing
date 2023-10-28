import React from "react";
import { PropertyCard } from "components/Card/PropertyCard";
import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Text,
  TextArea,
} from "components";
import LandingPageColumncover from "components/LandingPageColumncover";
import LandingPagePagination from "components/LandingPagePagination";

const optionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-dmsans sm:gap-10 md:gap-10 gap-[93px] items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:h-[1215px] h-[790px] md:px-5 relative w-full">
              <Img
                className="h-[790px] m-auto object-cover w-full"
                src="images/img_etiennebeaureg.png"
                alt="etiennebeaureg"
              />
              <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[19px] w-full">
                <div className="flex flex-col items-start justify-start mb-[151px] w-[86%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[72%] md:w-full">
                    {/* <Img
                      className="h-[50px] sm:h-auto object-cover w-[18%] md:w-full"
                      src="images/img_logo1.png"
                      alt="logoOne"
                    /> */}
                    <Text
                      className="md:ml-[0] ml-[226px] md:mt-0 mt-[25px] text-lg text-white-A700"
                      size="txtDMSansMedium18"
                    >
                      Home
                    </Text>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[74px] md:mt-0 mt-[25px]">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtDMSansRegular18"
                      >
                        Landloard
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-14 md:ml-[0] md:mt-0 mt-[25px]">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtDMSansRegular18"
                      >
                        Tenants
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[57px] md:mt-0 mt-[25px]">
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtDMSansRegular18">Contact Us</Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col mt-[22px] relative w-full">
                    <Line className="bg-white-A700 h-px mx-auto w-full" />
                    <Line className="bg-white-A700 h-0.5 mb-auto ml-[353px] mt-[-0.5px] w-[8%] z-[1]" />
                  </div>
                  <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between mt-[77px] w-[98%] md:w-full">
                    <Text
                      className="capitalize leading-[70.00px] sm:text-[38px] md:text-[44px] text-[52px] text-white-A700 tracking-[-1.00px]"
                      size="txtInterBold52"
                    >
                      The most affortable place to stay in the UCR Riverside Area
                    </Text>
                    <div className="flex flex-col font-poppins gap-[21px] items-center justify-start">
                      <Img
                        className="h-[340px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                        src="images/img_rectangle1.png"
                        alt="rectangleOne"
                      />
                      <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-col items-center justify-start p-[15px] rounded-[10px] w-full">
                        <div className="flex flex-row items-center justify-start w-[97%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-[35%]">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Button
                                className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[128px]"
                                rightIcon={
                                  <div className="mt-[5px] mb-[9px] ml-3 bg-blue_gray-900">
                                    <Img
                                      src="images/img_vector.svg"
                                      alt="Vector"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="gray_50"
                                size="xs"
                                variant="fill"
                              >
                                <div className="font-medium text-left text-sm tracking-[0.20px]">
                                  All Type
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[49%]">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Input
                                name="dropdowntoggle"
                                placeholder="Neighborhood"
                                className="!placeholder:text-blue_gray-900 !text-blue_gray-900 font-medium p-0 text-left text-sm tracking-[0.20px] w-full"
                                wrapClassName="border border-gray-300 border-solid flex w-full"
                                suffix={
                                  <div className="mt-[5px] mb-[9px] ml-[22px] sm:w-full sm:mx-0 w-[6%] bg-blue_gray-900">
                                    <Img
                                      className="my-auto"
                                      src="images/img_vector.svg"
                                      alt="Vector"
                                    />
                                  </div>
                                }
                                shape="square"
                                size="sm"
                              ></Input>
                            </div>
                          </div>
                          <Img
                            className="h-[58px] w-[59px]"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col font-inter items-end md:px-10 sm:px-5 px-[61px] w-full">
          <div className="flex flex-col items-center justify-start pt-3 w-[96%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                size="txtInterExtraBold36"
              >
                minimum living cost 
              </Text>
              <Line className="bg-deep_orange-600 h-[3px] w-[31%]" />
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[41px] w-full">
                <Img
                  className="h-[521px] md:h-auto object-cover rounded-br-[50px] rounded-tl-[50px]"
                  src="images/img_unsplashogmf8o53lee.png"
                  alt="unsplashogmf8oFive"
                />
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[74%] md:w-full">
                      <div className="bg-white-A700 flex flex-col h-[77px] items-center justify-start p-4 rounded-[10px] shadow-bs1 w-[77px]">
                        <Img
                          className="h-[45px] w-[45px]"
                          src="images/img_moneydollarcircleline.svg"
                          alt="moneydollarcirc"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col h-[77px] items-center justify-start sm:ml-[0] ml-[170px] p-[15px] rounded-[10px] shadow-bs1 w-[77px]">
                        <Img
                          className="h-[45px] w-[46px]"
                          src="images/img_communityline1.svg"
                          alt="communitylineOne"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col h-[77px] items-center justify-start sm:ml-[0] ml-[190px] p-4 rounded-[10px] shadow-bs1 w-[77px]">
                        <Img
                          className="h-[45px] w-[45px]"
                          src="images/img_stackline1.svg"
                          alt="stacklineOne"
                        />
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[21px] w-full">
                      <Text
                        className="capitalize leading-[35.00px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtInterSemiBold26"
                      >
                        <>
                          Pay as Little
                          <br />
                          as possible!
                        </>
                      </Text>
                      <Text
                        className="capitalize leading-[35.00px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtInterSemiBold26"
                      >
                        <>
                          Enjoy wisdom
                          <br />
                          of community!
                        </>
                      </Text>
                      <Text
                        className="capitalize leading-[35.00px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtInterSemiBold26"
                      >
                        <>
                          Let&#39;s somebody else
                          <br />
                          take care of Landlord!
                        </>
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-[170px] grid sm:grid-cols-1 grid-cols-3 mt-[92px] w-[74%]"
                      orientation="horizontal"
                    >
                      <div className="bg-white-A700 flex flex-col h-[77px] items-center justify-start p-4 rounded-[10px] shadow-bs1 w-full">
                        <Img
                          className="h-[45px] w-[45px]"
                          src="images/img_plantline1.svg"
                          alt="plantlineOne"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col h-[77px] items-center justify-start p-4 rounded-[10px] shadow-bs1 w-full">
                        <Img
                          className="h-[45px] w-[45px]"
                          src="images/img_shieldstarline.svg"
                          alt="shieldstarline"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col h-[77px] items-center justify-start p-4 rounded-[10px] shadow-bs1 w-full">
                        <Img
                          className="h-[45px] w-[45px]"
                          src="images/img_eye2line1.svg"
                          alt="eye2lineOne"
                        />
                      </div>
                    </List>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[21px] w-[85%] md:w-full">
                      <Text
                        className="capitalize leading-[35.00px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtInterSemiBold26"
                      >
                        <>
                          Enjoy peaceful
                          <br />
                          Environment!
                        </>
                      </Text>
                      <Text
                        className="capitalize leading-[35.00px] md:ml-[0] ml-[59px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtInterSemiBold26"
                      >
                        <>
                          Stay Safe!
                          <br />
                          Save Money!
                        </>
                      </Text>
                      <Text
                        className="capitalize leading-[35.00px] md:ml-[0] ml-[104px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtInterSemiBold26"
                      >
                        <>
                          Pay for what
                          <br />
                          you use !
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col font-dmsans items-center w-full">
          <div className="h-[1598px] md:h-[1813px] sm:h-[3615px] pb-[60px] md:px-5 relative w-full">
            <div className="bg-gray-100 h-[1538px] m-auto w-full"></div>
            <div className="absolute flex flex-col md:gap-10 gap-[69px] inset-x-[0] items-center justify-start mx-auto top-[4%] w-4/5">
              <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <div className="flex flex-col font-inter items-start justify-start mb-[3px] sm:mt-0 mt-[13px]">
                  <Text
                    className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                    size="txtInterExtraBold36"
                  >
                    list of properties
                  </Text>
                  <Line className="bg-deep_orange-600 h-[3px] w-[27%]" />
                </div>
                <Button
                  className="cursor-pointer font-manrope font-medium leading-[normal] min-w-[200px] rounded-[5px] shadow-bs2 text-[17px] text-center"
                  color="deep_orange_600"
                  size="xs"
                  variant="fill"
                >
                  View All Property
                </Button>
              </div>
              <div className="flex flex-col md:gap-10 gap-[84px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:gap-5 gap-[33px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                      {/* card */}
                      <PropertyCard />
                      <PropertyCard />
                      <PropertyCard />
                      <PropertyCard />
                      <PropertyCard />
                      <PropertyCard />
                      
                      
                    </div>
                  </div>
                </div>
                <LandingPagePagination className="bg-white-A700 border border-gray-400 border-solid flex flex-col font-montserrat items-center justify-start rounded-md shadow-bs w-[29%] md:w-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter items-center justify-start max-w-[1130px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[51%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-end justify-start w-[95%] md:w-full">
                    <div className="h-[334px] relative w-[47%] sm:w-full">
                      <Img
                        className="h-[334px] m-auto object-cover rounded-[20px] w-full"
                        src="images/img_unsplashnetpvjjnpvo.png"
                        alt="unsplashnetpvjj"
                      />
                      <div className="absolute bg-black-900_33 flex flex-col h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 rounded-[20px] w-full">
                        <Text
                          className="mb-[254px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtInterSemiBold24"
                        >
                          Flexible Leases
                        </Text>
                      </div>
                    </div>
                    <div className="h-[270px] md:h-[334px] sm:mt-0 mt-16 relative w-[270px]">
                      <Img
                        className="h-[270px] m-auto object-cover rounded-[20px] w-[270px]"
                        src="images/img_image2.png"
                        alt="imageTwo"
                      />
                      <div className="absolute bg-black-900_33 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[30px] sm:px-5 rounded-[20px] w-[270px]">
                        <Text
                          className="leading-[20.00px] mb-[162px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtInterSemiBold24"
                        >
                          <>
                            7-Day Happiness
                            <br />
                            Guaranteed
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-between w-full">
                    <div className="md:h-[285px] h-[286px] relative w-[38%] sm:w-full">
                      <Img
                        className="absolute h-[285px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                        src="images/img_unsplashuoomllxe6ge.png"
                        alt="unsplashuoomllx"
                      />
                      <div className="absolute bg-black-900_33 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[18px] rounded-[20px] w-full">
                        <Text
                          className="leading-[20.00px] mb-[189px] mt-3 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtInterSemiBold24"
                        >
                          <>
                            Monthly House
                            <br />
                            Cleaning
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="h-[356px] relative w-3/5 sm:w-full">
                      <Img
                        className="h-[356px] m-auto object-cover rounded-[20px] w-full"
                        src="images/img_unsplashxdwkfahi97c.png"
                        alt="unsplashxdwkfah"
                      />
                      <div className="absolute bg-black-900_33 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[30px] sm:px-5 rounded-[20px] w-full">
                        <Text
                          className="leading-[20.00px] mb-[248px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtInterSemiBold24"
                        >
                          <>
                            Choose Your
                            <br />
                            Own Roommate
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start md:px-10 px-12 sm:px-5 w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[54.00px] max-w-[444px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                      size="txtInterExtraBold40"
                    >
                      Flexibility and options to suit your lifestyle.
                    </Text>
                    <Text
                      className="leading-[32.00px] max-w-[444px] md:max-w-full text-gray-900 text-lg"
                      size="txtInterRegular18"
                    >
                      You need it? We got it. We make finding your next home
                      easy, comfortable, and simple. From our happiness
                      guarantee to our selective roommate finder option. We
                      provide you the flexibility that you most desire.
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold min-w-[185px] rounded-[13px] text-center text-lg"
                    color="deep_orange_600"
                    size="xs"
                    variant="fill"
                  >
                    Search Rooms
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter gap-[35px] items-center justify-start max-w-[1130px] mt-[110px] mx-auto pt-[3px] md:px-5 w-full">
            <Text
              className="capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterMedium24"
            >
              Your property with us and be Confident that Your Room will be
              Filled Out!
            </Text>
            <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start p-[43px] md:px-10 sm:px-5 rounded-[10px] shadow-bs4 w-full">
              <div className="flex flex-col gap-14 items-center justify-start mb-2 w-[97%] md:w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-deep_orange-600 tracking-[0.10px]"
                  size="txtPoppinsBold28"
                >
                  Add A New Property
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col font-poppins items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[81%] md:w-full">
                        <Text
                          className="text-[17px] text-blue_gray-900 tracking-[0.20px]"
                          size="txtPoppinsSemiBold17"
                        >
                          <span className="text-blue_gray-900 font-poppins text-left font-semibold">
                            Name{" "}
                          </span>
                          <span className="text-deep_orange-600 font-poppins text-left font-semibold">
                            *
                          </span>
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[276px] text-[17px] text-blue_gray-900 tracking-[0.20px]"
                          size="txtPoppinsSemiBold17"
                        >
                          <span className="text-blue_gray-900 font-poppins text-left font-semibold">
                            Address{" "}
                          </span>
                          <span className="text-deep_orange-600 font-poppins text-left font-semibold">
                            *
                          </span>
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[257px] text-[17px] text-blue_gray-900 tracking-[0.20px]"
                          size="txtPoppinsSemiBold17"
                        >
                          <span className="text-blue_gray-900 font-poppins text-left font-semibold">
                            Unit Number{" "}
                          </span>
                          <span className="text-deep_orange-600 font-poppins text-left font-semibold">
                            *
                          </span>
                        </Text>
                      </div>
                      <div className="font-inter gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-1 w-full">
                        <Input
                          name="inputformcontro"
                          placeholder="Enter Name"
                          className="p-0 placeholder:text-gray-600_01 text-left text-sm tracking-[0.20px] w-full"
                          wrapClassName="border border-gray-300 border-solid flex-1 w-full"
                          type="text"
                        ></Input>
                        <Input
                          name="inputformcontro_One"
                          placeholder="Enter Address"
                          className="p-0 placeholder:text-gray-600_01 text-left text-sm tracking-[0.20px] w-full"
                          wrapClassName="border border-gray-300 border-solid flex-1 w-full"
                        ></Input>
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <Input
                            name="inputformcontro_Two"
                            placeholder="Enter Unit"
                            className="p-0 placeholder:text-gray-600_01 text-left text-sm tracking-[0.20px] w-full"
                            wrapClassName="border border-gray-300 border-solid w-full"
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start mt-[23px] w-4/5 md:w-full">
                    <Text
                      className="text-[17px] text-blue_gray-900 tracking-[0.20px]"
                      size="txtPoppinsSemiBold17"
                    >
                      <span className="text-blue_gray-900 font-poppins text-left font-semibold">
                        City{" "}
                      </span>
                      <span className="text-deep_orange-600 font-poppins text-left font-semibold">
                        *
                      </span>
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[294px] text-[17px] text-blue_gray-900 tracking-[0.20px]"
                      size="txtPoppinsSemiBold17"
                    >
                      <span className="text-blue_gray-900 font-poppins text-left font-semibold">
                        State{" "}
                      </span>
                      <span className="text-deep_orange-600 font-poppins text-left font-semibold">
                        *
                      </span>
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[283px] md:mt-0 mt-0.5 text-[17px] text-blue_gray-900 tracking-[0.20px]"
                      size="txtPoppinsSemiBold17"
                    >
                      <span className="text-blue_gray-900 font-poppins text-left font-semibold">
                        Room Type{" "}
                      </span>
                      <span className="text-deep_orange-600 font-poppins text-left font-semibold">
                        *
                      </span>
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row font-poppins gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-0.5 w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <SelectBox
                        className="border border-gray-300_02 border-solid text-left text-sm tracking-[0.20px] w-full"
                        placeholderClassName="text-gray-600_01"
                        indicator={
                          <Img
                            className="h-2 mr-[0] w-3.5"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="option"
                        options={optionOptionsList}
                        isSearchable={false}
                        placeholder="Select City"
                        shape="round"
                        color="gray_50"
                        size="xs"
                        variant="fill"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <SelectBox
                        className="border border-gray-300_02 border-solid text-left text-sm tracking-[0.20px] w-full"
                        placeholderClassName="text-gray-600_01"
                        indicator={
                          <Img
                            className="h-2 mr-[0] w-3.5"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="option"
                        options={optionOptionsList1}
                        isSearchable={false}
                        placeholder="Select State"
                        shape="round"
                        color="gray_50"
                        size="xs"
                        variant="fill"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <SelectBox
                        className="border border-gray-300_02 border-solid text-left text-sm tracking-[0.20px] w-full"
                        placeholderClassName="text-gray-600_01"
                        indicator={
                          <Img
                            className="h-2 mr-[0] w-3.5"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="option"
                        options={optionOptionsList2}
                        isSearchable={false}
                        placeholder="Select Room Type"
                        shape="round"
                        color="gray_50"
                        size="xs"
                        variant="fill"
                      />
                    </div>
                  </List>
                  <div className="flex flex-row font-poppins items-start justify-between mt-[23px] w-[46%] md:w-full">
                    <Text
                      className="mb-0.5 text-[17px] text-blue_gray-900 tracking-[0.20px]"
                      size="txtPoppinsSemiBold17"
                    >
                      <span className="text-blue_gray-900 font-poppins text-left font-semibold">
                        Price{" "}
                      </span>
                      <span className="text-deep_orange-600 font-poppins text-left font-semibold">
                        *
                      </span>
                    </Text>
                    <Text
                      className="mt-0.5 text-[17px] text-blue_gray-900 tracking-[0.20px]"
                      size="txtPoppinsSemiBold17"
                    >
                      <span className="text-blue_gray-900 font-poppins text-left font-semibold">
                        Room Type{" "}
                      </span>
                      <span className="text-deep_orange-600 font-poppins text-left font-semibold">
                        *
                      </span>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-inter gap-[25px] items-center justify-start mt-0.5 w-[66%] md:w-full">
                    <Input
                      name="inputformcontro_Three"
                      placeholder="Enter Price"
                      className="p-0 placeholder:text-gray-600_01 text-left text-sm tracking-[0.20px] w-full"
                      wrapClassName="border border-gray-300 border-solid w-[49%] md:w-full"
                    ></Input>
                    <div className="flex flex-col font-poppins items-center justify-start w-[49%] md:w-full">
                      <SelectBox
                        className="border border-gray-300_02 border-solid text-left text-sm tracking-[0.20px] w-full"
                        placeholderClassName="text-gray-600_01"
                        indicator={
                          <Img
                            className="h-2 mr-[0] w-3.5"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="option"
                        options={optionOptionsList3}
                        isSearchable={false}
                        placeholder="Select Room Type"
                        shape="round"
                        color="gray_50"
                        size="xs"
                        variant="fill"
                      />
                    </div>
                  </div>
                  <Text
                    className="mt-[25px] text-[17px] text-blue_gray-900 tracking-[0.20px]"
                    size="txtPoppinsSemiBold17"
                  >
                    <span className="text-blue_gray-900 font-poppins text-left font-semibold">
                      Description{" "}
                    </span>
                    <span className="text-deep_orange-600 font-poppins text-left font-semibold">
                      *
                    </span>
                  </Text>
                  <TextArea
                    className="bg-gray-50 border border-gray-300 border-solid font-inter mt-0.5 pb-[35px] pl-[21px] pr-[35px] pt-[19px] sm:px-5 rounded-[5px] placeholder:text-gray-600_01 text-gray-600_01 text-left text-sm tracking-[0.20px] w-full"
                    name="inputformcontro_Four"
                    placeholder="Enter Description"
                    name="inputformcontro_Four"
                    placeholder="Enter Description"
                  ></TextArea>
                  <Text
                    className="capitalize mt-[27px] text-black-900 text-lg"
                    size="txtPoppinsSemiBold18"
                  >
                    Upload Photos
                  </Text>
                  <div className="border border-dashed border-deep_orange-600 flex flex-col font-poppins items-center justify-end mt-0.5 p-[25px] sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start mt-[3px]">
                      <Text
                        className="text-base text-black-900 text-center"
                        size="txtPoppinsMedium16"
                      >
                        <span className="text-black-900 font-poppins font-medium">
                          Drag your images here, or{" "}
                        </span>
                        <span className="text-deep_orange-600 font-poppins font-bold">
                          browse
                        </span>
                      </Text>
                      <Text
                        className="text-black-900_7f text-center text-xs"
                        size="txtPoppinsMedium12"
                      >
                        Supported: JPG, JPEG, PNG
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-inter font-medium min-w-[513px] sm:min-w-full md:ml-[0] ml-[246px] mt-[55px] rounded-[9px] sm:text-[17.79px] md:text-[19.79px] text-[21.79px] text-center tracking-[0.18px]"
                    color="deep_orange_600"
                    size="sm"
                    variant="fill"
                  >
                    Add New Property
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-deep_orange-600_11 flex flex-col font-inter items-end justify-start mt-[110px] pl-1.5 pt-1.5 w-full">
            <div className="flex md:flex-col flex-row gap-[38px] items-center justify-end md:px-5 w-[95%] md:w-full">
              <div className="flex flex-col gap-[26px] justify-start w-[51%] md:w-full">
                <div className="md:h-[216px] h-[248px] relative w-full">
                  <Img
                    className="absolute h-[60px] left-[0] top-[0]"
                    src="images/img_.svg"
                    alt="Four"
                  />
                  <Text
                    className="absolute bottom-[0] leading-[36.00px] right-[0] sm:text-[17px] md:text-[19px] text-[21px] text-gray-900 w-[93%] sm:w-full"
                    size="txtInterRegular21"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam interdum nisl et nunc facilisis, a commodo eros
                    mollis. Nunc vel pellentesque est. Curabitur at odio sit
                    amet libero vulputate efficitur ac nec justo. Nulla vitae
                    mauris quam. Nulla quam massa, faucibus id pretium ac,
                    mattis eu velit. Donec sed risus a lacus fringilla finibus.
                  </Text>
                </div>
                <div className="flex flex-col md:gap-10 gap-[75px] items-start justify-start md:ml-[0] ml-[49px] w-[39%] md:w-full">
                  <div className="flex flex-row gap-[19px] items-center justify-between w-full">
                    <Img
                      className="h-[61px] md:h-auto rounded-[50%] w-[61px]"
                      src="images/img_ellipse4.png"
                      alt="ellipseFour"
                    />
                    <div className="flex flex-col gap-[5px] items-center justify-start w-auto">
                      <Text
                        className="text-deep_orange-600 text-lg w-auto"
                        size="txtInterBold18"
                      >
                        Harry Wilson
                      </Text>
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtInterRegular16"
                      >
                        Property Owner
                      </Text>
                    </div>
                  </div>
                  <PagerIndicator
                    className="flex gap-3 h-2.5 items-center justify-start w-[54px]"
                    count={3}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-deep_orange-600 w-2.5"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-300_03 w-2.5"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                </div>
              </div>
              <LandingPageColumncover className="bg-white-A700 border border-gray-300_04 border-solid flex flex-col items-center justify-start rounded-[5px] w-[47%] md:w-full" />
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col font-inter items-center justify-center mt-[110px] p-[91px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1258px] mx-auto my-2 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Line className="bg-deep_orange-600 h-0.5 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[90px] w-[76%] md:w-full">
                  <Text
                    className="capitalize sm:mt-0 mt-[22px] sm:text-[38px] md:text-[44px] text-[52px] text-black-900 tracking-[-1.00px]"
                    size="txtInterBold52Black900"
                  >
                    
                  </Text>
                  <div className="flex flex-col font-assistant items-center justify-start">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-4 items-start justify-start w-[77%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_location.svg"
                          alt="location"
                        />
                        <Text
                          className="mt-[3px] text-gray-900_01 text-sm"
                          size="txtAssistantRegular14"
                        >
                          UCR, Riverside
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-4 w-[81%] md:w-full">
                        <div className="flex flex-row gap-4 items-start justify-start w-[34%]">
                          <Img
                            className="h-6 w-6"
                            src="images/img_call.svg"
                            alt="call"
                          />
                          <Text
                            className="mt-[3px] text-gray-900_01 text-sm"
                            size="txtAssistantRegular14"
                          >
                            (123) 456-7890
                          </Text>
                        </div>
                        <div className="flex flex-row gap-4 items-start justify-start w-[34%]">
                          <Img
                            className="h-6 w-6"
                            src="images/img_printer.svg"
                            alt="printer"
                          />
                          <Text
                            className="mt-[3px] text-gray-900_01 text-sm"
                            size="txtAssistantRegular14"
                          >
                            (123) 456-7890
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between mt-10 w-full">
                        <Text
                          className="text-gray-900_87 text-sm"
                          size="txtAssistantRegular14Gray90087"
                        >
                          Social Media
                        </Text>
                        <div className="flex h-6 justify-end relative w-[78%] sm:w-full">
                          <div className="absolute flex flex-row gap-[30px] h-max inset-y-[0] items-start justify-center left-[27%] my-auto w-[19%]">
                            <div className="flex flex-col items-center justify-start w-[28%]">
                              <Img
                                className="h-4"
                                src="images/img_linkedin.svg"
                                alt="linkedin"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start mt-0.5 w-[28%]">
                              <Img
                                className="h-[13px]"
                                src="images/img_youtube.svg"
                                alt="youtube"
                              />
                            </div>
                          </div>
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[40%] w-6"
                            src="images/img_instagram.svg"
                            alt="instagram"
                          />
                          <div className="flex flex-col h-full items-center justify-start mb-1.5 ml-auto mr-[99px] mt-auto w-[6%]">
                            <Img
                              className="h-[11px]"
                              src="images/img_google.svg"
                              alt="google"
                            />
                          </div>
                          <div className="absolute flex flex-row h-full inset-[0] items-start justify-center m-auto w-full">
                            <div className="flex flex-col h-[18px] items-center justify-start mt-[3px] w-[18px]">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_facebook.svg"
                                alt="facebook"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start ml-[30px] mt-[5px] w-[6%]">
                              <Img
                                className="h-[15px]"
                                src="images/img_twitter.svg"
                                alt="twitter"
                              />
                            </div>
                            <Img
                              className="h-6 ml-[219px] w-6"
                              src="images/img_whatsapp.svg"
                              alt="whatsapp"
                            />
                            <Img
                              className="h-6 ml-6 w-6"
                              src="images/img_signal.svg"
                              alt="signal"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-start mt-20 w-[86%] md:w-full">
                  <Line className="bg-blue-A100_6c h-px w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900_01 text-sm uppercase"
                      size="txtInterRegular14"
                    >
                      About us
                    </Text>
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[39px] text-gray-900_01 text-sm uppercase"
                    >
                      <Text size="txtInterRegular14">Contact us</Text>
                    </a>
                    <Text
                      className="sm:ml-[0] ml-[34px] text-gray-900_01 text-sm uppercase"
                      size="txtInterRegular14"
                    >
                      Help
                    </Text>
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[46px] text-gray-900_01 text-sm uppercase"
                    >
                      <Text size="txtInterRegular14">Privacy Policy</Text>
                    </a>
                    <Text
                      className="sm:ml-[0] ml-[29px] text-gray-900_01 text-sm uppercase"
                      size="txtInterRegular14"
                    >
                      Disclaimer
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[154px] text-gray-900_87 text-right text-sm"
                      size="txtInterRegular14Gray90087"
                    >
                      Copyright © 2023 UCR Housing web. All rights reserved
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
