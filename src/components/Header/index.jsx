import { Flex, Box, Image, Button, Text } from "@chakra-ui/react";
import Logo from "../../assets/images/logo-acolher.png";
import EmergencyButton from "../../assets/images/emergency-button.svg";
import HeaderBanner from "../../assets/images/banner-header.png";

export const Header = () => {
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
          fontSize={["1rem", "1rem", "1.5rem", "2rem"]}
          maxW="40ch"
          p="0 24px"
        >
          Bem-vinda, encontre uma rede de apoio. <br />É rápido e fácil.
        </Text>
      </Flex>
      <Box
        as="nav"
        position="fixed"
        top="0"
        w="100%"
        display="flex"
        justifyContent="space-between"
        p="8px 8px"
        bg="black"
      >
        <Box w="100%" display="flex">
          <Image
            src={Logo}
            alt="Logo Acolher "
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
              <a href="https://www.google.com/search?q=google+como+cuidar+de+plantas&sxsrf=AOaemvKT1p7uOdnj9Q6y89xObNmHaTGdWg:1638132970254&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi2laXu-Lv0AhUUqJUCHa1MCikQ_AUoAXoECAEQAw&biw=1280&bih=650&dpr=1.5">
                <Image
                  src={EmergencyButton}
                  alt="Botão de emergência"
                  w="38px"
                  fontSize="27px"
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
