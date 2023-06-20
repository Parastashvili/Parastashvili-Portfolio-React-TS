import "./header.css";
import logo from "../../assets/logo.svg";
import linkedinLight from "../../assets/contact/linkedin-light.png";
import linkedinDark from "../../assets/contact/Linkedin-dark.png";
import whatsappLight from "../../assets/contact/whatsapp-light.png";
import whatsappDark from "../../assets/contact/whatsapp-dark.png";
import githubLight from "../../assets/contact/github-light.png";
import githubDark from "../../assets/contact/github-dark.png";
import gmailLight from "../../assets/contact/gmail-light.png";
import gmailDark from "../../assets/contact/gmail-dark.png";
export default function Header() {
  const reload = () => {
    window.location.reload();
  };
  return (
    <div className="head">
      <div className="logoCont" onClick={reload}>
        <img className="siteLogo" src={logo} alt="Portfolio Logo" />
        <h3 className="siteName">Parastashvili</h3>
      </div>
      <div className="routeCont">
        <a className="route" href="#projects">
          Projects
        </a>
        <a className="route" href="#tech">
          Tech Stack
        </a>
        <a className="route" href="#skills">
          Skills
        </a>
        <a className="route" href="#about">
          About Me
        </a>
      </div>
      <div className="contactCont">
        <a
          className="contact"
          href="https://github.com/Parastashvili"
          target="_blank"
        >
          <img
            className="contactIco"
            src={githubDark}
            alt="Github connection"
          />
        </a>
        <a
          className="contact"
          href="https://www.linkedin.com/in/levan-parastashvili-179974198/?trk=public_profile_browsemap&originalSubdomain=ge"
          target="_blank"
        >
          {" "}
          <img
            className="contactIco"
            src={linkedinDark}
            alt="Linkedin Connection"
          />
        </a>
        <a className="contact" href="levani.parastashvili@gmail.com">
          <img className="contactIco" src={gmailDark} alt="Gmail Connection" />
        </a>
        <a className="contact" href="+995557602353">
          <img
            className="contactIco"
            src={whatsappDark}
            alt="Whatsapp Connection"
          />
        </a>
      </div>
    </div>
  );
}
