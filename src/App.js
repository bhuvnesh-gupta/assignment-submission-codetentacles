import About from './components/About';
import Header from './components/Header';
import HotCollection from './components/HotCollection';
import HowTo from './components/HowTo';
import Partners from './components/Partners';
import Slider from './components/Slider';

function App() {
  return (
    <div className="">
      <Header />
      <Slider />
      <HowTo />
      <HotCollection />
      <About />
      <Partners />
    </div>
  );
}

export default App;
