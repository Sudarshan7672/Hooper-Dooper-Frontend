import "./App.css";
import Hero from "./Hero";
import HeroMobile from "./HeroMobile";
import HeroMedium from "./HeroMedium";
import OurProductHomepage from "./components/OurProductHomepage.jsx";
import OurStoryHomePage from "./components/OurStoryHomePage.jsx";
import Testimonialsall from "./components/Testimonialsall.jsx";
import ProductGallery from "./components/ProductGallery.jsx";
import Cart from "./components/Cart.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="lg:hidden md:hidden">
        <HeroMobile className="" />
      </div>
      <div className="hidden md:block lg:hidden">
        <HeroMedium className="" />
      </div>
      <div className="hidden md:hidden lg:block">
        <Hero className="" />
      </div>
      <div>
        <OurProductHomepage />
      </div>
      <div className="block">
        <OurStoryHomePage />
      </div>
      <div>
        <Testimonialsall />
      </div>
      <div>
        <ProductGallery />
      </div>
      <div>
        <Cart />
      </div>
    </>
  );
}

export default App;
