import SiteFooter from "./components/common/SiteFooter/SiteFooter";
import SiteHeader from "./components/common/SiteHeader/SiteHeader";
import "./components/common/common.css";
import About from "./components/sections/About/About";
import Contact from "./components/sections/Contact/Contact";
import FeaturedProject from "./components/sections/FeaturedProject/FeaturedProject";
import Hero from "./components/sections/Hero/Hero";
import ProfessionalExperience from "./components/sections/ProfessionalExperience/ProfessionalExperience";
import TechnicalSkills from "./components/sections/TechnicalSkills/TechnicalSkills";

function App() {
  return (
    <>
      <SiteHeader />
      <main className="portfolio-content" id="home">
        <Hero />
        <FeaturedProject />
        <ProfessionalExperience />
        <TechnicalSkills />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
