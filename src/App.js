import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Home from './layouts/Home';

function App() {
  return (
    <div className="App">
         <Header />
         <Banner />
         <Home/>
    </div>
  );
}

export default App;
