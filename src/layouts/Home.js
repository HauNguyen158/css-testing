import Info from "../components/Info";
import Registration from '../components/Registration';
import About from '../components/About';
import Activities from '../components/Activities';
import Gifting from '../components/Gifting';
import Footer from '../components/Footer';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="bg-[#191919] grid gap-[100px] max-xl:gap-[50px] max-sm:gap-[12px]">
        <div className="md:hidden">
          <Info />
        </div>
        <Registration />
        <About />
        <Activities />
        <Gifting />
        <Footer />
      </div>
    </div>
  )
}