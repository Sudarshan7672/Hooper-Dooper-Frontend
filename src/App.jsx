import "./App.css";
import Hero from "./Hero";
import HeroMobile from "./HeroMobile";
import HeroMedium from "./HeroMedium";
import OurProductHomepage from "./components/ourProductHomepage";
import OurStoryHomePage from "./components/ourStoryHomePage";
import Testimonialsall from "./components/Testimonialsall";
import ProductGallery from "./components/ProductGallery";
import FAQ from "./components/FAQ";
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
        <FAQ />
        {/* <AddressPage /> */}
      </div>

      {/* Trail Code */}
    </>
  );
}

export default App;
