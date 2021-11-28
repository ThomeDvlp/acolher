import { Box, Badge,Flex } from "@chakra-ui/react"

export default function Card() {


  const props = {
    title: "Modern home in city center in the heart of historic Los Angeles",
    portal: "Portal ",
  }

  return (
    <Box bg="Grey" color="white"  borderWidth="10px" borderRadius="10">
      

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="white"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="sm"
            textTransform="uppercase"
            ml="2"
          >
            {props.beds} beds &bull; {props.baths} baths
          </Box>
        </Box>

        <Flex
          mt="6"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {props.title}
        </Flex>

        <Box display= "flex" justifyContent= "space-around">
          {props.portal}
          <Box as="span" color="gray.600" fontSize="sm">
            2
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            Aceessar a página 
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          
          
        </Box>
      </Box>
    </Box>
  )
}