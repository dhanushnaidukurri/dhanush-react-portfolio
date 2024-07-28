import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { CONTACT } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-4xl text-slate-400">Portfolio</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/kurri-dhanush-srimani-chandra-hass-9a3a36250/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/dhanushnaidukurri" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`} target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://drive.google.com/drive/folders/1qyFVlZxiAVCRPNDy0_oEZ9I86sM22OgO?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <FaGoogleDrive />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
