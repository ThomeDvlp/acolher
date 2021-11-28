import Card from './components/Card'
import {data} from './utils/DataSearch'
function App() {
  return (
    <div>
      {data.map((item, index)=>
         <Card content={item} key={index}/>
      )}
     
    </div>
  );
}

export default App;
