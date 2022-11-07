import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faBookOpen,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import illustration from "../images/landing-page-illustration.png";
import Button from "../components/Button";
import "../styles/home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title> Educare</title>
        </Helmet>
      </HelmetProvider>
      <div className="mainContainer">
        <div className="topPart">
          <div className="leftPart">
            <div className="heroDescription">
              All your educational needs taken care of.
            </div>
            {/* <div className="heroSubDescription">
              Our all inclusive interactive website provides a holisitic
              platform so you can focus just on your studies.
               Assignments,Notes, classroom ,grades all in one place.
            </div> */}
            <div className="cards">
              <div className="card">
                <FontAwesomeIcon
                  icon={faChalkboardUser}
                  className="featureIcon"
                />
                <p className="featureName">Classroom</p>
              </div>
              <div className="card">
                <FontAwesomeIcon icon={faBookOpen} className="featureIcon" />
                <p className="featureName">Assignments</p>
              </div>
              <div className="card">
                <FontAwesomeIcon
                  icon={faSquarePollVertical}
                  className="featureIcon"
                />
                <p className="featureName">Grades and performance</p>
              </div>
            </div>
            <div className="buttonContainer">
              <Link to="/register">
                <Button style={{ width: "200px", padding: "20px" }}>
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="SignIn">
              Already have an account?
              <Link to="/login">
                <span>Sign In</span>
              </Link>
            </div>
          </div>

          <div className="rightPart">
            <div className="imageContainer">
              <img src={illustration} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
