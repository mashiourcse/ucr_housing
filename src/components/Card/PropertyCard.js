import React from 'react'
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

export const PropertyCard = () => {
  return (
    <div className="md:h-[518px] h-[522px] relative w-full">
                        <div className="absolute bg-white-A700 flex flex-col gap-[18px] h-max inset-[0] justify-center m-auto pt-[300px] rounded-[26px] shadow-bs3 w-full">
                          <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[27px] mr-[46px] w-4/5 md:w-full">
                            <Text
                              className="capitalize sm:text-[19px] md:text-[21px] text-[23px] text-black-900 tracking-[-0.64px] w-full"
                              size="txtDMSansBold23"
                            >
                              UCR, Riverside Area
                            </Text>
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="capitalize text-gray-600 text-lg tracking-[-0.64px]"
                                size="txtDMSansRegular18Gray600"
                              >
                                Private Room
                              </Text>
                              <Text
                                className="capitalize sm:text-[21.55px] md:text-[23.55px] text-[25.55px] text-deep_orange-600 tracking-[-0.64px]"
                                size="txtDMSansBold2555"
                              >
                                $1200/month
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Line className="bg-gray-300_01 h-px w-full" />
                              <div className="flex flex-row items-center justify-start w-[76%] md:w-full">
                                <Img
                                  className="h-[11px]"
                                  src="images/img_car.svg"
                                  alt="car"
                                />
                                <Text
                                  className="ml-2.5 text-[18.1px] text-black-900 tracking-[-0.45px]"
                                  size="txtDMSansBold181"
                                >
                                  4
                                </Text>
                                <Line className="bg-gray-300_01 h-[63px] ml-10 w-px" />
                                <Img
                                  className="h-[17px] ml-[39px] w-[17px]"
                                  src="images/img_shower.svg"
                                  alt="shower"
                                />
                                <Text
                                  className="ml-2.5 text-[18.1px] text-black-900 tracking-[-0.45px]"
                                  size="txtDMSansBold181"
                                >
                                  2
                                </Text>
                                <Line className="bg-gray-300_01 h-[63px] ml-[41px] w-px" />
                                <Img
                                  className="h-[17px] ml-[34px] w-[17px]"
                                  src="images/img_size.svg"
                                  alt="size"
                                />
                                <Text
                                  className="ml-2.5 text-[18.1px] text-black-900 tracking-[-0.45px]"
                                  size="txtDMSansBold181"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[283px] inset-x-[0] mx-auto object-cover rounded-tl-[26px] rounded-tr-[26px] top-[0] w-full"
                          src="images/img_unsplashehit1hg4hs.png"
                          alt="unsplashehit1hg"
                        />
                      </div>
  )
}
