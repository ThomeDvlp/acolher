import {
  Flex,
  Text,
  Image,
  VStack,
  Heading,
  HStack,
  Box,
} from "@chakra-ui/react";
import Logo from "../../assets/images/logo-acolher.png";
import EmergencyButton from "../../assets/images/emergency-button.png";
import BannerFooter from "../../assets/images/banner-footer.png";

export const About = () => {
  return (
    <>
      <Flex
        w="100%"
        mb="100px"
        borderTopRadius="75px"
        bg="white"
        p="32px 32px"
        position="relative"
        mt="230px"
      >
        <Image
          position="absolute"
          src={BannerFooter}
          alt="Mulher Negro"
          zIndex="-1"
          top={["-25%", "-40%", "-60%"]}
          right="0"
          width="100%"
        />
        <VStack w="100%">
          <Image src={Logo} pb="32px" />
          <Heading as="h2" textAlign="center">
            Como podemos te ajudar?
          </Heading>
          <Text as="p" textAlign="center" maxW="800px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis odit reprehenderit ab quibusdam soluta deserunt expedita
            numquam, vel eius id debitis! Inventore et perspiciatis qui maxime
            dolor sed ipsam neque.
          </Text>
          <Text color="pink.500" p="32px 0" textAlign="center">
            apoio • acolhimento • união • esperança
          </Text>
          <Flex bg="yellow.100" borderRadius="30px" p="16px 16px" maxW="612px">
            <HStack>
              <Box>
                <Image
                  src={EmergencyButton}
                  alt="Botão de emergência"
                  border="1px"
                  borderRadius="100%"
                  borderColor="pink.500"
                  w={["200px", "100px", "100px"]}
                  mr={["0", "0", "50px"]}
                ></Image>
              </Box>
              <VStack
                alignItems="flex-start"
                pl={["8px", "8px", "32px", "32  px"]}
              >
                <Heading
                  as="h5"
                  fontSize="14px"
                  textAlign="left"
                  color="pink.500"
                >
                  Botão de emergência!
                </Heading>
                <Text as="p" fontSize={[".7rem", ".7rem", "1rem"]}>
                  Em caso de emergência, clique no ícone e crie um disfarce para
                  a sua tela, assim você ficará camuflada e mais segura.
                </Text>
              </VStack>
            </HStack>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};
