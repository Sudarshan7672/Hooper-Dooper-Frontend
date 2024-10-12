import "./App.css";
import Hero from "./Hero";
import HeroMobile from "./HeroMobile";
import HeroMedium from "./HeroMedium";
import OurProductHomepage from "./components/ourProductHomepage";
import OurStoryHomePage from "./components/ourStoryHomePage";
import Testimonialsall from "./components/Testimonialsall";
import ProductGallery from "./components/ProductGallery";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage"; 
import FAQ from "./components/FAQ";

function App() {
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
      <LoginPage />
      </div>
      <div>
      <SignupPage />
      </div>
      <div>
      <FAQ />
      </div>



      {/* Trail Code */}
      
    </>
  );
}

export default App;
