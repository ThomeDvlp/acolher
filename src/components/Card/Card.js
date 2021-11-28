import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, VStack, HStack, Text } from "@chakra-ui/react";
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
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 18px;" }}
    >
      <VStack w="100%">
        <Text as="p" textAlign="justify" p="0 16px" flex="1">
          {content.description}
        </Text>
        <Text color="gray.100" fontSize=".8rem" textAlign="center">
          Atendimento psicológico • {content.category}
        </Text>
        <HStack justifyContent="space-between" p="3" w="100%">
          <Box as="span" color="pink.500" fontSize="sm">
            {content.name}
          </Box>
          <Link color="pink.500" fontSize=".7rem" isExternal>
            Acessar a página <ArrowForwardIcon />
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
}
