import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <section id="history" className="section-shell" aria-labelledby="history-title">
      <div className="items-container">
        <div className="section-heading">
          <span>02 · Parcours</span>
          <h2 id="history-title">Formation &amp; expérience</h2>
        </div>
        <VerticalTimeline lineColor="rgba(145, 96, 255, 0.35)">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid rgba(167, 139, 250, 0.32)' }}
            contentArrowStyle={{ borderRight: '7px solid var(--surface)' }}
            date="2023 — 2026"
            iconStyle={{ background: '#2563eb', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">DEC Techniques de l'informatique</h3>
            <h4 className="vertical-timeline-element-subtitle">Profil développement d'applications</h4>
            <p>Formation axée sur la conception, le développement et la mise en production d'applications.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid rgba(167, 139, 250, 0.32)' }}
            contentArrowStyle={{ borderRight: '7px solid var(--surface)' }}
            date="Mars — juin 2026"
            iconStyle={{ background: '#7c3aed', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Stagiaire développeur logiciel</h3>
            <h4 className="vertical-timeline-element-subtitle">Centris · Montréal</h4>
            <p>Développement d'un tableau de bord de supervision des applications de Centris, regroupant leurs données de santé et les données Azure DevOps, avec un accès sécurisé grâce à Microsoft Entra ID.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
