import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./src/scripts/contact.js";
    script.async = false;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className="resume-section" id="contact">
        <div className="resume-section-content">
          <h2 className="mb-5">Contact Me</h2>
          <form
            action=""
            className="col-12 col-md-10 col-lg-9 mx-start"
            id="contact-form"
          >
            <div className="mb-3">
              <label htmlFor="conatctSenderName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control bg-transparent text-color"
                id="conatctSenderName"
                name="from_name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="conatctSenderEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control bg-transparent text-color"
                id="conatctSenderEmail"
                name="from_email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactSenderMessage" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="contactSenderMessage"
                className="form-control bg-transparent text-color"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                type="submit"
                className="btn btn-outline-primary col-4 col-lg-3"
                value="Send"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
