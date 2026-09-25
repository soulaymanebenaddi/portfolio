import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-mark">SB.</div>
      <p>Conçu et développé par Soulaymane Benaddi.</p>
      <div className="footer-links">
        <a href="https://github.com/soulaymanebenaddi" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/soulaymane-benaddi" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
      </div>
    </footer>
  );
}

export default Footer;
