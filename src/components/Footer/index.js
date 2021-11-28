import { Container, HStack, Flex, Box, Button, Text } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

export const Footer = () => {
  const downloadPdf = () => {
    alert("baixando Pdf");
  };
  return (
    <>
      <Flex
        position="fixed"
        bottom="0"
        width="100%"
        bg="gray"
        as="footer"
        p={["16px 8px", "16px 8px", "16px 64px", "16px 64px"]}
      >
        <HStack w="100%" justifyContent="space-between">
          <Box>
            <Text>Bem vindo veja como podemos te ajudar</Text>
          </Box>
          <Button
            fontSize=".5rem"
            bg="black"
            borderRadius="32px"
            width="200px"
            color="white"
            onClick={downloadPdf}
          >
            Baixar PDF
            <DownloadIcon />
          </Button>
        </HStack>
      </Flex>
    </>
  );
};
