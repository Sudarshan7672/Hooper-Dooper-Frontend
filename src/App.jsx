import "./App.css";
import HeroMobile from "./HeroMobile";
import OurProductHomepage from "./components/OurProductHomepage.jsx";
import OurStoryHomePage from "./components/OurStoryHomePage.jsx";
import Testimonialsall from "./components/Testimonialsall.jsx";
import ProductGallery from "./components/ProductGallery.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="">
        <HeroMobile className="" />
      </div>
      {/* <div className="hidden md:block lg:hidden">
        <HeroMedium className="" />
      </div>
      <div className="hidden md:hidden lg:block">
        <Hero className="" />
      </div> */}
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
    </>
  );
}

export default App;
