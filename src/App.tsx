import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Flex,
  Button,
  Image,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import Header from "./components/Header";

export const App = () => (
  <Box bg={"background"} pt={"20px"}>
    <Header />
    {/* Hero Section */}
    <Container as={"section"}>
      <Box
        maxW={"1170px"}
        w={"full"}
        mx={"auto"}
        px={"16px"}
        py={{ base: "100px", md: "150px" }}
        backgroundImage={"/images/hero-bg.png"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"right"}
      >
        <Flex
          flexDir={"column"}
          gap={"30px"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"full"}
        >
          {/* Tag */}
          <Box
            bg={"navBg"}
            py={"4px"}
            px={"10px"}
            w={"fit-content"}
            mx={"auto"}
            border={"1px"}
            borderColor={"goldenBorder"}
            borderRadius={"full "}
          >
            <Text as={"h3"} color={"white"}>
              Free public beta!
            </Text>
          </Box>

          {/* Main Heading */}
          <Text
            as={"h1"}
            color={"white"}
            fontSize={{ base: "3xl", lg: "5xl" }}
            textAlign={"center"}
            w={"90%"}
          >
            Unlocking new levels of developer productivity with the power of AI.
          </Text>

          {/* sub Heading */}
          <Text
            as={"h2"}
            color={"greyText"}
            fontSize={{ base: "16px", lg: "2xl" }}
            textAlign={"center"}
            w={"80%"}
          >
            Lorem ipsum dolor sit amet consectetur. Scelerisque ultrices velit
            tortor sit. Mattis vitae odio nam vel. Adipiscing et vehicula at dui
            sed ornare fermentum sit.
          </Text>

          {/* Button */}
          <Button
            color={"black"}
            py={{ base: "10px", md: "14px" }}
            px={{ base: "10px", md: "30px" }}
            border={"1px"}
            borderColor={"golden"}
            borderRadius={"10px"}
            boxShadow={"-2px -2px 30px -14px #FFDD00"}
            alignItems={"center"}
            bgColor={"golden"}
          >
            <Image
              src="/images/nav_logo.png"
              alt="Duckie logo"
              h={"28px"}
              w={"28px"}
              mr={{ base: "2px", md: "8px" }}
            />
            Try Duckie
          </Button>
        </Flex>
      </Box>
    </Container>
    {/* Video Holder */}
    <Container as={"section"} h={"700px"} pos={"relative"}>
      <Box
        pos={"absolute"}
        top={"-10%"}
        right={"10%"}
        zIndex={"10"}
        borderRadius={"200px"}
        h={"200px"}
        w={"200px"}
        bgColor={"golden"}
        filter={"blur(115px)"}
        opacity={"60%"}
      ></Box>
      <Box
        pos={"absolute"}
        top={"15%"}
        zIndex={"0"}
        borderRadius={"50% 50% 0% 0%"}
        h={"500px"}
        w={"full"}
        border={"0px"}
        bg={"transparent"}
        boxShadow={"-8px -50px 150px -50px rgba(255,221,0,0.64)"}
      ></Box>
      <Box maxW={"1170px"} w={"full"} mx={"auto"}>
        <Flex alignItems={"center"} justifyContent={"center"} width={"full"}>
          <Box
            pos={"absolute"}
            top={"0"}
            maxW={"1170px"}
            w={{ base: "90%", lg: "full" }}
            mx={"auto"}
            h={"600px"}
            zIndex={"1"}
            bgColor={"black"}
            border={"1px"}
            borderColor={"goldenBorder"}
            borderRadius={"45px"}
            boxShadow={"-1px -3px 50px -20px #FFDD00"}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              h={"full"}
              width={"full"}
            >
              <Text color={"white"} fontSize={{ base: "3xl", lg: "5xl" }}>
                VIDEO PLACE HOLDER
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Container>
    {/* Trusted By */}
    <Container as={"section"}>
      <Box maxW={"1170px"} w={{ base: "90%", lg: "full" }} mx={"auto"}>
        <Text
          as={"h3"}
          color={"greyText"}
          fontSize={{ base: "14px", lg: "xl" }}
          textAlign={"center"}
        >
          Trusted by tens of thousands of engineer
        </Text>
        <SimpleGrid
          column={5}
          spacing={"10px"}
          minChildWidth={"200px"}
          my={"50px"}
        >
          <Box h={"40px"}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={"12px"}
              w={"full"}
            >
              <Image
                src="/images/Nietzsche.png"
                alt="Nietzsche"
                w={"36px"}
                h={"36px"}
              />
              <Text color={"white"} fontSize={"20px"}>
                Nietzsche
              </Text>
            </Flex>
          </Box>
          <Box h={"40px"}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={"12px"}
              w={"full"}
            >
              <Image
                src="/images/Epicurious.png"
                alt="Epicurious"
                w={"36px"}
                h={"36px"}
              />
              <Text color={"white"} fontSize={"20px"}>
                Epicurious
              </Text>
            </Flex>
          </Box>
          <Box h={"40px"}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={"12px"}
              w={"full"}
            >
              <Image
                src="/images/CloudWatch.png"
                alt="CloudWatch"
                w={"36px"}
                h={"36px"}
              />
              <Text color={"white"} fontSize={"20px"}>
                CloudWatch
              </Text>
            </Flex>
          </Box>
          <Box h={"40px"}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={"12px"}
              w={"full"}
            >
              <Image
                src="/images/Acme Corp.png"
                alt="Acme Corp"
                w={"36px"}
                h={"36px"}
              />
              <Text color={"white"} fontSize={"20px"}>
                Acme Corp
              </Text>
            </Flex>
          </Box>
          <Box h={"40px"}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={"12px"}
              w={"full"}
            >
              <Image
                src="/images/Polymath.png"
                alt="Polymath"
                w={"36px"}
                h={"36px"}
              />
              <Text color={"white"} fontSize={"20px"}>
                Polymath
              </Text>
            </Flex>
          </Box>
          <Box h={"40px"}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={"12px"}
              w={"full"}
            >
              <Image
                src="/images/Boltshift.png"
                alt="Boltshift"
                w={"36px"}
                h={"36px"}
              />
              <Text color={"white"} fontSize={"20px"}>
                Boltshift
              </Text>
            </Flex>
          </Box>
          <Box h={"40px"}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={"12px"}
              w={"full"}
            >
              <Image
                src="/images/Lightbox.png"
                alt="Lightbox"
                w={"36px"}
                h={"36px"}
              />
              <Text color={"white"} fontSize={"20px"}>
                Lightbox
              </Text>
            </Flex>
          </Box>
          <Box h={"40px"}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={"12px"}
              w={"full"}
            >
              <Image
                src="/images/FeatherDev.png"
                alt="FeatherDev"
                w={"36px"}
                h={"36px"}
              />
              <Text color={"white"} fontSize={"20px"}>
                FeatherDev
              </Text>
            </Flex>
          </Box>
          <Box h={"40px"}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={"12px"}
              w={"full"}
            >
              <Image
                src="/images/Spherule.png"
                alt="Spherule"
                w={"36px"}
                h={"36px"}
              />
              <Text color={"white"} fontSize={"20px"}>
                Spherule
              </Text>
            </Flex>
          </Box>
          <Box h={"40px"}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={"12px"}
              w={"full"}
            >
              <Image
                src="/images/GlobalBank.png"
                alt="GlobalBank"
                w={"36px"}
                h={"36px"}
              />
              <Text color={"white"} fontSize={"20px"}>
                GlobalBank
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
    {/* Leads */}
    <Container as={"section"}>
      <Box
        maxW={"1170px"}
        w={{ base: "90%", lg: "full" }}
        mx={"auto"}
        mt={"100px"}
        p={"16px"}
      >
        <Text
          as={"h2"}
          color={"white"}
          fontSize={{ base: "2xl", lg: "4xl" }}
          textAlign={"center"}
          w={"full"}
          mx={"auto"}
          maxW={"570x"}
          alignItems={"center"}
          mb={"20px"}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            mx={"Auto"}
            gap={"12px"}
            w={"full"}
            flexWrap={"wrap"}
          >
            You be the lead. Let{" "}
            <Image
              src="/images/nav_logo.png"
              alt="Duckie logo"
              h={"28px"}
              w={"28px"}
            />{" "}
            Duckie do the work.
          </Flex>
        </Text>
        {/* Define Objective */}
        <SimpleGrid
          w={"full"}
          border={"1px"}
          borderRadius={"20px"}
          borderColor={"goldenBorder"}
          column={{ base: 1, xl: 2 }}
          minChildWidth={{ base: "100%", xl: "50%" }}
          mx={"auto"}
          my={"40px"}
          pos={"relative"}
        >
          <Box
            pos={"absolute"}
            display={{ base: "none", xl: "block" }}
            top={"5%"}
            left={"45%"}
            w={"100px"}
            h={"100px"}
            backgroundColor={"#FFDD00"}
            borderRadius={"full"}
            filter={"blur(80px)"}
          ></Box>
          <Box p={"50px"}>
            <Flex
              flexDirection={"column"}
              alignItems={{ base: "center", xl: "flex-start" }}
              justifyContent={"space-between"}
              h={"full"}
              gap={{ base: "50px" }}
            >
              <Box
                w={"56px"}
                h={"56px"}
                border={"1px"}
                borderRadius={"5px"}
                borderColor={"goldenBorder"}
                boxShadow={"-2px -2px 30px -14px #FFDD00"}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  h={"full"}
                  color={"white"}
                >
                  1
                </Flex>
              </Box>
              <Box>
                <Text
                  as={"h3"}
                  color={"white"}
                  fontSize={{ base: "xl", lg: "3xl" }}
                  w={"full"}
                  mb={"10px"}
                  textAlign={{ base: "center", xl: "left" }}
                >
                  Define Objective
                </Text>
                <Text
                  as={"h3"}
                  color={"greyText"}
                  fontSize={{ base: "14px", lg: "xl" }}
                  textAlign={{ base: "center", xl: "left" }}
                >
                  Tell Duckie what you want it to work on. Duckie will ask you
                  questions to better define your goal.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box p={"10px"}>
            <Image
              src="/images/defineobjectiveimg.png"
              alt="Define Objective Image"
              m={"auto"}
            />
          </Box>
        </SimpleGrid>
        {/* Collaborative Planning */}
        <SimpleGrid
          w={"full"}
          border={"1px"}
          borderRadius={"20px"}
          borderColor={"goldenBorder"}
          column={{ base: 1, xl: 2 }}
          minChildWidth={{ base: "100%", xl: "50%" }}
          mx={"auto"}
          my={"40px"}
          pos={"relative"}
        >
          <Box
            pos={"absolute"}
            display={{ base: "none", xl: "block" }}
            top={"5%"}
            left={"45%"}
            w={"100px"}
            h={"100px"}
            backgroundColor={"#FFDD00"}
            borderRadius={"full"}
            filter={"blur(80px)"}
          ></Box>
          <Box p={"10px"}>
            <Image
              src="/images/collaborativeplanningimg.png"
              alt="Define Objective Image"
              m={"auto"}
            />
          </Box>
          <Box p={"50px"}>
            <Flex
              flexDirection={"column"}
              alignItems={{ base: "center", xl: "flex-start" }}
              justifyContent={"space-between"}
              h={"full"}
              gap={{ base: "50px" }}
            >
              <Box
                w={"56px"}
                h={"56px"}
                border={"1px"}
                borderRadius={"5px"}
                borderColor={"goldenBorder"}
                boxShadow={"-2px -2px 30px -14px #FFDD00"}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  h={"full"}
                  color={"white"}
                >
                  2
                </Flex>
              </Box>
              <Box>
                <Text
                  as={"h3"}
                  color={"white"}
                  fontSize={{ base: "xl", lg: "3xl" }}
                  w={"full"}
                  mb={"10px"}
                  textAlign={{ base: "center", xl: "left" }}
                >
                  Collaborative Planning
                </Text>
                <Text
                  as={"h3"}
                  color={"greyText"}
                  fontSize={{ base: "14px", lg: "xl" }}
                  textAlign={{ base: "center", xl: "left" }}
                >
                  Duckie will come up with an implementation plan. Provide
                  feedback to Duckie's proposed plan until you are satisfied.
                </Text>
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
        {/* Task Execution */}
        <SimpleGrid
          w={"full"}
          border={"1px"}
          borderRadius={"20px"}
          borderColor={"goldenBorder"}
          column={{ base: 1, xl: 2 }}
          minChildWidth={{ base: "100%", xl: "50%" }}
          mx={"auto"}
          my={"40px"}
          pos={"relative"}
        >
          <Box
            pos={"absolute"}
            display={{ base: "none", xl: "block" }}
            top={"5%"}
            left={"45%"}
            w={"100px"}
            h={"100px"}
            backgroundColor={"#FFDD00"}
            borderRadius={"full"}
            filter={"blur(80px)"}
          ></Box>
          <Box p={"50px"}>
            <Flex
              flexDirection={"column"}
              alignItems={{ base: "center", xl: "flex-start" }}
              justifyContent={"space-between"}
              h={"full"}
              gap={{ base: "20px" }}
            >
              <Box
                w={"56px"}
                h={"56px"}
                border={"1px"}
                borderRadius={"5px"}
                borderColor={"goldenBorder"}
                boxShadow={"-2px -2px 30px -14px #FFDD00"}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  h={"full"}
                  color={"white"}
                >
                  3
                </Flex>
              </Box>
              <Box>
                <Text
                  as={"h3"}
                  color={"white"}
                  fontSize={{ base: "xl", lg: "3xl" }}
                  w={"full"}
                  mb={"10px"}
                  textAlign={{ base: "center", xl: "left" }}
                >
                  Task Execution
                </Text>
                <Text
                  as={"h3"}
                  color={"greyText"}
                  fontSize={{ base: "14px", lg: "xl" }}
                  textAlign={{ base: "center", xl: "left" }}
                >
                  After laying out a plan, Duckie will move on to task
                  executions. You can provide feedback at any point to modify
                  the tasks.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box p={"10px"}>
            <Image
              src="/images/taskexecutionimg.png"
              alt="Define Objective Image"
              m={"auto"}
            />
          </Box>
        </SimpleGrid>
        {/* Collaborative Planning */}
        <SimpleGrid
          w={"full"}
          border={"1px"}
          borderRadius={"20px"}
          borderColor={"goldenBorder"}
          column={{ base: 1, xl: 2 }}
          minChildWidth={{ base: "100%", xl: "50%" }}
          mx={"auto"}
          my={"40px"}
          pos={"relative"}
        >
          <Box
            pos={"absolute"}
            display={{ base: "none", xl: "block" }}
            top={"5%"}
            left={"45%"}
            w={"100px"}
            h={"100px"}
            backgroundColor={"#FFDD00"}
            borderRadius={"full"}
            filter={"blur(80px)"}
          ></Box>
          <Box p={"10px"}>
            <Image
              src="/images/collaborativeplanning.png"
              alt="Define Objective Image"
              m={"auto"}
            />
          </Box>
          <Box p={"50px"}>
            <Flex
              flexDirection={"column"}
              alignItems={{ base: "center", xl: "flex-start" }}
              justifyContent={"space-between"}
              h={"full"}
              gap={{ base: "20px" }}
            >
              <Box
                w={"56px"}
                h={"56px"}
                border={"1px"}
                borderRadius={"5px"}
                borderColor={"goldenBorder"}
                boxShadow={"-2px -2px 30px -14px #FFDD00"}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  h={"full"}
                  color={"white"}
                >
                  4
                </Flex>
              </Box>
              <Box>
                <Text
                  as={"h3"}
                  color={"white"}
                  fontSize={{ base: "xl", lg: "3xl" }}
                  w={"full"}
                  mb={"10px"}
                  textAlign={{ base: "center", xl: "left" }}
                >
                  Collaborative Planning
                </Text>
                <Text
                  as={"h3"}
                  color={"greyText"}
                  fontSize={{ base: "14px", lg: "xl" }}
                  textAlign={{ base: "center", xl: "left" }}
                >
                  Duckie will come up with an implementation plan. Provide
                  feedback to Duckie's proposed plan until you are satisfied.
                </Text>
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
    {/* Footer Banner */}
    <Container as={"section"}>
      <Box
        w={"full"}
        h={"620px"}
        mx={"auto"}
        p={"16px"}
        backgroundImage={'url("/images/footerbanner.png")'}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
      >
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"full"}
          h={"full"}
          gap={"50px"}
        >
          <Box
            w={"56px"}
            h={"56px"}
            bg={"#0E1114"}
            opacity={"70%"}
            border={"1px"}
            borderRadius={"5px"}
            borderColor={"goldenBorder"}
            boxShadow={"-2px -2px 30px -14px #FFDD00"}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              h={"full"}
              color={"white"}
            >
              <Image
                src="/images/nav_logo.png"
                alt="Duckie logo"
                h={"28px"}
                w={"28px"}
              />
            </Flex>
          </Box>
          <Text
            as={"h2"}
            color={"white"}
            fontSize={{ base: "2xl", lg: "4xl" }}
            textAlign={"center"}
            w={"full"}
            mx={"auto"}
            alignItems={"center"}
          >
            Try Duckie AI.
            <br /> Free public beta
          </Text>
          {/* Button */}
          <Button
            color={"black"}
            py={{ base: "8px", md: "12px" }}
            px={{ base: "10px", md: "30px" }}
            border={"1px"}
            borderColor={"golden"}
            borderRadius={"10px"}
            boxShadow={"-2px -2px 30px -14px #FFDD00"}
            alignItems={"center"}
            bgColor={"golden"}
          >
            <Image
              src="/images/nav_logo.png"
              alt="Duckie logo"
              h={"28px"}
              w={"28px"}
              mr={{ base: "2px", md: "8px" }}
            />
            Try Duckie
          </Button>
        </Flex>
      </Box>
    </Container>
    {/* Footer */}
    <Container as={"footer"} overflow={"hidden"} p={"20px"}>
    <Box p={"10px"} pt={"50px"} maxW={"1170px"} w={{ base: "90%", lg: "full" }} mx={"auto"}>
      <Flex
        height={"50px"}
        flexDirection={{base:"column",md:"row"}}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"full"}
      >
        <Box p={"10px"} pos={"relative"}>
        <Box
            pos={"absolute"}
            top={"300%"}
            left={"20%"}
            w={"100px"}
            h={"100px"}
            backgroundColor={"#FFDD00"}
            borderRadius={"full"}
            filter={"blur(100px)"}
          ></Box>
          <Text
            as={"h3"}
            color={"greyText"}
            fontSize={{ base: "14px", lg: "16px" }}
          >
            © 2023 Duckie AI
          </Text>
        </Box>
        <HStack
            as={"nav"}
            spacing={"8"}
            display={"flex" }
            pos={"relative"}
          >
            <Box
            pos={"absolute"}
            top={"250%"}
            left={"20%"}
            w={"100px"}
            h={"100px"}
            backgroundColor={"#184165"}
            borderRadius={"full"}
            filter={"blur(60px)"}
          ></Box>
            <Box
              as="a"
              _hover={{
                textDecoration: "none",
                color: "golden",
              }}
              href={"Privacy-policy"}
              color={"white"}
            >
              <Text
            as={"h3"}
            color={"greyText"}
            fontSize={{ base: "14px", lg: "16px" }}
            _hover={{
              textDecoration: "none",
              color: "golden",
            }}
          >
             Privacy Policy
          </Text>
            </Box>
            <Box
              as="a"
              _hover={{
                textDecoration: "none",
                color: "golden",
              }}
              href={"terms-of-services"}
              color={"white"}
            >
              <Text
            as={"h3"}
            color={"greyText"}
            fontSize={{ base: "14px", lg: "16px" }}
            _hover={{
              textDecoration: "none",
              color: "golden",
            }}
          >
             Terms of Services
          </Text>
              
            </Box>
          </HStack>
      </Flex>
    </Box>
    </Container>
  </Box>
);
