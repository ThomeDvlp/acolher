import { Box, Badge,Flex} from "@chakra-ui/react"

export default function Card({content}) {

  

  return (
    <Box bg="yellow.100" m="20px" w="360px" color="black"  borderWidth="1px" borderRadius="15" >
      

      <Box display='flex' p="3">
        <Box display='flex'  justifyContent= "space-between">
          {content.tema1 }
          <Box as="span" color="gray.600" fontSize="sm">
            Portal
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            Aceessar a página 
          </Box>
        </Box>

        <Box  mt="2" alignItems="center">
          
          
        </Box>
      </Box>
    </Box>
  )
}