import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      Created by
      <a
        href="http://yodkwtf.com"
        target="_blank"
        className="link"
        title="I create websites and stuff"
        rel="noreferrer"
      >
        &nbsp;Durgesh
      </a>
      <a href="https://twitter.com/yodkwtf" className="icon" id="twitter">
        <FaTwitter className="fab fa-twitter" />
      </a>
      <a href="https://www.github.com/yodkwtf" className="icon" id="github">
        <FaGithub className="fab fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/durgesh-chaudhary/"
        className="icon"
        id="linkedin"
      >
        <FaLinkedin className="fab fa-linkedin" />
      </a>
    </footer>
  );
};

export default Footer;
