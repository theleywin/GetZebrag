import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

function App() {
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

export default App;