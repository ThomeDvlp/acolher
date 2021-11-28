import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Badge, Flex, VStack, HStack, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function Card({ content, schemaColor }) {
  return (
    <Flex
      p="8px"
      bg={schemaColor % 2 === 0 ? "yellow.100" : "white.100"}
      m="20px"
      maxW="360px"
      color="black"
      borderRadius="15"
    >
      <VStack w="100%">
        <Text as="p" textAlign="justify" p="0 16px">
          {content.tema1}
        </Text>
        <Text color="gray.100" fontSize=".8rem">
          Atendimento psicológico • Acolhimento
        </Text>
        <HStack justifyContent="space-between" p="3" w="100%">
          <Box as="span" color="pink.500" fontSize="sm">
            {content.portal}
          </Box>
          <Link color="pink.500" fontSize=".7rem" isExternal>
            Acessar a página <ArrowForwardIcon />
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
}
