import Header from "./Components/Common/Header.tsx";
import Footer from "./Components/Common/Footer.tsx";
import Hero from "./Components/Common/Hero.tsx";
import Features from "./Components/Features.tsx";
import {FEATURES} from "./texts.ts";
import Testimonials from "./Components/Testimonials.tsx";
import Plugins from "./Components/Plugins.tsx";
import ContactUs from "./Components/ContactUs.tsx";

function App() {

  return (
    <>
        <Header />
        <Hero />
        <Features features={FEATURES} />
        <Plugins />
        <Testimonials />
        <ContactUs />
        <Footer />
    </>
  )
}

export default App
