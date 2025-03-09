import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Registration from './components/Registration';
import About from './components/About';
import Activities from './components/Activities';
import Gifting from './components/Gifting';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div class="bg-black grid gap-[100px]">
        <Registration />
        <About />
        <Activities />
        <Gifting />
        <Footer />
      </div>
    </div>
  );
}

export default App;
