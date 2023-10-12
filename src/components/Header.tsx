import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

const Header: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      bg={"navBg"}
      p={"10px"}
      maxW={"1170px"}
      w={{base:"90%",lg:"full"}}
      mx={"auto"}
      border={"1px"}
      borderColor={"goldenBorder"}
      borderRadius={"20px"}
    >
      <Flex
        height={"50px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"full"}
      >
        <HStack
          spacing={"4"}
          alignItems={"center"}
          justify={"space-between"}
          w={"full"}
        >
            {/* Humber Menu Icon */}
            <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon w={"20px"} h={"20px"} color={"white"} /> : <HamburgerIcon w={"25px"} h={"25px"} color={"white"}/>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          {/* Logo */}
          <Link href="/" alignItems={"center"}>
            <HStack>
              <Image boxSize={"40px"} src={"/images/nav_logo.png"} alt="Duckie logo"/>
              <Text color={"white"} fontWeight={"semibold"} fontSize={"15 px"}>
                Duckie AI
              </Text>
            </HStack>
          </Link>

          {/* Menu */}
          <HStack
            as={"nav"}
            spacing={"8"}
            display={{ base: "none", md: "flex" }}
          >
            <Box
              as="a"
              _hover={{
                textDecoration: "none",
                color: "golden",
              }}
              href={"starter-guide"}
              color={"white"}
            >
              Starter Guide
            </Box>
            <Box
              as="a"
              _hover={{
                textDecoration: "none",
                color: "golden",
              }}
              href={"join-discord"}
              color={"white"}
            >
              Join Discord
            </Box>
            <Box
              as="a"
              _hover={{
                textDecoration: "none",
                color: "golden",
              }}
              href={"contact-us"}
              color={"white"}
            >
              Contact Us
            </Box>
          </HStack>

          {/* Action Button */}
          <Button color={"white"} py={{base:"10px", md:"14px"}} px={{base:"10px", md:"30px"}} border={"1px"} borderColor={"golden"} borderRadius={"10px"} boxShadow={"-2px -2px 62px -16px #FFDD00"} alignItems={"center"} _hover={{
                color: "golden"
              }}>
                <Image src="/images/nav_logo.png" alt="Duckie logo" h={"28px"} w={"28px"} mr={{base:"2px", md:"8px"}} display={{base:"none",md:"flex"}}/>
                Try Duckie
                </Button>
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
          <Box  display={{ md: 'none' }} py={"20px"}>
            <Stack as={'nav'} spacing={4}>
            <Box
              as="a"
              textAlign={"center"}
              _hover={{
                textDecoration: "none",
                color: "golden",
              }}
              href={"starter-guide"}
              color={"white"}
            >
              Starter Guide
            </Box>
            <Box
              as="a"
              textAlign={"center"}
              _hover={{
                textDecoration: "none",
                color: "golden",
              }}
              href={"join-discord"}
              color={"white"}
            >
              Join Discord
            </Box>
            <Box
              as="a"
              textAlign={"center"}
              _hover={{
                textDecoration: "none",
                color: "golden",
              }}
              href={"contact-us"}
              color={"white"}
            >
              Contact Us
            </Box>
            </Stack>
          </Box>
        ) : null}
    </Box>
  );
};

export default Header;
