// key react dependencies
import ReactDOM from 'react-dom/client';
// import our components
import Hero from './components/Hero';
import Message from './components/Message';
import FirstUseState from './components/FirstUseState';
import Counter from './components/Counter';
import Footer from './components/Footer';
// import our styles
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Hero />
    <Message />
    <FirstUseState />
    <Counter />
    <Footer />
  </>
);
