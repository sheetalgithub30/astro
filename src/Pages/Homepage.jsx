import React, { useState } from "react";
import img1 from "../assets/IMG1.svg";
import img2 from "../assets/IMG2.svg";
import border from "../assets/border.svg";
import borderWhite from "../assets/borderWhite.svg";
import planetEc from "../assets/planetEc.svg";
import planet from "../assets/Planet.svg";
import numerology from "../assets/numerology.svg";
import vastu from "../assets/vastu.svg";
import puja from "../assets/puja.svg";
import k from "../assets/10k.svg";
import ss1 from "../assets/Screenshot1.png";
import ss2 from "../assets/Screenshot2.png";
import ss3 from "../assets/Screenshot3.png";

import circle from "../assets/Circle.svg";
import astro from "../assets/astro.svg";
import HLine from "../assets/HLine.svg";
import name from "../assets/Astro Gopal Pandit.svg";
import services from "../assets/services.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const card_data = [
  {
    id: 1,
    src: planet,
    title: "Astrology Consultation",
    content: "Get personalized guidance on career, relationships, and health",
  },
  {
    id: 2,
    src: numerology,
    title: "Numerology Reading",
    content:
      "Unveil life’s hidden patterns through numerology readings for success and clarity",
  },
  {
    id: 3,
    src: vastu,
    title: "Vastu Consultation",
    content:
      "Align your environment with universal energy for better health, prosperity, and peace",
  },
  {
    id: 4,
    src: puja,
    title: "Puja Services",
    content:
      "Customized pooja services to invite positive energy and success into your life",
  },
];

const Choose_me_data = [
  {
    id: 1,
    title: "Expert Guidance",
    content:
      "With a deep understanding of cosmic forces, Gopal Krishna provides tailored insights to help you navigate life’s biggest decisions.",
  },
  {
    id: 2,
    title: "Achieve Peace & Success",
    content:
      "Through his personalized astrology and numerology services, Gopal has helped countless individuals find peace, success, and clarity in their personal and professional lives.",
  },
  {
    id: 3,
    title: "Transform Your Space",
    content:
      "Optimize your living or working environment with Vastu consultations, ensuring harmony, prosperity, and balance in all areas of life.",
  },
];

