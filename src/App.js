import './App.css';
import About from './Components/About';
import BookingProcess from './Components/BookingProcess';
import CityCover from './Components/CityCover';
import Introduction from './Components/Introduction';
import Referral from './Components/Referral';
import Socials from './Components/Socials';
import SpecialOffers from './Components/SpecialOffers';

function App() {
  return (
    <div className="App">
      <Introduction/>
      <SpecialOffers/>
      <CityCover/>
      <About/>
      <BookingProcess/>
      <Referral/>
      <Socials/>
    </div>
  );
}

export default App;
