import './App.css';
import About from './Components/About';
import BookingProcess from './Components/BookingProcess';
import CityCover from './Components/CityCover';
import Introduction from './Components/Introduction';
import Referral from './Components/Referral';
import Socials from './Components/Socials';
import SpecialOffers from './Components/SpecialOffers';
import Sponsers from './Components/Sponsers';

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
      <Sponsers/>
    </div>
  );
}

export default App;
