import React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import availoPreview from '../assets/images/availo-preview.png';
import sweatlyPreview from '../assets/images/sweatly-preview.png';
import monarquePreview from '../assets/images/monarque-preview.png';
import '../assets/styles/Project.scss';

type ProjectItem = {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  status?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  visualType?: 'wide' | 'mobile';
  previewMessage?: string;
};

const projects: ProjectItem[] = [
  {
    title: "Availo",
    description: "Application web née d'un besoin observé à la Coop Maisonneuve. Elle indique la disponibilité des livres pour éviter aux étudiants d'attendre en file inutilement pendant la rentrée. Fonctionnalités principales : installation PWA, notifications push et export Excel.",
    technologies: ["React", "Vite", "Firebase"],
    url: "https://github.com/soulaymanebenaddi/Availo",
    image: availoPreview,
    imageAlt: "Aperçu de l'application web Availo",
    visualType: 'wide',
  },
  {
    title: "Monarque AutoCare",
    description: "Site vitrine présentant les services et les prix de l'entreprise, avec un parcours simple permettant de demander un service au moyen d'un formulaire.",
    technologies: ["React", "TypeScript", "Firebase"],
    url: "https://themonarque.ca/",
    image: monarquePreview,
    imageAlt: "Aperçu du site Monarque AutoCare",
    visualType: 'wide',
  },
  {
    title: "Sweatly",
    description: "Application mobile d'entraînement permettant d'explorer des exercices provenant d'une API et de composer ses propres séances.",
    technologies: ["Flutter", "Dart", "Firebase", "API REST"],
    url: "https://github.com/soulaymanebenaddi/Sweatly",
    image: sweatlyPreview,
    imageAlt: "Aperçu de l'application mobile Sweatly",
    visualType: 'mobile',
  },
  {
    title: "Billetterie",
    description: "Mon projet le plus ambitieux : une application développée comme un produit en entreprise, avec architecture documentée, usage encadré de l'IA, issues GitHub Projects, pull requests, revues de code et déploiements.",
    technologies: ["C#", ".NET", "React", "TypeScript", "PostgreSQL"],
    url: "https://github.com/soulaymanebenaddi/Billetterie",
    status: "En développement",
    featured: true,
    previewMessage: "Le MVP est en cours de finalisation.",
  },
  {
    title: "Agent vocal IA",
    description: "Agent téléphonique capable de répondre aux questions d'une entreprise, de prendre un rendez-vous, de l'ajouter au calendrier et d'envoyer automatiquement les courriels de confirmation.",
    technologies: ["ElevenLabs", "n8n", "Twilio", "Webhooks", "Automatisation"],
    status: "Prototype",
    previewMessage: "Démonstration disponible sur demande.",
  },
];

function Project() {
  return (
    <section className="projects-container section-shell" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <span>03 · Réalisations</span>
        <h2 id="projects-title">Projets personnels</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className={`project${project.featured ? ' featured' : ''}`} key={project.title}>
            <div className="project-content">
              <div className="project-topline">
                <span className="project-index">0{index + 1}</span>
                {project.status && <span className="project-status">{project.status}</span>}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-technologies" aria-label={`Technologies utilisées pour ${project.title}`}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              {project.url ? (
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  Découvrir le projet <ArrowOutwardIcon />
                </a>
              ) : (
                <span className="project-link unavailable">Démonstration sur demande</span>
              )}
            </div>

            <div className={`project-visual ${project.visualType ?? 'placeholder'}`}>
              {project.image ? (
                project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Ouvrir ${project.title}`}>
                    <img src={project.image} alt={project.imageAlt} />
                  </a>
                ) : (
                  <img src={project.image} alt={project.imageAlt} />
                )
              ) : (
                <div className="preview-placeholder">
                  <span>Aperçu à venir</span>
                  <small>{project.previewMessage}</small>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
