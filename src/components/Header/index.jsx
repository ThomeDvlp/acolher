import { useState } from "react";
import {
  Flex,
  Box,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Text,
} from "@chakra-ui/react";
import Logo from "../../assets/images/logo-acolher.png";
import EmergencyButton from "../../assets/images/emergency-button.png";
import HeaderBanner from "../../assets/images/banner-header.png";

export const Header = () => {
  const [heightMenu, setHeightMenu] = useState(true);
  const [navBarColor, setNavBarColor] = useState("transparent");

  const menuResize = () => {
    if (window.screenY > 80) {
      setHeightMenu(false);
    }
  };

  window.addEventListener("scroll", menuResize);
  return (
    <Box w="100%" position="relative">
      <Flex position="relative" justifyContent="center">
        <Box
          backgroundImage={`linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.5)
          ), url(${HeaderBanner})`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          role="banner"
          borderBottomRadius="55px"
          height={["230px", "300px", "400px", "400px"]}
          w="100%"
          mt="50px"
        ></Box>

        <Text
          m="0 auto"
          position="absolute"
          bottom="10px"
          color="white"
          textAlign="center"
          fontSize={["1rem", "1rem", "1.5rem", "1.5rem"]}
          maxW="40ch"
          p="0 24px"
          textShadow="-2px -1px 14px white"
        >
          Bem-vinda, encontre uma rede de apoio rápido e fácil
        </Text>
      </Flex>
      <Box
        as="nav"
        position="fixed"
        top="0"
        w="100%"
        display="flex"
        justifyContent="space-between"
        color={navBarColor}
        p="8px 8px"
        bg="black"
      >
        <Box w="100%" display="flex">
          <Image
            src={Logo}
            alt="Logo"
            aria-hidden="true"
            w="127px"
            h="30px"
            alignSelf="center"
            pl="8px"
          ></Image>
        </Box>
        <Box>
          <Button
            children={
              <a href="https://www.google.com/">
                <Image
                  src={EmergencyButton}
                  alt="Botão de emergência"
                  w="38px"
                />
              </a>
            }
            bg="none"
          />
        </Box>
      </Box>
    </Box>
  );
};
