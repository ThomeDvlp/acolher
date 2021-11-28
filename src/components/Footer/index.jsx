import { Container, HStack, Flex, Box, Button, Text } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { About } from "../About";

export const Footer = () => {
  const downloadPdf = () => {
    alert("baixando Pdf");
  };
  return (
    <>
      <About></About>
      <Flex
        position="fixed"
        bottom="0"
        width="100%"
        as="footer"
        boxShadow="0px -8px 15px rgba(0, 0, 0, 0.1)"
        p={["16px 8px", "16px 8px", "16px 64px", "16px 64px"]}
        borderTopRadius="30px"
        bg="white"
      >
        <HStack w="100%" justifyContent="center">
          <Box>
            <Text
              textAlign="start"
              fontSize="11px"
              mr={["0", "0", "32px", "32px"]}
            >
              Vai ficar sem internet? 
            </Text>
            <Text
              textAlign="start"
              fontSize="11px"
              mr={["0", "0", "32px", "32px"]}
            >
              Baixe o conteúdo agora
            </Text>
          </Box>
          <Button
            fontSize=".8rem"
            borderRadius="32px"
            width="150px"
            color="white"
            bg="pink.500"
            onClick={downloadPdf}
          >
            baixar pdf
            <DownloadIcon />
          </Button>
        </HStack>
      </Flex>
    </>
  );
};
