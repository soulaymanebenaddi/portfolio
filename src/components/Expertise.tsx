import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const fullStackTechnologies = [
  "React", "TypeScript", "C#", ".NET", "JavaScript", "HTML5", "CSS3",
  "SQL", "PostgreSQL", "Node.js", "Blazor", "Vue.js", "Postman"
];

const devOpsTechnologies = ["Azure", "CI/CD", "Terraform", "Docker", "GitHub Actions"];

function Expertise() {
  return (
    <section className="container section-shell" id="expertise" aria-labelledby="expertise-title">
      <div className="skills-container">
        <div className="section-heading">
          <span>01 · Savoir-faire</span>
          <h2 id="expertise-title">Expertise</h2>
        </div>
        <div className="skills-grid">
          <article className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Développement Full-Stack</h3>
            <p>Conception d'applications web complètes, de l'interface utilisateur jusqu'aux API, à la logique métier et aux bases de données.</p>
            <div className="flex-chips">
              <span className="chip-title">Technologies</span>
              {fullStackTechnologies.map((label) => <Chip key={label} className='chip' label={label} />)}
            </div>
          </article>

          <article className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps &amp; automatisation</h3>
            <p>Je me forme personnellement en approfondissant mes connaissances en Cloud et DevOps, notamment avec des objectifs pratiques dans mon projet personnel Billetterie. Je vise également deux objectifs précis : obtenir les certifications Azure AZ-104 et AZ-400.</p>
            <div className="flex-chips">
              <span className="chip-title">En apprentissage</span>
              {devOpsTechnologies.map((label) => <Chip key={label} className='chip' label={label} />)}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
