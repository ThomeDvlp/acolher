import { Flex } from "@chakra-ui/react";
import Card from "./components/Cards/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
function App() {
  return (
    <Flex w="100vw" h="150vh" margin="0" flexDirection="column">
      <Header />
      <Card />
      <Footer />
    </Flex>
  );
}

export default App;
