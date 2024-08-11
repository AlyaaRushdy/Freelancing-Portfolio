import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import Contact from "./home components/Contact";
import Cover from "./home components/Cover";
import Education from "./home components/Education";
import Interests from "./home components/Interests";
import OfferedServices from "./home components/OfferedServices";
import Skills from "./home components/Skills";

function Home() {
  return (
    <>
      <div className="container-fluid p-0">
        <ScrollToHashElement behavior="smooth" />
        <Cover />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Interests />
        <hr className="m-0" />
        <OfferedServices />
        <hr className="m-0" />
        <Contact />
      </div>
    </>
  );
}

export default Home;
