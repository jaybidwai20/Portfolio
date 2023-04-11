import logo from './logo.svg';
import './App.css';
import  Header  from './component/header/Header'
import  Nav  from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience '
import Portfolio  from './component/portfolio/Portfolio'
import Testimonials from './component/testminoals/Testimonials'
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer'

function App() {
  return (
   <>
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
 
   <Portfolio/>
   <Testimonials/>
   <Contact/>
   <Footer/>


   </>
  );
}

export default App;
