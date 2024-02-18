import './App.css';
import CityCover from './Components/CityCover';
import Introduction from './Components/Introduction';
import SpecialOffers from './Components/SpecialOffers';

function App() {
  return (
    <div className="App">
      <Introduction/>
      <SpecialOffers/>
      <CityCover/>
    </div>
  );
}

export default App;
