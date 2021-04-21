import React from 'react';
import propTypes from 'prop-types';
import styles from './ExtLinks.scss';
import githubLink from '../assets/iconGithub.png';
import linkedinLink from '../assets/iconLinkedin.png';
import { ExternalLink } from 'react-external-link';

const ExtLinks = () => {
return(

    <ul className="links">
        <li className="links__list">
        <img className="links__list__icon" src={githubLink} alt="icon link" />
        <ExternalLink className="links__list__link" href="https://github.com/vince13011">Mes projets sur GitHub</ExternalLink>
        </li>
        <li className="links__list">
        <img className="links__list__icon" src={linkedinLink} alt="icon link" />
        <ExternalLink className="links__list__link" href="https://www.linkedin.com/in/vincentgiglio/">Plus d'informations sur LinkedIn</ExternalLink>
        </li>
    </ul>
    )
}

export default ExtLinks;