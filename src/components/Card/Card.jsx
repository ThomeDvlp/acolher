import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, VStack, HStack, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export const Card = ({ content, schemaColor }) => {
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
        <HStack justifyContent="space-between" p="3" w="100%">
          <Box as="span" color="pink.500" fontSize="sm">
            {content.name}
          </Box>

          <Link href={content.url} color="pink.500" fontSize=".7rem" isExternal>
            acessar a página <ArrowForwardIcon />
          </Link>
        </HStack>
        <Text as="p" textAlign="start" p="0 16px">
          {content.description}
        </Text>
        <Text as="p" textAlign="start" p="0 16px" flex="1">
          {content.diferencial}
        </Text>
        <Text color="dark.100" fontSize=".8rem" p="16px">
          {content.type} • {content.category}
        </Text>
      </VStack>
    </Flex>
  );
};
