import githubLogo from "../assets/github.svg";
import linkedInLogo from "../assets/linkedin.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <p>&copy; 2023 Pedro Costa</p>
        <div className="social_icons">
          <a
            href="https://www.linkedin.com/in/pedro-costa-a2173213b/"
            className="social_icon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInLogo} alt="LinkedIn Profile" />
          </a>
          <a
            href="https://github.com/Pedro-Costa123"
            className="social_icon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="GitHub Profile" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
