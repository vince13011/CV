import React from 'react';
import  './ExtLinks.scss';
import githubLink from '../assets/iconGithub.png';
import linkedinLink from '../assets/iconLinkedin.png';
import { ExternalLink } from 'react-external-link';

const ExtLinks = () => {
return(

    <ul className="links">
        <li className="links__list">
        <img className="links__list__icon" src={githubLink} alt="icon github link" />
        <ExternalLink className="links__list__link" href="https://github.com/vince13011">Compte GitHub</ExternalLink>
        </li>
        <li className="links__list">
        <img className="links__list__icon" src={linkedinLink} alt="icon linkedin link" />
        <ExternalLink className="links__list__link" href="https://www.linkedin.com/in/vincentgiglio/">Compte LinkedIn</ExternalLink>
        </li>
    </ul>
    )
}

export default ExtLinks;