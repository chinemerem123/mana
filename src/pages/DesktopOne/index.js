import React from "react";

import {
  Column,
  Stack,
  Row,
  Button,
  Img,
  Text,
  Grid,
  Line,
  Input,
} from "components";

const DesktopOnePage = () => {
  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-inter items-center justify-start mx-[auto] md:p-[13px] sm:p-[15px] p-[19px] shadow-bs1 w-[100%]">
        <Column className="flex flex-col items-center justify-start max-w-[1399px] sm:mb-[27px] md:mb-[35px] mb-[51px] ml-[auto] mr-[auto] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[725px] relative w-[100%]">
            <Stack className="absolute h-[725px] w-[100%]">
              <Stack className="absolute h-[725px] w-[100%]">
                <Column className="absolute bg-white_A700_7f flex flex-col items-center justify-start md:pb-[11px] sm:pb-[15px] pb-[17px] rounded-radius30 shadow-bs2 top-[0] w-[100%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <header className="w-[100%]">
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[15px] sm:p-[15px] p-[23px] rounded-bl-[0] rounded-br-[0] rounded-tl-[30px] rounded-tr-[30px] shadow-bs3 w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap ml-[11px] md:ml-[7px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%] common-row-list">
                          <ul className="flex flex-row items-center">
                            <li className="w-[auto] mt-[10px] mb-[14px] sm:mb-[10px] sm:w-[100%] md:mb-[9px] md:mt-[6px]">
                              <a
                                href={"javascript:"}
                                className="cursor-pointer hover:font-normal font-normal not-italic text-[20px] text-black_900"
                                rel="noreferrer"
                              >
                                RealEstate
                              </a>
                            </li>
                            <li className="w-[auto] mt-[15px] mb-[14px] ml-[328px] sm:ml-[174px] sm:w-[100%] sm:my-[10px] md:ml-[225px] md:mb-[9px] md:mt-[10px]">
                              <a
                                href={"javascript:"}
                                className="cursor-pointer font-medium hover:font-normal text-[15px] text-black_900"
                                rel="noreferrer"
                              >
                                Home
                              </a>
                            </li>
                            <li className="w-[auto] mt-[15px] mb-[13px] ml-[61px] sm:ml-[32px] sm:w-[100%] sm:my-[10px] md:ml-[41px] md:mb-[8px] md:mt-[10px]">
                              <a
                                href={"javascript:"}
                                className="cursor-pointer font-medium hover:font-normal text-[15px] text-black_900"
                                rel="noreferrer"
                              >
                                Properties
                              </a>
                            </li>
                            <li className="w-[auto] mt-[15px] mb-[13px] ml-[60px] sm:ml-[31px] sm:w-[100%] sm:my-[10px] md:ml-[41px] md:mb-[8px] md:mt-[10px]">
                              <a
                                href={"javascript:"}
                                className="cursor-pointer font-medium hover:font-normal text-[15px] text-black_900"
                                rel="noreferrer"
                              >
                                Agents
                              </a>
                            </li>
                            <li className="w-[auto] mt-[15px] mb-[14px] ml-[68px] sm:ml-[36px] sm:w-[100%] sm:my-[10px] md:ml-[46px] md:mb-[9px] md:mt-[10px]">
                              <a
                                href={"javascript:"}
                                className="cursor-pointer font-medium hover:font-normal text-[15px] text-black_900"
                                rel="noreferrer"
                              >
                                Contact
                              </a>
                            </li>
                            <li className="w-[auto] mt-[15px] mb-[13px] ml-[260px] sm:ml-[138px] sm:w-[100%] sm:my-[10px] md:ml-[178px] md:mb-[8px] md:mt-[10px]">
                              <a
                                href={"javascript:"}
                                className="cursor-pointer font-bold hover:font-normal text-[15px] text-black_900"
                                rel="noreferrer"
                              >
                                Login
                              </a>
                            </li>
                            <li className="w-[max-content] ml-[54px] sm:ml-[28px] sm:w-[100%] sm:my-[10px] md:ml-[37px] min-w-[8%] text-center">
                              <Button
                                className="cursor-pointer font-bold text-[15px] text-center text-white_A700"
                                shape="RoundedBorder5"
                                size="sm"
                                variant="FillBlueA200"
                              >
                                Sign up
                              </Button>
                            </li>
                          </ul>
                        </Row>
                      </Row>
                    </header>
                    <Stack
                      className="bg-cover bg-no-repeat h-[546px] sm:mt-[10px] md:mt-[13px] mt-[20px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius20 sm:w-[100%] w-[98%]"
                      style={{
                        backgroundImage: "url('images/img_group25.png')",
                      }}
                    >
                      <Stack className="absolute h-[432px] inset-x-[0] mx-[auto] top-[3%] sm:w-[100%] w-[90%]">
                        <Stack className="absolute bottom-[15%] h-[218px] left-[0] w-[32%]">
                          <Column className="absolute bg-blue_A200_66 bottom-[0] flex flex-col sm:h-[32px] md:h-[42px] h-[60px] inset-x-[0] items-center justify-end mx-[auto] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]">
                            <Button className="flex sm:h-[19px] md:h-[25px] h-[35px] items-center justify-center mt-[1px] rounded-radius50 sm:w-[18px] md:w-[24px] w-[35px]">
                              <Img
                                src="images/img_propertyshow6.png"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="propertyshowSix"
                              />
                            </Button>
                          </Column>
                          <Stack className="absolute h-[168px] top-[0] w-[100%]">
                            <Column className="absolute bg-white_A700 flex flex-col items-center justify-end sm:p-[3px] md:p-[4px] p-[7px] rounded-radius10 shadow-bs4 top-[0] w-[100%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                                <Img
                                  src="images/img_gettyimages115.png"
                                  className="max-w-[100%] rounded-radius4 sm:w-[100%] w-[48%]"
                                  alt="GettyImages115"
                                />
                                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                                  <Text
                                    className="font-bold text-black_900 w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    65-1 Bayard
                                  </Text>
                                  <Text
                                    className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-black_900 w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    St Staten Island NY 10324
                                  </Text>
                                  <Text
                                    className="sm:mt-[4px] md:mt-[6px] mt-[9px] text-black_900 w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    48.545289, 74.1669
                                  </Text>
                                  <Column className="bg-gray_900 flex flex-col items-center justify-start sm:mt-[11px] md:mt-[15px] mt-[22px] sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius5 sm:w-[100%] w-[96%]">
                                    <Text
                                      className="font-bold text-white_A700 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      View full details
                                    </Text>
                                  </Column>
                                </Column>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_location.svg"
                              className="absolute bottom-[0] h-[28px] inset-x-[0] max-w-[100%] mx-[auto] w-[6%]"
                              alt="location"
                            />
                          </Stack>
                        </Stack>
                        <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between left-[23%] sm:mx-[0] sm:px-[0] top-[16%] sm:w-[100%] w-[38%]">
                          <Button className="flex sm:h-[19px] md:h-[25px] h-[35px] items-center justify-center mb-[10px] sm:mb-[5px] md:mb-[6px] rounded-radius50 sm:w-[18px] md:w-[24px] w-[35px]">
                            <Img
                              src="images/img_propertyshow6.png"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="propertyshowOne"
                            />
                          </Button>
                          <Button className="flex sm:h-[19px] md:h-[25px] h-[35px] items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] rounded-radius50 sm:w-[18px] md:w-[24px] w-[35px]">
                            <Img
                              src="images/img_propertyshow6.png"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="propertyshowTwo"
                            />
                          </Button>
                        </Row>
                        <Row className="absolute bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between left-[4%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                          <Button className="flex sm:h-[19px] md:h-[25px] h-[35px] items-center justify-center md:mt-[12px] mt-[18px] sm:mt-[9px] rounded-radius50 sm:w-[18px] md:w-[24px] w-[35px]">
                            <Img
                              src="images/img_propertyshow3.png"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="propertyshowThree"
                            />
                          </Button>
                          <Button className="flex sm:h-[19px] md:h-[25px] h-[35px] items-center justify-center md:mb-[12px] mb-[18px] sm:mb-[9px] rounded-radius50 sm:w-[18px] md:w-[24px] w-[35px]">
                            <Img
                              src="images/img_propertyshow6.png"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="propertyshowFive"
                            />
                          </Button>
                        </Row>
                        <Row className="absolute bottom-[32%] flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[62%]">
                          <Button className="flex sm:h-[19px] md:h-[25px] h-[35px] items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[6px] rounded-radius50 sm:w-[18px] md:w-[24px] w-[35px]">
                            <Img
                              src="images/img_propertyshow3.png"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="propertyshowFour"
                            />
                          </Button>
                          <Button className="flex sm:h-[19px] md:h-[25px] h-[35px] items-center justify-center mb-[10px] sm:mb-[5px] md:mb-[6px] rounded-radius50 sm:w-[18px] md:w-[24px] w-[35px]">
                            <Img
                              src="images/img_propertyshow6.png"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="propertyshowEight"
                            />
                          </Button>
                        </Row>
                        <Button className="absolute flex sm:h-[19px] md:h-[25px] h-[35px] items-center justify-center right-[13%] rounded-radius50 top-[0] sm:w-[18px] md:w-[24px] w-[35px]">
                          <Img
                            src="images/img_propertyshow3.png"
                            className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                            alt="propertyshowSeven"
                          />
                        </Button>
                      </Stack>
                    </Stack>
                  </Column>
                </Column>
                <Row className="absolute bg-white_A700 bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-start sm:mx-[0] mx-[auto] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius20 shadow-bs5 sm:w-[100%] w-[89%]">
                  <Text
                    className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Enter address, neighborhood or city
                  </Text>
                  <Text
                    className="font-medium sm:mb-[2px] md:mb-[3px] mb-[5px] sm:ml-[272px] md:ml-[352px] ml-[512px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-gray_700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Type
                  </Text>
                  <Text
                    className="font-medium sm:mb-[2px] md:mb-[3px] mb-[5px] sm:ml-[28px] md:ml-[36px] ml-[53px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-gray_700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Beds
                  </Text>
                  <Text
                    className="font-medium sm:mb-[2px] md:mb-[3px] mb-[5px] sm:ml-[27px] md:ml-[35px] ml-[52px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-gray_700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Bath
                  </Text>
                </Row>
              </Stack>
              <Button
                className="absolute bottom-[0] flex items-center justify-center right-[6%] w-[8%]"
                shape="icbCustomBorderLR20"
                size="mdIcn"
                variant="icbFillBlueA200"
              >
                <Img
                  src="images/img_group14.png"
                  className="h-[25px] sm:h-[14px] md:h-[18px] flex items-center justify-center"
                  alt="GroupFourteen"
                />
              </Button>
            </Stack>
            <Button
              className="absolute bottom-[0] cursor-pointer font-bold min-w-[7%] right-[13%] text-[15px] text-center text-gray_901 w-[max-content]"
              size="lg"
              variant="OutlineWhiteA700"
            >
              More
            </Button>
          </Stack>
          <Row className="bg-white_A700_99 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[33px] md:mt-[42px] mt-[62px] sm:p-[15px] md:p-[17px] p-[25px] rounded-radius20 shadow-bs6 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[3px] ml-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius5 sm:w-[100%] w-[30%]">
                <Img
                  src="images/img_icons8funnel8.png"
                  className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="icons8funnelEight"
                />
                <Text
                  className="font-medium sm:ml-[16px] md:ml-[21px] ml-[31px] my-[2px] text-bluegray_700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Sort by: Price (Low to High)
                </Text>
                <Img
                  src="images/img_icons8sortdow.png"
                  className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[27px] md:ml-[35px] ml-[51px] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="icons8sortdow"
                />
              </Row>
              <Img
                src="images/img_icons8list100.png"
                className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[19px] sm:w-[13px] md:w-[17px] w-[25px]"
                alt="icons8list100"
              />
              <Img
                src="images/img_icons8grid60.png"
                className="sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[15px] md:w-[20px] w-[30px]"
                alt="icons8gridSixty"
              />
              <Text
                className="font-bold sm:ml-[217px] md:ml-[281px] ml-[409px] text-gray_800 w-[auto]"
                as="h4"
                variant="h4"
              >
                12 Properties Found
              </Text>
              <Text
                className="font-bold sm:ml-[19px] md:ml-[24px] ml-[36px] text-gray_800 w-[auto]"
                as="h3"
                variant="h3"
              >
                Advanced Search
              </Text>
            </Row>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[33px] md:mt-[42px] mt-[62px] w-[100%]">
            <Column className="bg-white_A700_99 flex flex-col items-center justify-start sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius5 sm:w-[100%] w-[75%]">
              <Column className="flex flex-col items-center justify-start sm:mb-[4px] md:mb-[6px] mb-[9px] sm:px-[0] w-[100%]">
                <Grid className="sm:gap-[20px] md:gap-[26px] gap-[38px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 hover:shadow-bs7 hover:w-[100%] w-[100%]">
                    <Column className="flex flex-col justify-start mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:px-[0] w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-center justify-center md:pt-[157px] sm:pt-[15px] pt-[229px] rounded-radius10 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group26.png')",
                        }}
                      >
                        <Row className="bg-black_900_66 flex flex-row md:flex-wrap sm:flex-wrap items-start md:p-[11px] sm:p-[15px] p-[16px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="bg-light_green_A700 md:h-[11px] h-[15px] sm:h-[8px] sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[2px] mt-[1px] rounded-radius50 md:w-[10px] w-[15px] sm:w-[7px]"></div>
                          <Text
                            className="font-bold ml-[11px] sm:ml-[5px] md:ml-[7px] text-white_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            FOR RENT
                          </Text>
                          <Img
                            src="images/img_whiteheartfac.png"
                            className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[140px] md:ml-[181px] ml-[264px] my-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="whiteheartfac"
                          />
                        </Row>
                      </Column>
                      <Text
                        className="font-bold sm:mt-[15px] md:mt-[19px] mt-[29px] text-black_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Midtown Apartment
                      </Text>
                      <Text
                        className="font-normal ml-[1px] not-italic text-gray_600 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        1348 209th St, Flushing
                      </Text>
                      <Text
                        className="font-normal ml-[3px] sm:mt-[18px] md:mt-[23px] mt-[34px] not-italic text-bluegray_901 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Beds:3 . Baths:4 . Sqft:1500{" "}
                      </Text>
                      <Line className="bg-gray_200 h-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:w-[100%] w-[93%]" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[11px] ml-[16px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                        <Text
                          className="flex-grow font-bold text-blue_A200"
                          as="h1"
                          variant="h1"
                        >
                          $4,700,000
                        </Text>
                        <Img
                          src="images/img_icons8chevron.png"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mt-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="icons8chevron"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 hover:shadow-bs7 hover:w-[100%] w-[100%]">
                    <Column className="flex flex-col justify-start mb-[4px] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
                      <Stack className="h-[278px] relative w-[100%]">
                        <Img
                          src="images/img_thevieuwvilla.png"
                          className="absolute bottom-[1%] h-[274px] max-w-[100%] rounded-radius10 w-[100%]"
                          alt="TheVieuwvilla"
                        />
                        <Row className="absolute bg-black_900_66 flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-start md:p-[11px] sm:p-[15px] p-[16px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="bg-light_green_A700 md:h-[11px] h-[15px] sm:h-[8px] sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[2px] mt-[1px] rounded-radius50 md:w-[10px] w-[15px] sm:w-[7px]"></div>
                          <Text
                            className="font-bold ml-[11px] sm:ml-[5px] md:ml-[7px] text-white_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            FOR RENT
                          </Text>
                          <Img
                            src="images/img_whiteheartfac.png"
                            className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[140px] md:ml-[181px] ml-[264px] my-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="whiteheartfac One"
                          />
                        </Row>
                      </Stack>
                      <Text
                        className="font-bold sm:mt-[15px] md:mt-[19px] mt-[29px] text-black_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Duplex Penthouse
                      </Text>
                      <Text
                        className="font-normal ml-[1px] not-italic text-gray_600 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        1348 209th St, Flushing
                      </Text>
                      <Text
                        className="font-normal ml-[3px] sm:mt-[18px] md:mt-[23px] mt-[34px] not-italic text-bluegray_901 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Beds:3 . Baths:4 . Sqft:1500{" "}
                      </Text>
                      <Line className="bg-gray_200 h-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:w-[100%] w-[93%]" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[11px] ml-[16px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                        <Text
                          className="flex-grow font-bold text-blue_A200"
                          as="h1"
                          variant="h1"
                        >
                          $1,900/Mo
                        </Text>
                        <Img
                          src="images/img_icons8chevron.png"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mt-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="icons8chevron One"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 hover:shadow-bs7 hover:w-[100%] w-[100%]">
                    <Column className="flex flex-col justify-start mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:px-[0] w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-center justify-center pl-[1px] pt-[1px] rounded-radius10 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group27.png')",
                        }}
                      >
                        <Row className="bg-black_900_66 flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[121px] md:mt-[156px] mt-[228px] md:p-[11px] sm:p-[15px] p-[16px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="bg-light_green_A700 md:h-[11px] h-[15px] sm:h-[8px] sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[2px] mt-[1px] rounded-radius50 md:w-[10px] w-[15px] sm:w-[7px]"></div>
                          <Text
                            className="font-bold ml-[11px] sm:ml-[5px] md:ml-[7px] text-white_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            FOR RENT
                          </Text>
                          <Img
                            src="images/img_whiteheartfac.png"
                            className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[140px] md:ml-[181px] ml-[264px] my-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="whiteheartfac Two"
                          />
                        </Row>
                      </Column>
                      <Text
                        className="font-bold sm:mt-[15px] md:mt-[19px] mt-[29px] text-black_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Family House
                      </Text>
                      <Text
                        className="font-normal ml-[1px] not-italic text-gray_600 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        1348 209th St, Flushing
                      </Text>
                      <Text
                        className="font-normal ml-[3px] sm:mt-[18px] md:mt-[23px] mt-[34px] not-italic text-bluegray_901 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Beds:3 . Baths:4 . Sqft:1500{" "}
                      </Text>
                      <Line className="bg-gray_200 h-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:w-[100%] w-[93%]" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[11px] ml-[16px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                        <Text
                          className="flex-grow font-bold text-blue_A200"
                          as="h1"
                          variant="h1"
                        >
                          $1,900,000
                        </Text>
                        <Img
                          src="images/img_icons8chevron.png"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mt-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="icons8chevron Two"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius10 hover:shadow-bs7 hover:w-[100%] w-[100%]">
                    <Column className="flex flex-col justify-start mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:px-[0] w-[100%]">
                      <Stack className="h-[283px] relative w-[100%]">
                        <Img
                          src="images/img_maxresdefault1.png"
                          className="absolute h-[283px] max-w-[100%] right-[0] rounded-radius10 w-[100%]"
                          alt="maxresdefaultOne"
                        />
                        <Row className="absolute bg-black_900_66 flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-start md:p-[11px] sm:p-[15px] p-[16px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="bg-light_green_A700 md:h-[11px] h-[15px] sm:h-[8px] sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[2px] mt-[1px] rounded-radius50 md:w-[10px] w-[15px] sm:w-[7px]"></div>
                          <Text
                            className="font-bold ml-[11px] sm:ml-[5px] md:ml-[7px] text-white_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            FOR RENT
                          </Text>
                          <Img
                            src="images/img_whiteheartfac.png"
                            className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[140px] md:ml-[181px] ml-[264px] my-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="whiteheartfac Three"
                          />
                        </Row>
                      </Stack>
                      <Text
                        className="font-bold sm:mt-[14px] md:mt-[18px] mt-[27px] text-black_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Plaza Suite
                      </Text>
                      <Text
                        className="font-normal ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_600 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        1348 209th St, Flushing
                      </Text>
                      <Text
                        className="font-normal ml-[3px] sm:mt-[18px] md:mt-[23px] mt-[34px] not-italic text-bluegray_901 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Beds:3 . Baths:4 . Sqft:1500{" "}
                      </Text>
                      <Line className="bg-gray_200 h-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:w-[100%] w-[93%]" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[11px] ml-[16px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                        <Text
                          className="flex-grow font-bold text-blue_A200"
                          as="h1"
                          variant="h1"
                        >
                          $3,500,000
                        </Text>
                        <Img
                          src="images/img_icons8chevron.png"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mt-[1px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="icons8chevron Three"
                        />
                      </Row>
                    </Column>
                  </Column>
                </Grid>
                <Button
                  className="cursor-pointer font-medium min-w-[20%] sm:mt-[38px] md:mt-[50px] mt-[73px] text-[17px] text-blue_A200 text-center w-[max-content]"
                  shape="RoundedBorder5"
                  size="md"
                  variant="OutlineBlueA200"
                >
                  LOAD MORE
                </Button>
              </Column>
            </Column>
            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
              <Input
                className="font-normal not-italic p-[0] text-[17px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                wrapClassName="w-[100%]"
                name="advsearchOne"
                placeholder="Keyword"
              ></Input>
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[15px] mt-[23px] md:p-[12px] sm:p-[15px] p-[18px] rounded-radius5 w-[100%]">
                <Text
                  className="flex-grow font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] not-italic text-gray_500"
                  as="h3"
                  variant="h3"
                >
                  Type
                </Text>
                <Img
                  src="images/img_icons8sortdow.png"
                  className="flex-shrink-0 md:h-[11px] h-[15px] sm:h-[8px] max-w-[100%] md:w-[10px] w-[15px] sm:w-[7px]"
                  alt="icons8sortdow One"
                />
              </Row>
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[15px] mt-[23px] md:p-[12px] sm:p-[15px] p-[18px] rounded-radius5 w-[100%]">
                <Text
                  className="flex-grow font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] not-italic text-gray_500"
                  as="h3"
                  variant="h3"
                >
                  Baths
                </Text>
                <Img
                  src="images/img_icons8sortdow.png"
                  className="flex-shrink-0 md:h-[11px] h-[15px] sm:h-[8px] max-w-[100%] md:w-[10px] w-[15px] sm:w-[7px]"
                  alt="icons8sortdow Two"
                />
              </Row>
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[15px] mt-[23px] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius5 w-[100%]">
                <Text
                  className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] my-[3px] not-italic text-gray_500"
                  as="h3"
                  variant="h3"
                >
                  Beds
                </Text>
                <Img
                  src="images/img_icons8sortdow.png"
                  className="flex-shrink-0 md:h-[11px] h-[15px] sm:h-[8px] max-w-[100%] mr-[3px] md:w-[10px] w-[15px] sm:w-[7px]"
                  alt="icons8sortdow Three"
                />
              </Row>
              <Row className="bg-blue_A200 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[21px] md:mt-[28px] mt-[41px] md:p-[12px] sm:p-[15px] p-[18px] rounded-radius5 w-[100%]">
                <Img
                  src="images/img_group14.png"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[52px] md:ml-[68px] ml-[99px] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="downloadremove"
                />
                <Text
                  className="flex-grow font-bold sm:ml-[3px] md:ml-[4px] ml-[6px] mr-[104px] sm:mr-[55px] md:mr-[71px] mt-[1px] text-white_A700"
                  as="h2"
                  variant="h2"
                >
                  Search
                </Text>
              </Row>
              <Text
                className="font-bold sm:mt-[19px] md:mt-[25px] mt-[37px] text-black_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Featured Properties
              </Text>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:p-[4px] md:p-[6px] p-[9px] rounded-radius10 sm:w-[100%] w-[99%]">
                <Column className="flex flex-col items-center justify-start mb-[14px] sm:mb-[7px] md:mb-[9px] mt-[3px] sm:px-[0] w-[100%]">
                  <Stack className="h-[233px] relative w-[100%]">
                    <Img
                      src="images/img_luxurydesignt.png"
                      className="absolute bottom-[0] h-[232px] max-w-[100%] rounded-radius10 w-[100%]"
                      alt="luxurydesignt"
                    />
                    <Column className="absolute bg-black_900_66 flex flex-col items-center justify-start sm:p-[4px] md:p-[6px] p-[9px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:my-[4px] md:my-[5px] my-[8px] sm:px-[0] sm:w-[100%] w-[97%]">
                        <div className="bg-light_green_A700 md:h-[11px] h-[15px] sm:h-[8px] my-[2px] rounded-radius50 md:w-[10px] w-[15px] sm:w-[7px]"></div>
                        <Text
                          className="font-bold ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[1px] text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          FOR RENT
                        </Text>
                        <Img
                          src="images/img_whiteheartfac.png"
                          className="max-w-[100%] md:ml-[104px] ml-[152px] sm:ml-[80px] w-[7%]"
                          alt="whiteheartfac Four"
                        />
                      </Row>
                    </Column>
                  </Stack>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                    <Text
                      className="font-bold text-blue_A200 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      $20,00,000
                    </Text>
                    <Text
                      className="font-medium sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_801 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Sqft: 1,500
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Text
                className="font-bold ml-[4px] sm:mt-[23px] md:mt-[30px] mt-[45px] text-black_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Property Types
              </Text>
              <Row className="bg-white_A700_82 flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[3px] ml-[5px] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius5 sm:w-[100%] w-[86%]">
                <Img
                  src="images/img_icons8sortrig.png"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="icons8sortrig"
                />
                <Text
                  className="flex-grow font-medium sm:ml-[10px] md:ml-[13px] ml-[19px] text-gray_902"
                  as="h3"
                  variant="h3"
                >
                  Apartment (8)
                </Text>
              </Row>
              <Row className="bg-white_A700_82 flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[3px] ml-[5px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius5 sm:w-[100%] w-[86%]">
                <Img
                  src="images/img_icons8sortrig.png"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="icons8sortrig One"
                />
                <Text
                  className="flex-grow font-medium sm:ml-[10px] md:ml-[13px] ml-[19px] text-gray_902"
                  as="h3"
                  variant="h3"
                >
                  Penthouse (14)
                </Text>
              </Row>
              <Row className="bg-white_A700_82 flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[3px] ml-[5px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius5 sm:w-[100%] w-[86%]">
                <Img
                  src="images/img_icons8sortrig.png"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="icons8sortrig Two"
                />
                <Text
                  className="flex-grow font-medium sm:ml-[10px] md:ml-[13px] ml-[19px] text-gray_902"
                  as="h3"
                  variant="h3"
                >
                  Multiple family house (10)
                </Text>
              </Row>
              <Row className="bg-white_A700_82 flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[3px] ml-[5px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius5 sm:w-[100%] w-[86%]">
                <Img
                  src="images/img_icons8sortrig.png"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="icons8sortrig Three"
                />
                <Text
                  className="flex-grow font-medium sm:ml-[10px] md:ml-[13px] ml-[19px] text-gray_902"
                  as="h3"
                  variant="h3"
                >
                  Single Studio (12)
                </Text>
              </Row>
              <Row className="bg-white_A700_82 flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius5 sm:w-[100%] w-[86%]">
                <Img
                  src="images/img_icons8sortrig.png"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="icons8sortrig Four"
                />
                <Text
                  className="flex-grow font-medium sm:ml-[10px] md:ml-[13px] ml-[19px] text-gray_902"
                  as="h3"
                  variant="h3"
                >
                  Villa (4)
                </Text>
              </Row>
            </Column>
          </Row>
          <Column className="bg-white_A700_b2 flex flex-col items-center justify-start mt-[117px] sm:mt-[62px] md:mt-[80px] sm:p-[15px] md:p-[19px] p-[29px] rounded-radius20 w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:my-[4px] md:my-[5px] my-[8px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    <span className="text-blue_A200 text-[25px] font-inter font-bold sm:text-[21px] md:text-[23px]">
                      REAL
                    </span>
                    <span className="text-black_900 text-[25px] font-inter font-bold sm:text-[21px] md:text-[23px]">
                      ESTATE
                    </span>
                  </Text>
                  <Text
                    className="font-bold md:ml-[128px] ml-[187px] sm:ml-[99px] mt-[1px] text-black_900 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Popular Properties
                  </Text>
                  <Text
                    className="font-bold sm:ml-[115px] md:ml-[149px] ml-[217px] mt-[3px] text-black_900 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Links
                  </Text>
                  <Text
                    className="font-bold sm:ml-[102px] md:ml-[132px] ml-[193px] mt-[1px] text-black_900 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Newsletter
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[13px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                  <Text
                    className="font-medium leading-[normal] sm:mx-[0] text-bluegray_901 sm:w-[100%] w-[21%]"
                    as="h4"
                    variant="h4"
                  >
                    Aenean sollicitudin, lorem quis bibend
                    <br />
                    <br />
                    auctor, nisi elit consequat ipsum, necittis
                    <br />
                    <br />
                    sem nibh id elit. Duis sed odio enim.
                  </Text>
                  <Column className="bg-white_A700 flex flex-col items-center md:mb-[11px] mb-[16px] sm:mb-[8px] md:ml-[52px] ml-[76px] sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 shadow-bs8 sm:w-[100%] w-[30%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Img
                        src="images/img_group27.png"
                        className="max-w-[100%] rounded-radius10 sm:w-[100%] w-[46%]"
                        alt="LosAngelesLux"
                      />
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Duplex Penthouse
                        </Text>
                        <Text
                          className="font-bold md:mt-[12px] mt-[18px] sm:mt-[9px] text-blue_A200 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          $1,900,000
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="flex flex-col items-center md:ml-[26px] ml-[39px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:px-[0] w-[100%]">
                          <Img
                            src="images/img_icons8chevron.png"
                            className="flex-shrink-0 md:h-[11px] h-[15px] sm:h-[8px] max-w-[100%] mt-[1px] md:w-[10px] w-[15px] sm:w-[7px]"
                            alt="icons8chevron Four"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[10px] md:ml-[13px] ml-[19px] text-black_900"
                            as="h4"
                            variant="h4"
                          >
                            Featured Properties
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[14px] md:mt-[18px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                          <Img
                            src="images/img_icons8chevron.png"
                            className="flex-shrink-0 md:h-[11px] h-[15px] sm:h-[8px] max-w-[100%] mt-[1px] md:w-[10px] w-[15px] sm:w-[7px]"
                            alt="icons8chevron Five"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[10px] md:ml-[13px] ml-[19px] text-black_900"
                            as="h4"
                            variant="h4"
                          >
                            Recent Post
                          </Text>
                        </Row>
                      </Column>
                      <Input
                        className="font-bold p-[0] text-[15px] placeholder:text-gray_801 text-gray_801 w-[100%]"
                        wrapClassName="mb-[7px] md:mb-[4px] mt-[3px] sm:mb-[3px] sm:mx-[0] sm:w-[100%] w-[52%]"
                        type="email"
                        name="GroupTwo"
                        placeholder="Email"
                        shape="RoundedBorder10"
                      ></Input>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]">
                      <Img
                        src="images/img_icons8chevron.png"
                        className="md:h-[11px] h-[15px] sm:h-[8px] max-w-[100%] md:w-[10px] w-[15px] sm:w-[7px]"
                        alt="icons8chevron Six"
                      />
                      <Text
                        className="font-medium sm:ml-[10px] md:ml-[13px] ml-[19px] text-black_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Popular Categories
                      </Text>
                      <Button
                        className="cursor-pointer font-bold min-w-[52%] sm:ml-[49px] md:ml-[63px] ml-[92px] text-[15px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder10"
                        size="md"
                        variant="FillBlueA200"
                      >
                        Subscribe
                      </Button>
                    </Row>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                  <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                      <Img
                        src="images/img_icons8callmal.png"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="icons8callmal"
                      />
                      <Text
                        className="flex-grow font-medium md:ml-[11px] ml-[17px] sm:ml-[9px] text-black_900"
                        as="h4"
                        variant="h4"
                      >
                        09021233422
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Img
                        src="images/img_icons8mail64.png"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mt-[4px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="icons8mailSixtyFour"
                      />
                      <Text
                        className="flex-grow font-medium mb-[4px] ml-[14px] sm:ml-[7px] md:ml-[9px] text-black_900"
                        as="h4"
                        variant="h4"
                      >
                        agent@info.com
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start md:ml-[134px] ml-[196px] sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 shadow-bs8 sm:w-[100%] w-[43%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Img
                        src="images/img_group27.png"
                        className="max-w-[100%] rounded-radius10 sm:w-[100%] w-[46%]"
                        alt="LosAngelesLux One"
                      />
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Duplex Penthouse
                        </Text>
                        <Text
                          className="font-bold md:mt-[12px] mt-[18px] sm:mt-[9px] text-blue_A200 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          $1,900,000
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Img
                    src="images/img_icons8chevron.png"
                    className="md:h-[11px] h-[15px] sm:h-[8px] max-w-[100%] sm:ml-[20px] md:ml-[26px] ml-[39px] sm:mt-[4px] md:mt-[5px] mt-[8px] md:w-[10px] w-[15px] sm:w-[7px]"
                    alt="icons8chevron Seven"
                  />
                  <Text
                    className="font-medium sm:ml-[10px] md:ml-[13px] ml-[19px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Recent for Sale
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DesktopOnePage;
