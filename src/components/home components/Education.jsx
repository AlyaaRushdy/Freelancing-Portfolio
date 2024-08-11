function Education() {
  return (
    <>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">DEPI Scholarship</h3>
              <div className="subheading mb-3">Ministry of Communications</div>
              <div>Software Development - React Fullstack Track </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">April 2024 - Present</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Ain-Shams University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Pure Mathematics & Computer Science </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">June 2022</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
