import './App.css';
import Header from './components/header'
import CarroselBanner from './components/carroselBanner';
import Intro from './components/intro';
import Footer from './components/footer';
import FeedBack from './components/feedback';
import Services from './components/services';
import Location from './components/location';

function App() {
  return (
    <div className="App">
      <Header />
      <CarroselBanner />
      <Intro />
      <Services />
      <Location />
       <FeedBack />
      <Footer />
    </div>
  );
}

export default App;
