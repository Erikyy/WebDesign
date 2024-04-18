import Header from "./Components/Common/Header.tsx";
import Footer from "./Components/Common/Footer.tsx";
import Hero from "./Components/Common/Hero.tsx";
import Features from "./Components/Features.tsx";
import {FEATURES} from "./texts.ts";
import Testimonials from "./Components/Testimonials.tsx";

function App() {

  return (
    <>
        <Header />
        <Hero />
        <Features features={FEATURES} />
        <Testimonials />
        <Footer />
    </>
  )
}

export default App
