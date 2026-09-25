import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import portrait from '../assets/images/soulaymane-benaddi.jpg';
import '../assets/styles/Main.scss';

const githubUrl = "https://github.com/soulaymanebenaddi";
const linkedinUrl = "https://www.linkedin.com/in/soulaymane-benaddi";

function Main() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="container" id="accueil">
      <section className="about-section" aria-labelledby="hero-title">
        <div className="image-wrapper">
          <div className="portrait-frame">
            <img src={portrait} alt="Portrait de Soulaymane Benaddi" />
          </div>
        </div>
        <div className="content">
          <span className="eyebrow">Portfolio · Montréal</span>
          <h1 id="hero-title">Soulaymane<br />Benaddi</h1>
          <p>Développeur Full-Stack</p>
          <div className="hero-actions">
            <button className="primary-action" type="button" onClick={scrollToProjects}>
              Voir mes projets <ArrowDownwardIcon />
            </button>
            <div className="social-icons" aria-label="Réseaux professionnels">
              <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="Profil GitHub de Soulaymane Benaddi"><GitHubIcon /></a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="Profil LinkedIn de Soulaymane Benaddi"><LinkedInIcon /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
