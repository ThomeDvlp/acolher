import Card from "./components/Card/Card";
import { data } from "./utils/DataSearch";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      {data.map((item, index) => (
        <Card content={item} key={index} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
