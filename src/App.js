import Card from "./components/Card/Card";
import { data } from "./utils/DataSearch";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Flex, Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bgGradient="linear(to-b, yellow.100, pink.500)">
      <Header />
      <Flex w="100%" justifyContent="center">
        <Flex flexWrap="wrap" justifyContent="center">
          {data.map((item, index) => (
            <Card content={item} key={index} schemaColor={index} />
          ))}
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}

export default App;
