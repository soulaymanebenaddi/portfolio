import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import '../assets/styles/Contact.scss';

const contactLinks = [
  {
    label: 'GitHub',
    value: '@soulaymanebenaddi',
    href: 'https://github.com/soulaymanebenaddi',
    icon: <GitHubIcon />,
  },
  {
    label: 'LinkedIn',
    value: 'soulaymane-benaddi',
    href: 'https://www.linkedin.com/in/soulaymane-benaddi',
    icon: <LinkedInIcon />,
  },
  {
    label: 'Courriel',
    value: 'soulaymanebenaddi@gmail.com',
    href: 'mailto:soulaymanebenaddi@gmail.com',
    icon: <EmailOutlinedIcon />,
  },
  {
    label: 'Téléphone',
    value: '438 529-8783',
    href: 'tel:+14385298783',
    icon: <PhoneOutlinedIcon />,
  },
];

function Contact() {
  return (
    <section id="contact" className="section-shell" aria-labelledby="contact-title">
      <div className="items-container contact-wrapper">
        <div className="section-heading">
          <span>04 · Contact</span>
          <h2 id="contact-title">Travaillons ensemble.</h2>
        </div>
        <p className="contact-intro">Une idée, une occasion ou simplement envie d'échanger? Retrouvez-moi sur mes réseaux professionnels.</p>
        <div className="contact-grid">
          {contactLinks.map((contact) => (
            <a className="contact-card" href={contact.href} target="_blank" rel="noreferrer" key={contact.label}>
              <span className="contact-icon">{contact.icon}</span>
              <span><small>{contact.label}</small>{contact.value}</span>
              <ArrowOutwardIcon className="contact-arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
