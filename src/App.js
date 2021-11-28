import { Flex } from "@chakra-ui/react";
import Card from "./components/Cards/Card";
import { Footer } from "./components/Footer";
function App() {
  return (
    <Flex w="100vw" h="100vh" margin="0">
      <Card />
      <Footer />
    </Flex>
  );
}

export default App;
