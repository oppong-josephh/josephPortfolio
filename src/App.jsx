import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import Experience from './Component/Experience/Experience';
import Work from './Component/Work/Work';
import Project from './Component/Project/Project';
import Team from './Component/Team/Team';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <Experience />
      <Work />
      <Project />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App