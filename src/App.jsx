import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Workflow from "./components/Workflow.jsx";
import Price from "./components/Price.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {

  return (
      <>
         <Navbar/>
          <Hero/>
          <Features/>
          <Workflow/>
          <Price/>
          <Testimonials/>
          <Footer/>
      </>
  );
}

export default App