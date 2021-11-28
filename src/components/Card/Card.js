import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Badge,Flex} from "@chakra-ui/react"

export default function Card({content}) {

  return (
    <Box p="3" bg="yellow.100" m="20px" maxW="360px" color="black"  borderWidth="1px" borderRadius="15" > 
      {content.description }
      <Box display='flex' justifyContent='space-between' p="3">
          <Box as="span" color="gray.600" fontSize="sm">
            {content.name }
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            Acessar a página <ArrowForwardIcon/>
          </Box>
        
      </Box>
    </Box>
  )
}