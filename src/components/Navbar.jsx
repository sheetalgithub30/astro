import React from "react";
import {
  Button,
  Text,
  Flex,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMediaQuery } from '@chakra-ui/react'
// import youtube from "./../../home/youtube.svg";
import {  HamburgerIcon } from '@chakra-ui/icons'
import 'swiper/css';
import 'swiper/css/pagination';
import name from "../assets/Astro Gopal Pandit.svg";
// import { HashLink } from 'react-router-hash-link';



const Navbar = () => {
//   const Navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  // single media query with no options
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)')

  return (
      <Flex w="100%"  h={isLargerThan700 ? '100px' : "60px"} color="white">
        <Flex
          w={isLargerThan1000 ? "85%" : "90%"}
          mx="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex
            w={isLargerThan900 && "100%"}
          >
            <Image src={name}/>
            {/* Astro Gopal Pandit */}
          </Flex>
          {isLargerThan700 && <Flex
            w={isLargerThan900 && "100%"}
            gap="18px"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <a href=""><Flex className="font-Sora text-base font-normal"  >Home</Flex></a>
            <a href=""><Flex className="font-Sora text-base font-normal">About</Flex></a>
            <a href=""><Flex className="font-Sora text-base font-normal" >Services</Flex></a>
            <a href=""><Flex className="font-Sora text-base font-normal">Testimonials</Flex></a>
          </Flex>}
          <Flex w={"100%"}>

          </Flex>

          {!isLargerThan700 && <IconButton ref={btnRef} colorScheme='blackAlpha' onClick={onOpen}>
               <HamburgerIcon fontSize="35px" />
           </IconButton>}
        </Flex>
        {!isLargerThan700 &&  <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        bg='black'
      >
        <DrawerOverlay />
        <DrawerContent bg='black' color='white'>
          <DrawerCloseButton />
          <DrawerHeader fontFamily='Cormorant'>Menu</DrawerHeader>

          <DrawerBody>
          <Flex
            w={"100%"}
            gap="18px"
            display="flex"
            flexDir='column'
            justifyContent="start"
            alignItems="start"
            fontSize={["clamp(14px, 3vw, 16px)"]}
          >
     <a href=""><Flex  fontSize={["clamp(14px, 2vw, 16px)"]} >Home</Flex></a>
            <a><Flex fontSize={["clamp(14px, 2vw, 16px)"]}>About</Flex></a>
            <a><Flex  fontSize={["clamp(14px, 2vw, 16px)"]}>Services</Flex></a>
            <a><Flex fontSize={["clamp(14px, 2vw, 16px)"]}>Testimonials</Flex></a>
          </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' color='white' mr={3} onClick={onClose}>
              close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>}
      </Flex>

  );
};

export default Navbar;