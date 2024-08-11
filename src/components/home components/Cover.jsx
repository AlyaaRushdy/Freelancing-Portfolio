import { HashLink } from "react-router-hash-link";

function Cover() {
  return (
    <>
      <section className="resume-section" id="cover">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Alyaa
            <span className="text-primary"> Ahmed</span>
          </h1>
          <div className="subheading mb-5">
            Cairo · Egypt · 01153630942 ·
            <a href="mailto:alyaaahmed2502@gmail.com">
              alyaaahmed2502@gmail.com
            </a>
          </div>
          <HashLink
            to="/#contact"
            className="bg-primary text-white px-4 py-2 text-decoration-none fs-5"
          >
            Contact Me
          </HashLink>
        </div>
      </section>
    </>
  );
}

export default Cover;
