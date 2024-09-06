import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import profileImage from "../../assets/profile.png";
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <HashLink className="navbar-brand js-scroll-trigger" to="/#">
          <span className="d-block d-lg-none">Alyaa Ahmed</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={profileImage}
              alt="Alyaa's Image"
            />
          </span>
        </HashLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/#education" className="nav-link js-scroll-trigger">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#skills" className="nav-link js-scroll-trigger">
                skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#interests" className="nav-link js-scroll-trigger">
                interests
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to="/#offered-services"
                className="nav-link js-scroll-trigger"
              >
                Offered Services
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/#contact" className="nav-link js-scroll-trigger">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
