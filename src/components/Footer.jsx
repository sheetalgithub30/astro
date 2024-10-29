import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import influcentLogo from "../assets/influcentLogo.svg";
import shield from "../assets/shield.svg";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const Footer = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Flex wrap="wrap" w="100%" borderTop="1px solid #FFFFFF99" bg="#090909">
      <Flex
        justifyContent={isLargerThan700?"space-between":"center"}
        mx="auto"
        w={isLargerThan700?"85%":"90%"}
        h="100%"
        textAlign="start"
        position="relative"
        borderRadius="50px"
        overflow="hidden"
        py="40px"
        color="#FFFFFF"
       display={isLargerThan700?"flex":"inline"}
      >
        <Flex
          gap="25px"
          fontSize="14px"
          flexDir={isLargerThan700 ? "column" : "row"}
          justifyContent={"center"}
        >
          <a href={"/privacy-policy"}>
            <Text className="font-Montserrat font-semibold">
              Privacy Policy
            </Text>
          </a>
          <a href={"/terms-of-use"}>
            <Text className="font-Montserrat font-semibold">Terms of use</Text>
          </a>
        </Flex>
        <Flex alignItems="center"
        justifyContent="center"
        gap="10px" className="max-md:mt-6">
          <Image w="30px" src={shield} />
          <Text color="#FFFFFF99" className="font-Montserrat font-semibold">
            Powered by
          </Text>
          <Image height="15px" src={influcentLogo} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
