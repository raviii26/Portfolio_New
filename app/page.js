import LenisScroll from "@/components/animations/LenisScroll";
import EstateNavbar from "@/components/layout/EstateNavbar";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import WorkExperience from "@/components/sections/WorkExperience";
import PersonalProjects from "@/components/sections/PersonalProjects";
import Services from "@/components/sections/Services";
// import Work from "@/components/Work";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <LenisScroll />
      <EstateNavbar />
      <Header />
      <About />
      <Skills />
      <Education />
      <WorkExperience />
      <PersonalProjects />
      <Services />
      {/* <Work /> */}
      <Contact />
      <Footer />
    </>
  );
}
