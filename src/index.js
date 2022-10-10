// key react dependencies
import ReactDOM from 'react-dom/client';
// import our components
import Hero from './components/Hero';
import Message from './components/Message';
import FirstUseState from './components/FirstUseState';
import Counter from './components/Counter';
import Modals from './components/Modals';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Props from './components/Props';
import Dinosaurs from './components/Dinosaurs';
import MapSomeData from './components/MapSomeData';
// import our styles
import './styles.css';

var data = [
  {
    name: "John"
  },
  {
    name: "Sally"
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Hero />
    <Message />
    <Gallery />
    <FirstUseState />
    <Counter />
    <Modals />
    <Props />
    <Dinosaurs />
    <MapSomeData />
    <Footer />
  </>
);
