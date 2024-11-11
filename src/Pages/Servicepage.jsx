import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Text,
  Flex,
  Textarea,
  Stack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Radio,
  RadioGroup,
  Input,
  Spinner,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { SiTicktick } from "react-icons/si";
import { ArrowForwardIcon, ArrowBackIcon, WarningIcon } from "@chakra-ui/icons";
import "swiper/css";
import "swiper/css/pagination";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import name from "../assets/nameBlack.svg";
import border from "../assets/border.svg";

import SkeletonCard from "../components/SkeletonCard.jsx";
import serviceImage from "../assets/serviceImage.svg";

const Servicepage = () => {
  //   const [cashfree, setCashfree] = useState(null);

  //   const initializeSDK = async () => {
  //     const loadedCashfree = await load({ mode: import.meta.env.VITE_PAYMENT_TYPE });
  //     setCashfree(loadedCashfree);
  //   };

  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const btnRef = React.useRef();
  //   const { link, setLink } = useLinkContext();
  // single media query with no options
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan300] = useMediaQuery("(min-width: 300px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [displayRazorpay, setDisplayRazorpay] = useState(false);
  //   const {isOpen: isConfirmationModalOpen, onOpen: onConfirmationModalOpen, onClose: onConfirmationModalClose} = useDisclosure()

  //   const {isOpen: isQuestionSendingOpen, onOpen: onQuestionSendingOpen, onClose: onQuestionSendingClose} = useDisclosure()
  const [eventUrl, setEventUrl] = useState("");
  const [date, setDate] = useState(null);
  const [monthRange, setMonthRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [availableEventsData, setAvailableEventsData] = useState(null);
  const [availableSlots, setAvailableSlots] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");

  const [orderId, setOrderId] = useState(null);

  return (
    <>
      <Navbar color={"black"} name={name} />

      <Flex
        display="flex"
        flexDir="column"
        textAlign="center"
        fontFamily="Montserrat"
      >
        {/* first section */}
        <Flex
          w="100%"
          // minH={isLargerThan700 ? "800px" : "600px"}
          position="relative"
          justifyContent="center"
          flexDir="column"
          pb="70px"
        >
          <Flex
            w={isLargerThan1000 ? "85%" : "95%"}
            zIndex={30}
            flexDir="column"
            mx="auto"
            h="100%"
            minH="800px"
          >
            <Flex
              my="40px"
              w="100%"
              display="flex"
              mx="auto"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <Flex fontSize="14px" mb="55px" alignSelf={"center"}>
                <div className="flex flex-col justify-center items-center mb-16">
                  <h2 className="text-[32px] font-semibold my-3">
                    Consultation
                  </h2>
                  <img src={border}></img>
                </div>
              </Flex>
              <SimpleGrid
                columns={
                  isLargerThan900
                    ? 3
                    : isLargerThan600
                    ? 2
                    : isLargerThan300
                    ? 1
                    : 1
                }
                spacing={isLargerThan900 ? "30px" : "10px"}
                width="100%"
              >
                {/* {servicesLoadingState && [1,2,3]?.map((item, index) => (
                <React.Fragment key={index}>
                   <SkeletonCard />
                </React.Fragment>
              ))} */}
                {consultationData?.map((item, index) => (
                  <React.Fragment key={index}>
                    <ServiceCard
                      id={item?.id}
                      src={serviceImage}
                      service={item}
                      title={item?.title}
                      description={item?.desc}
                      mainDescription={item?.maindesc}
                      price={item?.price}
                      imageUrl={item?.imageUrl}
                      serviceType={item?.type}
                      howItWorks={item?.howItWorks}
                      details={item?.details}
                      // planTypes={calendlyEventsData}
                      type={item?.type}
                      eventUrl={eventUrl}
                      setEventUrl={setEventUrl}
                      date={date}
                      setDate={setDate}
                      setMonthRange={setMonthRange}
                      monthRange={monthRange}
                      availableEventsData={availableEventsData}
                      // eventsLoading={calendlyEventsTypesAvailabilityQueryLoading}
                      setAvailableSlots={setAvailableSlots}
                      availableSlots={availableSlots}
                      // _mutationServiceBookingForm={_mutationServiceBookingForm}
                      formData={formData}
                      setFormData={setFormData}
                      setSelectedService={setSelectedService}
                      selectedService={selectedService}
                      // paymentButtonLoading={paymentButtonLoading}
                      setQ1={setQ1}
                      setQ2={setQ2}
                      setQ3={setQ3}
                      q1={q1}
                      q2={q2}
                      q3={q3}
                    />
                  </React.Fragment>
                ))}
              </SimpleGrid>
            </Flex>
            <Flex
              my="40px"
              w="100%"
              display="flex"
              mx="auto"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <Flex fontSize="14px" mb="55px" alignSelf={"center"}>
                <div className="flex flex-col justify-center items-center mb-16">
                  <h2 className="text-[32px] font-semibold my-3">Pooja</h2>
                  <img src={border}></img>
                </div>
              </Flex>
              <SimpleGrid
                columns={
                  isLargerThan900
                    ? 3
                    : isLargerThan600
                    ? 2
                    : isLargerThan300
                    ? 1
                    : 1
                }
                spacing={isLargerThan900 ? "30px" : "10px"}
                width="100%"
              >
                {/* {servicesLoadingState && [1,2,3]?.map((item, index) => (
                <React.Fragment key={index}>
                   <SkeletonCard />
                </React.Fragment>
              ))} */}
                {poojaData?.map((item, index) => (
                  <React.Fragment key={index}>
                    <ServiceCard
                      id={item?.id}
                      src={serviceImage}
                      service={item}
                      title={item?.title}
                      description={item?.desc}
                      mainDescription={item?.maindesc}
                      price={item?.price}
                      previousPrice={item?.previousPrice}
                      imageUrl={item?.imageUrl}
                      howItWorks={item?.howItWorks}
                      details={item?.details}
                      serviceType={item?.type}
                      // planTypes={calendlyEventsData}
                      type={item?.type}
                      eventUrl={eventUrl}
                      setEventUrl={setEventUrl}
                      date={date}
                      setDate={setDate}
                      setMonthRange={setMonthRange}
                      monthRange={monthRange}
                      availableEventsData={availableEventsData}
                      // eventsLoading={calendlyEventsTypesAvailabilityQueryLoading}
                      setAvailableSlots={setAvailableSlots}
                      availableSlots={availableSlots}
                      // _mutationServiceBookingForm={_mutationServiceBookingForm}
                      formData={formData}
                      setFormData={setFormData}
                      setSelectedService={setSelectedService}
                      selectedService={selectedService}
                      // paymentButtonLoading={paymentButtonLoading}
                    />
                  </React.Fragment>
                ))}
              </SimpleGrid>
            </Flex>
          </Flex>
        </Flex>

        {/* footer */}
        <Footer />

        {/* <Modal closeOnOverlayClick={false} isOpen={isConfirmationModalOpen} onClose={onConfirmationModalClose}>
        <ModalOverlay />
        <ModalContent borderRadius="20px" >
          
          <ModalHeader></ModalHeader>
          <ModalBody textAlign='center'>
            <Flex flexDir='column' textAlign='center' px="60px" py="30px">
             <WarningIcon fontSize="40px" color="#291965" mx="auto"/>
            <Text fontSize="25px" fontWeight={800}>Booking confirmation!</Text>
            <Text fontSize="13px" fontWeight={500}>Please do not refresh the page and continue booking event.</Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button type="ghost" onClick={()=> {setLink(null); onConfirmationModalClose()}} border="1px solid #291965">Already booked</Button>
            <Button ml="10px" minW="150px"  bg="#291965 !important" colorScheme='blue'onClick={()=> {onConfirmationModalClose(); openCalendlyWidget()}}>
              Book Event
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

        {/* <Modal isCentered closeOnOverlayClick={false}  isOpen={isQuestionSendingOpen} onClose={onQuestionSendingClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Flex justify="center" alignItems="center" flexDir='column' >
             <Image src={starsLoading} mb="40px" />
            <Text fontSize="20px" fontWeight="800">Sending Questions ....</Text>
            </Flex>
          </ModalBody>

        </ModalContent>
      </Modal> */}
      </Flex>
    </>
  );
};

export default Servicepage;

const ServiceCard = ({
  id,
  src,
  title,
  description,
  mainDescription,
  price,
  previousPrice,
  planTypes,
  howItWorks,
  details,
  type,
  date,
  setDate,
  setMonthRange,
  monthRange,
  availableEventsData,
  eventsLoading,
  eventUrl,
  setEventUrl,
  setAvailableSlots,
  availableSlots,
  _mutationServiceBookingForm,
  formData,
  setFormData,
  service,
  setSelectedService,
  selectedService,
  serviceType,
  paymentButtonLoading,
  imageUrl,
  setQ1,
  setQ2,
  setQ3,
  q1,
  q2,
  q3,
}) => {
  const toast = useToast();
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { id: idFromParams } = useParams();
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState(planTypes?.[0]);
  const [buyPageOpen, setBuyPageOpen] = useState(false);
  const [qnaPageOpen, setQnaPageOpen] = useState(false);
  const [planSelectError, setPlanSelectError] = useState(false);
  const [dateSelectError, setDateSelectError] = useState(false);
  const [slotSelectError, setSlotSelectError] = useState(false);

  const [sharableLink, setSharableLink] = useState(
    `${import.meta.env.VITE_FRONTEND_URL}/services/${id}`
  );
  // const sharableLink = `${import.meta.env.VITE_FRONTEND_URL}/${cardDetails.id}`;
  const { hasCopied, onCopy } = useClipboard(sharableLink);

  const handleShare = () => {
    onCopy(); // Copies the sharable link to the clipboard
    toast({
      title: "Link copied!",
      description: `Link copied`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    setSharableLink(`${import.meta.env.VITE_FRONTEND_URL}/services/${id}`);
  }, [id]);

  const enabledDates = availableEventsData?.dates?.map(
    (date) => new Date(date)
  );

  // Function to get the start and end dates of the current month
  const getMonthRange = (date) => {
    const today = new Date();
    let startDate;

    if (
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      // If the selected date is in the current month, start from today
      startDate = today;
    } else {
      // Otherwise, start from the 1st of the selected month
      startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    }

    // End date is always the last day of the selected month
    const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    return { startDate, endDate };
  };

  // Event handler for month change
  const handleMonthChange = (date) => {
    const range = getMonthRange(date);
    setMonthRange(range);
  };

  useEffect(() => {
    if (monthRange.startDate === null) {
      setMonthRange(getMonthRange(new Date()));
    }
  }, []);

  //   useEffect(()=> {
  //     if(idFromParams === id) {
  //       onOpen()
  //     }
  //   }, [])

  const handleRemoveIdFromUrl = () => {
    navigate("/services"); // Navigates to the /services page (removes the id from the URL)
  };

  const _handleQnaForm = () => {
    _mutationServiceBookingForm(onClose, clearStates);
  };

  const clearStates = () => {
    setBuyPageOpen(false);
    setQnaPageOpen(false);
  };

  const isDateEnabled = (date) => {
    return enabledDates?.some(
      (enabledDate) =>
        enabledDate.getFullYear() === date.getFullYear() &&
        enabledDate.getMonth() === date.getMonth() &&
        enabledDate.getDate() === date.getDate()
    );
  };

  const handlePlanSelectError = () => {
    if (serviceType === "ONE_ON_ONE") {
      if (eventUrl === "") {
        setPlanSelectError(true);
      } else {
        setPlanSelectError(false);
        setBuyPageOpen(true);
      }
    } else if (serviceType === "QNA") {
      setQnaPageOpen(true);
    }
  };

  const handleServiceBookingForm = () => {
    if (date === null) {
      setDateSelectError(true);
      setSlotSelectError(false);
      return;
    } else if (availableSlots === null) {
      setSlotSelectError(true);
      setDateSelectError(false);
      return;
    }
    setSlotSelectError(false);
    setDateSelectError(false);
    _mutationServiceBookingForm(onClose, clearStates);
  };

  return (
    <Flex
      bg="white"
      overflow="hidden"
      borderRadius="20px"
      flexDir="column"
      color="#000000"
      fontFamily="Montserrat"
      textAlign="start"
      className="border-[1px]"
    >
      <Flex maxH={isLargerThan600 ? "200px" : "140px"} w="100%">
        <Image src={src} w="100%" h="100%" objectFit="cover" />
      </Flex>
      <Flex
                justifyContent="flex-end"
                p={isLargerThan600 ? "20px" : "10px"}
                position="absolute"
                w={isLargerThan600 ? "27%" : "92%"}
                
              >

                          
                <IconButton
                  isRound={true}
                  variant="solid"
                  colorScheme="blackAlpha"
                  aria-label="Done"
                  fontSize="20px"
                  onClick={() => handleShare()}
                  icon={
                    hasCopied ? (
                      <FaCheck color="white" />
                    ) : (
                      <IoShareSocialOutline color="white" />
                    )
                  }
                />
              </Flex>
      <Flex
        p={isLargerThan600 ? "20px" : "15px"}
        gap={isLargerThan600 && "10px"}
        flexDir="column"
      >
        <Text fontSize="24px" fontWeight="700">
          {title}
        </Text>
        <Text fontSize="18px">{description}</Text>
      </Flex>
      <Flex
        p={isLargerThan600 ? "20px" : "15px"}
        pt="0"
        justifyContent="space-between"
        mt={isLargerThan600 ? "auto" : "10px"}
      >
        <Text
          fontSize={["clamp(15px, 3.5vw, 27px)"]}
          fontWeight="800"
          color="#0D7909"
        >
          {price}<span className=" font-semibold text-xl p-3 text-[#00000099]">{type==="pooja"?<del>&nbsp;{previousPrice}&nbsp;</del>:""}</span>

        </Text>
        <IconButton
          isRound={true}
          variant="solid"
          onClick={onOpen}
          //   colorScheme='teal'
          aria-label="Done"
          size={isLargerThan600 ? "lg" : "sm"}
          fontSize="20px"
          background="#F57937 !important"
          icon={<ArrowForwardIcon color="white" />}
        />
      </Flex>

      <Modal
        fontFamily="Montserrat"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        {!buyPageOpen && (
          <ModalContent borderRadius="25px">
            <ModalHeader p="0" overflow="hidden" position="relative">
              <Flex
                justifyContent="space-between"
                p={isLargerThan600 ? "20px" : "10px"}
                w="100%"
                position="absolute"
              >
                <IconButton
                  isRound={true}
                  variant="solid"
                  onClick={() => {
                    onClose();
                    handleRemoveIdFromUrl();
                  }}
                  colorScheme="blackAlpha"
                  aria-label="Done"
                  fontSize="20px"
                  icon={<ArrowBackIcon color="white" />}
                />

                <IconButton
                  isRound={true}
                  variant="solid"
                  colorScheme="blackAlpha"
                  aria-label="Done"
                  fontSize="20px"
                  onClick={() => handleShare()}
                  icon={
                    hasCopied ? (
                      <FaCheck color="white" />
                    ) : (
                      <IoShareSocialOutline color="white" />
                    )
                  }
                />
              </Flex>
              <Flex
                maxH="200px"
                w="100%"
                borderTopRadius="23px"
                overflow="hidden"
              >
                <Image src={src} w="100%" h="100%" />
              </Flex>
            </ModalHeader>

            <ModalBody maxH="40vh" overflowY="scroll" pt="20px">
              <Flex gap="10px" flexDir="column">
                <Text
                  fontFamily="Montserrat"
                  fontSize={["clamp(18px, 3.5vw, 24px)"]}
                  fontWeight="700"
                >
                  {title}
                </Text>
                <Flex my="5px" justifyContent="space-between">
                  {serviceType === "ONE_ON_ONE" && (
                    <Text
                      fontFamily="Montserrat"
                      fontSize={["clamp(16px, 3.5vw, 18px)"]}
                      fontWeight="700"
                    >
                      Choose a Plan
                    </Text>
                  )}
                  <Flex flexDir="column" alignItems="end">
                    <RadioGroup onChange={setValue} value={value}>
                      <Stack direction="row">
                        {type === "ONE_ON_ONE" &&
                          planTypes?.map((item, index) => (
                            <Radio
                              fontFamily="Montserrat"
                              key={index}
                              onClick={() => setEventUrl(item)}
                              isChecked={item?.eventUrl === eventUrl?.eventUrl}
                              isDisabled={!item?.active}
                            >
                              {item?.duration} mins
                            </Radio>
                          ))}
                      </Stack>
                    </RadioGroup>
                    {planSelectError && (
                      <Text fontSize="12px" color="red.400">
                        Please select a plan
                      </Text>
                    )}
                  </Flex>
                </Flex>
               {type === "consultation" && <>
               
                 <Text
                 fontFamily="Montserrat"
                 fontSize={["clamp(16px, 3.5vw, 18px)"]}
                 fontWeight="700"
               >
                 Description
               </Text>
               <Text
                 fontFamily="Montserrat"
                 fontSize={["clamp(14px, 3vw, 16px)"]}
               >
                 {mainDescription}
               </Text>
               </>
               }


              {type === "pooja" && <>
                <Flex flexDir="column">
                  <Text
                    fontFamily="Montserrat"
                    fontSize={["clamp(16px, 3.5vw, 18px)"]}
                    fontWeight="700"
                  >
                    How It Works
                  </Text>
                  <List mt="10px" spacing={3}>
                    {howItWorks?.map((item, index) => (
                      <ListItem
                        fontFamily="Montserrat"
                        fontSize={["clamp(14px, 3vw, 16px)"]}
                        key={index}
                      >
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Flex>
              </>}

              {type=== "consultation" && <>
                <Flex flexDir="column">
                  <Text
                    fontFamily="Montserrat"
                    fontSize={["clamp(16px, 3.5vw, 18px)"]}
                    fontWeight="700"
                  >
                    Essential Details
                  </Text>
                  <List mt="10px" spacing={3}>
                    {details?.map((item, index) => (
                      <ListItem
                        fontFamily="Montserrat"
                        fontSize={["clamp(14px, 3vw, 16px)"]}
                        key={index}
                      >
                        <ListIcon as={SiTicktick} color="#388807" />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Flex>
              </>}

                <Flex flexDir="column">
                  <Text
                    fontFamily="Montserrat"
                    fontSize={["clamp(16px, 3.5vw, 18px)"]}
                    fontWeight="700"
                    className="mt-4 mb-1"
                  >
                    Cancellation Policy
                  </Text>
                  <Text
                  fontFamily="Montserrat"
                  fontSize={["clamp(14px, 3vw, 16px)"]}
                >
                  कृपया ध्यान दें कि भुगतान हो जाने के बाद इसे वापस नहीं किया जाएगा। हम आपसे अनुरोध करते हैं कि बुकिंग पूरी करने से पहले सभी विवरणों को सही ढंग से जांच लें। आपके सहयोग के लिए धन्यवाद
                </Text>
                </Flex>
              </Flex>
            </ModalBody>

            <ModalFooter mt="0px !important">
              <Flex
                fontFamily="Montserrat"
                justifyContent="space-between"
                w="100%"
              >
                <Text fontSize={["clamp(22px, 3.5vw, 27px)"]} fontWeight="800">
                  {price}<span className=" font-semibold text-xl p-3 text-[#00000099]">{type==="pooja"?<del>&nbsp;{previousPrice}&nbsp;</del>:""}</span>
                </Text>
                <Button
                  color="white"
                  minW="100px"
                  onClick={() => {
                    handlePlanSelectError();
                    setSelectedService(service);
                  }}
                  backgroundColor="#F57937 !important"
                >
                  Buy
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        )}
        {/* {buyPageOpen && (
          <ModalContent minH="70vh" minW="fit-content" borderRadius="25px">
            <ModalHeader
              fontFamily="Montserrat"
              p="0"
              overflow="hidden"
              borderBottom="1px solid #ccc"
              position="relative"
            >
              <Flex justifyContent="space-between" p={"10px"} w="100%">
                <IconButton
                  isRound={true}
                  variant="solid"
                  background="white"
                  aria-label="Done"
                  fontSize="20px"
                  onClick={()=> setBuyPageOpen(false)}
                  icon={<ArrowBackIcon color="#000000" />}
                />
                <Flex>
                  <Text>Contact Information</Text>
                </Flex>
                <Flex visibility="hidden">d</Flex>
              </Flex>
            </ModalHeader>

            <ModalBody
              maxW={isLargerThan800 && "800px" }
              fontFamily="Montserrat"
              overflow="scroll"
              p="20px"
            >
              <Flex gap="10px" flexDir={isLargerThan800 ? "row" : "column"}>
                <Flex flexDir="column">
                  <Flex mb="20px" flexDir="column" >
                    <Text fontSize="25px" fontWeight={700}>
                      {title}
                    </Text>
                    <Text fontSize="14px">
                      Audio Call | {eventUrl?.duration} mins
                    </Text>
                  </Flex>
                  <Flex
                    w={isLargerThan800 ? "100%" : "fit-content"}
                    justifyContent="center"
                    flexDir='column'
                    position='relative'
                  >
                     {eventsLoading && <Flex minW="100%" bg="whiteAlpha.800" minH="100%" position='absolute' display="flex" justify="center" alignItems="center" zIndex={9999}>
                        <Spinner  color="#9681F7" />
                     </Flex>}
                     <Text fontSize="13px" fontWeight="600" color={dateSelectError && "red"}>
                       Please select a date
                     </Text>
                    <Calendar
                      // editableDateInputs={true}
                      onChange={(date) => setDate(date)}
                      date={date}
                      onShownDateChange={handleMonthChange}
                      disabledDay={(date) => !isDateEnabled(date)}
                      // dayContentRenderer={dayContentRenderer}
                      color="#291965"
                    />
                  </Flex>
                  <Flex flexDir="column" gap="10px"  p="10px" position='relative'>
                  {eventsLoading && <Flex minW="100%" bg="whiteAlpha.800" minH="100%" position='absolute' display="flex" justify="center" alignItems="center" zIndex={9999}>
                       
                     </Flex>}
                     {slotSelectError && <Text fontSize="13px" fontWeight="600" color={"red"}>Please select a Time Slot</Text>}
                    <Flex gap="5px" maxW="315px" overflow="scroll">
                      {availableEventsData?.dateByTime
                        ?.filter(
                          (item) =>
                            new Date(item?.date).toDateString() ===
                            new Date(date).toDateString()
                        )?.[0]
                        ?.availableSlots?.map((item, index) => (
                          <Flex
                            key={index}
                            cursor="pointer"
                            border="2px solid #9a80ff"
                            padding="5px 15px"
                            borderRadius="5px"
                            color={
                              availableSlots?.time === item?.time
                                ? "white"
                                : "black"
                            }
                            fontSize="13px"
                            fontWeight="500"
                            _hover={{ bg: "#cec3ff" }}
                            bg={
                              availableSlots?.time === item?.time
                                ? "#291965"
                                : "#eae5ff"
                            }
                            onClick={() => setAvailableSlots(item)}
                          >
                            {item?.time}
                          </Flex>
                        ))}
                    </Flex>
                  </Flex>
                </Flex>
                <Flex borderLeft={isLargerThan800 && "1px solid #ccc"} pl={isLargerThan800 && "20px"} flexDir="column">
                  <form onSubmit={(e) => {handleServiceBookingForm(); e.preventDefault()}} style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                  <Flex flexDir='column' mt="auto" gap="10px" maxW="600px" fontSize="14px" mx="auto">
                    <FormControl isRequired>
                      <FormLabel mb="5px" fontSize="14px" fontWeight="500">
                        Full Name
                      </FormLabel>
                      <Input
                        fontSize="14px"
                        value={formData?.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        type="text"
                        placeholder="Enter your full name"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel mb="5px" fontSize="14px" fontWeight="500">
                        Phone Number
                      </FormLabel>
                      <Input
                        fontSize="14px"
                        value={formData?.phoneNumber}
                        onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel mb="5px" fontSize="14px" fontWeight="500">
                        Email ID
                      </FormLabel>
                      <Input
                        fontSize="14px"
                        value={formData?.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </FormControl>

                    <UnorderedList
                      color="gray.700"
                      fontSize="12px"
                      fontWeight="600"
                      mt="20px"
                    >
                      <ListItem>Your information is safe with me</ListItem>
                      <ListItem mt="5px">
                        This E-mail will used to share the information regarding
                        your purchase
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    w="100%"
                    mt="20px"
                    flexDir="column"
                  >
                    <Button
                      color="white"
                      minW="100px"
                      w="100%"
                      fontSize="12px"
                      fontWeight="600"
                      type="submit"
                      backgroundColor="#271A61 !important"
                      isLoading={paymentButtonLoading}
                    >
                      Pay ₹{price}
                    </Button>
                    <Flex
                      alignItems="center"
                      gap="10px"
                      alignSelf="flex-end"
                      mt="25px"
                    >
                      <Image w="12px" src={shieldBlack} />
                      <Text fontSize="11px" fontWeight="600" color="#00000099">
                        Powered by
                      </Text>
                      <Image height="10px" src={influcentLogoBlack} />
                    </Flex>
                  </Flex>
                  </form>
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        )}
        {qnaPageOpen && (
          <ModalContent  minW="fit-content" borderRadius="25px">
            <ModalHeader
              fontFamily="Montserrat"
              p="0"
              overflow="hidden"
              borderBottom="1px solid #ccc"
              position="relative"
            >
              <Flex justifyContent="space-between" p={"10px"} w="100%">
                <IconButton
                  isRound={true}
                  variant="solid"
                  background="white"
                  aria-label="Done"
                  fontSize="20px"
                  onClick={onClose}
                  icon={<ArrowBackIcon color="#000000" />}
                />
                <Flex>
                  <Text>Contact Information</Text>
                </Flex>
                <Flex visibility="hidden">d</Flex>
              </Flex>
            </ModalHeader>

            <ModalBody
              maxW={isLargerThan800 && "800px" }
              fontFamily="Montserrat"
              p="20px"
            >
              <Flex align="center"  justify="center" flexDir='column' >
              <Flex mb="20px" flexDir="column" >
                    <Text fontSize="25px" fontWeight={700}>
                      {title}
                    </Text>
                    <Text fontSize="14px" color="#00000099"  fontWeight={700}>
                    Q & A | Receive answers on E-mail
                    </Text>
                  </Flex>
      <Box
        bg="white"
        rounded="md"
      >
        <form onSubmit={e => {e.preventDefault(); _handleQnaForm()}}>
        <Stack spacing={4}>
          <FormControl id="fullName">
            <FormLabel>Full name</FormLabel>
            <Input value={formData?.name} onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" placeholder="Enter your full name" />
          </FormControl>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <FormControl id="phoneNumber">
              <FormLabel>Phone number</FormLabel>
              <Input value={formData?.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}  type="tel" placeholder="Enter your phone number" />
            </FormControl>

            <FormControl id="emailId">
              <FormLabel>E-mail ID</FormLabel>
              <Input value={formData?.email} onChange={(e) => setFormData({...formData, email: e.target.value})}  type="email" placeholder="Enter your e-mail ID" />
            </FormControl>
          </Stack>

          <FormControl id="question1">
            <FormLabel>Question 1</FormLabel>
            <Input  value={q1} onChange={e=> setQ1(e.target.value)}  type="text" placeholder="Enter your response" />
          </FormControl>

          <FormControl id="question2">
            <FormLabel>Question 2</FormLabel>
            <Input  value={q2} onChange={e=> setQ2(e.target.value)}  type="text" placeholder="Enter your response" />
          </FormControl>

          <FormControl id="question3">
            <FormLabel>Question 3</FormLabel>
            <Input  value={q3} onChange={e=> setQ3(e.target.value)}  type="text" placeholder="Enter your response" />
          </FormControl>

          <UnorderedList
                      color="gray.700"
                      fontSize="12px"
                      fontWeight="600"
                      mt="20px"
                    >
                      <ListItem>Your information is safe with me</ListItem>
                      <ListItem mt="5px">
                        This E-mail will used to share the information regarding
                        your purchase
                      </ListItem>
                    </UnorderedList>

          <Button colorScheme="purple" isLoading={paymentButtonLoading} bg="#291965 !important" type="submit"  mt={6}>
            Pay ₹ {price}
          </Button>
        </Stack>
        </form>
      </Box>
    </Flex>
            </ModalBody>
          </ModalContent>
        )} */}
      </Modal>
    </Flex>
  );
};

const consultationData = [
  {
    src: { serviceImage }, // image source
    title: "ज्योतिषीय सलाह",
    desc: "ज्योतिष जीवन के रहस्यों को सुलझाने की कुंजी है। गोपाल कृष्ण व्यक्तिगत ज्योतिषीय परामर्श प्रदान करते हैं, जो करियर, रिश्ते/प्रेम, स्वास्थ्य...",
    maindesc:
      "ज्योतिष जीवन के रहस्यों को सुलझाने की कुंजी है। गोपाल कृष्ण व्यक्तिगत ज्योतिषीय परामर्श प्रदान करते हैं, जो करियर, रिश्ते/प्रेम, स्वास्थ्य, और वित्तीय स्थिति जैसे महत्वपूर्ण क्षेत्रों पर केंद्रित होते हैं। चाहे आपको किसी महत्वपूर्ण निर्णय में सहायता की आवश्यकता हो या केवल अपने जीवन के बारे में स्पष्टता चाहिए हो, गोपाल जी के साथ ज्योतिषीय परामर्श आपको सही मार्गदर्शन प्रदान कर सकता है",
    price: "₹ 1,500",
    details: [
      "वीडियो कॉल परामर्श",
      "एक बार की सेवा",
      "व्यक्तिगत ज्योतिष सिफारिशें",
    ],
    type :"consultation"
  },
  {
    src: { serviceImage }, // image source
    title: "अंकज्योतिष सलाह",
    desc: "अंकज्योतिष का उपयोग आपके जीवन के पैटर्न को समझने के लिए किया जाता है। गोपाल जी गहराई से अंकज्योतिषीय विश्लेषण प्रदान करते हैं...",
    maindesc:
      "अंकज्योतिष का उपयोग आपके जीवन के पैटर्न को समझने के लिए किया जाता है। गोपाल जी गहराई से अंकज्योतिषीय विश्लेषण प्रदान करते हैं, जो आपकी व्यक्तित्व की छुपी हुई विशेषताओं को उजागर करता है और आपको सफलता की ओर मार्गदर्शन करता है। अपने व्यक्तिगत अंक जानें और कैसे वे आपके भाग्य, रिश्तों, और करियर के निर्णयों को प्रभावित करते हैं।",
    price: "₹ 1,500",
    details: [
      "वीडियो कॉल परामर्श",
      "एक बार की सेवा",
      "व्यक्तिगत ज्योतिष सिफारिशें",
    ],
    type :"consultation"

  },
  {
    src: { serviceImage }, // image source
    title: "वास्तु सलाह",
    desc: "वास्तु शास्त्र आपके भौतिक स्थान को सार्वभौमिक ऊर्जाओं के साथ संरेखित करने में मदद करता है, जिससे आपके जीवन में सुख-समृद्धि...",
    maindesc:
      "वास्तु शास्त्र आपके भौतिक स्थान को सार्वभौमिक ऊर्जाओं के साथ संरेखित करने में मदद करता है, जिससे आपके जीवन में सुख-समृद्धि और सफलता आती है। गोपाल जी घरों, कार्यालयों और व्यावसायिक स्थानों के लिए वास्तु परामर्श प्रदान करते हैं, जो आपके वातावरण को स्वास्थ्य, समृद्धि, और शांति के लिए अनुकूल बनाने में मार्गदर्शन देते हैं। उनकी परामर्श सेवाएं आपके स्थान की विशिष्ट आवश्यकताओं के अनुसार तैयार की जाती हैं, ताकि अधिकतम सामंजस्य और संतुलन सुनिश्चित हो सके।",
    price: "₹ 2,500",
    details: [
      "वीडियो कॉल परामर्श",
      "एक बार की सेवा",
      "व्यक्तिगत ज्योतिष सिफारिशें",
    ],
    type :"consultation"

  },
];


const poojaData = [
  {
    src: { serviceImage }, // image source
    title: "कालसर्प दोष निवारण पूजा",
    desc: "कालसर्प दोष निवारण पूजा के माध्यम से पाएं, सभी शारीरिक और मानसिक चिंताओं से मुक्ति! कालसर्प दोष पूजा के उपाय से बदलेगा भाग्य ...",
    howItWorks:[
       "कालसर्प दोष निवारण पूजा के माध्यम से पाएं, सभी शारीरिक और मानसिक चिंताओं से मुक्ति! कालसर्प दोष पूजा के उपाय से बदलेगा भाग्य घर बैठे कालसर्प दोष निवारण पूजा से बनेंगे बिगड़े काम!",
       "कालसर्प दोष पूजा",
       "कुंडली में राहु और केतु के विशेष स्थिति में होने पर कालसर्प योग बनता है। कालसर्प दोष के बारे में कहा गया है कि यह जातक के पूर्व जन्म के किसी जघन्य अपराध के दंड या श्राप के फलस्वरूप, उसकी जन्मकुंडली में बनता है। यदि कुंडली के लग्न भाव में राहु विराजमान हो और सप्तम भाव में केतु ग्रह उपस्थित हो तथा बाकी ग्रह राहु-केतु के एक ओर स्थित हों तो, ऐसी स्थिति में कालसर्प दोष योग का निर्माण होता है।",
       "पूजा की संपूर्ण जानकारी और विधि",
        "कालसर्प दोष के प्रभाव",
        "कालसर्प दोष से प्रभावित जातक को सपने में सांप और पानी दिखाई देने के साथ-साथ, स्वयं को हवा में उड़ते देखना, कार्यों में बार-बार अड़चनें आना और साथ ही इनके विचारों में बार-बार बदलाव आते हैं और कोई भी काम करने से पहले मन में नकारात्‍मक विचार आने लगते हैं। इस दोष से पीड़ित जातक का मन पढ़ाई में नहीं लगता। ये भी देखा गया है कि इससे पीड़ित व्यक्ति नशे का आदि बन जाता है।",
        "कालसर्प दोष के निवारण हेतु पूजा करने का विधान",
        "कालसर्प दोष के निवारण हेतु पूजन की अनेक विधि हैं। सबसे उत्तम विधि वैदिक मंत्रों द्वारा किया जाने वाला विधान है। इस दौरान भगवान शिव की आराधना की जाती है। चूंकि भगवान शिव सर्पों को अपने गले में धारण करते हैं, इसलिए भगवान शिव जी की पूजा"
    ],
     price: "₹ 14,994",
     previousPrice : "19,994",
     type :"pooja"
  },
  {
    src: { serviceImage }, // image source
    title: "महामृत्युंजय पूजा- हर भय से पाएं मुक्ति",
    desc: "महामृत्युंजय पूजा करने से शिव जी की होती है असीम कृपा । डर और मानसिक परेशानी से मुक्ति...",
    howItWorks:[
       "महामृत्युंजय पूजा करने से शिव जी की होती है असीम कृपा । डर और मानसिक परेशानी से मुक्ति। इस पूजा से व्यक्ति को अपने डर से मुक्ति के साथ जीवन में सफलता मिलती है। महामृत्युंजय पूजा से लाभ। सुख-समृद्धि और मानसिक शांति की कामनाएं इस पूजा से प्राप्त होती हैं। महामृत्युंजय मंत्र सकारात्मकता के लिए इस पूजा में महामृत्युंजय मंत्र का जाप किया जाता है, जिसे करने से जीवन में और घर परिवार में सकारात्मकता आती है।",
       "भारतीय धर्म ग्रंथों के अनुसार कहा गया है कि महामंत्र महामृत्युंजय जाप पूजा, भगवान शिव को समर्पित है। इस मंत्र का उल्लेख ऋग्वेद में किया गया है। मंत्र का शाब्दिक अर्थ है तीन नेत्र वाले भगवान शिव की पूजा करना, जो सभी जीवों का पालन-पोषण करते हैं। इस प्रकार, कोई भी व्यक्ति जो नकारात्मक घटनाओं से डरता है, डर से हार जाता है, उसे महामृत्युंजय पूजा करनी चाहिए। साथ ही, इसे रुद्र मंत्र भी कहा जाता है, जो भगवान शिव के उग्र पहलू का उल्लेख करता है।", 
       "महामृत्युंजय मंत्र का मतलब",
       "“ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥”",
       "त्र्यंबक्कम भगवान शिव की तीन आंखें हैं। त्र्य का अर्थ है तीन और अम्बकम का अर्थ है आंख। ये तीन आँखें ब्रह्मा, विष्णु और शिव रूपी तीन मुख्य देवता हैं। तीन ‘अंबा’ का अर्थ है माँ या शक्ति जो सरस्वती, लक्ष्मी और गौरी हैं। इस प्रकार इस शब्द त्र्यंबक्कम में हम भगवान को ब्रह्मा, विष्णु और शिव के रूप में संदर्भित कर रहे हैं।",
       "यजामहे का अर्थ है, “हम आपकी प्रशंसा गाते हैं”।",
       "सुगंधिम का अर्थ है प्रभु के ज्ञान, उपस्थिति, और शक्ति की सुगंध जो हमेशा हमारे चारों ओर फैली है। निश्चित रूप से, सुगंध का अर्थ उस आनंद से �",

    ],
     price: "₹ 1,01,010",
    previousPrice : "1,50,020",
    type :"pooja"

  },
  {
    src: { serviceImage }, // image source
    title: "नवग्रह पूजा",
    desc: "जन्म कुंडली में मौजूद विभिन्न ग्रहों का अशुभ प्रभाव, जातक के जीवन में अनेक विपरीत समस्याओं का मुख्य कारण बनता है...",
    howItWorks:[
     "जन्म कुंडली में मौजूद विभिन्न ग्रहों का अशुभ प्रभाव, जातक के जीवन में अनेक विपरीत समस्याओं का मुख्य कारण बनता है।",
     "नवग्रह पूजन का महत्‍व",
     "विधि- विधान अनुसार नवग्रह पूजा कराने से, जातक के कई बिगड़ते कार्य सफल हो जाते हैं। साथ ही इस पूजा के प्रभाव से जातक को अपनी सभी शारीरिक और मानसिक चिंताओं से मुक्ति मिलती है।",
     "नवग्रह पूजन का लाभ",
     "नवग्रह पूजन व अनुष्ठान से कुंडली के सभी नौ ग्रहों को बली बनाने में मदद मिलती है। इसके अलावा यदि किसी जातक की कुंडली में कोई ग्रह नीच का हो तो, उसके बुरे प्रभाव से भी बचाव होता है।",
     "नवग्रह दोष शांति पूजा",
     "नवग्रह दोष के निवारण हेतु इस पूजन से, हमारे विशेषज्ञ सबसे उत्तम विधि और वैदिक मंत्रों से पूजन प्रक्रिया की जाती है।",
     "भारतीय ज्योतिष शास्त्र के अनुसार कहा गया है कि ग्रहों के शुभ -अशुभ प्रभाव के कारण जीवन में अनेक तरह शुभ-अशुभ परिस्थितियां प्राप्त होती हैं। कहा गया है कि मानव जीवन में ग्रहों का प्रभाव इतना प्रभावशील होता है कि एक अच्छे खासे परिवार में पल रहा जातक भी, अपने ही हाथों से खुद को बर्बाद कर लेता है। परंतु यह सारा खेल जातक की जन्म कुंडली में बैठे अशुभ ग्रहों के प्रभाव के कारण, उसके जीवन को नर्क बना सकता है।",
     "नवग्रह पूजन का महत्‍व",
     "नवग्रहों यानी नौ ग्रहों को शांत करने के लिए नवग्रह पूजन ही एकमात्र समाधान है। मानव जीवन में जो भी अच्छा या बुरा प्रभाव पड़ता है उसके पीछे ग्रहों की चाल एक बड़ा कारण है। इन तमाम उतार-चढ़ावों को रोकने के लिए और क्रोधित ग्रह को शांत करने के लिए धार्मिक व पौराणिक ग्रंथों में नवग्रह यानी जीवन को प्रभावित करने वाले समस्त 9 ग्रहों की पूजा करने का विधान है। ज्योतिष शास्त्र के अनुसार राशियां 12 होती हैं और प्रत्य�"
    ],
     price: "₹ 21,002",
    previousPrice : "30,999",
    type :"pooja"

  },
  {
    src: { serviceImage }, // image source
    title: "पितृ दोष निवारण पूजा",
    desc: "पितृ दोष निवारण पूजा के माध्यम से पाएं जीवन की सभी समस्याओं और बाधाओं से मुक्ति! पितृ दोष पूजा के उपाय से बदलेगा भाग्य...",
    howItWorks:[
       "पितृ दोष निवारण पूजा के माध्यम से पाएं जीवन की सभी समस्याओं और बाधाओं से मुक्ति!",
       "पितृ दोष पूजा के उपाय से बदलेगा भाग्य:",
       "घर बैठे पितृ दोष निवारण पूजा से नाराज़ पूर्वजों को शांत कर बनाएं अपने जीवन को सफल!",
       "सबसे सटीक उपाय:",
       "पितृ दोष के नकारात्मक प्रभाव से बचने के लिए पितृ दोष निवारण पूजा है सबसे सटीक उपाय!",
       "अभी करवाएं ऑनलाइन पूजा व अनुष्ठान :",
       "अब घर बैठकर करवाएं पितृ दोष निवारण पूजा और इस आसान, सस्ती और सुलभ सेवा का उठाएं लाभ!",
       "पितृ दोष निवारण पूजा",
       "यदि जन्म कुंडली का नवम भाव पाप ग्रहों से ग्रसित हो तो, यह पूर्वजों की अधूरी इच्‍छाओं का सूचक है, जिसे हम पितृ दोष कहते हैं। इसके अलावा कुंडली में यदि पंचम भाव में सूर्य, चंद्रमा, मंगल, राहु, बुध और केतु की उपस्थिति होने पर भी, पितृ दोष का निर्माण होता है। वहीं व्यक्ति द्वारा कभी किसी सत्पुरुष, ब्राह्मण या कुलगुरु का अनादर किया गया है तो भी, वो व्यक्ति पितृ दोष से पीड़ित रहता है। इसके अलावा गोहत्‍या करना या पितरों को जल अर्पित न करना भी, इस दोष का मुख्य कारण बताया गया है।",
       "पूजा की संपूर्ण जानकारी और विधि",
       "पितृ दोष के निवारण हेतु पूजा करने का विधान",
       "पितृ दोष के निवारण हेतु पूजन की यूँ तो अनेक विधि बताई गई हैं। लेकिन सबसे उत्तम विधि वैदिक मंत्रों द्वारा किया जाने वाला विधान है। पितृ दोष की शांति के लिए, उस दोष से संबंधित ग्रहों को उनके मंत्रों द्वारा शांत किया जाता है।",
       "पितृ दोष के प्रभाव",
       "पितृ दोष से पीड़ित लोग अपने बड़े-बुजुर्गों का अपमान करते हैं और दूसरों की भावनाओं की अवहेलना करने से भी नहीं चूकते। उन्हें आजीवन कई प्रकार की आर्थिक तंगी से दो-चार होना पड़ता है। इस दोष के दुष्प्रभाव से परिवार में लड़ाई-झगड़ा, क्लेश और अशांति का वातावरण रहता है। साथ ही जातक को संतान �"
    ],
     price: "₹ 50,999",
    previousPrice : "75,010",
    type :"pooja"

  },
  {
    src: { serviceImage }, // image source
    title: "प्रेत बाधा निवारण पूजा",
    desc: "जन्म कुंडली में मौजूद विभिन्न ग्रहों का अशुभ प्रभाव, जातक के जीवन में अनेक विपरीत समस्याओं का मुख्य कारण बनता है।",
    howItWorks:[
       "महामृत्युंजय पूजा करने से शिव जी की होती है असीम कृपा । डर और मानसिक परेशानी से मुक्ति। इस पूजा से व्यक्ति को अपने डर से मुक्ति के साथ जीवन में सफलता मिलती है। महामृत्युंजय पूजा से लाभ। सुख-समृद्धि और मानसिक शांति की कामनाएं इस पूजा से प्राप्त होती हैं। महामृत्युंजय मंत्र सकारात्मकता के लिए इस पूजा में महामृत्युंजय मंत्र का जाप किया जाता है, जिसे करने से जीवन में और घर परिवार में सकारात्मकता आती है।",
       "भारतीय धर्म ग्रंथों के अनुसार कहा गया है कि महामंत्र महामृत्युंजय जाप पूजा, भगवान शिव को समर्पित है। इस मंत्र का उल्लेख ऋग्वेद में किया गया है। मंत्र का शाब्दिक अर्थ है तीन नेत्र वाले भगवान शिव की पूजा करना, जो सभी जीवों का पालन-पोषण करते हैं। इस प्रकार, कोई भी व्यक्ति जो नकारात्मक घटनाओं से डरता है, डर से हार जाता है, उसे महामृत्युंजय पूजा करनी चाहिए। साथ ही, इसे रुद्र मंत्र भी कहा जाता है, जो भगवान शिव के उग्र पहलू का उल्लेख करता है।", 
       "महामृत्युंजय मंत्र का मतलब",
       "“ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥”",
       "त्र्यंबक्कम भगवान शिव की तीन आंखें हैं। त्र्य का अर्थ है तीन और अम्बकम का अर्थ है आंख। ये तीन आँखें ब्रह्मा, विष्णु और शिव रूपी तीन मुख्य देवता हैं। तीन ‘अंबा’ का अर्थ है माँ या शक्ति जो सरस्वती, लक्ष्मी और गौरी हैं। इस प्रकार इस शब्द त्र्यंबक्कम में हम भगवान को ब्रह्मा, विष्णु और शिव के रूप में संदर्भित कर रहे हैं।",
       "यजामहे का अर्थ है, “हम आपकी प्रशंसा गाते हैं”।",
       "सुगंधिम का अर्थ है प्रभु के ज्ञान, उपस्थिति, और शक्ति की सुगंध जो हमेशा हमारे चारों ओर फैली है। निश्चित रूप से, सुगंध का अर्थ उस आनंद से �",

    ],
     price: "₹ 1,01,010",
    previousPrice : "1,50,020",
    type :"pooja"

  },
 
];
