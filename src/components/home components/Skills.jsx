function Skills() {
  return (
    <>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3 ">Programming Languages & Tools</div>
          <ul className="list-inline dev-icons fs-4 text-capitalize">
            <li className="list-item mb-2">
              <span className="text-primary me-2">
                <i className="fab fa-html5"></i>
              </span>
              Create webpage content
            </li>
            <li className="list-item mb-2">
              <span className="text-primary me-2">
                <i className="fab fa-css3-alt"></i>
              </span>
              styling webpages
            </li>
            <li className="list-item mb-2">
              <span className="text-primary me-2">
                <i className="fab fa-js-square"></i>
              </span>
              making our website interactive
            </li>

            <li className="list-item mb-2">
              <span className="text-primary me-2 ">
                <i className="fab fa-react "></i>
              </span>
              create single-page websites
            </li>

            <li className="list-item mb-2">
              <span className="text-primary me-2">
                <i className="fab fa-npm"></i>
              </span>
              managing our packages
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Skills;