function Homepage() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      {/* Hero */}
      <div className="relative h-full bg-hero bg-cover bg-center text-white pb-2">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative">
          <Navbar color={"white"} name={name} />
          <div className="my-11">
            <div className="flex w-[80%] m-auto max-md:inline">
              <div className="w-[57%] m-auto max-md:w-[93%]">
                <p className="text-lg my-4 font-normal font-Sora">
                  Astrology | Numerology | Vastu | Pooja.
                </p>
                <h1 className="text-6xl font-semibold my-4">
                  Find Balance and Direction at Every Stage of Life
                </h1>
                <p className="text-lg font-normal my-4 font-Sora">
                  Gain clarity, make informed choices, and shape your destiny
                  with trusted advice.
                </p>
                <div className="w-[56%] flex justify-between  font-Sora max-md:w-[99%] ">
                  <Link to="/services">
                  <button className="bg-[#F49C36] text-base  p-5 flex justify-center items-center rounded-md focus:outline-none w-[165px] h-[46px]">
                    Book a Session
                  </button>
                  </Link>
                  <HashLink smooth to="/#about">
                  <button className="bg-transparent border-[1px] font-medium text-[#F49C36] font-Montserrat border-[#F49C36] text-base p-5 flex justify-center items-center rounded-md  focus:outline-none w-[196px] h-[46px] max-md:w-[170px]">
                    Explore
                  </button>
                  </HashLink>
                </div>
              </div>
              <div className="mx-14 max-md:mt-6">
                <img src={img1}></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="h-full mb-14">
        <div className="flex flex-col justify-center items-center my-16">
          <h2 className="text-[32px] font-semibold my-3">About Me</h2>
          <img src={border}></img>
        </div>
        <div className="flex items-center justify-center w-[80%] m-auto max-md:inline max-md:w-[90%] ">
          <div className="flex items-center justify-center">
            <img src={img2} className="w-[90%]" />
          </div>
          <div className="w-[50%] m-auto max-md:w-[80%] max-md:mt-4 ">
            <div className="flex ">
              <img src={HLine} className="mr-10 max-md:hidden" />

              <ul className="list-disc text-lg font-normal ">
                <li className="font-Sora ">
                  Respected astrologer with expertise in astrology, numerology,
                  and vastu.
                </li>
                <li className="  font-Sora">
                  Known for a practical and compassionate approach that combines
                  ancient wisdom with modern insights.
                </li>
                <li className="  font-Sora">
                  Specializes in providing actionable advice that helps improve
                  daily life.
                </li>
                <li className=" font-Sora">
                  Mission: To guide clients on their unique journeys with
                  clarity and direction.
                </li>
              </ul>
            </div>
            <div className="flex items-center my-4">
              <div className="relative">
                <img src={planetEc} className="w-24 h-24 " />
                <img
                  src={planet}
                  className="w-14 h-10 absolute top-7 left-4"
                ></img>
              </div>
              <div className="mx-5 flex items-center h-10">
                <img src={k} className="w-20 h-10" />
                <div className="flex flex-col ml-3">
                  <span>number of</span>
                  <span className="text-xl font-semibold">Consultations</span>
                </div>
              </div>
            </div>
            <div className="flex max-md:justify-center">
            <Link to="/services">
              <button className="my-4 text-white bg-gradient-to-r from-[#F5A237] to-[#F47836] text-xl font-bold py-2 rounded-lg hover:bg-gradient-to-l focus:outline-none w-48">
                Consult now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="h-full bg-[#F6F7FF] py-14">
        <div className="flex flex-col justify-center items-center mb-16">
          <h2 className="text-[32px] font-semibold my-3">Services</h2>
          <img src={border}></img>
        </div>
        <div className="flex items-center justify-center w-[80%] m-auto max-md:inline ">
          <div className="w-[40%] flex justify-center items-center max-md:w-full ">
            <img src={services} className="w-[90%] h-[90%]" />
          </div>
          <div className="w-[55%] m-auto flex flex-wrap items-center justify-center  max-md:w-[100%] max-md:mt-14">
            {card_data.map((data) => {
              return (
                <div
                  key={data.id}
                  className="border-[1px] border-gray-300 rounded-[20px] w-64 h-56 p-4 m-3 flex flex-col justify-center items-center text-center max-md:w-[70%]"
                >
                  <img src={data.src} className="m-4" />
                  <p className="text-lg font-semibold m-2">{data.title}</p>
                  <p className=" leading-4 font-normal text-sm font-Sora text-[#00000099]">
                    {data.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonial" className="h-full flex flex-col items-center justify-center py-12">
        <div className="flex flex-col justify-center items-center mt-2 w-[35%] max-md:w-[90%]">
          <h2 className="text-[32px] font-semibold my-3">Testimonials</h2>
          <img src={border}></img>
          <p className="leading-4 font-normal text-center p-4 text-sm font-Sora text-[#00000099]">
            “Here's what our clients have to say about their life-changing
            experiences!”
          </p>
        </div>

        <Flex w="100%" id="testimonials" mt={isLargerThan700 ? "1px" : "70px"}>
          <Flex
            display="flex"
            mx="auto"
            flexDir="column"
            w={isLargerThan1000 ? "75%" : "100%"}
            h="100%"
            textAlign="start"
          >
            <Flex
              alignItems="center"
              justifyContent={
                isLargerThan1000 ? "space-evenly" : "space-between"
              }
              mt={isLargerThan1000 ? "45px" : "1px"}
              className="px-8"
            >
              <Flex
                w={isLargerThan1000 ? "20%" : "20%"}
                h="100%"
                className="leading-10 text-3xl font-semibold  max-md:text-lg"
              >
                See what my happy clients are saying about their transformative
                experiences
              </Flex>
              <Flex
                w={isLargerThan400 ? "70%" : "62%"}
                justifyContent="flex-end"
              >
                <Swiper
                  modules={[Autoplay, Pagination]}
                  style={{ height: "400px" }}
                  spaceBetween={40} // Adjust the spacing between slides if needed
                  slidesPerView={
                    isLargerThan900
                      ? 3
                      : isLargerThan600
                      ? 2
                      : isLargerThan400
                      ? 1
                      : 1
                  } // Show 4 slides at a time
                  loop={true} // Enable looping
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 3000, // 5 seconds delay
                    disableOnInteraction: true,
                  }}
                >
                  <SwiperSlide>
                    <Flex
                      justifyContent="space-between"
                      h="375px"
                      minW="236"
                      w="100%"
                      alignItems="center"
                      overflow="hidden"
                      borderRadius="16px"
                    >
                      <Image src={ss1} w="100%" h="100%" />
                    </Flex>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Flex
                      justifyContent="space-between"
                      h="375px"
                      minW="236"
                      w="100%"
                      borderRadius="16px"
                      alignItems="center"
                      overflow="hidden"
                    >
                      <Image src={ss2} w="100%" h="100%" />
                    </Flex>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Flex
                      justifyContent="space-between"
                      h="375px"
                      minW="236"
                      w="100%"
                      alignItems="center"
                      borderRadius="16px"
                      overflow="hidden"
                    >
                      <Image src={ss3} w="100%" h="100%" />
                    </Flex>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Flex
                      justifyContent="space-between"
                      h="375px"
                      minW="236"
                      w="100%"
                      alignItems="center"
                      borderRadius="16px"
                      overflow="hidden"
                    >
                      <Image src={ss3} w="100%" h="100%" />
                    </Flex>
                  </SwiperSlide>
                </Swiper>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </div>

      {/* Choose Me */}

      <div className="relative h-full bg-hero bg-cover bg-center text-white py-10">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative">
          <div className="flex flex-col justify-center items-center my-16">
            <h2 className="text-[32px] font-semibold my-3">Why Choose Me</h2>
            <img src={borderWhite}></img>
          </div>

          {isLargerThan900 && (
            <div className="flex items-center justify-center w-[100%] m-auto ">
              {Choose_me_data.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="border-[1px] border-gray-300 rounded-3xl w-[379px] h-[23rem] p-7  m-3 flex flex-col justify-center items-center text-center max-md:w-[340px] max-md:p-3"
                  >
                    <img src={circle} className="h-16 w-16" />
                    <p className="font-bold text-2xl my-4">{data.title}</p>
                    <p className="text-lg font-normal leading-6 font-Sora text-[#E2E2E2] h-28">
                      {data.content}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {!isLargerThan900 && (
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              style={{ width: "90%", marginTop: !isLargerThan900 && "40px" }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide style={{ width: "95%" }}>
                <Flex className="border-[1px] border-gray-300 rounded-3xl w-[100%] h-[23rem] p-6  flex flex-col justify-center items-center text-center">
                  <Image src={circle} />
                  <Text className="font-bold text-2xl my-4">
                    Expert Guidance
                  </Text>
                  <Text className="text-lg font-normal leading-6 font-Sora text-[#E2E2E2] h-28">
                    With a deep understanding of cosmic forces, Gopal Krishna
                    provides tailored insights to help you navigate life’s
                    biggest decisions.
                  </Text>
                </Flex>
              </SwiperSlide>
              <SwiperSlide style={{ width: "100%" }}>
                <Flex className="border-[1px] border-gray-300 rounded-3xl w-[100%] h-[23rem] p-6  flex flex-col justify-center items-center text-center">
                  <Image src={circle} />
                  <Text className="font-bold text-2xl my-4">
                    Achieve Peace & Success
                  </Text>
                  <Text className="text-lg font-normal leading-6 font-Sora text-[#E2E2E2] h-28">
                    Through his personalized astrology and numerology services,
                    Gopal has helped countless individuals find peace, success,
                    and clarity in their personal and professional lives.
                  </Text>
                </Flex>
              </SwiperSlide>
              <SwiperSlide style={{ width: "90%" }}>
                <Flex className="border-[1px] border-gray-300 rounded-3xl w-[370px] h-[23rem] p-6  flex flex-col justify-center items-center text-center">
                  <Image src={circle} />
                  <Text className="font-bold text-2xl my-4">
                    Transform Your Space
                  </Text>
                  <Text className="text-lg font-normal leading-6 font-Sora text-[#E2E2E2] h-28">
                    Optimize your living or working environment with Vastu
                    consultations, ensuring harmony, prosperity, and balance in
                    all areas of life.
                  </Text>
                </Flex>
              </SwiperSlide>
            </Swiper>
          )}
          <div className="flex justify-end w-[89%]">
          <Link to="/services">
            <button className="bg-white text-base font-normal py-2 font-Sora text-black rounded-lg hover:bg-gray-300 focus:outline-none w-48 my-7">
              Book a Session
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* qna */}
      <div className="relative h-full py-8">
        <div className="">
          <div className="flex items-center justify-center w-[80%] m-auto rounded-3xl p-14 max-md:inline">
            <div className="w-[40%] m-auto max-md:w-[90%]">
              <img src={astro} />
            </div>
            <div className="w-[47%] m-auto max-md:w-[90%] max-md:flex max-md:flex-col ">
              <h1 className="text-[40px] font-bold  my-3 text-[#F37435]">
                Got a Question? Ask Gopal Ji!
              </h1>
              <p className="  leading-5 my-2 font-Sora text-lg font-normal text-[#00000099]">
                Curious about your future, or seeking insights into your life's
                challenges? Reach out today and let Gopal Ji guide you through
                expert astrological advice, personalized readings, and more.
              </p>
              <p className="font-semibold text-lg leading-5 font-Sora text-[#00000099]">
                Don’t hesitate! Share your query below and let’s begin the
                journey.
              </p>

              <Flex borderRadius="30px" w="100%" bg="white" mt={"1rem"}>
                <Box
                  w="100%"
                  p={8}
                  boxShadow="md"
                  bg="white"
                  color="#00000099"
                  borderRadius="30px"
                  border="1px"
                  borderColor="gray.300"
                >
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <FormControl mb={4} isRequired>
                      <FormLabel
                        fontWeight="500"
                        fontSize="14px"
                        className="font-Sora"
                      >
                        Full Name
                      </FormLabel>
                      <Input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        fontSize="14px"
                        type="text"
                        placeholder="Full name"
                        className="font-Sora"
                      />
                    </FormControl>

                    <SimpleGrid
                      columns={isLargerThan500 ? 2 : 1}
                      spacing={4}
                      mb={4}
                    >
                      <FormControl isRequired>
                        <FormLabel
                          fontWeight="500"
                          fontSize="14px"
                          className="font-Sora"
                        >
                          Phone Number
                        </FormLabel>
                        <Input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          fontSize="14px"
                          type="tel"
                          placeholder="Phone number"
                          className="font-Sora"
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel
                          fontWeight="500"
                          fontSize="14px"
                          className="font-Sora"
                        >
                          Email ID
                        </FormLabel>
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          fontSize="14px"
                          placeholder="E-mail ID"
                          className="font-Sora"
                        />
                      </FormControl>
                    </SimpleGrid>

                    <FormControl mb={4} isRequired>
                      <FormLabel
                        fontWeight="500"
                        fontSize="14px"
                        className="font-Sora"
                      >
                        Message
                      </FormLabel>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        fontSize="14px"
                        placeholder="Message"
                        className="font-Sora"
                      />
                    </FormControl>

                    <Button
                      fontSize="14px"
                      bg="#F37435"
                      color={"white"}
                      type="submit"
                      width="full"
                      className="font-Sora"
                    >
                      {"Send Message"}
                    </Button>
                  </form>
                </Box>
              </Flex>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}

export default Homepage;
