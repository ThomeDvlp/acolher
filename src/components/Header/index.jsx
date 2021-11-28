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
      <Box position="relative">
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
          height="230px"
          w="100%"
          mt="50px"
        ></Box>
        {/* <Image
          src={HeaderBanner}
          alt="Mulher Negra"
          role="banner"
          borderBottomRadius="55px"
          height="230px"
          w="100%"
          mt="50px"
        ></Image> */}
        <Text
          position="absolute"
          bottom="10px"
          color="white"
          textAlign="center"
          fontSize="14px"
          p="0 24px"
        >
          Bem-vinda, encontre uma rede de apoio rápido e fácil
        </Text>
      </Box>
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
